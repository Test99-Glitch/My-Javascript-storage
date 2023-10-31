function defineJavaScriptPlus() {
    var LS = function (Link, Id) {
        var LoadScript = document.createElement('script');
        LoadScript.src = Link;
        LoadScript.id = Id;
        document.body.appendChild(LoadScript);
    };
    var RS = function (Id) {
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

    var E = function (Type) {
        if (!(typeof Type == 'boolean') && !(Type == 'toggle')) {
            return;
        } else if (typeof Type == 'boolean') {
            document.documentElement.contentEditable = Type;
        } else if (Type == 'toggle') {
            document.documentElement.contentEditable = !document.documentElement.contentEditable;
        }
    };
Object.prototype.EE = function(Type) {
  if (typeof Type == 'boolean') {
    this.contentEditable = Type;
  } else if (Type == 'toggle') {
    this.contentEditable = !this.contentEditable;
  }
};
    var AV = function (N, V) {
        window[N] = V;
    };
    var RV = function (N) {
        delete window[N];
    };
    var GV = function (N) {
        if (typeof window[N] === 'undefined') {
            return;
        } else {
            return window[N];
        }
    };
    var EAD = function (Text, Type) {
        if (Type !== 'encode' && Type !== 'decode') {
            return;
        } else if (Type == 'encode') {
            return encodeURIComponent(Text);
        } else if (Type == 'decode') {
            return decodeURIComponent(Text);
        }
    };
    var LL = function (Link) {
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
    var CT = function () {
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
    var TT = function () {
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
    var S = function (Type) {
        if (Type == 'save') {
            localStorage.setItem('SavedState', document.documentElement.innerHTML);
        } else if (Type == 'load') {
            var savedContent = localStorage.getItem('SavedState');
            if (savedContent !== null) {
                document.documentElement.innerHTML = savedContent;
            } else {
                return;
            }
        }
    };
    var JS = function (Code) {
        eval(code);
    };
    var HTML = function (Code) {
        document.documentElement.innerHTML = code;
    };
    var CSS = function (Code) {
        var style = document.createElement('style');
        style.innerHTML = code;
        document.documentElement.appendChild(style);
    };
    var T = function (Code) {
        var Test = eval(code)
        if (Test == error) {
            return 'error';
        } else {
            return 'no error';
        }
    };
}
window.JavaScriptPlus = defineJavaScriptPlus();
