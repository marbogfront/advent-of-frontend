type Letter = { [key: string]: number };
type ChangeTracker = (key: string, value: number) => void;

export function createTrackedLetter(letter: Letter, changeTracker: ChangeTracker): Letter {
    const handler = {
        set(target: Letter, key: string, value: number) {
            changeTracker(key, value);
            target[key] = value;

            return Reflect.set(target, key, value);
        }
    };
   
    return new Proxy<Letter>(letter, handler);
}
