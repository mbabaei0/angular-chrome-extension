/// <reference types="chrome"/>
console.log('loaded ext')
chrome.runtime.onInstalled.addListener(() => {
  chrome.webNavigation.onCompleted.addListener(() => {
    chrome.tabs.query({ active: true, currentWindow: true }, ( tabs) => {
      if ( tabs[0]?.id) {
        chrome.action.disable(tabs[0].id);
      }
    });
  }, { url: [{ hostContains: 'google.com' }] });
});


