System.register(["./index-legacy-704c867e.js"],(function(e,t){"use strict";var n;return{setters:[e=>{n=e.W}],execute:function(){class t extends n{async getCurrentPosition(e){return new Promise(((t,n)=>{navigator.geolocation.getCurrentPosition((e=>{t(e)}),(e=>{n(e)}),Object.assign({enableHighAccuracy:!1,timeout:1e4,maximumAge:0},e))}))}async watchPosition(e,t){return`${navigator.geolocation.watchPosition((e=>{t(e)}),(e=>{t(null,e)}),Object.assign({enableHighAccuracy:!1,timeout:1e4,maximumAge:0},e))}`}async clearWatch(e){window.navigator.geolocation.clearWatch(parseInt(e.id,10))}async checkPermissions(){if("undefined"==typeof navigator||!navigator.permissions)throw this.unavailable("Permissions API not available in this browser");const e=await window.navigator.permissions.query({name:"geolocation"});return{location:e.state,coarseLocation:e.state}}async requestPermissions(){throw this.unimplemented("Not implemented on web.")}}e("GeolocationWeb",t),e("Geolocation",new t)}}}));
