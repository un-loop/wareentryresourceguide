# Washington Re-entry Connect
A collection of resources for people re-entering the community after incarceration

https://un-loop.github.io/wareentryresourceguide/

### Prerequisites

Install [Nodejs](http://nodejs.org)

### Install

Install local dependencies:

```
cd website
npm install
```

### Running

```
cd website
npm run startDev
```

### Publishing

```
cd website
npm run buildProd
cp out/prod/* ../
```

Then commit and send a pull request for the changes.

### Technologies

- React (Facebook's industry standard JS UI library)

- Typescript (JS with types)

- Redux (A predictable JS state container)

- Webpack (The package bundler that puts all the JS and HTML and fonts etc. into a single bundle)
