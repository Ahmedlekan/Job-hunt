# Create S3 bucket for CloudFront logs
resource "aws_s3_bucket" "cf_logs" {
  bucket = var.s3_logs_bucket_name

  tags = {
    Name = "CloudFront Access Logs"
  }
}

# Bucket policy for CloudFront logging
resource "aws_s3_bucket_policy" "cf_logs_policy" {
  bucket = aws_s3_bucket.cf_logs.id
  policy = data.aws_iam_policy_document.cf_logs_policy.json

  depends_on = [
    aws_cloudfront_distribution.smart_static_site
  ]
}

data "aws_iam_policy_document" "cf_logs_policy" {
  statement {
    actions   = ["s3:PutObject"]
    resources = ["${aws_s3_bucket.cf_logs.arn}/*"]

    principals {
      type        = "Service"
      identifiers = ["cloudfront.amazonaws.com"]
    }

    condition {
      test     = "StringEquals"
      variable = "aws:SourceArn"
      values   = [aws_cloudfront_distribution.smart_static_site.arn]
    }
  }
}