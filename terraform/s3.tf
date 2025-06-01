resource "aws_s3_bucket" "smart_static_site" {
  bucket = var.s3_bucket_name

  tags = {
    Name = "SmartStaticWebsite"
  }
}

resource "aws_s3_bucket_public_access_block" "public" {
  bucket = aws_s3_bucket.smart_static_site.id

  block_public_acls       = true
  block_public_policy     = true
  ignore_public_acls      = true
  restrict_public_buckets = true
}

# S3 bucket policy output to be used by CloudFront
output "bucket_regional_domain_name" {
  value = aws_s3_bucket.smart_static_site.bucket_regional_domain_name
}

output "bucket_arn" {
  value = aws_s3_bucket.smart_static_site.arn
}


