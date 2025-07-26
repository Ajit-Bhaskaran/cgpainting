# AWS Amplify Deployment Guide

## What I Fixed

1. **Updated `amplify.yml`**: Changed the base directory to `out` and ensured proper build commands
2. **Updated `next.config.js`**: Added static export configuration with `output: 'export'`
3. **Added `_redirects` file**: For proper client-side routing

## Deployment Steps

1. **Commit and push your changes**:
   ```bash
   git add .
   git commit -m "Fix Amplify deployment configuration"
   git push
   ```

2. **In AWS Amplify Console**:
   - Go to your app
   - Check the build logs for any errors
   - If the build succeeds, your app should be accessible

## Troubleshooting

If you still get a 404 error:

1. **Check Build Logs**: Look for any build errors in the Amplify console
2. **Verify Build Output**: Make sure the build creates an `out` directory with your files
3. **Check Domain**: Ensure you're accessing the correct Amplify domain

## Alternative Configuration

If the above doesn't work, try this alternative `amplify.yml`:

```yaml
version: 1
frontend:
  phases:
    preBuild:
      commands:
        - yarn install --frozen-lockfile
    build:
      commands:
        - yarn build
  artifacts:
    baseDirectory: .
    files:
      - '**/*'
  cache:
    paths:
      - node_modules/**/*
      - .next/cache/**/*
```

And update `next.config.js` to:
```javascript
const nextConfig = {
  output: 'export',
  trailingSlash: true,
  images: { unoptimized: true },
};
```

## Common Issues

- **404 Error**: Usually means the build output isn't being served correctly
- **Build Failures**: Check for TypeScript errors or missing dependencies
- **Routing Issues**: The `_redirects` file should handle client-side routing 