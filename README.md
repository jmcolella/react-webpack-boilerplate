# React / Webpack Boilerplate

Basic set-up for using React with Webpack.

This boilerplate is designed to be a quick start for building and allows for as much customization as the user sees fit.

Happy coding!

# Features
- Webpack set-up includes Babel loader with ES2015 and React presets.
- Ability to run dev server through `webpack-dev-server` or build and run production server using `express`.
- Utilizes Karma test runner with Mocha framework and Chai assertions.
- Redux dependencies available for easy integration.

# Basic Commands
- `npm run dev`: utilizes development server.
- `npm run build`: production build of application.
- `npm start`: see output on production server.
- `npm test`: runs Karma test runner and shows output on Terminal. Chrome is the default browser.

# CSS / SASS

Thanks to Webpack's powerful loaders, using plain CSS or SASS files in your React applications is really easy.

In the `app` folder, there is already a folder titled `assets`, where you can place all stylesheets and other assests for your application. Simply create your desired stylesheet in this folder (it can be placed in a subfolder) and then import that file in the React file you desire.

Here's an example:

```javascript
import React, { Component } from 'react';
import '../directoryToStlyesheet/stylesheet.scss';

class Test extends Component {
  ...
  render() {
    return (
      <div class='classFromStylesheet'>
        <h1>Test</h1>
      </div>
      
      ...
    )
  }
}

```

# Tests

In this boilerplate, all tests are placed in the `tests` folder in the root directory. 

For any tests to be recognized by the configuration, all files should end with `-test.js`. For example, a test file would be named as `sampleTest-test.js`.

If you want to change this naming convention, go to the `tests.webpack.js` file in the root directory and change the regex in line 1. Where it denotes `-test`, change that to whichever extension you feel is most appropriate.
