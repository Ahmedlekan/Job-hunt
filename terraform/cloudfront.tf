# Create the Origin Access Control
resource "aws_cloudfront_origin_access_control" "smart_site_oac" {
  name                              = "SmartSiteOAC"
  description                       = "OAC for Smart Static Site"
  origin_access_control_origin_type = "s3"
  signing_behavior                  = "always"
  signing_protocol                  = "sigv4"
}

# Create the CloudFront distribution
resource "aws_cloudfront_distribution" "smart_static_site" {
  origin {
    domain_name              = aws_s3_bucket.smart_static_site.bucket_regional_domain_name
    origin_id                = "S3-smart-static-site"
    origin_access_control_id = aws_cloudfront_origin_access_control.smart_site_oac.id
  }

  enabled             = true
  is_ipv6_enabled     = true
  default_root_object = "index.html"

  default_cache_behavior {
    allowed_methods  = ["GET", "HEAD"]
    cached_methods   = ["GET", "HEAD"]
    target_origin_id = "S3-smart-static-site"

    forwarded_values {
      query_string = false

      cookies {
        forward = "none"
      }
    }

    viewer_protocol_policy = "redirect-to-https"
    min_ttl                = 0
    default_ttl            = 3600
    max_ttl                = 86400
    compress               = true # Enable gzip and Brotli compression
  }

  restrictions {
    geo_restriction {
      restriction_type = "none"
    }
  }

  aliases = ["www.lekan.xyz", "lekan.xyz"]

  viewer_certificate {
    acm_certificate_arn      = aws_acm_certificate_validation.cert_validation.certificate_arn
    ssl_support_method       = "sni-only"     # Modern SSL method
    minimum_protocol_version = "TLSv1.2_2021" # Strong security
  }

  web_acl_id = aws_wafv2_web_acl.cloudfront_waf.arn # WAF

  # Custom error responses for SPA routing
  custom_error_response {
    error_code            = 403
    response_code         = 200
    response_page_path    = "/index.html"
    error_caching_min_ttl = 10 # Cache this error response for 10 seconds
  }

  custom_error_response {
    error_code            = 404
    response_code         = 200
    response_page_path    = "/index.html"
    error_caching_min_ttl = 10 # Cache this error response for 10 seconds
  }

  # CloudFront logging
  logging_config {
    include_cookies = false
    bucket          = aws_s3_bucket.cf_logs.bucket_domain_name
    prefix          = "cdn/"
  }

}

data "aws_iam_policy_document" "s3_policy" {
  statement {
    actions   = ["s3:GetObject"]
    resources = ["${aws_s3_bucket.smart_static_site.arn}/*"]

    principals {
      type        = "Service"
      identifiers = ["cloudfront.amazonaws.com"]
    }

    condition {
      test     = "StringEquals"
      variable = "AWS:SourceArn"
      values   = [aws_cloudfront_distribution.smart_static_site.arn]
    }
  }
}

resource "aws_s3_bucket_policy" "smart_static_site" {
  bucket = aws_s3_bucket.smart_static_site.id
  policy = data.aws_iam_policy_document.s3_policy.json
}

output "cloudfront_distribution_id" {
  value = aws_cloudfront_distribution.smart_static_site.id
}