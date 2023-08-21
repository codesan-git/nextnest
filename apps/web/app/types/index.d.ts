export interface getPokemon {

    count: number;
    next: string;
    previous: null;
    results: Result[];

}
export interface Result {
    name: string;
    imageUrl: HTMLImageElement;
    image: HTMLImageElement;
}