variable "s3_bucket_name" {
  description = "Name of the S3 bucket for hosting"
  type        = string
  default     = "s3_bucket_name"
}

variable "s3_logs_bucket_name" {
  description = "Name of the S3 bucket for cloudfront logging"
  type        = string
  default     = "cf-logs-smart-site"
}

variable "github_repo" {
  description = "GitHub repository in format owner/repo"
  type        = string
  default     = "Ahmedlekan/Job-hunt"
}

variable "github_branch" {
  description = "GitHub branch to monitor"
  type        = string
  default     = "main"
}

variable "project_directory" {
  description = "Directory containing the static website code"
  type        = string
  default     = "bond-project"
}


variable "domain_name" {
  description = "The primary domain name"
  type        = string
  default     = "lekan.xyz"
}

variable "enable_domain_verification" {
  description = "Whether to create domain verification records"
  type        = bool
  default     = false
}

variable "request_spike_threshold" {
  description = "Request count threshold for spike detection"
  type        = number
  default     = 10000
}

variable "alert_email_address" {
  description = "Email for receiving alerts"
  type        = string
  default     = "ahmedlekan011@gmail.com"
}