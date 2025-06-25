# ✅ Soundz NPM Publish Checklist

1. Update `version` in `package.json`
2. Run build:
   ```bash
   npm install
   npm run build
   ```
3. Verify:
   - `dist/index.js`
   - `dist/index.umd.js`
   - `dist/index.d.ts`
4. Login to NPM:
   ```bash
   npm login
   ```
5. Publish:
   ```bash
   npm publish --access public
   ```

6. Tag on GitHub (optional):
   ```bash
   git tag v1.0.0
   git push origin v1.0.0
   ```

Done 🎉
