export interface PrCardInt {
    id?: number,
    img?: string,
    name: string,
    weight?: number,
    price: number,
    discount?: number,
    country?: string,
    brand?: string
}

export interface ComponentMapping {
    [key: string]: string;
}

export const componentMapping: ComponentMapping = {
    'Новинки': 'new-products',
    'Акции': 'discounts',
    // Другие компоненты
};

