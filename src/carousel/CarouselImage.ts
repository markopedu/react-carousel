
export interface CarouselImage {
    imgUrl: string;
    description: string;
    attribution: string;
}


export function CarouselData(): CarouselImage[] {

    return [
        {
            imgUrl: 'https://loremflickr.com/g/800/600/nature,sea/all?random=1',
            description: 'Nature Sea',
            attribution: 'John Doe'
        },
        {
            imgUrl: 'https://loremflickr.com/g/800/600/nature,sea/all?random=1',
            description: 'Nature Sea',
            attribution: 'John Doe'
        },
        {
            imgUrl: 'https://loremflickr.com/g/800/600/nature,sea/all?random=1',
            description: 'Nature Sea',
            attribution: 'John Doe'
        }
    ];
}
