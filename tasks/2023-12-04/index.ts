type StringOrNumber = string | number;
type Func = (...args: string[] | number[]) => StringOrNumber;

export function memoize(fn: Func) {
    if(typeof fn !== "function") {
        throw new Error('Function to be memoized must be a function.');
    }

    const cache: Record<string, StringOrNumber> = {};

    return (...args: number[] | string[]) => {
        const key = JSON.stringify(args);

        if(!cache[key]) {
            cache[key] = fn(...args);
        }

        return cache[key];
    };
}
