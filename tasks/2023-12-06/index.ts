export class OrderController {
    private machines: Machine[] = [];

    registerMachine(machine: Machine) {
        this.machines = [...this.machines, machine];
    }

    setState(state: string) {
        if(state === "unknown") {
            this.invalidState();
        }

        this.machines.forEach((machine: Machine) => machine.updateState(state));
    }   

    unregisterMachine(machine: Machine) {
        this.machines = this.machines.filter(item => item !== machine);
    }

    private invalidState(): never {
        throw new Error('Invalid state provided');
    }
}

export class Machine {
    private auditGifts: string[] = [];
    state: string | null = null;
   
    performAudit(): string[] {
        return this.auditGifts;
    }

    updateState(state: string): void {
        this.state = state;
        this.auditGifts = this.updateAuditGifts(state);
    }
    
    private updateAuditGifts(state: string): string[] {
        const giftNumber = this.auditGifts.length + 1;
        return [...this.auditGifts, `Order #${giftNumber} - ${state}`]
    }
}