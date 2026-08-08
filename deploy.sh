#!/bin/bash

APP_ID="${AWS_AMPLIFY_APP_ID}"
if [ -z "$APP_ID" ]; then
  echo "❌ Error: AWS_AMPLIFY_APP_ID environment variable not set"
  exit 1
fi

BRANCH="${AWS_AMPLIFY_BRANCH:-production}"
PROFILE="${AWS_AMPLIFY_PROFILE:-amplify-amie}"

echo "🔨 Building project..."
npm run build

echo "📦 Zipping build folder..."
cd build && zip -r ../deploy.zip . && cd ..

echo "🚀 Creating deployment..."
RESPONSE=$(aws amplify create-deployment \
  --app-id $APP_ID \
  --branch-name $BRANCH \
  --profile $PROFILE)

JOB_ID=$(echo $RESPONSE | python3 -c "import sys, json; print(json.load(sys.stdin)['jobId'])")
UPLOAD_URL=$(echo $RESPONSE | python3 -c "import sys, json; print(json.load(sys.stdin)['zipUploadUrl'])")

echo "📤 Uploading zip..."
curl -T deploy.zip "$UPLOAD_URL"

echo "▶️  Starting deployment (job $JOB_ID)..."
aws amplify start-deployment \
  --app-id $APP_ID \
  --branch-name $BRANCH \
  --job-id $JOB_ID \
  --profile $PROFILE

echo "🧹 Cleaning up..."
rm deploy.zip

echo "✅ Deployment started! Check the Amplify Console for status."
