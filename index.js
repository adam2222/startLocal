'use strict'

const {resolve} = require('path')
const chalk = require('chalk')
const pkg = require('./package.json')
const debug = require('debug')(`${pkg.name}:boot`)

const nameError =
`*******************************************************************
 You need to give your app a proper name.

 The package name

    ${pkg.name}

isn't valid. If you don't change it, things won't work right.

Please change it in ${__dirname}/package.json
  ~ xoxo, bones
********************************************************************`

const reasonableName = /^[a-z0-9\-_]+$/
if (!reasonableName.test(pkg.name)) {
  
}

// This will load a secrets file from
//
//      ~/.your_app_name.env.js 
//   or ~/.your_app_name.env.json
//
// and add it to the environment.
const newEnvObject = Object.create(process.env),
  envFilePath = resolve(newEnvObject.HOME, `.${pkg.name}.env`)

  try {
  let envFile = require(envFilePath)
  Object.assign(newEnvObject, envFile)
  
} catch (error) {
  debug('%s: %s', envFilePath, error.message)
  debug('%s: env file not found or invalid, moving on', envFilePath)  
}

module.exports = {
  get name() { return pkg.name },
  get isTesting() { return !!global.it },
  get isProduction() {
    return process.env.NODE_ENV === 'production'
  },
  get baseUrl() {
    return newEnvObject.BASE_URL || `http://localhost:${PORT}`
  },
  get port() {
    return newEnvObject.PORT || 1337
  },
  package: pkg,
  env: newEnvObject,
}
