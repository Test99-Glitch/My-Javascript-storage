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
MEEP.CookieClicker = function() {
Game.ObjectsById.forEach(function (e){
e.basePrice=0;e.refresh();
});
Game.storeToRebuild=1;
for(var i=0;i<1000;i++){
Game.UpgradesById[i].basePrice=0;
}
Game.upgradesToRebuild=1;
Game.Unlock(Game.UpgradesById[333].name);
  Game.Unlock(Game.UpgradesById[361].name);
  Game.Unlock(Game.UpgradesById[414].name);
  Game.Unlock(Game.UpgradesById[765].name);
  Game.Unlock(Game.UpgradesById[182].name);
  Game.Unlock(Game.UpgradesById[183].name);
  Game.Unlock(Game.UpgradesById[184].name);
  Game.Unlock(Game.UpgradesById[185].name);
  Game.Unlock(Game.UpgradesById[209].name);
  Game.Unlock(Game.UpgradesById[186].name);
    var goldenCookieInterval = setInterval(() => {
  const goldenCookies = [].slice.call(document.querySelectorAll("#shimmers .shimmer"));

  if (goldenCookies.length) {
    goldenCookies.forEach(goldenCookie => {
      if (goldenCookie.style.backgroundImage.indexOf("wrath") === -1) {
        goldenCookie.click();
      }
    });
  }
}, 2e3);
  if(window._activeClickInterval) {
    clearInterval(window._activeClickInterval); 
    delete window._activeClickInterval
  }else{
    window._activeClickInterval = setInterval(Game.ClickCookie,0)
  }
}
return MEEP;
}

window.MEEP = defineMEEP();
