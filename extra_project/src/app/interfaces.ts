export interface PrCardInt {
    id: number,
    img?: string,
    name: string,
    weight?: number,
    price: number,
    discount?: number,
    country?: string,
    brand?: string
}
export interface Patgs {
    new: string
}

export interface ComponentMapping {
    [key: string]: string;
}

export const componentMapping: ComponentMapping = {
    'Новинки': 'new-products',
    'Акции': 'discounts',
    'Молоко, сыр, яйцо': 'milk',
    'Хлеб': 'bread',
    'Замороженные продукты': 'freeze',
    'Напитки': 'beverages',
    'Здоровое питание': 'healthy',
    'Фрукты и офощи': 'fruits',
    'Чай, кофе': 'tea',
    'Кондитерские изделия': 'confecrionery',
    'Непродовольственные товары': 'non-food',
    'Зоотовары': 'pet-supplies',
    'Детское питание': 'kids',
    'Мясо, птица, колбаса': 'meat',
    'Бакалея': 'grocery',
};

