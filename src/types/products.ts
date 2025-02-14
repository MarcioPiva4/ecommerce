export interface products {
    id: number;
    title: string;
    images: [string];
    category: string;
    categoryId: number;
    link: string;
    price: string;
    priceDiscount: string;
    description: string;
    assessment: number | null;
    warranty: string
}[]