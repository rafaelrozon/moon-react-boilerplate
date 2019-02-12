const path = require("path");

const { paths } = require("@craco/craco");

module.exports = {
    webpack: {
        alias: {
           "@": path.resolve(__dirname, "./src/"),
           "@decorators": path.resolve(__dirname, "./src/decorators/"),
           "@middlewares": path.resolve(__dirname, "./src/middlewares/"),
           "@features": path.resolve(__dirname, "./src/features/"),
           "@pages": path.resolve(__dirname, "./src/pages/"),
           "@provider": path.resolve(__dirname, "./src/provider/"),
           "@routes": path.resolve(__dirname, "./src/routes/"),
           "@static": path.resolve(__dirname, "./src/static/"),
           "@store": path.resolve(__dirname, "./src/store/"),
           "@translations": path.resolve(__dirname, "./src/translations/"),
           "@typings": path.resolve(__dirname, "./src/typings/"),
           "@utils": path.resolve(__dirname, "./src/utils/")
        },
        extensions: ['.ts', '.tsx', '.js', '.jsx']
    },
    jest: {
        configure: {
            moduleNameMapper: {
                "^@features(.*)$": "<rootDir>/src/modules$1"
            }
        }
    },
    babel: {
        presets: [],
        plugins: [
            ["@babel/plugin-proposal-decorators", {"legacy": true }],
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
                    "legacyDecorators": true,

                }
            },
            "env": {
                "browser": true,
                "serviceworker": true,
                "jest": true,
                "es6": true
            },
            "plugins": [
            ],
            "extends": [

            ],
            "rules": {

            }
        }
    }
};
