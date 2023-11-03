function DefineJavaScriptPlus() {
   var JSP = function(Code) {
      var result = [];
      var TypeScript = document.createElement('script');
      TypeScript.src = 'https://cdn.jsdelivr.net/npm/typescript@latest/lib/typescript.js';
      TypeScript.onload = function() {
         result.push(ts.transpile(Code));
      };
      var CoffeeScript = document.createElement('script');
      CoffeeScript.src = 'https://cdn.jsdelivr.net/npm/typescript@latest/lib/typescript.js';
      CoffeeScript.onload = function() {
         result.push(CoffeeScript.compile(Code));
      };
      document.body.appendChild(TypeScript);
      document.body.appendChild(CoffeeScript);
      result = result.join('');
      eval(result);
      TypeScript.remove();
      CoffeeScript.remove();
   };
   return JSP;
}
window.JSP = DefineJavaScriptPlus();
