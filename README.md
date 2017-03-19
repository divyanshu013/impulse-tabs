# Impulse Tabs
Replace your Chrome new tab with productive, inspirational and motivational Impulse Tabs!

## Technology
**Impulse Tabs** uses React. Check out the following links to learn more:
- [React](https://facebook.github.io/react/)
- [Chrome extensions](https://developer.chrome.com/extensions/overview)

## Project setup
The project setup requires `npm` or `yarn` (recommended)

Install `yarn` globally from [here](https://yarnpkg.com/en/docs/install).

For the rest of the project setup I'll be using `yarn`, however the project can be setup similarily setup using `npm`. Although I would still highly recommend `yarn`.

Install (add) `create-react-app` globally:

```bash
sudo yarn global add create-react-app
```

Clone the project:

```bash
git clone https://github.com/divyanshu013/impulse-tabs.git
```

`cd` into the project root:

```bash
cd impulse-tabs
```

Install dependencies:

```bash
yarn install
```

Impulse Tabs should be setup in a while and ready to hack on to!

## Running locally and generating a build for Chrome

It's not necessary to generate a build everytime you make a change. All the changes can be observed locally and will be hot deployed, just run:

```bash
yarn start
```

When you're happy with your changes and wish to check the extension on Chrome (or Chromium), just load the extension from the `build` directory after running the following build command:

```bash
yarn build
```

This will also copy the `manifest.json` file into the build directory, so any changes required for the manifest should be made before deploying build.

Once the extension is loaded into Chrome (or Chromium), it'll automatically pick up changes from the build directory, so for a newer build you only need to run the build command and reload your Chrome (or Chromium) new tab.

## Contribution guide

In order to add new Components to the app, follow a similar structure as for the already added component.

The new component should have its own directory inside `src/Components`. The new components should be include in the `src/App.js` file which will be rendered into the DOM via `src/index.js`.

All the global stylings should be added to `src/App.css` and any component specific stylings should be added to the component itself (the React way of styling). See [this](https://facebook.github.io/react/docs/dom-elements.html#style) link for additional info.

The app is currently under development, feel free to suggest features and send pull requests. :smile_cat:

Happy Hacking! :metal:
