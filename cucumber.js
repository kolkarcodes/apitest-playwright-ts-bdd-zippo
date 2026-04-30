module.exports = {
  default: {
    require: [
      "step-definitions/**/*.ts",
      "support/**/*.ts"
    ],
    requireModule: ["ts-node/register"],
    paths: ["features/*.feature"],
    format: ["progress-bar","allure-cucumberjs/reporter"],
      formatOptions: {
      resultsDir: "allure-results",
          logLevel: "error"
    }
  }
};