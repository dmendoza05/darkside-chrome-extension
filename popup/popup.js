"use strict";

// function click(e) {
//   chrome.tabs.executeScript(null,
//       {code:"document.body.style.backgroundColor='" + e.target.id + "'"});
//   window.close();
// }

// Do init and starting actions here
document.addEventListener("DOMContentLoaded", function () {
  // var divs = document.querySelectorAll('div');
  // for (var i = 0; i < divs.length; i++) {
  //   divs[i].addEventListener('click', click);
  // }
  console.log('DOMContentLoaded');
  initializeEventListeners();
});

async function initializeEventListeners() {
  var onOffToggle = document
  .getElementById("on-off-toggle");

  onOffToggle
    .addEventListener("click", async (e) => {
      let toggleValue = onOffToggle.getAttribute('value') == 'true' ? true : false;
      onOffToggle.setAttribute('value', !toggleValue)
      onOffToggle.textContent = !toggleValue ? 'ON' : 'OFF';
    });
}

// async function getCurrentPopup() {
//   let popup = await chrome.action.getPopup({});
//   document.getElementById('current-popup-value').value = popup;
//   return popup;
// };

// async function showCurrentPage() {
//   let popup = await getCurrentPopup();
//   let pathname = '';
//   if (popup) {
//     pathname = new URL(popup).pathname;
//   }

//   let options = document.getElementById('popup-options');
//   let option = options.querySelector(`option[value="${pathname}"]`);
//   option.selected = true;
// }

// // Populate popup inputs on on page load
// showCurrentPage();
