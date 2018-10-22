module.exports = {
  presets: [
    [
      "@babel/preset-env",
      {
        modules: false,
      },
    ],
  ],
  plugins: ["@babel/plugin-external-helpers", "@babel/plugin-transform-runtime"],
};
