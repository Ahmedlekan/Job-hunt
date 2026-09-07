# 🌐 Smart Static Website on AWS — Console + Terraform

This project demonstrates two approaches to deploying a **production-ready, globally distributed, and secure static website**
on AWS

> 🔐 Zero public S3 access | ⚡ CI/CD with CodePipeline & CodeBuild | 🌐 HTTPS with ACM | 🛡️ WAF for protection | 📦 React + Vite frontend

---

1. **Manual provisioning via the AWS Console**

2. **Full Infrastructure as Code (IaC) automation using Terraform**

---

<div align="center">
  
  <br />
       <img width="1536" height="1024" alt="Image" src="https://github.com/user-attachments/assets/d394776c-733b-419a-9c23-12b1cabc424d" />
  <br />

  <div>
    <img src="https://img.shields.io/badge/-AWS-black?style=for-the-badge&logo=amazonaws&logoColor=white&color=232F3E" alt="aws" />
    <img src="https://img.shields.io/badge/-Terraform-black?style=for-the-badge&logo=terraform&logoColor=white&color=623CE4" alt="terraform" />
    <img src="https://img.shields.io/badge/-CloudFront-black?style=for-the-badge&logo=amazonaws&logoColor=white&color=FF9900" alt="cloudfront" />
    <img src="https://img.shields.io/badge/-Static%20Website-black?style=for-the-badge&logo=html5&logoColor=white&color=E34F26" alt="static website" />
    <img src="https://img.shields.io/badge/-CodePipeline-black?style=for-the-badge&logo=aws&logoColor=white&color=1A202C" alt="codepipeline" />
    <img src="https://img.shields.io/badge/-DevOps-black?style=for-the-badge&logo=devops&logoColor=white&color=007ACC" alt="devops" />
    <img src="https://img.shields.io/badge/-IaC-black?style=for-the-badge&logo=terraform&logoColor=white&color=5C4EE5" alt="infrastructure as code" />
    <img src="https://img.shields.io/badge/-Vite-black?style=for-the-badge&logo=vite&logoColor=white&color=646CFF" alt="vite" />
    <img src="https://img.shields.io/badge/-React-black?style=for-the-badge&logo=react&logoColor=white&color=61DAFB" alt="react" />
    <img src="https://img.shields.io/badge/-S3-black?style=for-the-badge&logo=amazons3&logoColor=white&color=569A31" alt="s3" />
    <img src="https://img.shields.io/badge/-CI/CD-black?style=for-the-badge&logo=githubactions&logoColor=white&color=2088FF" alt="ci/cd" />
  </div>
</div>

---

### 🚀 Features

This project sets up a React-based static site hosted securely with full DevOps practices:

- Private S3 bucket (no static hosting enabled)

- Access via CloudFront (with Origin Access Control)

- TLS encryption via ACM

- firewall with WAF

- Monitoring with CloudWatch

- Auto deployments with AWS CodePipeline + CodeBuild

- Domain routing using GoDaddy + Route 53

- Cost-effective and scalable

---

## 🛠️ Tech Stack

| Component     | Service Used            |
|---------------|--------------------------|
| Domain        | GoDaddy + Route 53       |
| Hosting       | Amazon S3 (private)       |
| CDN           | CloudFront + OAC         |
| TLS/SSL       | AWS Certificate Manager  |
| Firewall      | AWS WAF                  |
| Monitoring    | CloudWatch Logs & Alarms |
| CI/CD         | CodePipeline + CodeBuild |
| Frontend      | React + Vite             |
| IaC           | Terraform                |

---

## 🚨 Pre-requisites

- AWS CLI configured (`aws configure`)
- Terraform ≥ 1.3.0
- A **domain registered on GoDaddy**
- Frontend code repo (React/Vite-based recommended)

---

## 🔸 1. Automated via Terraform (Preferred)

This repo includes Terraform code to deploy the same infrastructure in a reproducible and scalable way.


### 🚀 How to Deploy (Quick Start)

1. Clone this repository

```bash
git clone https://github.com/Ahmedlekan/Job-hunt.git
cd terraform
```

2. Copy and edit variables

```bash
cp terraform.tfvars terraform.tfvars
# Edit your domain, bucket names, GitHub repo, distribution ID, etc.
```
3. Initialize and apply

```bash
terraform init
terraform apply -auto-approve
```

🧠 Tips & Notes

✅ Make sure your domain nameservers on GoDaddy point to Route 53

🧪 Use terraform destroy to tear down all resources (except manually-linked domain)


## 🔹 2. Manual via AWS Console

### 🛠️ Step-by-Step Setup

1️⃣ Step 1: Connect GoDaddy Domain to AWS

Set Up AWS Route 53 Hosted Zone

![Image](https://github.com/user-attachments/assets/0afb7168-b898-434c-92bb-8d98c9717774)

- Go to AWS Route 53

- Click "Hosted zones" → "Create hosted zone"

- Domain name: yourdomain.com (replace with your GoDaddy domain)

- Type: Public

- Click "Create"

- Copy the 4 Name Servers (NS) listed (e.g., ns-123.awsdns-45.com).


Update GoDaddy Nameservers

![Image](https://github.com/user-attachments/assets/dff0837b-d74e-470f-b97d-5408c213ee29)

- Log in to GoDaddy

- Go to "My Products" → "DNS" → "Manage" next to your domain

- Under "Nameservers" → "Change" → "Custom"

- Paste the 4 AWS Name Servers (delete GoDaddy’s default ones)

- Save (DNS propagation takes 5 mins to 48 hrs).


2️⃣ Create and Upload Website to S3

![Image](https://github.com/user-attachments/assets/ba270228-d870-4384-99de-732e5f16524c)

- Create a bucket (e.g., `smart-static-site`)

- Enable **Block All Public Access** (✅ keep it ON)

- **Do NOT enable static website hosting**

- Upload your static files: `index.html`, `style.css`, etc.

---

3️⃣ Configure CloudFront with Origin Access Control (OAC)

![Image](https://github.com/user-attachments/assets/d76245a4-1a64-4738-a299-d48ae639ee4f)

- Go to **CloudFront > Create Distribution**

- Under **Origin settings**:

  - Origin domain: `smart-static-site.s3.amazonaws.com` (not the website endpoint)

  - Origin access: **Yes, use an origin access control (OAC)**

  - If not available, create one with:
  
    - Name: `SmartSiteOAC`

    - Signing Behavior: `Always`

    - Signing Protocol: `SigV4`

- Set **Default root object**: `index.html`

- Enable **cache compression** (gzip, Brotli)

---

4️⃣ Update S3 Bucket Policy to Allow OAC Access

Paste and customize this policy:
```json
{
  "Version": "2012-10-17",
  "Statement": [
    {
      "Sid": "AllowCloudFrontReadAccessViaOAC",
      "Effect": "Allow",
      "Principal": {
        "Service": "cloudfront.amazonaws.com"
      },
      "Action": "s3:GetObject",
      "Resource": "arn:aws:s3:::your-bucket-name/*",
      "Condition": {
        "StringEquals": {
          "AWS:SourceArn": "arn:aws:cloudfront::your-account-id:distribution/your-distribution-id"
        }
      }
    }
  ]
}
```

---

5️⃣ Configure Error Pages (for SPAs or route fallback)

![Image](https://github.com/user-attachments/assets/e6ff766c-ccd8-4366-a5b6-35959830b0f9)

- In your CloudFront distribution:

  - Go to **Error Pages**

  - Add **custom error responses** for:
  
    - 403 → `/index.html` → HTTP 200

    - 404 → `/index.html` → HTTP 200

---

6️⃣ Set Up HTTPS with ACM

![Image](https://github.com/user-attachments/assets/2e4b72e2-4d92-4f78-a0cf-805eb9c1b699)

- Go to ACM (in us-east-1)

- Request a **public certificate** for `www.yourdomain.com`

- Validate via DNS:

- Once validated, attach the certificate in CloudFront under SSL settings

---

7️⃣ Add AWS WAF (Optional but Recommended)

![Image](https://github.com/user-attachments/assets/207a313d-bca5-4da5-8c1f-16373a3ce02b)

- Create a Web ACL

- Add AWS managed rule groups:

  - AWSManagedRulesCommonRuleSet

  - AWSManagedRulesKnownBadInputsRuleSet

- Attach to your CloudFront distribution

---

8️⃣ Enable CloudWatch Logging and Monitoring

![Image](https://github.com/user-attachments/assets/02b9457b-cc91-4be8-aace-b8a77e1f7bae)

- In CloudFront > Edit Distribution:

  - Enable access logging

  - Point logs to an S3 bucket (e.g., `cf-logs-smart-site`)

- In CloudWatch:

  - Monitor error rates, traffic spikes, 5XXs

  - Set up alerts via SNS if needed

---


### CI/CD pipeline

Step 1: Set Up CodeBuild

![Image](https://github.com/user-attachments/assets/978ba0f1-a761-474e-b1d7-ea99c53a9c2b)

Create a CodeBuild Project

- Go to AWS CodeBuild

- Click "Create build project"

- Project name: static-website-build

- Source provider: GitHub/CodeCommit (connect your repo)

Environment Configuration

- Environment image: Managed image

- OS: Ubuntu

- Runtime: Standard

- Image: aws/codebuild/standard:7.0

- Service role: Create new role (name: codebuild-service-role)

- Buildspec (Inline Definition)

- Under Build specifications, select "Insert build commands"

- Paste these commands (adjust for your framework):
```bash

version: 0.2

phases:
  install:
    runtime-versions:
      nodejs: 18
    commands:
      - echo "📁 Changing into bond-project directory. If your package.json is in the root folder, do not change the directory and remove cd into your project"
      - cd bond-project
      - echo "🔧 Installing project dependencies..."
      - npm ci || npm install

  build:
    commands:
      - echo "🏗️ Building the project using Vite..."
      - npm run build
      - echo "🚀 Syncing to S3..."
      - aws s3 sync dist s3://your-static-website --delete

  post_build:
    commands:
      - echo "📦 Invalidating CloudFront"
      - aws cloudfront create-invalidation --distribution-id YOUR_DIST_ID --paths "/*"
artifacts:
  files:
    - '**/*'
```

Artifacts

- Leave as "No artifacts" (we sync directly to S3)

Click "Create build project"


Grant CodeBuild Permissions

- Go to IAM Console → Roles → Find codebuild-service-role

- Attach this policy:
```bash
{
  "Version": "2012-10-17",
  "Statement": [
    {
      "Effect": "Allow",
      "Action": [
        "s3:PutObject",
        "s3:GetObject",
        "s3:DeleteObject",
        "s3:ListBucket"
      ],
      "Resource": [
        "arn:aws:s3:::www.lekanmi.xyz",
        "arn:aws:s3:::www.lekanmi.xyz/*"
      ]
    },
    {
      "Effect": "Allow",
      "Action": "cloudfront:CreateInvalidation",
      "Resource": "*"
    },
    {
      "Effect": "Allow",
      "Action": "s3:PutObject",
      "Resource": "arn:aws:s3:::lekanmi.xyz-cfn-logs/*"
    }
  ]
}
```

---

Step 2: Set Up CodePipeline

![Image](https://github.com/user-attachments/assets/c9755b75-4bd2-406a-aa30-9dc4da2e2bda)

Create Pipeline

- Go to AWS CodePipeline

- Click "Create pipeline"

- Pipeline name: static-website-pipeline

- Service role: New service role (auto-generated)

Source Stage

- Source provider: GitHub (or CodeCommit)

- Connect to your repository/branch

- Detection options: GitHub webhooks (recommended)

Build Stage

- Build provider: AWS CodeBuild

- Project name: Select static-website-build (created earlier)

Skip Deploy Stage

- (We deploy directly in CodeBuild)

Click "Create pipeline"

---

Step 3 Test the Pipeline

Trigger a Build

- Push a change to your Git repository

- CodePipeline will auto-start the build

Verify Deployment

- Check S3 bucket for updated files

- Visit your website

Check CloudFront Invalidation

- Go to CloudFront Console → Invalidations tab

- Confirm a new invalidation was created

---

### 📌 Outcomes

💡 Demonstrated infrastructure thinking

🌐 Built a production-style hosting pipeline

🔒 Implemented basic security and monitoring

---

### 📣 How to Use

```bash
# Clone the repo and customize the HTML/CSS
git clone https://github.com/yourusername/smart-static-site.git
```


💼 Author

Fatiu Ahmed

Cloud | DevOps | Terraform | AWS | React | MERN Stack 

