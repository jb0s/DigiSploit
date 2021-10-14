console.log("[DigiSploit] Injecting DigiSploit into document...");

const style = document.createElement('link');
style.setAttribute("rel", "stylesheet");
style.setAttribute("href", chrome.runtime.getURL('custom.css'));
document.head.insertBefore(style, document.head.lastChild);

const script = document.createElement('script');
script.setAttribute("type", "module");
script.setAttribute("src", chrome.runtime.getURL('scripts/DigiSploit.js'));
document.body.insertBefore(script, document.body.lastChild);