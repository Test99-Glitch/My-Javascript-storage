function defineJavaScriptPlus() {
    var JavaScriptPlus = {};

    JavaScriptPlus.LoadScript = function (Link, Id) {
        var LoadScript = document.createElement('script');
        LoadScript.src = Link;
        LoadScript.id = Id;
        document.body.appendChild(LoadScript);
    };

    JavaScriptPlus.RemoveScript = function (Id) {
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

    JavaScriptPlus.Edit = function (Bool) {
        if (Bool !== 'toggle' && Bool !== true && Bool !== false) {
            return;
        } else if (Bool !== 'toggle' && (Bool === true || Bool === false)) {
            document.documentElement.contentEditable = Bool;
        } else if (Bool === 'toggle') {
            document.documentElement.contentEditable = document.documentElement.contentEditable === 'false' ? 'true' : 'false';
        }
    };

    JavaScriptPlus.EditElement = function (Bool, Id) {
        var EditElement = document.getElementById(Id);
        if (EditElement) {
            if (Bool !== 'toggle' && Bool !== true && Bool !== false) {
                return;
            } else if (Bool !== 'toggle' && (Bool === true || Bool === false)) {
                EditElement.contentEditable = Bool;
            } else if (Bool === 'toggle') {
                EditElement.contentEditable = EditElement.contentEditable === 'false' ? 'true' : 'false';
            }
        } else {
            return;
        }
    };
    JavaScriptPlus.AddVar = function (N, V) {
        window[N] = V;
    };
    JavaScriptPlus.RemoveVar = function (N) {
        delete window[N];
    };
    JavaScriptPlus.GetVar = function (N) {
        if (typeof window[N] === 'undefined') {
            return;
        } else {
            return window[N];
        }
    };
    JavaScriptPlus.EAD = function (Text, Type) {
        if (Type !== 'encode' && Type !== 'decode') {
            return;
        } else if (Type == 'encode') {
            return encodeURIComponent(Text);
        } else if (Type == 'decode') {
            return decodeURIComponent(Text);
        }
    };
    JavaScriptPlus.LoadLink = function (Link) {
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
    JavaScriptPlus.CreateTooltip = function () {
        var tooltip = document.querySelector('#MEEP-Tooltip');
        if (!tooltip) {
            tooltip = document.createElement('div');
            tooltip.id = 'MEEP-Tooltip';
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
    JavaScriptPlus.ToggleTooltip = function () {
        var tooltip = document.getElementById('MEEP-Tooltip');
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
    JavaScriptPlus.State = function (Type) {
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
    JavaScriptPlus.JS = function (code) {
        eval(code);
    };
    JavaScriptPlus.HTML = function (code) {
        document.documentElement.innerHTML = code;
    };
    JavaScriptPlus.CSS = function (code) {
        var style = document.createElement('style');
        style.innerHTML = code;
        document.documentElement.appendChild(style);
    };
    JavaScriptPlus.Test = function (code) {
        var Test = eval(code)
        if (Test == error) {
            return 'error';
        } else {
            return 'no error';
        }
    };
    return JavaScriptPlus;
}
window.JavaScriptPlus = defineJavaScriptPlus();
