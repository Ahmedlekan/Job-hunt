resource "aws_codebuild_project" "static_website_build" {
  name          = "static-website-build"
  description   = "Build and deploy static website"
  service_role  = aws_iam_role.codebuild_role.arn
  build_timeout = 5

  artifacts {
    type = "NO_ARTIFACTS"
  }

  environment {
    compute_type                = "BUILD_GENERAL1_SMALL"
    image                       = "aws/codebuild/standard:7.0"
    type                        = "LINUX_CONTAINER"
    image_pull_credentials_type = "CODEBUILD"
    privileged_mode             = false

    environment_variable {
      name  = "S3_BUCKET"
      value = var.s3_bucket_name
    }

    environment_variable {
      name  = "CLOUDFRONT_DIST_ID"
      value = aws_cloudfront_distribution.smart_static_site.id
    }

    environment_variable {
      name  = "PROJECT_DIRECTORY"
      value = var.project_directory
    }
  }

  source {
    type            = "GITHUB"
    location        = "https://github.com/${var.github_repo}.git"
    git_clone_depth = 1

    git_submodules_config {
      fetch_submodules = true
    }

    buildspec = <<EOF
version: 0.2

phases:
  install:
    runtime-versions:
      nodejs: 18
    commands:
      - echo "📁 Changing into project directory..."
      - cd $${PROJECT_DIRECTORY}
      - echo "🔧 Installing project dependencies..."
      - npm ci || npm install

  build:
    commands:
      - echo "🏗️ Building the project using Vite..."
      - npm run build
      - echo "🚀 Syncing to S3..."
      - aws s3 sync dist s3://$${S3_BUCKET} --delete

  post_build:
    commands:
      - echo "📦 Invalidating CloudFront"
      - aws cloudfront create-invalidation --distribution-id $${CLOUDFRONT_DIST_ID} --paths "/*"
EOF
  }

  source_version = var.github_branch

  logs_config {
    cloudwatch_logs {
      group_name  = "codebuild-static-website"
      stream_name = "build-log"
    }
  }
}

