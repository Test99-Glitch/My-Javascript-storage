function DefineJavaScriptPlus() {
   var JSP = {};
   JSP.LS = function(Link, Id) {
      var LoadScript = document.createElement('script');
      LoadScript.src = Link;
      LoadScript.id = Id;
      document.body.appendChild(LoadScript);
   };

   JSP.RS = function(Id) {
      var RemoveScript = document.getElementById(Id);
      if (RemoveScript) {
         if (RemoveScript.tagName == 'script') {
            RemoveScript.remove();
         } else {
            return;
         }
      } else {
         return;
      }
   };

   JSP.E = function(Type) {
      if (!(typeof Type == 'boolean') && !(Type == 'toggle')) {
         return;
      } else if (typeof Type == 'boolean') {
         document.documentElement.contentEditable = Type;
      } else if (Type == 'toggle') {
         document.documentElement.contentEditable = !document.documentElement.contentEditable;
      }
   };

   JSP.EE = function(Element, Type) {
      if (typeof Type == 'boolean') {
         Element.contentEditable = Type;
      } else if (Type == 'toggle') {
         Element.contentEditable = !Element.contentEditable;
      }
   };

   JSP.AV = function(N, V) {
      window[N] = V;
   };

   JSP.RV = function(N) {
      delete window[N];
   };

   JSP.GV = function(N) {
      if (typeof window[N] === 'undefined') {
         return;
      } else {
         return window[N];
      }
   };

   JSP.EAD = function(Text, Type) {
      if (Type !== 'encode' && Type !== 'decode') {
         return;
      } else if (Type == 'encode') {
         return encodeURIComponent(Text);
      } else if (Type == 'decode') {
         return decodeURIComponent(Text);
      }
   };

   JSP.LL = function(Link) {
      if (Link) {
         var LoadLink = document.createElement('a');
         LoadLink.href = Link;
         document.body.appendChild(LoadLink);
         LoadLink.click();
         LoadLink.remove();
      } else {
         return;
      }
   };

   JSP.CT = function() {
      var tooltip = document.querySelector('#JavaScriptPlus-Tooltip');
      if (!tooltip) {
         tooltip = document.createElement('div');
         tooltip.id = 'JavaScriptPlus-Tooltip';
         tooltip.style.position = 'fixed';
         tooltip.style.backgroundColor = 'rgba(0, 0, 0, 0.7)';
         tooltip.style.color = 'white';
         tooltip.style.padding = '5px';
         tooltip.style.borderRadius = '5px';
         tooltip.style.zIndex = '9999';
         tooltip.style.pointerEvents = 'none';
         document.body.appendChild(tooltip);
      }
      var tooltipVisible = true;
      document.addEventListener('mousemove', function (e) {
         var target = e.target;
         var tagName = target.tagName.toLowerCase();
         var id = target.id;
         var classes = Array.from(target.classList).join(', ');
         if (tagName || id || classes) {
            tooltip.textContent = `Tag: ${tagName}\nID: ${id}\nClasses: ${classes}`;
            tooltip.style.left = e.clientX + 'px';
            tooltip.style.top = e.clientY + 'px';
         }
      });
   };

   JSP.TT = function() {
      var tooltip = document.getElementById('JavaScriptPlus-Tooltip');
      var tooltipVisible = '?';
      if (tooltip) {
         if (tooltip.style.display == 'block') {
            tooltip.style.display = 'none';
            tooltipVisible = false;
         } else {
            tooltip.style.display = 'block';
            tooltipVisible = true;
         }
      } else {
         return;
      }
   };

   JSP.S = function(Type) {
      if (Type == 'save') {
         localStorage.setItem('JavaScriptPlus S', document.documentElement.innerHTML);
      } else if (Type == 'load') {
         var savedContent = localStorage.getItem('JavaScriptPlus S');
         if (savedContent !== null) {
            document.documentElement.innerHTML = savedContent;
         } else {
            return;
         }
      }
   };

   JSP.JS = function(Code) {
      eval(Code);
   };

   JSP.HTML = function(Code) {
      document.documentElement.innerHTML = Code;
   };

   JSP.CSS = function(Code) {
      var style = document.createElement('style');
      style.innerHTML = Code;
      document.documentElement.appendChild(style);
   };

   JSP.T = function(Code) {
      var Test = eval(Code);
      if (Test == Error) {
         return 'error';
      } else {
         return 'no error';
      }
   };
   return JSP;
}
window.JSP = DefineJavaScriptPlus();
