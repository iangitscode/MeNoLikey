var toggle=true;
function update(){
  if(toggle){
    //disable
    chrome.browserAction.setIcon({path:"fadedicon.png"});
  }else{
    //enable
    chrome.browserAction.setIcon({path:"icon.png"});
  }
  toggle=!toggle;
}
chrome.browserAction.onClicked.addListener(update);