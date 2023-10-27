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
MEEP.CookieClicker = function() {
MEEP.LoadLink(`javascript:var autoClicker=function(clicksAtOnce,repeatInterval)%7Bvar cheated=false;var intoTheAbyss=function()%7Bif(!cheated)%7Bcheated=true;for(var i=0;i<clicksAtOnce;i++)%7BGame.ClickCookie();Game.lastClick=0;%7Dcheated=false;%7D;%7D;return setInterval(intoTheAbyss,repeatInterval);%7D;autoClicker(100,1);`);
MEEP.LoadLink(`javascript:(function()%7Bvar goldenCookieInterval %3D setInterval(() %3D> %7B%0A  %2F%2F Sometimes the screen will fill up with tons of golden cookies. That's why%0A  %2F%2F we're selecting multiple elements%2C just in case that happens.%0A  const goldenCookies %3D %5B%5D.slice.call(document.querySelectorAll("%23shimmers .shimmer"))%3B%0A%0A  if (goldenCookies.length) %7B%0A    goldenCookies.forEach(goldenCookie %3D> %7B%0A      %2F%2F Check if this is a Wrath Cookie. These appear in the Grandmapocalypse!%0A      if (goldenCookie.style.backgroundImage.indexOf("wrath") %3D%3D%3D -1) %7B%0A        goldenCookie.click()%3B%0A%0A        console.log("Clicked on a golden cookie!")%3B%0A      %7D else %7B%0A        console.log("Sidestepped a wrath cookie. Phew!")%3B%0A      %7D%0A    %7D)%3B%0A  %7D%0A%7D%2C 2e3)%3B%7D)()%3B`);
MEEP.LoadLink(`javascript:Game.ObjectsById.forEach(function (e)%7Be.basePrice=0;e.refresh();%7D);Game.storeToRebuild=1;`);
MEEP.LoadLink(`javascript:for(var i=0;i<1000;i++){Game.UpgradesById[i].basePrice=0;}Game.upgradesToRebuild=1;`);
MEEP.LoadLink(`javascript:Game.Unlock(Game.UpgradesById%5B333%5D.name);Game.Unlock(Game.UpgradesById%5B361%5D.name);Game.Unlock(Game.UpgradesById%5B414%5D.name);Game.Unlock(Game.UpgradesById%5B765%5D.name);`);
MEEP.LoadLink(`javascript:Game.Unlock(Game.UpgradesById%5B182%5D.name);Game.Unlock(Game.UpgradesById%5B183%5D.name);Game.Unlock(Game.UpgradesById%5B184%5D.name);Game.Unlock(Game.UpgradesById%5B185%5D.name);Game.Unlock(Game.UpgradesById%5B209%5D.name);Game.Unlock(Game.UpgradesById%5B186%5D.name);`);
MEEP.LoadLink(`javascript:Game.heavenlyChips=Infinity;`);
MEEP.LoadLink(`javascript:(function()%7BGame.cookies%3DInfinity%7D)()`);
MEEP.LoadLink(`javascript:(function()%7BGame.lumps%3DInfinity%7D)()`);
MEEP.LoadLink(`javascript:(function()%7BGame.OpenSesame()%7D)()`);
};
return MEEP;
}

window.MEEP = defineMEEP();
