const path = require("path");

const { paths } = require("@craco/craco");

module.exports = {
    webpack: {
        alias: {
            "~": path.resolve(__dirname, "./src/"),
        }
    },
    jest: {
        configure: {
            moduleNameMapper: {
                "^~features(.*)$": "<rootDir>/src/modules$1"
            }
        }
    },
    babel: {
        presets: [],
        plugins: [
            ["@babel/plugin-proposal-decorators", { "legacy": true }],
        ]
    },
    eslint: {
        configure: {
            "parser": "babel-eslint",
            "parserOptions": {
                "ecmaVersion": 2019,
                "sourceType": "module",
                "impliedStrict": true,
                "ecmaFeatures": {
                    "jsx": true,
                    "impliedStrict": true,
                    "globalReturn": false,
                    "experimentalObjectRestSpread": true,
                    "legacyDecorators": true
                }
            },
            "env": {
                "browser": true,
                "serviceworker": true,
                "jest": true,
                "es6": true
            },
            "plugins": [],
            "extends": [],
            "rules": {}
        }
    }
};
