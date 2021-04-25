var Generator = require('yeoman-generator')

module.exports = class extends Generator {
  constructor(args, opts) {
    super(args, opts)
  }
  async initPackage() {
    let answer = await this.prompt([{
      type: 'input',
      name: 'name',
      message: 'Your project name',
      default: this.appname
    }])
    this.answer = answer
    const pkgJson = {
      "name": answer.name,
      "version": "1.0.0",
      "description": "",
      "main": "index.js",
      "scripts": {
        "build": "webpack"
      },
      "keywords": [],
      "author": "",
      "license": "ISC",
      "devDependencies": {
        "webpack": "^5.34.0",
        "webpack-cli": "^3.3.12"
      }
    }
    this.fs.extendJSON(this.destinationPath('package.json'), pkgJson)
    this.npmInstall()
    this.npmInstall(['vue'], {
      'save-dev': false
    })
    this.npmInstall(['vue-loader', 'vue-template-compiler',
      'vue-style-loader', 'css-loader',
      'copy-webpack-plugin'
    ], {
      'save-dev': true
    })
  }
  copyFiles() {
    this.fs.copyTpl(
      this.templatePath('Helloworld.vue'),
      this.destinationPath('src/Helloworld.vue'), {},
    )
    this.fs.copyTpl(
      this.templatePath('webpack.config.js'),
      this.destinationPath('webpack.config.js'), {}
    )
    this.fs.copyTpl(
      this.templatePath('main.js'),
      this.destinationPath('src/main.js'), {}
    )
    this.fs.copyTpl(
      this.templatePath('index.html'),
      this.destinationPath('src/index.html'), {
        title: this.answer.name
      }
    )
  }
}