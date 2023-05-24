export interface oneVillaHouse {
    imageUrl: string;
    subDescription: string;
    vilaName: string;
    description: string;
    debroom: number;
    workStation: number;
    bathroom: number;
}

export interface ProductType {
    products: Array<oneVillaHouse>
}