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
      RemoveScript.remove();
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
    }
  };
  MEEP.AddVariable = function(N, V) {
  window[N] = V;
};
MEEP.RemoveVariable = function(N) {
  delete window[N];
};
MEEP.EAD = function(Text, Type) {
if (Type !== 'encode' && Type !== 'decode') {
return;
} else if (Type == 'encode') {
return encodeURIComponent(Text);
} else if (Type == 'decode') {
return decodeURIComponent(Text);
}
}  
return MEEP;
}

window.MEEP = defineMEEP();