// // content.js

// // Function to draw the webpage content onto a canvas
// function drawWebPageToCanvas() {
//   // Get the width and height of the webpage
//   const width = document.documentElement.scrollWidth;
//   const height = document.documentElement.scrollHeight;

//   // Create a canvas element with the same dimensions as the webpage
//   const canvas = document.createElement("canvas");
//   canvas.width = width;
//   canvas.height = height;

//   // Get the 2D context of the canvas
//   const context = canvas.getContext("2d");

//   // Draw the contents of the webpage onto the canvas
//   context.drawWindow(window, 0, 0, width, height, "rgb(255, 255, 255)");

//   return canvas;
// }

// // Function to capture the canvas as an image and send a message to the popup script
// function captureAndNotifyPopup() {
//   // Draw the webpage content onto a canvas
//   const canvas = drawWebPageToCanvas();

//   // Convert the canvas to a data URL (PNG format)
//   const dataUrl = canvas.toDataURL("image/png");

//   // Send a message to the popup script with the data URL
//   chrome.runtime.sendMessage({ action: "screenshotReady", dataUrl: dataUrl });
// }

// // Listen for messages from the popup script
// chrome.runtime.onMessage.addListener(function (request, sender, sendResponse) {
//   if (request.action === "captureWebPage") {
//     // Capture the canvas and notify the popup script
//     captureAndNotifyPopup();
//   }
// });
