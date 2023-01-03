module.exports = {
  preset: '@vue/cli-plugin-unit-jest',
  "moduleNameMapper": {
    "axios": "axios/dist/node/axios.cjs"
  },
  setupFiles: ["<rootDir>/tests/setup.js"],
}
