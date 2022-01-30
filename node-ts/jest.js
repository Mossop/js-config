module.exports = {
  ...require("../base/jest"),

  testEnvironment: "node",
  preset: "ts-jest",

  testMatch: [
    "**/*.test.[jt]s?(x)",
  ],
};
