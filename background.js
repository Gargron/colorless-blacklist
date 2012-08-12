/**
 * Because content scripts and popup/background scripts work in
 * separate environments, we need this background script to manage
 * localStorage, where we store our settings. The content script
 * can then send messages and receive responses from here.
 */

chrome.extension.onMessage.addListener(function(request, sender, sendResponse) {
  if (request.method === "getLocalStorage")
    sendResponse({data: localStorage[request.key]});
  else
    sendResponse({});
});