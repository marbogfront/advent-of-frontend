type Func = () =>{};

export class ChristmasEmitter {
    private events: Record<string, Func[]> = {};

    on(name: string, listener: Func) {
        if(!this.events[name]) {
            this.events[name] = [];
        }

        this.events[name].push(listener);
    }

    emit(name: string) {
        if(!this.events[name]) {
            this.emitNotFound();
        }

        this.events[name].forEach(callback => callback());
    }

    off(name: string, listener: Func) {
        if(!this.events[name]) {
            this.emitNotFound();
        }

        this.events[name] = this.events[name].filter(callback => callback !== listener);
    }

    private emitNotFound(): never {
        throw new Error('Emit not found');
    }
};