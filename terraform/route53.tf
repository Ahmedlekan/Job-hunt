# Create Route 53 public hosted zone
resource "aws_route53_zone" "primary" {
  name    = "lekan.xyz" # Replace with your actual domain
  comment = "Hosted zone for GoDaddy domain"

  tags = {
    Environment = "production"
  }
}

# Output the nameservers to configure in GoDaddy
output "name_servers" {
  value       = aws_route53_zone.primary.name_servers
  description = "Configure these nameservers in your GoDaddy DNS settings"
}

# Create A record for the root domain (naked domain)
resource "aws_route53_record" "root_domain" {
  zone_id = aws_route53_zone.primary.zone_id
  name    = "lekan.xyz" # Replace with your root domain
  type    = "A"

  alias {
    name                   = aws_cloudfront_distribution.smart_static_site.domain_name
    zone_id                = aws_cloudfront_distribution.smart_static_site.hosted_zone_id
    evaluate_target_health = false
  }
}


# Create AAAA record for IPv6 support
resource "aws_route53_record" "root_domain_ipv6" {
  zone_id = aws_route53_zone.primary.zone_id
  name    = "lekan.xyz" # Replace with your root domain
  type    = "AAAA"

  alias {
    name                   = aws_cloudfront_distribution.smart_static_site.domain_name
    zone_id                = aws_cloudfront_distribution.smart_static_site.hosted_zone_id
    evaluate_target_health = false
  }
}

# Create record for www subdomain
resource "aws_route53_record" "www_domain" {
  zone_id = aws_route53_zone.primary.zone_id
  name    = "www.lekan.xyz" # Replace with your www domain
  type    = "A"

  alias {
    name                   = aws_cloudfront_distribution.smart_static_site.domain_name
    zone_id                = aws_cloudfront_distribution.smart_static_site.hosted_zone_id
    evaluate_target_health = false
  }
}

# Optional: Create CNAME for domain verification (e.g., for Google Search Console)
resource "aws_route53_record" "verification" {
  count   = var.enable_domain_verification ? 1 : 0
  zone_id = aws_route53_zone.primary.zone_id
  name    = "verification.${var.domain_name}"
  type    = "CNAME"
  ttl     = 300
  records = ["your-verification-string.example.com"]
}


