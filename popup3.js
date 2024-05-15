// popup.js

document.addEventListener("DOMContentLoaded", function () {
  var screenshotButton = document.getElementById("screenshotBtn");
  screenshotButton.addEventListener("click", function () {
    chrome.tabs.query({ active: true, currentWindow: true }, function (tabs) {
      var tab = tabs[0];
      // Send a message to the content script to capture the webpage
      chrome.tabs.sendMessage(
        tab.id,
        { action: "captureWebPage" },
        function (response) {
          if (chrome.runtime.lastError) {
            console.error(chrome.runtime.lastError.message);
            return;
          }
          console.log("Message sent successfully");
        }
      );
    });
  });
});

// Listen for messages from the content script
chrome.runtime.onMessage.addListener(function (request, sender, sendResponse) {
  if (request.action === "screenshotReady") {
    // Save the screenshot once the canvas has been drawn
    chrome.downloads.download({
      url: request.dataUrl,
      filename: "webpage_screenshot.png",
      saveAs: true,
    });
  }
});
