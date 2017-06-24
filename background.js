var toggle=false;
function update(){
  
  if(toggle){
    //disable likes
    chrome.tabs.executeScript((null, {file: "disable.js"}));
    chrome.browserAction.setIcon({path:"icon.png"});
    chrome.browserAction.setTitle({title:"Enable likes"});
  }else{
    //enable likes
    chrome.tabs.executeScript((null, {file: "enable.js"}));
    chrome.browserAction.setIcon({path:"fadedicon.png"});
    chrome.browserAction.setTitle({title:"Disable likes"});
  }
  toggle=!toggle;
}
chrome.browserAction.onClicked.addListener(update);