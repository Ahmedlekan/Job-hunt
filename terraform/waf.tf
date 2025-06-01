resource "aws_wafv2_web_acl" "cloudfront_waf" {
  name        = "cloudfront-protection"
  description = "Managed rules for CloudFront distribution"
  scope       = "CLOUDFRONT"

  default_action {
    allow {} # Allow traffic by default
  }

  # Common attack protections (SQLi, XSS, etc.)
  rule {
    name     = "AWSManagedRulesCommonRuleSet"
    priority = 1

    override_action {
      none {} # Use rule actions as defined
    }

    statement {
      managed_rule_group_statement {
        name        = "AWSManagedRulesCommonRuleSet"
        vendor_name = "AWS"
      }
    }

    visibility_config {
      cloudwatch_metrics_enabled = true
      metric_name                = "AWSManagedRulesCommonRuleSet"
      sampled_requests_enabled   = true
    }
  }

  # Protection against known bad inputs
  rule {
    name     = "AWSManagedRulesKnownBadInputsRuleSet"
    priority = 2

    override_action {
      none {} # Use rule actions as defined
    }

    statement {
      managed_rule_group_statement {
        name        = "AWSManagedRulesKnownBadInputsRuleSet"
        vendor_name = "AWS"
      }
    }

    visibility_config {
      cloudwatch_metrics_enabled = true
      metric_name                = "AWSManagedRulesKnownBadInputsRuleSet"
      sampled_requests_enabled   = true
    }
  }

  visibility_config {
    cloudwatch_metrics_enabled = true
    metric_name                = "cloudfront-waf"
    sampled_requests_enabled   = true
  }

  tags = {
    Service = "CloudFront"
  }
}

# Attach WAF to CloudFront distribution
resource "aws_wafv2_web_acl_association" "cloudfront_waf_association" {
  resource_arn = aws_cloudfront_distribution.smart_static_site.arn
  web_acl_arn  = aws_wafv2_web_acl.cloudfront_waf.arn
}

