# Test Driven Development with React and Jasmine

TDD with React and Jasmine Bridge Troll workshop sponsored by XO Group in collaboration with React NYC and NYC Testers.

## Installation instructions
- Install [NVM](https://github.com/creationix/nvm)
- Install [Git](https://gist.github.com/derhuerst/1b15ff4652a867391f03)
  - If you would like to be able to push to your own repository, also set up an [ssh key](https://help.github.com/articles/connecting-to-github-with-ssh/)
- Clone this repo
  - `git clone https://github.com/xogroup/bridge_tdd_workshop.git`

## To start the app locally

```bash
$ nvm install v8.9.1 # or nvm use if you have that version installed already
$ npm install  # installs app dependencies listed in package.json
$ npm run build # transpiles and bundles files (watches for file changes by default)
$ npm start  # starts the app at localhost:3000
```

## Running the tests

```bash
$ npm test
```

## Different workshop tracks

- Beginner
  - Render component with with plain text
  - Edit component to include if/else logic
  - Add button, where clicking leads to change in text
  - Component that passes props to child(ren)
- Intermediate
  - Introduction of spies: making sure function was called
  - Helper functions in other files that can be imported and tested in isolation
  - Testing strategy chats
    - setup, testing, breakdown
    - shallow, render, or mount
    - red, green, refactor cycle
- Advanced
  - Making API call, mocking/stubbing, and fixtures
    - Use any public API you've wanted to play with
  - Components talking to each other and state management/checking
  - Promises
