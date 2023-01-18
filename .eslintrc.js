module.export = {
    parser: "babel-eslint",
    "extends": ["airbnb"],
    "env": {
      "browser": true,
      "jest": true
    },
    "rules": {
      "max-len": [1, 200, 2, {ignoreComments: true}],
      "react/jsx-filename-extension": [1, { "extensions": [".js", ".jsx"] }],
      "no-underscore-dangle": [0, { "allow": [] }],
      "jsx-a11y/label-has-associated-control": [
        "error", {
          "required": {
            "every": [ "id" ]
          }
        }
      ],
      "jsx-a11y/label-has-for": [
        "error", {
          "required": {
            "every": [ "id" ]
          }
        }
      ]
    }
  }