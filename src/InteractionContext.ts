export class InteractionContext {
    interaction: any;
    interactionContainer: any;

    constructor(public inter: any, public interCont: any) {
        this.interaction = inter;
        this.interactionContainer = interCont;
    }
}