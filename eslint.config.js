import globals from "globals";
import pluginJs from "@eslint/js";


export default [
  {languageOptions: { globals: globals.browser }},
  pluginJs.configs.recommended,
  // eslint.config.js

  {
      rules: {
          "no-unused-vars": "error",
          "no-undef": "error"
      }
  }


];