## React Configuration from the scratch

`React, webpack, and Babel 7`

Create Folder which one you want

open `git bash`

```
cd Documents or Desktop

mkdir folderName(create-react-app)

cd folderName(create-react-app)

npm init or npm init -y
```

### install React and React DOM

`npm install react react-dom --save`

* **react** the react library
* **react-dom** this library helps us to use react in the browser

### Webpack 4 setup

 webpack 4 doesn’t need a configuration file by default!

 webpack 4 is looking for an entry point in ./src! In previou versions of webpack the entry point had to be defined inside a configuration file named webpack.config.js.

 > You will get the bundle in ~/folderName/dist/main.js.

[About Webpack 4](https://www.valentinog.com/blog/webpack/)


`npm install webpack webpack-cli webpack-dev-server --save-dev`

* **webpack** it is used to bundle all the modules
* **webpack-cli** it is used to run webpack from cli
* **webpack-dev-server** it used to serve the compiled file.

inside `package.json`

```
"scripts": {
  "build": "webpack --mode production"
}
```

**The concept of zero configuration in webpack 4 applies to:**

* `the entry point`. Default to ./src/index.js
* `the output`. Default to ./dist/main.js
* `production and development mode` (no need to create 2 separate confs for production and development)

### Babel 7 setup

React components are mostly written in JavaScript ES6. ES6 is a nice improvement over the language but older browsers cannot understand the new syntax. Take the class keyword for example. 

And that transformation is called transpiling. Webpack doesn’t know how to transform ES6 JavaScript to ES5 but it has this concept of loaders: think of them as of transformers.

> babel-loader is the Webpack loader responsible for taking in the ES6 code and making it understandable by the browser of choice.

`npm install @bablel/core @babel/preset-env @babel/preset-react babel-loader --save-dev`

* `@babel/core` is the main dependency that includes babel transform script.
* `@babel/preset-env` is the default Babel preset used to transform ES6+ into valid ES5 code. Optionally configures browser polyfills automatically.
* `@babel/preset-react` is used for transforming JSX and React class syntax into valid JavaScript code.
* `babel-loader` is a webpack loader that hooks Babel into webpack. We will run Babel from webpack with this package.

Create `webpack.config.js` 

```
module.exports = {
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader'
        }
      }
    ]
  }
}
```

create `.babelrc` file using `touch .babelrc` cmd

{
  "presets" : ["@babel/preset-env","@babel/preset-react"]
}


Now Create `index.js` and `index.html` inside the `src` folder

**index.html**

```html
<!Doctype html>
<html>
  <head>
    <title>React environment setup</title>
  </head>
  <body>
    <div id="config"></div>
  </body>
</html>
```

**index.js**

```javascript
import React from 'react';
import ReactDOM from 'react-dom';

class Welcome extends React.Component{
  render(){
    return(
      <div>
        <h2>Welcome React Environment Setup</h2>
      </div>
    )
  }
}

ReactDOM.render(<Welcome />, document.getElementById('config'));
```

now run `npm start`

webpack create the bundle `main.js` and put in to `dist` folder.

```
> test@1.0.0 start C:\Users\username\Desktop\test
> webpack --mode production

Hash: c922769c794a48514046
Version: webpack 4.39.3
Time: 18433ms
Built at: 09/02/2019 6:53:24 PM
  Asset     Size  Chunks             Chunk Names
main.js  125 KiB       0  [emitted]  main
Entrypoint main = main.js
[3] ./src/index.js 2.74 KiB {0} [built]
    + 7 hidden modules
```

### The HTML webpack plugin and html-loader

To correctly process HTML files, Webpacks needs two additional components: html-webpack-plugin and html-loader.

`npm install html-webpack-plugin html-loader --save-dev`

To display our React form we must tell Webpack to produce an HTML page. The resulting bundle will be placed inside a script tag.

The `HtmlWebpackPlugin` simplifies creation of HTML files to serve your webpack bundles. This is especially useful for webpack bundles that include a hash in the filename which changes every compilation. [Read More](https://webpack.js.org/plugins/html-webpack-plugin/)

`html-loader` Exports HTML as string. HTML is minimized when the compiler demands. [Read More](https://webpack.js.org/loaders/html-loader/)


inside `webpack.config.js` write the following code

```js
const HTMLWebpackPlugin = require('html-webpack-plugin');
const path = require('path');

module.exports = {
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader'
        }
      },
      {
        test: /\.html$/,
        use: {
          loader: 'html-loader'
        }
      }
    ]
  },
  plugins: [
    new HTMLWebpackPlugin({
      template: './src/index.html',
      filename: './index.html'
    })
  ]
}
```

now everything is fine. inside dist folder, we can create index.html and main.js.

### Running dev server

`webpack.config.js`

```
devServer: {
    contentBase: path.join(__dirname, "dist"),
    compress: true,
    port: 9000,
    watchContentBase: true,
    progress: true
  }
```

The module provides us with a very easy and configurable method of running our development server. 

`contentBase` the entry point for our compiled resources which is index.html `port` tells on which port the server is listening. 

`watchContentBase` is very interesting, it tells the server to watch for the changes in the files directory in the contentBase folder.

inside `packge.json`

```
"scripts": {
  "dev": "webpack-dev-server --mode development",
  "start": "webpack --mode production"
},
```

now run `npm run dev`


`http://localhost:9000/` you can see your app loaded successfully.

---------------------

[how to deploy react app](https://www.freecodecamp.org/news/how-to-set-up-deploy-your-react-app-from-scratch-using-webpack-and-babel-a669891033d4/)

[react config setUp](https://www.valentinog.com/blog/babel/)

[Webpack 4 tutorial](https://www.valentinog.com/blog/from-gulp-to-webpack-4-tutorial/)

[webpack](https://www.valentinog.com/blog/webpack/)

[HTML webpack plugin](https://webpack.js.org/plugins/html-webpack-plugin/)

[HTML loader](https://webpack.js.org/loaders/html-loader/)