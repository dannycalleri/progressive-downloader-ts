!function(e){var n={};function t(r){if(n[r])return n[r].exports;var o=n[r]={i:r,l:!1,exports:{}};return e[r].call(o.exports,o,o.exports,t),o.l=!0,o.exports}t.m=e,t.c=n,t.d=function(e,n,r){t.o(e,n)||Object.defineProperty(e,n,{enumerable:!0,get:r})},t.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},t.t=function(e,n){if(1&n&&(e=t(e)),8&n)return e;if(4&n&&"object"==typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(t.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&n&&"string"!=typeof e)for(var o in e)t.d(r,o,function(n){return e[n]}.bind(null,o));return r},t.n=function(e){var n=e&&e.__esModule?function(){return e.default}:function(){return e};return t.d(n,"a",n),n},t.o=function(e,n){return Object.prototype.hasOwnProperty.call(e,n)},t.p="",t(t.s=3)}([function(e,n,t){var r,o,i=t(1),u=t(2),c=0,a=0;e.exports=function(e,n,t){var l=n&&t||0,f=n||[],s=(e=e||{}).node||r,d=void 0!==e.clockseq?e.clockseq:o;if(null==s||null==d){var p=i();null==s&&(s=r=[1|p[0],p[1],p[2],p[3],p[4],p[5]]),null==d&&(d=o=16383&(p[6]<<8|p[7]))}var y=void 0!==e.msecs?e.msecs:(new Date).getTime(),v=void 0!==e.nsecs?e.nsecs:a+1,h=y-c+(v-a)/1e4;if(h<0&&void 0===e.clockseq&&(d=d+1&16383),(h<0||y>c)&&void 0===e.nsecs&&(v=0),v>=1e4)throw new Error("uuid.v1(): Can't create more than 10M uuids/sec");c=y,a=v,o=d;var w=(1e4*(268435455&(y+=122192928e5))+v)%4294967296;f[l++]=w>>>24&255,f[l++]=w>>>16&255,f[l++]=w>>>8&255,f[l++]=255&w;var b=y/4294967296*1e4&268435455;f[l++]=b>>>8&255,f[l++]=255&b,f[l++]=b>>>24&15|16,f[l++]=b>>>16&255,f[l++]=d>>>8|128,f[l++]=255&d;for(var m=0;m<6;++m)f[l+m]=s[m];return n||u(f)}},function(e,n){var t="undefined"!=typeof crypto&&crypto.getRandomValues&&crypto.getRandomValues.bind(crypto)||"undefined"!=typeof msCrypto&&"function"==typeof window.msCrypto.getRandomValues&&msCrypto.getRandomValues.bind(msCrypto);if(t){var r=new Uint8Array(16);e.exports=function(){return t(r),r}}else{var o=new Array(16);e.exports=function(){for(var e,n=0;n<16;n++)0==(3&n)&&(e=4294967296*Math.random()),o[n]=e>>>((3&n)<<3)&255;return o}}},function(e,n){for(var t=[],r=0;r<256;++r)t[r]=(r+256).toString(16).substr(1);e.exports=function(e,n){var r=n||0,o=t;return[o[e[r++]],o[e[r++]],o[e[r++]],o[e[r++]],"-",o[e[r++]],o[e[r++]],"-",o[e[r++]],o[e[r++]],"-",o[e[r++]],o[e[r++]],"-",o[e[r++]],o[e[r++]],o[e[r++]],o[e[r++]],o[e[r++]],o[e[r++]]].join("")}},function(e,n,t){"use strict";t.r(n);var r=function(){function e(){}return e.prototype.download=function(e){return new Promise(function(n){fetch(e).then(function(e){var t=e.body.getReader(),r=0,o=[];return t.read().then(function e(i){if(!i.done)return o.push(i.value),r+=i.value.length,console.log("Received",r,"bytes of data so far"),t.read().then(e);console.log("Fetch complete");var u=function(e){for(var n=[],t=1;t<arguments.length;t++)n[t-1]=arguments[t];for(var r=0,o=0,i=n;o<i.length;o++)r+=(f=i[o]).length;for(var u=new e(r),c=0,a=0,l=n;a<l.length;a++){var f=l[a];u.set(f,c),c+=f.length}return u}.apply(void 0,[Uint8Array].concat(o)),c=URL.createObjectURL(new Blob([u.buffer],{type:"application/octet-stream"}));n(c)})})})},e}(),o=t(0),i=t.n(o),u=function(e,n,t,r){return new(t||(t=Promise))(function(o,i){function u(e){try{a(r.next(e))}catch(e){i(e)}}function c(e){try{a(r.throw(e))}catch(e){i(e)}}function a(e){e.done?o(e.value):new t(function(n){n(e.value)}).then(u,c)}a((r=r.apply(e,n||[])).next())})},c=function(e,n){var t,r,o,i,u={label:0,sent:function(){if(1&o[0])throw o[1];return o[1]},trys:[],ops:[]};return i={next:c(0),throw:c(1),return:c(2)},"function"==typeof Symbol&&(i[Symbol.iterator]=function(){return this}),i;function c(i){return function(c){return function(i){if(t)throw new TypeError("Generator is already executing.");for(;u;)try{if(t=1,r&&(o=2&i[0]?r.return:i[0]?r.throw||((o=r.return)&&o.call(r),0):r.next)&&!(o=o.call(r,i[1])).done)return o;switch(r=0,o&&(i=[2&i[0],o.value]),i[0]){case 0:case 1:o=i;break;case 4:return u.label++,{value:i[1],done:!1};case 5:u.label++,r=i[1],i=[0];continue;case 7:i=u.ops.pop(),u.trys.pop();continue;default:if(!(o=(o=u.trys).length>0&&o[o.length-1])&&(6===i[0]||2===i[0])){u=0;continue}if(3===i[0]&&(!o||i[1]>o[0]&&i[1]<o[3])){u.label=i[1];break}if(6===i[0]&&u.label<o[1]){u.label=o[1],o=i;break}if(o&&u.label<o[2]){u.label=o[2],u.ops.push(i);break}o[2]&&u.ops.pop(),u.trys.pop();continue}i=n.call(e,u)}catch(e){i=[6,e],r=0}finally{t=o=0}if(5&i[0])throw i[1];return{value:i[0]?i[1]:void 0,done:!0}}([i,c])}}},a=function(){function e(){}return e.prototype.download=function(e){var n=this;return new Promise(function(t,r){var o=function(e){console.error(e),r(e)};(window.requestFileSystem||window.webkitRequestFileSystem)(window.TEMPORARY,1572864e3,function(r){console.log("Opened file system: "+r.name),r.root.getFile(i()()+".pdf",{create:!0},function(r){fetch(e).then(function(e){var o=e.body.getReader(),i=0;return o.read().then(function e(a){return u(this,void 0,void 0,function(){return c(this,function(u){switch(u.label){case 0:return a.done?(console.log("Fetch complete"),t(r.toURL()),[2]):[4,n.writeOnFileEntry(r,a.value)];case 1:return u.sent(),i+=a.value.length,console.log("Just received "+a.value.length+" bytes"),console.log("Received",i,"bytes of data so far"),[2,o.read().then(e)]}})})})})},o)},o)})},e.prototype.writeOnFileEntry=function(e,n){return u(this,void 0,void 0,function(){return c(this,function(t){return[2,new Promise(function(t,r){e.createWriter(function(e){e.onwriteend=function(e){t(),console.log("Write completed.")},e.onerror=function(e){r(),console.log("Write failed: "+e.toString())},console.log("written so far = "+e.length),e.seek(e.length);var o=new Blob([n],{type:"application/octet-stream"});e.write(o)},function(e){throw console.error(e),new Error(e)})})]})})},e}();var l=function(e,n,t,r){return new(t||(t=Promise))(function(o,i){function u(e){try{a(r.next(e))}catch(e){i(e)}}function c(e){try{a(r.throw(e))}catch(e){i(e)}}function a(e){e.done?o(e.value):new t(function(n){n(e.value)}).then(u,c)}a((r=r.apply(e,n||[])).next())})},f=function(e,n){var t,r,o,i,u={label:0,sent:function(){if(1&o[0])throw o[1];return o[1]},trys:[],ops:[]};return i={next:c(0),throw:c(1),return:c(2)},"function"==typeof Symbol&&(i[Symbol.iterator]=function(){return this}),i;function c(i){return function(c){return function(i){if(t)throw new TypeError("Generator is already executing.");for(;u;)try{if(t=1,r&&(o=2&i[0]?r.return:i[0]?r.throw||((o=r.return)&&o.call(r),0):r.next)&&!(o=o.call(r,i[1])).done)return o;switch(r=0,o&&(i=[2&i[0],o.value]),i[0]){case 0:case 1:o=i;break;case 4:return u.label++,{value:i[1],done:!1};case 5:u.label++,r=i[1],i=[0];continue;case 7:i=u.ops.pop(),u.trys.pop();continue;default:if(!(o=(o=u.trys).length>0&&o[o.length-1])&&(6===i[0]||2===i[0])){u=0;continue}if(3===i[0]&&(!o||i[1]>o[0]&&i[1]<o[3])){u.label=i[1];break}if(6===i[0]&&u.label<o[1]){u.label=o[1],o=i;break}if(o&&u.label<o[2]){u.label=o[2],u.ops.push(i);break}o[2]&&u.ops.pop(),u.trys.pop();continue}i=n.call(e,u)}catch(e){i=[6,e],r=0}finally{t=o=0}if(5&i[0])throw i[1];return{value:i[0]?i[1]:void 0,done:!0}}([i,c])}}},s=document.getElementById("root");l(void 0,void 0,void 0,function(){var e,n,t,o,i;return f(this,function(u){switch(u.label){case 0:return u.trys.push([0,2,,3]),e=document.querySelector("#root a"),(n=document.createElement("div")).className="loading",n.innerHTML="Loading...",s.replaceChild(n,e),[4,(window.requestFileSystem||window.webkitRequestFileSystem?new a:new r).download("files/book.pdf")];case 1:return t=u.sent(),(o=document.createElement("a")).href=t,o.download="book.pdf",o.innerHTML="Download",s.replaceChild(o,n),[3,3];case 2:return i=u.sent(),console.error(i),[3,3];case 3:return[2]}})})}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL3V1aWQvdjEuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL3V1aWQvbGliL3JuZy1icm93c2VyLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy91dWlkL2xpYi9ieXRlc1RvVXVpZC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvZG93bmxvYWRlcnMvTWVtb3J5RG93bmxvYWRlci50cyIsIndlYnBhY2s6Ly8vLi9zcmMvZG93bmxvYWRlcnMvRmlsZVN5c3RlbURvd25sb2FkZXIudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2FwcC50cyIsIndlYnBhY2s6Ly8vLi9zcmMvZG93bmxvYWRlckZhY3RvcnkudHMiXSwibmFtZXMiOlsiaW5zdGFsbGVkTW9kdWxlcyIsIl9fd2VicGFja19yZXF1aXJlX18iLCJtb2R1bGVJZCIsImV4cG9ydHMiLCJtb2R1bGUiLCJpIiwibCIsIm1vZHVsZXMiLCJjYWxsIiwibSIsImMiLCJkIiwibmFtZSIsImdldHRlciIsIm8iLCJPYmplY3QiLCJkZWZpbmVQcm9wZXJ0eSIsImVudW1lcmFibGUiLCJnZXQiLCJyIiwiU3ltYm9sIiwidG9TdHJpbmdUYWciLCJ2YWx1ZSIsInQiLCJtb2RlIiwiX19lc01vZHVsZSIsIm5zIiwiY3JlYXRlIiwia2V5IiwiYmluZCIsIm4iLCJvYmplY3QiLCJwcm9wZXJ0eSIsInByb3RvdHlwZSIsImhhc093blByb3BlcnR5IiwicCIsInMiLCJfbm9kZUlkIiwiX2Nsb2Nrc2VxIiwicm5nIiwiYnl0ZXNUb1V1aWQiLCJfbGFzdE1TZWNzIiwiX2xhc3ROU2VjcyIsIm9wdGlvbnMiLCJidWYiLCJvZmZzZXQiLCJiIiwibm9kZSIsImNsb2Nrc2VxIiwidW5kZWZpbmVkIiwic2VlZEJ5dGVzIiwibXNlY3MiLCJEYXRlIiwiZ2V0VGltZSIsIm5zZWNzIiwiZHQiLCJFcnJvciIsInRsIiwidG1oIiwiZ2V0UmFuZG9tVmFsdWVzIiwiY3J5cHRvIiwid2luZG93IiwibXNDcnlwdG8iLCJybmRzOCIsIlVpbnQ4QXJyYXkiLCJybmRzIiwiQXJyYXkiLCJNYXRoIiwicmFuZG9tIiwiYnl0ZVRvSGV4IiwidG9TdHJpbmciLCJzdWJzdHIiLCJidGgiLCJqb2luIiwiTWVtb3J5RG93bmxvYWRlciIsImRvd25sb2FkIiwic3JjIiwiUHJvbWlzZSIsInJlc29sdmUiLCJmZXRjaCIsInRoZW4iLCJyZXNwb25zZSIsInJlYWRlciIsImJvZHkiLCJnZXRSZWFkZXIiLCJieXRlc1JlY2VpdmVkIiwiY29udGVudCIsInJlYWQiLCJwcm9jZXNzUmVzdWx0IiwicmVzdWx0IiwiZG9uZSIsInB1c2giLCJsZW5ndGgiLCJjb25zb2xlIiwibG9nIiwidHlwZWRBcnJheSIsInJlc3VsdENvbnN0cnVjdG9yIiwiYXJyYXlzIiwiX2kiLCJhcmd1bWVudHMiLCJ0b3RhbExlbmd0aCIsIl9hIiwiYXJyYXlzXzEiLCJhcnIiLCJfYiIsImFycmF5c18yIiwic2V0IiwiYXBwbHkiLCJjb25jYXQiLCJvYmplY3RVUkwiLCJVUkwiLCJjcmVhdGVPYmplY3RVUkwiLCJCbG9iIiwiYnVmZmVyIiwidHlwZSIsIkZpbGVTeXN0ZW1Eb3dubG9hZGVyIiwidGhhdCIsInRoaXMiLCJyZWplY3QiLCJlcnJvckhhbmRsZXIiLCJlcnIiLCJlcnJvciIsInJlcXVlc3RGaWxlU3lzdGVtIiwid2Via2l0UmVxdWVzdEZpbGVTeXN0ZW0iLCJURU1QT1JBUlkiLCJmaWxlU3lzdGVtIiwicm9vdCIsImdldEZpbGUiLCJ2MV9kZWZhdWx0IiwiZmlsZUVudHJ5IiwidG9VUkwiLCJ3cml0ZU9uRmlsZUVudHJ5Iiwic2VudCIsImRhdGEiLCJjcmVhdGVXcml0ZXIiLCJmaWxlV3JpdGVyIiwib253cml0ZWVuZCIsImUiLCJvbmVycm9yIiwic2VlayIsImJsb2IiLCJ3cml0ZSIsImRvY3VtZW50IiwiZ2V0RWxlbWVudEJ5SWQiLCJhcHBfYXdhaXRlciIsImFuY2hvciIsInF1ZXJ5U2VsZWN0b3IiLCJsb2FkaW5nIiwiY3JlYXRlRWxlbWVudCIsImNsYXNzTmFtZSIsImlubmVySFRNTCIsInJlcGxhY2VDaGlsZCIsImRvd25sb2FkZXJzX0ZpbGVTeXN0ZW1Eb3dubG9hZGVyIiwiZG93bmxvYWRlcnNfTWVtb3J5RG93bmxvYWRlciIsImRvd25sb2FkVVJMIiwiYnV0dG9uIiwiaHJlZiIsImVycl8xIl0sIm1hcHBpbmdzIjoiYUFDQSxJQUFBQSxFQUFBLEdBR0EsU0FBQUMsRUFBQUMsR0FHQSxHQUFBRixFQUFBRSxHQUNBLE9BQUFGLEVBQUFFLEdBQUFDLFFBR0EsSUFBQUMsRUFBQUosRUFBQUUsR0FBQSxDQUNBRyxFQUFBSCxFQUNBSSxHQUFBLEVBQ0FILFFBQUEsSUFVQSxPQU5BSSxFQUFBTCxHQUFBTSxLQUFBSixFQUFBRCxRQUFBQyxJQUFBRCxRQUFBRixHQUdBRyxFQUFBRSxHQUFBLEVBR0FGLEVBQUFELFFBS0FGLEVBQUFRLEVBQUFGLEVBR0FOLEVBQUFTLEVBQUFWLEVBR0FDLEVBQUFVLEVBQUEsU0FBQVIsRUFBQVMsRUFBQUMsR0FDQVosRUFBQWEsRUFBQVgsRUFBQVMsSUFDQUcsT0FBQUMsZUFBQWIsRUFBQVMsRUFBQSxDQUEwQ0ssWUFBQSxFQUFBQyxJQUFBTCxLQUsxQ1osRUFBQWtCLEVBQUEsU0FBQWhCLEdBQ0Esb0JBQUFpQixlQUFBQyxhQUNBTixPQUFBQyxlQUFBYixFQUFBaUIsT0FBQUMsWUFBQSxDQUF3REMsTUFBQSxXQUV4RFAsT0FBQUMsZUFBQWIsRUFBQSxjQUFpRG1CLE9BQUEsS0FRakRyQixFQUFBc0IsRUFBQSxTQUFBRCxFQUFBRSxHQUVBLEdBREEsRUFBQUEsSUFBQUYsRUFBQXJCLEVBQUFxQixJQUNBLEVBQUFFLEVBQUEsT0FBQUYsRUFDQSxLQUFBRSxHQUFBLGlCQUFBRixRQUFBRyxXQUFBLE9BQUFILEVBQ0EsSUFBQUksRUFBQVgsT0FBQVksT0FBQSxNQUdBLEdBRkExQixFQUFBa0IsRUFBQU8sR0FDQVgsT0FBQUMsZUFBQVUsRUFBQSxXQUF5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QUFTSCxTQUFTSSxjQUFjLFlBQ2hDQyxFQUFVTCxTQUFTTSxjQUFjLFFBQy9CQyxVQUFZLFVBQ3BCRixFQUFRRyxVQUFZLGFBQ3BCeEIsRUFBS3lCLGFBQWFKLEVBQVNGLEdBR1AsSUNMS3BGLE9BQWU2RCxtQkFDdkM3RCxPQUFlOEQsd0JBRVQsSUFBSTZCLEVBRUosSUFBSUMsR0RBMEI5RSxTQUFTLGlDQUF4QytFLEVBQWNyRCxFQUFBK0IsUUFDZHVCLEVBQVNiLFNBQVNNLGNBQWMsTUFDL0JRLEtBQU9GLEVBQ2RDLEVBQU9oRixTQUFXLFdBQ2xCZ0YsRUFBT0wsVUFBWSxXQUVuQnhCLEVBQUt5QixhQUFhSSxFQUFRUixrQ0FFMUJ0RCxRQUFRNEIsTUFBTW9DIiwiZmlsZSI6ImFwcC5qcyIsInNvdXJjZXNDb250ZW50IjpbIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGdldHRlciB9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yID0gZnVuY3Rpb24oZXhwb3J0cykge1xuIFx0XHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcbiBcdFx0fVxuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuIFx0fTtcblxuIFx0Ly8gY3JlYXRlIGEgZmFrZSBuYW1lc3BhY2Ugb2JqZWN0XG4gXHQvLyBtb2RlICYgMTogdmFsdWUgaXMgYSBtb2R1bGUgaWQsIHJlcXVpcmUgaXRcbiBcdC8vIG1vZGUgJiAyOiBtZXJnZSBhbGwgcHJvcGVydGllcyBvZiB2YWx1ZSBpbnRvIHRoZSBuc1xuIFx0Ly8gbW9kZSAmIDQ6IHJldHVybiB2YWx1ZSB3aGVuIGFscmVhZHkgbnMgb2JqZWN0XG4gXHQvLyBtb2RlICYgOHwxOiBiZWhhdmUgbGlrZSByZXF1aXJlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnQgPSBmdW5jdGlvbih2YWx1ZSwgbW9kZSkge1xuIFx0XHRpZihtb2RlICYgMSkgdmFsdWUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKHZhbHVlKTtcbiBcdFx0aWYobW9kZSAmIDgpIHJldHVybiB2YWx1ZTtcbiBcdFx0aWYoKG1vZGUgJiA0KSAmJiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnICYmIHZhbHVlICYmIHZhbHVlLl9fZXNNb2R1bGUpIHJldHVybiB2YWx1ZTtcbiBcdFx0dmFyIG5zID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yKG5zKTtcbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG5zLCAnZGVmYXVsdCcsIHsgZW51bWVyYWJsZTogdHJ1ZSwgdmFsdWU6IHZhbHVlIH0pO1xuIFx0XHRpZihtb2RlICYgMiAmJiB0eXBlb2YgdmFsdWUgIT0gJ3N0cmluZycpIGZvcih2YXIga2V5IGluIHZhbHVlKSBfX3dlYnBhY2tfcmVxdWlyZV9fLmQobnMsIGtleSwgZnVuY3Rpb24oa2V5KSB7IHJldHVybiB2YWx1ZVtrZXldOyB9LmJpbmQobnVsbCwga2V5KSk7XG4gXHRcdHJldHVybiBucztcbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSAzKTtcbiIsInZhciBybmcgPSByZXF1aXJlKCcuL2xpYi9ybmcnKTtcbnZhciBieXRlc1RvVXVpZCA9IHJlcXVpcmUoJy4vbGliL2J5dGVzVG9VdWlkJyk7XG5cbi8vICoqYHYxKClgIC0gR2VuZXJhdGUgdGltZS1iYXNlZCBVVUlEKipcbi8vXG4vLyBJbnNwaXJlZCBieSBodHRwczovL2dpdGh1Yi5jb20vTGlvc0svVVVJRC5qc1xuLy8gYW5kIGh0dHA6Ly9kb2NzLnB5dGhvbi5vcmcvbGlicmFyeS91dWlkLmh0bWxcblxudmFyIF9ub2RlSWQ7XG52YXIgX2Nsb2Nrc2VxO1xuXG4vLyBQcmV2aW91cyB1dWlkIGNyZWF0aW9uIHRpbWVcbnZhciBfbGFzdE1TZWNzID0gMDtcbnZhciBfbGFzdE5TZWNzID0gMDtcblxuLy8gU2VlIGh0dHBzOi8vZ2l0aHViLmNvbS9icm9vZmEvbm9kZS11dWlkIGZvciBBUEkgZGV0YWlsc1xuZnVuY3Rpb24gdjEob3B0aW9ucywgYnVmLCBvZmZzZXQpIHtcbiAgdmFyIGkgPSBidWYgJiYgb2Zmc2V0IHx8IDA7XG4gIHZhciBiID0gYnVmIHx8IFtdO1xuXG4gIG9wdGlvbnMgPSBvcHRpb25zIHx8IHt9O1xuICB2YXIgbm9kZSA9IG9wdGlvbnMubm9kZSB8fCBfbm9kZUlkO1xuICB2YXIgY2xvY2tzZXEgPSBvcHRpb25zLmNsb2Nrc2VxICE9PSB1bmRlZmluZWQgPyBvcHRpb25zLmNsb2Nrc2VxIDogX2Nsb2Nrc2VxO1xuXG4gIC8vIG5vZGUgYW5kIGNsb2Nrc2VxIG5lZWQgdG8gYmUgaW5pdGlhbGl6ZWQgdG8gcmFuZG9tIHZhbHVlcyBpZiB0aGV5J3JlIG5vdFxuICAvLyBzcGVjaWZpZWQuICBXZSBkbyB0aGlzIGxhemlseSB0byBtaW5pbWl6ZSBpc3N1ZXMgcmVsYXRlZCB0byBpbnN1ZmZpY2llbnRcbiAgLy8gc3lzdGVtIGVudHJvcHkuICBTZWUgIzE4OVxuICBpZiAobm9kZSA9PSBudWxsIHx8IGNsb2Nrc2VxID09IG51bGwpIHtcbiAgICB2YXIgc2VlZEJ5dGVzID0gcm5nKCk7XG4gICAgaWYgKG5vZGUgPT0gbnVsbCkge1xuICAgICAgLy8gUGVyIDQuNSwgY3JlYXRlIGFuZCA0OC1iaXQgbm9kZSBpZCwgKDQ3IHJhbmRvbSBiaXRzICsgbXVsdGljYXN0IGJpdCA9IDEpXG4gICAgICBub2RlID0gX25vZGVJZCA9IFtcbiAgICAgICAgc2VlZEJ5dGVzWzBdIHwgMHgwMSxcbiAgICAgICAgc2VlZEJ5dGVzWzFdLCBzZWVkQnl0ZXNbMl0sIHNlZWRCeXRlc1szXSwgc2VlZEJ5dGVzWzRdLCBzZWVkQnl0ZXNbNV1cbiAgICAgIF07XG4gICAgfVxuICAgIGlmIChjbG9ja3NlcSA9PSBudWxsKSB7XG4gICAgICAvLyBQZXIgNC4yLjIsIHJhbmRvbWl6ZSAoMTQgYml0KSBjbG9ja3NlcVxuICAgICAgY2xvY2tzZXEgPSBfY2xvY2tzZXEgPSAoc2VlZEJ5dGVzWzZdIDw8IDggfCBzZWVkQnl0ZXNbN10pICYgMHgzZmZmO1xuICAgIH1cbiAgfVxuXG4gIC8vIFVVSUQgdGltZXN0YW1wcyBhcmUgMTAwIG5hbm8tc2Vjb25kIHVuaXRzIHNpbmNlIHRoZSBHcmVnb3JpYW4gZXBvY2gsXG4gIC8vICgxNTgyLTEwLTE1IDAwOjAwKS4gIEpTTnVtYmVycyBhcmVuJ3QgcHJlY2lzZSBlbm91Z2ggZm9yIHRoaXMsIHNvXG4gIC8vIHRpbWUgaXMgaGFuZGxlZCBpbnRlcm5hbGx5IGFzICdtc2VjcycgKGludGVnZXIgbWlsbGlzZWNvbmRzKSBhbmQgJ25zZWNzJ1xuICAvLyAoMTAwLW5hbm9zZWNvbmRzIG9mZnNldCBmcm9tIG1zZWNzKSBzaW5jZSB1bml4IGVwb2NoLCAxOTcwLTAxLTAxIDAwOjAwLlxuICB2YXIgbXNlY3MgPSBvcHRpb25zLm1zZWNzICE9PSB1bmRlZmluZWQgPyBvcHRpb25zLm1zZWNzIDogbmV3IERhdGUoKS5nZXRUaW1lKCk7XG5cbiAgLy8gUGVyIDQuMi4xLjIsIHVzZSBjb3VudCBvZiB1dWlkJ3MgZ2VuZXJhdGVkIGR1cmluZyB0aGUgY3VycmVudCBjbG9ja1xuICAvLyBjeWNsZSB0byBzaW11bGF0ZSBoaWdoZXIgcmVzb2x1dGlvbiBjbG9ja1xuICB2YXIgbnNlY3MgPSBvcHRpb25zLm5zZWNzICE9PSB1bmRlZmluZWQgPyBvcHRpb25zLm5zZWNzIDogX2xhc3ROU2VjcyArIDE7XG5cbiAgLy8gVGltZSBzaW5jZSBsYXN0IHV1aWQgY3JlYXRpb24gKGluIG1zZWNzKVxuICB2YXIgZHQgPSAobXNlY3MgLSBfbGFzdE1TZWNzKSArIChuc2VjcyAtIF9sYXN0TlNlY3MpLzEwMDAwO1xuXG4gIC8vIFBlciA0LjIuMS4yLCBCdW1wIGNsb2Nrc2VxIG9uIGNsb2NrIHJlZ3Jlc3Npb25cbiAgaWYgKGR0IDwgMCAmJiBvcHRpb25zLmNsb2Nrc2VxID09PSB1bmRlZmluZWQpIHtcbiAgICBjbG9ja3NlcSA9IGNsb2Nrc2VxICsgMSAmIDB4M2ZmZjtcbiAgfVxuXG4gIC8vIFJlc2V0IG5zZWNzIGlmIGNsb2NrIHJlZ3Jlc3NlcyAobmV3IGNsb2Nrc2VxKSBvciB3ZSd2ZSBtb3ZlZCBvbnRvIGEgbmV3XG4gIC8vIHRpbWUgaW50ZXJ2YWxcbiAgaWYgKChkdCA8IDAgfHwgbXNlY3MgPiBfbGFzdE1TZWNzKSAmJiBvcHRpb25zLm5zZWNzID09PSB1bmRlZmluZWQpIHtcbiAgICBuc2VjcyA9IDA7XG4gIH1cblxuICAvLyBQZXIgNC4yLjEuMiBUaHJvdyBlcnJvciBpZiB0b28gbWFueSB1dWlkcyBhcmUgcmVxdWVzdGVkXG4gIGlmIChuc2VjcyA+PSAxMDAwMCkge1xuICAgIHRocm93IG5ldyBFcnJvcigndXVpZC52MSgpOiBDYW5cXCd0IGNyZWF0ZSBtb3JlIHRoYW4gMTBNIHV1aWRzL3NlYycpO1xuICB9XG5cbiAgX2xhc3RNU2VjcyA9IG1zZWNzO1xuICBfbGFzdE5TZWNzID0gbnNlY3M7XG4gIF9jbG9ja3NlcSA9IGNsb2Nrc2VxO1xuXG4gIC8vIFBlciA0LjEuNCAtIENvbnZlcnQgZnJvbSB1bml4IGVwb2NoIHRvIEdyZWdvcmlhbiBlcG9jaFxuICBtc2VjcyArPSAxMjIxOTI5MjgwMDAwMDtcblxuICAvLyBgdGltZV9sb3dgXG4gIHZhciB0bCA9ICgobXNlY3MgJiAweGZmZmZmZmYpICogMTAwMDAgKyBuc2VjcykgJSAweDEwMDAwMDAwMDtcbiAgYltpKytdID0gdGwgPj4+IDI0ICYgMHhmZjtcbiAgYltpKytdID0gdGwgPj4+IDE2ICYgMHhmZjtcbiAgYltpKytdID0gdGwgPj4+IDggJiAweGZmO1xuICBiW2krK10gPSB0bCAmIDB4ZmY7XG5cbiAgLy8gYHRpbWVfbWlkYFxuICB2YXIgdG1oID0gKG1zZWNzIC8gMHgxMDAwMDAwMDAgKiAxMDAwMCkgJiAweGZmZmZmZmY7XG4gIGJbaSsrXSA9IHRtaCA+Pj4gOCAmIDB4ZmY7XG4gIGJbaSsrXSA9IHRtaCAmIDB4ZmY7XG5cbiAgLy8gYHRpbWVfaGlnaF9hbmRfdmVyc2lvbmBcbiAgYltpKytdID0gdG1oID4+PiAyNCAmIDB4ZiB8IDB4MTA7IC8vIGluY2x1ZGUgdmVyc2lvblxuICBiW2krK10gPSB0bWggPj4+IDE2ICYgMHhmZjtcblxuICAvLyBgY2xvY2tfc2VxX2hpX2FuZF9yZXNlcnZlZGAgKFBlciA0LjIuMiAtIGluY2x1ZGUgdmFyaWFudClcbiAgYltpKytdID0gY2xvY2tzZXEgPj4+IDggfCAweDgwO1xuXG4gIC8vIGBjbG9ja19zZXFfbG93YFxuICBiW2krK10gPSBjbG9ja3NlcSAmIDB4ZmY7XG5cbiAgLy8gYG5vZGVgXG4gIGZvciAodmFyIG4gPSAwOyBuIDwgNjsgKytuKSB7XG4gICAgYltpICsgbl0gPSBub2RlW25dO1xuICB9XG5cbiAgcmV0dXJuIGJ1ZiA/IGJ1ZiA6IGJ5dGVzVG9VdWlkKGIpO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHYxO1xuIiwiLy8gVW5pcXVlIElEIGNyZWF0aW9uIHJlcXVpcmVzIGEgaGlnaCBxdWFsaXR5IHJhbmRvbSAjIGdlbmVyYXRvci4gIEluIHRoZVxuLy8gYnJvd3NlciB0aGlzIGlzIGEgbGl0dGxlIGNvbXBsaWNhdGVkIGR1ZSB0byB1bmtub3duIHF1YWxpdHkgb2YgTWF0aC5yYW5kb20oKVxuLy8gYW5kIGluY29uc2lzdGVudCBzdXBwb3J0IGZvciB0aGUgYGNyeXB0b2AgQVBJLiAgV2UgZG8gdGhlIGJlc3Qgd2UgY2FuIHZpYVxuLy8gZmVhdHVyZS1kZXRlY3Rpb25cblxuLy8gZ2V0UmFuZG9tVmFsdWVzIG5lZWRzIHRvIGJlIGludm9rZWQgaW4gYSBjb250ZXh0IHdoZXJlIFwidGhpc1wiIGlzIGEgQ3J5cHRvXG4vLyBpbXBsZW1lbnRhdGlvbi4gQWxzbywgZmluZCB0aGUgY29tcGxldGUgaW1wbGVtZW50YXRpb24gb2YgY3J5cHRvIG9uIElFMTEuXG52YXIgZ2V0UmFuZG9tVmFsdWVzID0gKHR5cGVvZihjcnlwdG8pICE9ICd1bmRlZmluZWQnICYmIGNyeXB0by5nZXRSYW5kb21WYWx1ZXMgJiYgY3J5cHRvLmdldFJhbmRvbVZhbHVlcy5iaW5kKGNyeXB0bykpIHx8XG4gICAgICAgICAgICAgICAgICAgICAgKHR5cGVvZihtc0NyeXB0bykgIT0gJ3VuZGVmaW5lZCcgJiYgdHlwZW9mIHdpbmRvdy5tc0NyeXB0by5nZXRSYW5kb21WYWx1ZXMgPT0gJ2Z1bmN0aW9uJyAmJiBtc0NyeXB0by5nZXRSYW5kb21WYWx1ZXMuYmluZChtc0NyeXB0bykpO1xuXG5pZiAoZ2V0UmFuZG9tVmFsdWVzKSB7XG4gIC8vIFdIQVRXRyBjcnlwdG8gUk5HIC0gaHR0cDovL3dpa2kud2hhdHdnLm9yZy93aWtpL0NyeXB0b1xuICB2YXIgcm5kczggPSBuZXcgVWludDhBcnJheSgxNik7IC8vIGVzbGludC1kaXNhYmxlLWxpbmUgbm8tdW5kZWZcblxuICBtb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIHdoYXR3Z1JORygpIHtcbiAgICBnZXRSYW5kb21WYWx1ZXMocm5kczgpO1xuICAgIHJldHVybiBybmRzODtcbiAgfTtcbn0gZWxzZSB7XG4gIC8vIE1hdGgucmFuZG9tKCktYmFzZWQgKFJORylcbiAgLy9cbiAgLy8gSWYgYWxsIGVsc2UgZmFpbHMsIHVzZSBNYXRoLnJhbmRvbSgpLiAgSXQncyBmYXN0LCBidXQgaXMgb2YgdW5zcGVjaWZpZWRcbiAgLy8gcXVhbGl0eS5cbiAgdmFyIHJuZHMgPSBuZXcgQXJyYXkoMTYpO1xuXG4gIG1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gbWF0aFJORygpIHtcbiAgICBmb3IgKHZhciBpID0gMCwgcjsgaSA8IDE2OyBpKyspIHtcbiAgICAgIGlmICgoaSAmIDB4MDMpID09PSAwKSByID0gTWF0aC5yYW5kb20oKSAqIDB4MTAwMDAwMDAwO1xuICAgICAgcm5kc1tpXSA9IHIgPj4+ICgoaSAmIDB4MDMpIDw8IDMpICYgMHhmZjtcbiAgICB9XG5cbiAgICByZXR1cm4gcm5kcztcbiAgfTtcbn1cbiIsIi8qKlxuICogQ29udmVydCBhcnJheSBvZiAxNiBieXRlIHZhbHVlcyB0byBVVUlEIHN0cmluZyBmb3JtYXQgb2YgdGhlIGZvcm06XG4gKiBYWFhYWFhYWC1YWFhYLVhYWFgtWFhYWC1YWFhYWFhYWFhYWFhcbiAqL1xudmFyIGJ5dGVUb0hleCA9IFtdO1xuZm9yICh2YXIgaSA9IDA7IGkgPCAyNTY7ICsraSkge1xuICBieXRlVG9IZXhbaV0gPSAoaSArIDB4MTAwKS50b1N0cmluZygxNikuc3Vic3RyKDEpO1xufVxuXG5mdW5jdGlvbiBieXRlc1RvVXVpZChidWYsIG9mZnNldCkge1xuICB2YXIgaSA9IG9mZnNldCB8fCAwO1xuICB2YXIgYnRoID0gYnl0ZVRvSGV4O1xuICAvLyBqb2luIHVzZWQgdG8gZml4IG1lbW9yeSBpc3N1ZSBjYXVzZWQgYnkgY29uY2F0ZW5hdGlvbjogaHR0cHM6Ly9idWdzLmNocm9taXVtLm9yZy9wL3Y4L2lzc3Vlcy9kZXRhaWw/aWQ9MzE3NSNjNFxuICByZXR1cm4gKFtidGhbYnVmW2krK11dLCBidGhbYnVmW2krK11dLCBcblx0YnRoW2J1ZltpKytdXSwgYnRoW2J1ZltpKytdXSwgJy0nLFxuXHRidGhbYnVmW2krK11dLCBidGhbYnVmW2krK11dLCAnLScsXG5cdGJ0aFtidWZbaSsrXV0sIGJ0aFtidWZbaSsrXV0sICctJyxcblx0YnRoW2J1ZltpKytdXSwgYnRoW2J1ZltpKytdXSwgJy0nLFxuXHRidGhbYnVmW2krK11dLCBidGhbYnVmW2krK11dLFxuXHRidGhbYnVmW2krK11dLCBidGhbYnVmW2krK11dLFxuXHRidGhbYnVmW2krK11dLCBidGhbYnVmW2krK11dXSkuam9pbignJyk7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gYnl0ZXNUb1V1aWQ7XG4iLCJpbXBvcnQgeyBEb3dubG9hZGVyIH0gZnJvbSBcIi4vRG93bmxvYWRlclwiO1xuXG5mdW5jdGlvbiBjb25jYXRlbmF0ZShyZXN1bHRDb25zdHJ1Y3RvcjogYW55LCAuLi5hcnJheXM6IGFueSkge1xuICBsZXQgdG90YWxMZW5ndGggPSAwO1xuICBmb3IgKGxldCBhcnIgb2YgYXJyYXlzKSB7XG4gICAgICB0b3RhbExlbmd0aCArPSBhcnIubGVuZ3RoO1xuICB9XG4gIGxldCByZXN1bHQgPSBuZXcgcmVzdWx0Q29uc3RydWN0b3IodG90YWxMZW5ndGgpO1xuICBsZXQgb2Zmc2V0ID0gMDtcbiAgZm9yIChsZXQgYXJyIG9mIGFycmF5cykge1xuICAgICAgcmVzdWx0LnNldChhcnIsIG9mZnNldCk7XG4gICAgICBvZmZzZXQgKz0gYXJyLmxlbmd0aDtcbiAgfVxuICByZXR1cm4gcmVzdWx0O1xufVxuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBNZW1vcnlEb3dubG9hZGVyIGltcGxlbWVudHMgRG93bmxvYWRlciB7XG4gIGRvd25sb2FkKHNyYzogc3RyaW5nKTogUHJvbWlzZTxzdHJpbmc+IHtcbiAgICByZXR1cm4gbmV3IFByb21pc2UoKHJlc29sdmUpID0+IHtcbiAgICAgIGZldGNoKHNyYykudGhlbihyZXNwb25zZSA9PiB7XG4gICAgICAgIC8vIHJlc3BvbnNlLmJvZHkgaXMgYSByZWFkYWJsZSBzdHJlYW0uXG4gICAgICAgIC8vIENhbGxpbmcgZ2V0UmVhZGVyKCkgZ2l2ZXMgdXMgZXhjbHVzaXZlIGFjY2VzcyB0b1xuICAgICAgICAvLyB0aGUgc3RyZWFtJ3MgY29udGVudFxuICAgICAgICB2YXIgcmVhZGVyID0gcmVzcG9uc2UuYm9keSEhLmdldFJlYWRlcigpO1xuICAgICAgICB2YXIgYnl0ZXNSZWNlaXZlZCA9IDA7XG4gICAgICAgIGxldCBjb250ZW50OiBhbnkgPSBbXTtcblxuICAgICAgICAvLyByZWFkKCkgcmV0dXJucyBhIHByb21pc2UgdGhhdCByZXNvbHZlc1xuICAgICAgICAvLyB3aGVuIGEgdmFsdWUgaGFzIGJlZW4gcmVjZWl2ZWRcbiAgICAgICAgcmV0dXJuIHJlYWRlci5yZWFkKCkudGhlbihmdW5jdGlvbiBwcm9jZXNzUmVzdWx0KHJlc3VsdCk6IGFueSB7XG4gICAgICAgICAgLy8gUmVzdWx0IG9iamVjdHMgY29udGFpbiB0d28gcHJvcGVydGllczpcbiAgICAgICAgICAvLyBkb25lICAtIHRydWUgaWYgdGhlIHN0cmVhbSBoYXMgYWxyZWFkeSBnaXZlblxuICAgICAgICAgIC8vICAgICAgICAgeW91IGFsbCBpdHMgZGF0YS5cbiAgICAgICAgICAvLyB2YWx1ZSAtIHNvbWUgZGF0YS4gQWx3YXlzIHVuZGVmaW5lZCB3aGVuXG4gICAgICAgICAgLy8gICAgICAgICBkb25lIGlzIHRydWUuXG4gICAgICAgICAgaWYgKHJlc3VsdC5kb25lKSB7XG4gICAgICAgICAgICBjb25zb2xlLmxvZyhcIkZldGNoIGNvbXBsZXRlXCIpO1xuICAgICAgICAgICAgY29uc3QgdHlwZWRBcnJheSA9IGNvbmNhdGVuYXRlKFVpbnQ4QXJyYXksIC4uLmNvbnRlbnQpO1xuICAgICAgICAgICAgY29uc3Qgb2JqZWN0VVJMID0gVVJMLmNyZWF0ZU9iamVjdFVSTChcbiAgICAgICAgICAgICAgbmV3IEJsb2IoW3R5cGVkQXJyYXkuYnVmZmVyXSwge3R5cGU6ICdhcHBsaWNhdGlvbi9vY3RldC1zdHJlYW0nfSlcbiAgICAgICAgICAgICk7XG4gICAgICAgICAgICByZXNvbHZlKG9iamVjdFVSTCk7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgY29udGVudC5wdXNoKHJlc3VsdC52YWx1ZSk7XG4gICAgICAgICAgLy8gcmVzdWx0LnZhbHVlIGZvciBmZXRjaCBzdHJlYW1zIGlzIGEgVWludDhBcnJheVxuICAgICAgICAgIGJ5dGVzUmVjZWl2ZWQgKz0gcmVzdWx0LnZhbHVlLmxlbmd0aDtcbiAgICAgICAgICBjb25zb2xlLmxvZygnUmVjZWl2ZWQnLCBieXRlc1JlY2VpdmVkLCAnYnl0ZXMgb2YgZGF0YSBzbyBmYXInKTtcblxuICAgICAgICAgIC8vIFJlYWQgc29tZSBtb3JlLCBhbmQgY2FsbCB0aGlzIGZ1bmN0aW9uIGFnYWluXG4gICAgICAgICAgcmV0dXJuIHJlYWRlci5yZWFkKCkudGhlbihwcm9jZXNzUmVzdWx0KTtcbiAgICAgICAgfSk7XG4gICAgICB9KTtcbiAgICB9KTtcbiAgfVxufSIsImltcG9ydCB1dWlkdjEgZnJvbSAndXVpZC92MSc7XG5pbXBvcnQgeyBEb3dubG9hZGVyIH0gZnJvbSBcIi4vRG93bmxvYWRlclwiO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBGaWxlU3lzdGVtRG93bmxvYWRlciBpbXBsZW1lbnRzIERvd25sb2FkZXIge1xuICBkb3dubG9hZChzcmM6IHN0cmluZyk6IFByb21pc2U8c3RyaW5nPiB7XG4gICAgY29uc3QgdGhhdCA9IHRoaXM7XG4gICAgcmV0dXJuIG5ldyBQcm9taXNlKChyZXNvbHZlLCByZWplY3QpID0+IHtcbiAgICAgIGNvbnN0IGVycm9ySGFuZGxlciA9IChlcnI6IGFueSkgPT4ge1xuICAgICAgICBjb25zb2xlLmVycm9yKGVycik7XG4gICAgICAgIHJlamVjdChlcnIpO1xuICAgICAgfTtcblxuICAgICAgY29uc3QgcmVxdWVzdEZpbGVTeXN0ZW0gPSAod2luZG93IGFzIGFueSkucmVxdWVzdEZpbGVTeXN0ZW0gfHxcbiAgICAgICAgKHdpbmRvdyBhcyBhbnkpLndlYmtpdFJlcXVlc3RGaWxlU3lzdGVtO1xuICAgICAgZnVuY3Rpb24gb25Jbml0RnMoZmlsZVN5c3RlbTogYW55KSB7XG4gICAgICAgIGNvbnNvbGUubG9nKCdPcGVuZWQgZmlsZSBzeXN0ZW06ICcgKyBmaWxlU3lzdGVtLm5hbWUpO1xuICAgICAgICBmaWxlU3lzdGVtLnJvb3QuZ2V0RmlsZShgJHt1dWlkdjEoKX0ucGRmYCwge2NyZWF0ZTogdHJ1ZX0sIGZ1bmN0aW9uKGZpbGVFbnRyeTogYW55KSB7XG4gICAgICAgICAgZmV0Y2goc3JjKS50aGVuKHJlc3BvbnNlID0+IHtcbiAgICAgICAgICAgIC8vIHJlc3BvbnNlLmJvZHkgaXMgYSByZWFkYWJsZSBzdHJlYW0uXG4gICAgICAgICAgICAvLyBDYWxsaW5nIGdldFJlYWRlcigpIGdpdmVzIHVzIGV4Y2x1c2l2ZSBhY2Nlc3MgdG9cbiAgICAgICAgICAgIC8vIHRoZSBzdHJlYW0ncyBjb250ZW50XG4gICAgICAgICAgICB2YXIgcmVhZGVyID0gcmVzcG9uc2UuYm9keSEhLmdldFJlYWRlcigpO1xuICAgICAgICAgICAgdmFyIGJ5dGVzUmVjZWl2ZWQgPSAwO1xuXG4gICAgICAgICAgICAvLyByZWFkKCkgcmV0dXJucyBhIHByb21pc2UgdGhhdCByZXNvbHZlc1xuICAgICAgICAgICAgLy8gd2hlbiBhIHZhbHVlIGhhcyBiZWVuIHJlY2VpdmVkXG4gICAgICAgICAgICByZXR1cm4gcmVhZGVyLnJlYWQoKS50aGVuKGFzeW5jIGZ1bmN0aW9uIHByb2Nlc3NSZXN1bHQocmVzdWx0KTogUHJvbWlzZTxhbnk+IHtcbiAgICAgICAgICAgICAgLy8gUmVzdWx0IG9iamVjdHMgY29udGFpbiB0d28gcHJvcGVydGllczpcbiAgICAgICAgICAgICAgLy8gZG9uZSAgLSB0cnVlIGlmIHRoZSBzdHJlYW0gaGFzIGFscmVhZHkgZ2l2ZW5cbiAgICAgICAgICAgICAgLy8gICAgICAgICB5b3UgYWxsIGl0cyBkYXRhLlxuICAgICAgICAgICAgICAvLyB2YWx1ZSAtIHNvbWUgZGF0YS4gQWx3YXlzIHVuZGVmaW5lZCB3aGVuXG4gICAgICAgICAgICAgIC8vICAgICAgICAgZG9uZSBpcyB0cnVlLlxuICAgICAgICAgICAgICBpZiAocmVzdWx0LmRvbmUpIHtcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhcIkZldGNoIGNvbXBsZXRlXCIpO1xuICAgICAgICAgICAgICAgIHJlc29sdmUoZmlsZUVudHJ5LnRvVVJMKCkpO1xuICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgIGF3YWl0IHRoYXQud3JpdGVPbkZpbGVFbnRyeShmaWxlRW50cnksIHJlc3VsdC52YWx1ZSk7XG4gICAgICAgICAgICAgIGJ5dGVzUmVjZWl2ZWQgKz0gcmVzdWx0LnZhbHVlLmxlbmd0aDtcbiAgICAgICAgICAgICAgY29uc29sZS5sb2coYEp1c3QgcmVjZWl2ZWQgJHtyZXN1bHQudmFsdWUubGVuZ3RofSBieXRlc2ApO1xuICAgICAgICAgICAgICBjb25zb2xlLmxvZygnUmVjZWl2ZWQnLCBieXRlc1JlY2VpdmVkLCAnYnl0ZXMgb2YgZGF0YSBzbyBmYXInKTtcblxuICAgICAgICAgICAgICAvLyBSZWFkIHNvbWUgbW9yZSwgYW5kIGNhbGwgdGhpcyBmdW5jdGlvbiBhZ2FpblxuICAgICAgICAgICAgICByZXR1cm4gcmVhZGVyLnJlYWQoKS50aGVuKHByb2Nlc3NSZXN1bHQpO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgfSk7XG4gICAgICAgIH0sIGVycm9ySGFuZGxlcik7XG4gICAgICB9XG5cbiAgICAgIHJlcXVlc3RGaWxlU3lzdGVtKFxuICAgICAgICAod2luZG93IGFzIGFueSkuVEVNUE9SQVJZLFxuICAgICAgICA1KjMwMCoxMDI0KjEwMjQgLyozMDBNQiovLFxuICAgICAgICBvbkluaXRGcyxcbiAgICAgICAgZXJyb3JIYW5kbGVyXG4gICAgICApO1xuICAgIH0pO1xuICB9XG5cbiAgcHJpdmF0ZSBhc3luYyB3cml0ZU9uRmlsZUVudHJ5KGZpbGVFbnRyeTogYW55LCBkYXRhOiBVaW50OEFycmF5KSB7XG4gICAgcmV0dXJuIG5ldyBQcm9taXNlKChyZXNvbHZlLCByZWplY3QpID0+IHtcbiAgICAgIGZpbGVFbnRyeS5jcmVhdGVXcml0ZXIoZnVuY3Rpb24oZmlsZVdyaXRlcjogYW55KSB7XG4gICAgICAgIGZpbGVXcml0ZXIub253cml0ZWVuZCA9IGZ1bmN0aW9uKGU6IEV2ZW50KSB7XG4gICAgICAgICAgcmVzb2x2ZSgpO1xuICAgICAgICAgIGNvbnNvbGUubG9nKCdXcml0ZSBjb21wbGV0ZWQuJyk7XG4gICAgICAgIH07XG5cbiAgICAgICAgZmlsZVdyaXRlci5vbmVycm9yID0gZnVuY3Rpb24oZTogRXZlbnQpIHtcbiAgICAgICAgICByZWplY3QoKTtcbiAgICAgICAgICBjb25zb2xlLmxvZygnV3JpdGUgZmFpbGVkOiAnICsgZS50b1N0cmluZygpKTtcbiAgICAgICAgfTtcbiAgICAgICAgY29uc29sZS5sb2coYHdyaXR0ZW4gc28gZmFyID0gJHtmaWxlV3JpdGVyLmxlbmd0aH1gKTtcbiAgICAgICAgZmlsZVdyaXRlci5zZWVrKGZpbGVXcml0ZXIubGVuZ3RoKTtcblxuICAgICAgICAvLyBDcmVhdGUgYSBuZXcgQmxvYiBhbmQgd3JpdGUgaXQuXG4gICAgICAgIGNvbnN0IGJsb2IgPSBuZXcgQmxvYihbZGF0YV0sIHt0eXBlOiAnYXBwbGljYXRpb24vb2N0ZXQtc3RyZWFtJ30pO1xuXG4gICAgICAgIGZpbGVXcml0ZXIud3JpdGUoYmxvYik7XG4gICAgICB9LCAoZXJyOiBhbnkpID0+IHtcbiAgICAgICAgY29uc29sZS5lcnJvcihlcnIpO1xuICAgICAgICB0aHJvdyBuZXcgRXJyb3IoZXJyKTtcbiAgICAgIH0pO1xuICAgIH0pO1xuICB9XG59IiwiaW1wb3J0IGNyZWF0ZURvd25sb2FkZXIgZnJvbSAnLi9kb3dubG9hZGVyRmFjdG9yeSc7XG5cbmNvbnN0IHJvb3QgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgncm9vdCcpO1xuXG5jb25zdCBzdGFydEFwcCA9IGFzeW5jICgpID0+IHtcbiAgdHJ5IHtcbiAgICBjb25zdCBhbmNob3IgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjcm9vdCBhJyk7XG4gICAgY29uc3QgbG9hZGluZyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIGxvYWRpbmcuY2xhc3NOYW1lID0gJ2xvYWRpbmcnO1xuICAgIGxvYWRpbmcuaW5uZXJIVE1MID0gXCJMb2FkaW5nLi4uXCI7XG4gICAgcm9vdC5yZXBsYWNlQ2hpbGQobG9hZGluZywgYW5jaG9yKTtcblxuICAgIGNvbnN0IGRvd25sb2FkZXIgPSBjcmVhdGVEb3dubG9hZGVyKCk7XG4gICAgY29uc3QgZG93bmxvYWRVUkwgPSBhd2FpdCBkb3dubG9hZGVyLmRvd25sb2FkKCdmaWxlcy9ib29rLnBkZicpO1xuICAgIGNvbnN0IGJ1dHRvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2EnKTtcbiAgICBidXR0b24uaHJlZiA9IGRvd25sb2FkVVJMO1xuICAgIGJ1dHRvbi5kb3dubG9hZCA9IFwiYm9vay5wZGZcIjtcbiAgICBidXR0b24uaW5uZXJIVE1MID0gXCJEb3dubG9hZFwiO1xuXG4gICAgcm9vdC5yZXBsYWNlQ2hpbGQoYnV0dG9uLCBsb2FkaW5nKTtcbiAgfSBjYXRjaChlcnIpIHtcbiAgICBjb25zb2xlLmVycm9yKGVycik7XG4gIH1cbn1cblxuc3RhcnRBcHAoKTtcbiIsImltcG9ydCBNZW1vcnlEb3dubG9hZGVyIGZyb20gXCIuL2Rvd25sb2FkZXJzL01lbW9yeURvd25sb2FkZXJcIjtcbmltcG9ydCBGaWxlU3lzdGVtRG93bmxvYWRlciBmcm9tIFwiLi9kb3dubG9hZGVycy9GaWxlU3lzdGVtRG93bmxvYWRlclwiO1xuaW1wb3J0IHsgRG93bmxvYWRlciB9IGZyb20gXCIuL2Rvd25sb2FkZXJzL0Rvd25sb2FkZXJcIjtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gY3JlYXRlRG93bmxvYWRlcigpOiBEb3dubG9hZGVyIHtcbiAgLyoqXG4gICAqIFJldHVybnNcbiAgICovXG4gIGNvbnN0IHJlcXVlc3RGaWxlU3lzdGVtID0gKHdpbmRvdyBhcyBhbnkpLnJlcXVlc3RGaWxlU3lzdGVtIHx8XG4gICAgKHdpbmRvdyBhcyBhbnkpLndlYmtpdFJlcXVlc3RGaWxlU3lzdGVtO1xuICBpZiAocmVxdWVzdEZpbGVTeXN0ZW0pIHtcbiAgICByZXR1cm4gbmV3IEZpbGVTeXN0ZW1Eb3dubG9hZGVyKCk7XG4gIH0gZWxzZSB7XG4gICAgcmV0dXJuIG5ldyBNZW1vcnlEb3dubG9hZGVyKCk7XG4gIH1cbn07XG4iXSwic291cmNlUm9vdCI6IiJ9