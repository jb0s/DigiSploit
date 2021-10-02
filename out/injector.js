console.log("[Oosthoff Injector] Injecting Oosthoff into document...");

const style = document.createElement('link');
style.setAttribute("rel", "stylesheet");
style.setAttribute("href", chrome.extension.getURL('main.css'));
document.head.insertBefore(style, document.head.lastChild);

const script = document.createElement('script');
script.setAttribute("type", "module");
script.setAttribute("src", chrome.extension.getURL('Main.js'));
document.body.insertBefore(script, document.body.lastChild);