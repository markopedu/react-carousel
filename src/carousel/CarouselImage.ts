
export interface CarouselImage {
    imgUrl: string;
    description: string;
    attribution: string;
}


export function CarouselData(): CarouselImage[] {

    return [
        {
            imgUrl: 'images/nature1.jpg',
            description: 'Nature Sea 1',
            attribution: 'John Doe'
        },
        {
            imgUrl: 'images/nature2.jpg',
            description: 'Nature Mountains 2',
            attribution: 'Matti Doe'
        },
        {
            imgUrl: 'images/nature3.jpg',
            description: 'Nature Forest 3',
            attribution: 'Kalle Doe'
        }
    ];
}
