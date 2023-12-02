export class ChristmasQueue<T> {

    private temporaryQueue: Item<T>[] = [];
    
    queue: T[] = [];

    enqueue(gift: T, priority: number): void {
        this.temporaryQueue = [...this.temporaryQueue, {gift, priority}];
        this.queue = this.sortQueue(this.temporaryQueue).map(item => item.gift);
    }

    dequeue(): T | undefined {
        if(this.isEmpty()) {
            throw new Error('There are no letters in the queue!');
        }

        return this.queue.shift();
    }

    isEmpty(): boolean {
        return !this.queue.length;
    }

    private sortQueue(list: Item<T>[]): Item<T>[] {
        return list.sort((giftA, giftB) => giftB.priority - giftA.priority);
    }
}


type Item<T> = {gift: T, priority: number};
