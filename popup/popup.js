"use strict";
// Do init and starting actions here
document.addEventListener("DOMContentLoaded", onDomDontentLoaded);

function onDomDontentLoaded() {
  initializeEventListeners();
}

async function getCurrentTab() {
  let queryOptions = { active: true, currentWindow: true };
  let [tab] = await chrome.tabs.query(queryOptions);
  console.log(tab.id);
  return tab;
}

async function initializeEventListeners() {
  var onOffToggle = document
    .getElementById("on-off-toggle");

  onOffToggle
    .addEventListener("click", async (e) => {
      let tabId = await getCurrentTab();
      let toggleValue = onOffToggle.getAttribute('value') == 'true' ? true : false;

      onOffToggle.setAttribute('value', !toggleValue);
      onOffToggle.textContent = !toggleValue ? 'ON' : 'OFF';

      chrome.runtime.sendMessage(
        {
          key: 'toggleFilter',
          tabId: tabId.id,
          value: toggleValue
        }
      );
    });
}
