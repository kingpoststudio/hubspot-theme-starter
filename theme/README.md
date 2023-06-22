{
  "name": "hs-starter-theme",
  "version": "1.0.0",
  "scripts": {
    "dev": "rm -rf dist && webpack --watch --env portal=develop --env autoupload --env hsDest=LitDemoTheme",
    "build": "rm -rf dist && webpack",
    "upload": "hs upload --account=production dist LitDemoTheme",
    "upload:develop": "hs upload --account=develop dist LitDemoTheme",
    "deploy": "yarn build && yarn upload",
    "deploy:develop": "yarn build && yarn upload:develop",
    "hs:init": "hs init",
    "hs:auth": "hs auth"
  },
  "devDependencies": {
    "@hubspot/cli": "^4.0.1",
    "@hubspot/webpack-cms-plugins": "^4.0.0",
    "copy-webpack-plugin": "^10.2.4",
    "css-loader": "^6.7.1",
    "css-minimizer-webpack-plugin": "^3.4.1",
    "esbuild-loader": "^2.20.0",
    "ignore-loader": "^0.1.2",
    "mini-css-extract-plugin": "^2.6.0",
    "rimraf": "^3.0.2",
    "typescript": "^4.6.3",
    "webpack": "^5.70.0",
    "webpack-cli": "^4.10.0"
  }
}


# HubSpot Theme Starter: Theme

This is a HubSpot theme starter, managed with [Webpack](https://webpack.js.org/) and [TypeScript](https://www.typescriptlang.org/). This starter build provides a basic structure for building a HubSpot theme with modern tools. It can be expanded to support any number of additional tools and libraries, with a focus on flexibility and module-based development.

## Getting Started

### Development 

Install all dependencies:

```bash
yarn
```

Initialize your HubSpot config and authentication:

```bash
yarn hs:init
```

Development is managed with Webpack. To start the development server, run:

```bash
yarn dev
```

### Build

Build the theme for production:

```bash
yarn build
```

Deploy the theme to HubSpot:

```bash
yarn deploy
```
