export type Lokalizacja = {
    x: number,
    z: number,
    y: number,
    czas: number
};

export type MapaCzasoprzestrzenna = (x: number, y: number, z: number, czas: number) => number;

const niepoprawnaWartoscMapy = (wartoscMapy: number): boolean => {
    return isNaN(wartoscMapy) || wartoscMapy === Infinity || wartoscMapy === -Infinity;
}

export function znajdzWorek(lokalizacje: Lokalizacja[], mapa: MapaCzasoprzestrzenna): Lokalizacja | null {
    if(!lokalizacje.length) {
        return null;
    }

    let wynik: Lokalizacja | null = null;
    let najwyzszaWartoscMapy = 0;

    lokalizacje.forEach(lokalizacja => {
        const { x, y, z, czas } = lokalizacja;
        const wartoscMapy = mapa(x, y, z, czas);
        
        if(niepoprawnaWartoscMapy(wartoscMapy)) {
            return null;
        };

        if(wartoscMapy <= najwyzszaWartoscMapy) {
            return wynik;
        }

        najwyzszaWartoscMapy = wartoscMapy;
        wynik = lokalizacja;
    });

    return wynik;
}