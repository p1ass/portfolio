module.exports = {
    root: true,
    parser: "@typescript-eslint/parser",
    parserOptions: {
      tsconfigRootDir: __dirname,
      project: ["./tsconfig.json"],
      sourceType: "module"
    },
    env: {
      es6: true,
      browser: true,
      node: true
    },
    plugins: ["@typescript-eslint", "svelte3"],
    extends: [
      "eslint:recommended",
      "plugin:@typescript-eslint/recommended",
      "plugin:import/errors",
      "plugin:import/warnings",
      "plugin:import/typescript",
      "prettier"
    ],
    ignorePatterns: [
      'public/build/'
    ],
    overrides: [
      {
        files: ['**/*.svelte'],
        processor: 'svelte3/svelte3'
      }
    ],
    rules: {
        "@typescript-eslint/explicit-module-boundary-types": "off",
        "import/order": [
          "error",
          {
            "pathGroups": [
              {
                "pattern": "@/**",
                "group": "parent",
                "position": "after"
              }
            ],
            "newlines-between": "always"
          }
        ],
        "import/no-default-export": "warn"
    },
    settings: {
      // Nothing
    }
  }

