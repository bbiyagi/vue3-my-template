module.exports = {
 env: {
   browser: true,
   node: true,
 },
 extends: [
   'plugin:vue/vue3-strongly-recommended',
   'eslint:recommended'
 ],
 parserOptions: {
   parser: 'babel-eslint'
 },
 rules: {
   "vue/html-closing-bracket-newline":["error", {
      "singleline": "never",
      "multiline": "never"
   
  }],
  
    "vue/html-self-closing": ["error", {
      "html": {
        // img 등등
        "void": "always",
        // div 등등
        "normal": "never",
        // <ddddd /> 
        "component": "always"
      },
      "svg": "always",
      "math": "always"
    }]
  
 }
}
