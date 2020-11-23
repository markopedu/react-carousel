
export interface CarouselImage {
    imgUrl: string;
    description: string;
    attribution: string;
}


export function CarouselData(): CarouselImage[] {

    return [
        {
            imgUrl: 'https://loremflickr.com/g/800/600/nature,sea/all?random=1',
            description: 'Nature Sea 1',
            attribution: 'John Doe'
        },
        {
            imgUrl: 'https://loremflickr.com/g/800/600/nature,mountais/all?random=1',
            description: 'Nature Mountains 2',
            attribution: 'Matti Doe'
        },
        {
            imgUrl: 'https://loremflickr.com/g/800/600/nature,forest/all?random=1',
            description: 'Nature Forest 3',
            attribution: 'Kalle Doe'
        }
    ];
}
