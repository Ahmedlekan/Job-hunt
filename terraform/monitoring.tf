# CloudWatch Dashboard for CloudFront
resource "aws_cloudwatch_dashboard" "cloudfront" {
  dashboard_name = "CloudFront-Monitoring"
  dashboard_body = jsonencode({
    widgets = [
      {
        type   = "metric"
        x      = 0
        y      = 0
        width  = 12
        height = 6
        properties = {
          metrics = [
            ["AWS/CloudFront", "Requests", "DistributionId", aws_cloudfront_distribution.smart_static_site.id, "Region", "Global"],
            [".", "4xxErrorRate", ".", ".", ".", "."],
            [".", "5xxErrorRate", ".", ".", ".", "."],
            [".", "TotalErrorRate", ".", ".", ".", "."]
          ]
          period = 300
          stat   = "Sum"
          region = "us-east-1"
          title  = "Request Metrics"
        }
      },
      {
        type   = "metric"
        x      = 12
        y      = 0
        width  = 12
        height = 6
        properties = {
          metrics = [
            ["AWS/CloudFront", "BytesDownloaded", "DistributionId", aws_cloudfront_distribution.smart_static_site.id, "Region", "Global"],
            [".", "BytesUploaded", ".", ".", ".", "."]
          ]
          period = 300
          stat   = "Sum"
          region = "us-east-1"
          title  = "Bandwidth Metrics"
        }
      },
      {
        type   = "metric"
        x      = 0
        y      = 6
        width  = 12
        height = 6
        properties = {
          metrics = [
            ["AWS/CloudFront", "CacheHitRate", "DistributionId", aws_cloudfront_distribution.smart_static_site.id, "Region", "Global"]
          ]
          period = 300
          stat   = "Average"
          region = "us-east-1"
          title  = "Cache Performance"
        }
      }
    ]
  })
}




# CloudWatch metric alarm for 5XX errors
resource "aws_cloudwatch_metric_alarm" "cloudfront_5xx_errors" {
  alarm_name          = "cloudfront-5xx-error-rate"
  comparison_operator = "GreaterThanThreshold"
  evaluation_periods  = "2"
  metric_name         = "5xxErrorRate"
  namespace           = "AWS/CloudFront"
  period              = "300" # 5 minutes
  statistic           = "Average"
  threshold           = "1" # 1% error rate
  alarm_description   = "CloudFront 5XX error rate exceeded 1%"
  treat_missing_data  = "notBreaching"

  dimensions = {
    DistributionId = aws_cloudfront_distribution.smart_static_site.id
    Region         = "Global"
  }

  alarm_actions = [aws_sns_topic.cloudfront_alerts.arn]
}

# CloudWatch metric alarm for high request rate
resource "aws_cloudwatch_metric_alarm" "high_request_rate" {
  alarm_name          = "cloudfront-high-request-rate"
  comparison_operator = "GreaterThanThreshold"
  evaluation_periods  = "1"
  metric_name         = "Requests"
  namespace           = "AWS/CloudFront"
  period              = "300" # 5 minutes
  statistic           = "Sum"
  threshold           = "10000" # Adjust based on your baseline
  alarm_description   = "Unusually high request volume detected"
  treat_missing_data  = "notBreaching"

  dimensions = {
    DistributionId = aws_cloudfront_distribution.smart_static_site.id
    Region         = "Global"
  }

  alarm_actions = [aws_sns_topic.cloudfront_alerts.arn]
}

# SNS topic for alerts
resource "aws_sns_topic" "cloudfront_alerts" {
  name = "cloudfront-alerts"
}

# SNS subscription (email example)
resource "aws_sns_topic_subscription" "email_alerts" {
  topic_arn = aws_sns_topic.cloudfront_alerts.arn
  protocol  = "email"
  endpoint  = "ahmedlekan011@gmail.com"
}

