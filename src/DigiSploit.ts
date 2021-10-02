import { DigilinoExploit } from "./Exploits/DigilinoExploit.js";

console.log("[DigiSploit] DigiSploit, gemaakt door Jake");
console.log("[DigiSploit] Aan het kijken voor een exploiteerbare frame...");

if(window["Digilino"] !== undefined) {
    console.log("[DigiSploit] Digilino-frame gevonden! Payload aan het activeren...");

    let exploit = new DigilinoExploit();
    exploit.trigger();
}