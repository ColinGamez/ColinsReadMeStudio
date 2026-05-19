const { registerReadmeStudio } = require("./src/readmeStudio");

function activate(context) {
  registerReadmeStudio(context);
}

function deactivate() {}

module.exports = { activate, deactivate };
