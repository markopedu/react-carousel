
export interface CarouselImage {
    imgUrl: string;
    description: string;
    attribution: string;
}

export async function CarouselDataService(): Promise<CarouselImage[]> {
        return CarouselData();
        // return await fetch('https://localhost:5001/images')
        //     .then(x => x.json())
        //     .catch(e => {
        //         console.log('error: ', e);
        //         return CarouselData();
        //     });
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
