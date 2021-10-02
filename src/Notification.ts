export class Notification {
    constructor(public message: string, public good: boolean = true) {
        var elemDiv = document.createElement('div');
        elemDiv.classList.add("digisploit-snackbar");
        document.body.prepend(elemDiv);

        var sideRibbon = document.createElement('div');
        sideRibbon.classList.add("side-thingy");
        if(good)
            sideRibbon.classList.add("good");
        elemDiv.appendChild(sideRibbon);

        var textContainer = document.createElement('div');
        elemDiv.appendChild(textContainer);

        var text = document.createElement('h3');
        text.innerHTML = message;
        textContainer.appendChild(text);

        var text2 = document.createElement('h3');
        text2.classList.add("digisploit-sub");
        text2.innerHTML = good ? "Graag gedaan." : "Interacties zijn gedumpt in de console.";
        textContainer.appendChild(text2);
    }
}