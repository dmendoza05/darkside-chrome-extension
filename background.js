const invertedCSS = `:root {filter: invert(88%);} img, svg, canvas {filter: invert(88%) contrast(1.8);}`;

chrome.runtime.onMessage.addListener((message, callback) => {
    console.log('message', message.key);
    if (message.key === 'toggleFilter') {
        if (message.value === true) {
            chrome.scripting.insertCSS(
                {
                    target: { tabId: message.tabId },
                    css: invertedCSS
                }
            );
        } else {
            chrome.scripting.removeCSS(
                {
                    target: { tabId: message.tabId },
                    css: invertedCSS
                }
            );
        }
    }
});
