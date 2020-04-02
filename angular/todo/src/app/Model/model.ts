export class model {
    user;
    items;

    constructor() {

        this.user = 'Dinesh';
        this.items = [
            { action: "But Flower", done: false },
            { action: "Get Milk", done: true },
            { action: "Call mechanic", done: false },
            { action: "Go to Typing class", done: false },
            { action: "Go to Sleep", done: false }
        ]
    }
}

export class TodoItem {

    action: string = undefined;
    done: boolean;

    constructor(action: string, done: boolean) {
        this.action = action;
        this.done = done;
    }
}