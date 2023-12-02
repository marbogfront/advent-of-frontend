export class GiftRegistry {
    private childrenGifts: Map<number, string[]>;

    constructor() {
        this.childrenGifts = new Map();
    }

    addGift(id: number, gift: string): void {
        const childGifts = this.getGiftsForChild(id);
        const gifts = childGifts ? [...childGifts, gift] : [gift];
        this.updateGifts(id, gifts);
    }

    removeGift(id: number, gift: string): void {
        const childGifts = this.getGiftsForChild(id);
        
        if(!childGifts?.includes(gift)) {
            throw new Error('Gift not found');
        }

        const filteredGifts = childGifts.filter(giftItem => giftItem !== gift);
        this.updateGifts(id, filteredGifts);
    }

    getGiftsForChild(id: number): string[] | undefined {
        return this.childrenGifts.get(id);
    }

    private updateGifts(id: number, gifts: string[]): void {
        this.childrenGifts.set(id, gifts);
    }
}