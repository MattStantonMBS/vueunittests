const path = require('path')

module.exports = {
  verbose: true,
  rootDir: path.resolve(__dirname, './'),
  moduleNameMapper: {
    '^@/(.*)$': '<rootDir>/src/$1',
  },
  moduleFileNameExtensions: ['js', 'vue'],
  setupFiles: ['./tests/setup.js'],
  transform: {
    "^.+\\.js$": 'babel-jest',
    "^[^.]+.vue$": 'vue-jest'
  }
}