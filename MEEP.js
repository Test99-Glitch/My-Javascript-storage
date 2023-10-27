function defineMEEP() {
  var MEEP = {};

  MEEP.LoadScript = function(Link, Id) {
    var LoadScript = document.createElement('script');
    LoadScript.src = Link;
    LoadScript.id = Id;
    document.body.appendChild(LoadScript);
  };

  MEEP.RemoveScript = function(Id) {
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

  MEEP.Edit = function(Bool) {
    if (Bool !== 'toggle' && Bool !== true && Bool !== false) {
      return;
    } else if (Bool !== 'toggle' && (Bool === true || Bool === false)) {
      document.documentElement.contentEditable = Bool;
    } else if (Bool === 'toggle') {
      document.documentElement.contentEditable = document.documentElement.contentEditable === 'false' ? 'true' : 'false';
    }
  };

  MEEP.EditElement = function(Id, Bool) {
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
  MEEP.AddVar = function(N, V) {
  window[N] = V;
};
MEEP.RemoveVar = function(N) {
  delete window[N];
};
  MEEP.GetVar = function(N) {
  if (typeof window[N] === 'undefined') {
  return;
} else {
  return window[N];
}
  };
MEEP.EAD = function(Text, Type) {
if (Type !== 'encode' && Type !== 'decode') {
return;
} else if (Type == 'encode') {
return encodeURIComponent(Text);
} else if (Type == 'decode') {
return decodeURIComponent(Text);
}
};  
MEEP.LoadLink = function(Link) {
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
return MEEP;
}

window.MEEP = defineMEEP();
