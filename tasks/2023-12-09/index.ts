export interface Tool {
    init(): void,
    update(): void,
    dispose(): void,
}

export class Equipment {
    private _tools: Tool[] = [];
    private initialise = false;

    registerTools(tool: Tool): void {
        this._tools = [...this._tools, tool];
    }

    initializeTools(): void {
        this.initialise = true;
        const init = (tool: Tool) => tool.init();
        this._tools.forEach(init);
    }

    updateTools(): void {
        const update = (tool: Tool) => {
            if(!this.initialise) {
                this.notInitializeError();
            }

            tool.update();
        };

        this._tools.forEach(update);
    }

    disposeTools(): void {
        const dispose = (tool: Tool) => tool.dispose();
        this._tools.forEach(dispose);
    }

    private notInitializeError(): never {
        throw new Error('Cannot update any tools before initialization.');
    }
}
