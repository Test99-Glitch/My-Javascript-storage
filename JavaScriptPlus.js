  window.LS = function(Link, Id) {
    var LoadScript = document.createElement('script');
    LoadScript.src = Link;
    LoadScript.id = Id;
    document.body.appendChild(LoadScript);
  };
  window.RS = function(Id) {
    var RemoveScript = document.getElementById(Id);
    if (RemoveScript) {
      if (RemoveScript.tagName === 'script') {
        RemoveScript.remove();
      } else {
        return;
      }
    } else {
      return;
    }
  };
  window.E = function(Type) {
    if (!(typeof Type === 'boolean') && !(Type === 'toggle')) {
      return;
    } else if (typeof Type === 'boolean') {
      document.documentElement.contentEditable = Type;
    } else if (Type === 'toggle') {
      document.documentElement.contentEditable = !document.documentElement.contentEditable;
    }
  };
  window.EE = function(Element, Type) {
    if (typeof Type === 'boolean') {
      Element.contentEditable = Type;
    } else if (Type === 'toggle') {
      Element.contentEditable = !Element.contentEditable;
    }
  };
  window.AV = function(N, V) {
    window[N] = V;
  };
  window.RV = function(N) {
    delete window[N];
  };
  window.GV = function(N) {
    if (typeof window[N] === 'undefined') {
      return;
    } else {
      return window[N];
    }
  };
  window.EAD = function(Text, Type) {
    if (Type !== 'encode' && Type !== 'decode') {
      return;
    } else if (Type === 'encode') {
      return encodeURIComponent(Text);
    } else if (Type === 'decode') {
      return decodeURIComponent(Text);
    }
  };
  window.LL = function(Link) {
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
  window.CT = function() {
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
  window.TT = function() {
    var tooltip = document.getElementById('JavaScriptPlus-Tooltip');
    if (tooltip) {
      if (tooltip.style.display === 'block') {
        tooltip.style.display = 'none';
      } else {
        tooltip.style.display = 'block';
      }
    } else {
      return;
    }
  };
  window.S = function(Type) {
    if (Type === 'save') {
      localStorage.setItem('JavaScriptPlus S', document.documentElement.innerHTML);
    } else if (Type === 'load') {
      var savedContent = localStorage.getItem('JavaScriptPlus S');
      if (savedContent !== null) {
        document.documentElement.innerHTML = savedContent;
      } else {
        return;
      }
    }
  };
  window.JS = function(Code) {
    eval(Code);
  };
  window.HTML = function(Code) {
    document.documentElement.innerHTML = Code;
  };
  window.CSS = function(Code) {
    var style = document.createElement('style');
    style.innerHTML = Code;
    document.documentElement.appendChild(style);
  };
  window.TS = function(Code) {
    var typescript = document.createElement('script');
    typescript.src = 'https://cdn.jsdelivr.net/npm/typescript@latest/lib/typescript.js';
    typescript.onload = function() {
      eval(ts.transpile(Code));
    };
    document.body.appendChild(typescript);
    typescript.remove();
  };
  window.CS = function(Code) {
    var coffeescript = document.createElement('script');
    coffeescript.src = 'https://cdn.jsdelivr.net/npm/coffeescript@latest/lib/coffeescript-browser-compiler-legacy/coffeescript.js';
    coffeescript.onload = function() {
      eval(CoffeeScript.compile(Code));
    };
    document.body.appendChild(coffeescript);
    coffeescript.remove();
  };
window.JQ = function(Code) {
    var jq = document.createElement('script');
    jq.src = 'https://cdn.jsdelivr.net/npm/jquery@latest/jquery.js';
    jq.onload = function() {
      eval(Code);
    };
    document.body.appendChild(jq);
    jq.remove();
  };
window.PY = function(Code) {
  var py = document.createElement('script');
  py.src='https://cdn.jsdelivr.net/gh/Test99-Glitch/My-Javascript-storage/pyscript.js';
  py.defer=true;
  document.body.appendChild(py);
  py.onload=function(){
    var python = document.createElement('py-script');
    python.textContent = Code;
    document.body.appendChild(python);
  };
    document.body.appendChild(py);
    py.remove();
  };
  window.T = function(Code) {
    var Test = eval(Code);
    if (Test === Error) {
      return 'error';
    } else {
      return 'no error';
    }
  };
