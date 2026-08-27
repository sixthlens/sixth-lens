#!/usr/bin/env bash

set -euo pipefail

AWS_BUCKET="sixthlense-com-494934332052"
CLOUDFRONT_DISTRIBUTION="EAXGJOPZ85I2R"

NEXT_PUBLIC_SITE_URL="https://sixthlense.com" npm run build

aws s3 sync out/ "s3://${AWS_BUCKET}" \
  --delete \
  --cache-control "public,max-age=31536000,immutable" \
  --exclude "*.html" \
  --exclude "*.xml" \
  --exclude "*.txt" \
  --exclude "*.webmanifest"

aws s3 sync out/ "s3://${AWS_BUCKET}" \
  --cache-control "public,max-age=0,must-revalidate" \
  --exclude "*" \
  --include "*.html" \
  --include "*.xml" \
  --include "*.txt" \
  --include "*.webmanifest"

aws cloudfront create-invalidation \
  --distribution-id "${CLOUDFRONT_DISTRIBUTION}" \
  --paths "/*"
