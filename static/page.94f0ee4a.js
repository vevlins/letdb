import{m as c,t as s,c as l}from"./module.esm.c8132518.js";document.addEventListener("alpine:init",()=>{c.magic("tooltip",t=>e=>{let i=s(t,{content:e,trigger:"manual"});i.show(),setTimeout(()=>{i.hide(),setTimeout(()=>i.destroy(),150)},2e3)}),c.directive("tooltip",(t,{expression:e})=>{s(t,{content:e})}),c.directive("tooltip-menu",(t,{expression:e})=>{s(t,{content:e,placement:"right",offset:[0,6]})}),c.directive("clipboard",(t,{expression:e})=>{let i={content:'<div class="flex items-center justify-center space-x-1 text-gray-500"><svg class="w-4 h-4" fill="currentColor" version="1.1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" xmlns:xlink="http://www.w3.org/1999/xlink" enable-background="new 0 0 512 512"><g><path d="m161,152.9h190c0.1,0 0.1,0 0.2,0 10.8,0 19.6-7.1 19.6-16 0-1.5-14.1-82.7-14.1-82.7-1.3-7.9-9.6-13.8-19.4-13.8l-61.7,.1v-13.5c0-8.8-8.8-16-19.6-16-10.8,0-19.6,7.1-19.6,16v13.6l-61.8,.1c-9.8,0-18,5.9-19.4,13.8l-13.7,80.3c-1.2,14.3 13.5,18.1 19.5,18.1z"/><path d="m427.5,78.9h-26.8c0,0 9.3,53.5 9.3,58 0,30.4-26.4,55.2-58.8,55.2h-190.2c-19.6,0.4-63.3-14.7-58.1-63.9l8.4-49.2h-26.8c-10.8,0-19.6,8.8-19.6,19.6v382.9c0,10.8 8.8,19.6 19.6,19.6h343c10.8,0 19.6-8.8 19.6-19.6v-383c0-10.8-8.8-19.6-19.6-19.6zm-76.5,320.1h-190c-10.8,0-19.6-8.8-19.6-19.6 0-10.8 8.8-19.6 19.6-19.6h190c10.8,0 19.6,8.8 19.6,19.6 0,10.8-8.7,19.6-19.6,19.6zm0-110.3h-190c-10.8,0-19.6-8.8-19.6-19.6 0-10.8 8.8-19.6 19.6-19.6h190c10.8,0 19.6,8.8 19.6,19.6 0,10.8-8.7,19.6-19.6,19.6z"/></g></svg><p>Copy to clipboard</p></div>',hideOnClick:!1,allowHTML:!0},o=s(t,i);t.addEventListener("click",()=>{l(e),o.setProps({content:'<div class="flex items-center justify-center space-x-1 text-gray-500"><svg class="w-4 h-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="currentColor"><path d="M0 11.386l1.17-1.206c1.951.522 5.313 1.731 8.33 3.597 3.175-4.177 9.582-9.398 13.456-11.777l1.044 1.073-14 18.927-10-10.614z"/></svg><p class="text-gray-500">Copied!</p></div>'}),setTimeout(()=>{o.hide(),setTimeout(()=>{o.setProps(i)},300)},1500)})})});window.Alpine=c;c.start();
