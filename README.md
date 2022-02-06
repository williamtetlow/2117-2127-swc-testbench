Test bench for issues https://github.com/swc-project/swc/issues/2117 and https://github.com/swc-project/swc/issues/2127 in SWC.

It compiles the test code for both issues in SWC, Babel, esbuild, TSC (es6) and TSC (esnext) and compares output.

```
npm run build:all
npm run evaluate-outputs
```
