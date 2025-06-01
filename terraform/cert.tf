# Request the SSL certificate
resource "aws_acm_certificate" "website_cert" {
  domain_name       = "lekan.xyx"
  validation_method = "DNS" # DNS validation is most reliable

  lifecycle {
    create_before_destroy = true # Ensures no downtime during renewals
  }

  tags = {
    Name = "Production SSL Certificate"
  }
}

# Automatically create DNS validation records in Route53
resource "aws_route53_record" "cert_validation" {
  for_each = {
    for dvo in aws_acm_certificate.website_cert.domain_validation_options : dvo.domain_name => {
      name   = dvo.resource_record_name
      record = dvo.resource_record_value
      type   = dvo.resource_record_type
    }
  }

  allow_overwrite = true
  name            = each.value.name
  records         = [each.value.record]
  ttl             = 60
  type            = each.value.type
  zone_id         = aws_route53_zone.primary.zone_id # Reference your hosted zone
}

# Wait for certificate validation
resource "aws_acm_certificate_validation" "cert_validation" {
  certificate_arn         = aws_acm_certificate.website_cert.arn
  validation_record_fqdns = [for record in aws_route53_record.cert_validation : record.fqdn]
}

