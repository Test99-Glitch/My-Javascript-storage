function DefineJavaScriptPlus() {
   function LS(Link, Id) {
      var LoadScript = document.createElement('script');
      LoadScript.src = Link;
      LoadScript.id = Id;
      document.body.appendChild(LoadScript);
   }

   function RS(Id) {
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
   }

   function E(Type) {
      if (!(typeof Type == 'boolean') && !(Type == 'toggle')) {
         return;
      } else if (typeof Type == 'boolean') {
         document.documentElement.contentEditable = Type;
      } else if (Type == 'toggle') {
         document.documentElement.contentEditable = !document.documentElement.contentEditable;
      }
   }

   function EE(Element, Type) {
      if (typeof Type == 'boolean') {
         Element.contentEditable = Type;
      } else if (Type == 'toggle') {
         Element.contentEditable = !Element.contentEditable;
      }
   }

   function AV(N, V) {
      window[N] = V;
   }

   function RV(N) {
      delete window[N];
   }

   function GV(N) {
      if (typeof window[N] === 'undefined') {
         return;
      } else {
         return window[N];
      }
   }

   function EAD(Text, Type) {
      if (Type !== 'encode' && Type !== 'decode') {
         return;
      } else if (Type == 'encode') {
         return encodeURIComponent(Text);
      } else if (Type == 'decode') {
         return decodeURIComponent(Text);
      }
   }

   function LL(Link) {
      if (Link) {
         var LoadLink = document.createElement('a');
         LoadLink.href = Link;
         document.body.appendChild(LoadLink);
         LoadLink.click();
         LoadLink.remove();
      } else {
         return;
      }
   }

   function CT() {
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
   }

   function TT() {
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
   }

   function S(Type) {
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
   }

   function JS(Code) {
      eval(Code);
   }

   function HTML(Code) {
      document.documentElement.innerHTML = Code;
   }

   function CSS(Code) {
      var style = document.createElement('style');
      style.innerHTML = Code;
      document.documentElement.appendChild(style);
   }

   function T(Code) {
      var Test = eval(Code)
      if (Test == error) {
         return 'error';
      } else {
         return 'no error';
      }
   }
}
window.JavaScriptPlus = DefineJavaScriptPlus();
