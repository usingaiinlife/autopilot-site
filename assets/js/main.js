
// Optional Botpress chat
// window.BOTPRESS_BOT_ID = "YOUR_BOTPRESS_BOT_ID";
(function(){
  if (!window.BOTPRESS_BOT_ID) return;
  var s=document.createElement('script'); s.defer=true; s.src='https://cdn.botpress.cloud/webchat/v1/inject.js'; document.head.appendChild(s);
  var s2=document.createElement('script'); s2.defer=true; s2.src='https://mediafiles.botpress.cloud/'+window.BOTPRESS_BOT_ID+'/webchat/config.js'; document.head.appendChild(s2);
})();
