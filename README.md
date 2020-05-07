# jest typescript [![Build Status](https://travis-ci.org/daggerok/jest-typescrip-tests.svg?branch=master)](https://travis-ci.org/daggerok/jest-typescrip-tests)
Testing TypeScript code using jest...

## jest es++ typescript..

```bash
mkdir app && cd $_
npm init -y
npm i -ED jest @jest/core @jest/globals @jest/types @types/node @babel/preset-env core-js @babel/preset-typescript typescript ts-jest @types/jest
```

_package.json_

```json
{
  "scripts": {
    "dev": "npm run test -- --watchAll",
    "test": "jest --preset=ts-jest --testEnvironment=node ...",
    "test-js-with-ts": "jest --preset=ts-jest/presets/js-with-ts ...",
    "test-js-with-babel": "jest --preset=jest --preset=ts-jest/presets/js-with-babel ..."
  },
  "babel": {
    "presets": [
      [
        "@babel/preset-env",
        {
          "targets": {
            "node": "current"
          }
        }
      ],
      "@babel/preset-typescript"
    ]
  }
}
```

## jest reporters

```bash
npm i -ED @jest/reporters jest-junit 
```

_package.json_

```json
{
  "scripts": {
    "test": "jest --reporters=default --reporters=jest-junit --collect-coverage ..."
  }
}
```

## testing

add _src/dynamic-module.ts_ file:

```ts
export const sum = (...args): number =>
  args.reduce((prev, curr) => prev + curr, 0);
```

add _test/dynamic-import.test.ts_ file:

```ts
import { expect, it } from '@jest/globals';

it('should import dynamic lazy module', async () => {
  const dynamicModule: any = await import('../src/dynamic-module');
  const total: any = await dynamicModule.sum(1, 2, 3);
  await expect(total).toBe(6);
});
```

## finally, execute

```bash
npm t
npm run test-js-with-ts
npm run test-js-with-babel
```

or simply use quick one liner for github repo starter:
              
```bash
git clone --depth=1 --no-single-branch https://github.com/daggerok/jest-typescrip-tests app && cd $_ && npm i && npm t
```

## resources

* https://kulshekhar.github.io/ts-jest/user/config/
* https://kulshekhar.github.io/ts-jest/user/install
* https://jestjs.io/docs/en/next/getting-started#using-typescript
* https://jestjs.io/docs/en/tutorial-async#asyncawait
* https://github.com/facebook/jest/blob/master/examples/async/.babelrc.js
* https://jestjs.io/docs/en/cli
* https://www.freecodecamp.org/news/javascript-new-features-es2020/
* https://medium.com/@dtkatz/use-the-blazing-fast-parcel-bundler-to-build-and-test-a-react-app-e6972a2587e1
