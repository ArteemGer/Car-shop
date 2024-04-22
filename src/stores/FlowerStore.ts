import { create } from "zustand";

export interface Flower {
    id: number;
    name: string;
    price: number;
    description: string;
    image: string;
    rating: number;
    country: string;
    colors: string;
    seats: number;
    year: number;
    engine: string;
}

interface FlowersState {
    flowers: Flower[];
    loading: boolean;
    error: string | null;
    bestSales: () => Flower[];
    sortByPrice: () => Flower[];
    sortByRating: () => Flower[];
    sortByName: () => Flower[];
    search: (query: string) => Flower[];
    getCarId: (id: number) => Flower | null;
}

export const useFlowersStore = create<FlowersState>()(() => ({
    flowers: [
        { id: 1, name: 'BMW X5', price: 13999, description: 'The BMW X5 (E53) is a mid-size luxury SUV produced by German automaker BMW from 2000 to 2006. This model was the first generation of the BMW X5 series, which later evolved into the E70 and F15 generations. The X5 (E53) was available with several engine options, including a 3.0-liter diesel engine and a 3.0-liter gasoline engine, both producing around 231 horsepower', image: '/BMW X5.svg', rating: 5, country:'Germany', colors:'White, black, dark blue', seats: 4,year: 2018, engine:'30d 3.0d AT (298 л.с.) 4WD' },
        { id: 2, name: 'Toyota RAV 4', price: 4500, description: 'The Toyota RAV4 is a compact crossover that combines dynamic and rugged design with a functional interior. The model is equipped with advanced technologies, including the intelligent Toyota Safety Sense active safety system. This crossover has received high ratings in Euro NCAP crash tests due to its safe characteristics and innovative safety systems.', image: '/Toyota RAF 4.svg', rating: 5, country:'Japan', colors:'White, black, gray', seats: 4,year: 2023, engine:'1,8 л 1ZZ-FE' },
        { id: 3, name: 'Lamborghini Urus', price: 642351, description: 'The Lamborghini Urus is a high-performance luxury SUV that represents a unique blend of design, power, and handling. This "Super-SUV" sets new standards in quality and performance, embodying all the hallmark characteristics of Lamborghini supercars. The Urus boasts dynamics comparable to sports supercars, delivering unparalleled driving pleasure for both the driver and passengers. Its exterior design combines sleek lines with a high level of comfort and luxury in the interior, crafted using cutting-edge technologies. Additionally, the Urus offers various driving modes to adapt to different road conditions, highlighting its versatility and performance.', image: '/Lamborghini Urus.svg', rating: 4, country:'Italy', colors:'Yellow, blue, black', seats: 4,year: 2017, engine:'4.0 AT (650 л.с.) 4WD' },
        { id: 4, name: 'Hyundai Genesis G80', price: 37000, description: 'The Hyundai Genesis G80 is a luxury midsize sedan that embodies elegance, performance, and advanced technology. With its sleek and sophisticated design, the G80 exudes a sense of refinement and modernity on the road. The interior of the G80 is crafted with high-quality materials and attention to detail, providing a luxurious and comfortable driving experience for both the driver and passengers.', image: '/Hyundai Genesis G80.svg', rating: 5, country:'South Korea', colors:'Gray', seats: 4,year: 2016, engine:'2.2d AT (199 л.с.) 4WD' },
        { id: 5, name: 'Porsche cayman', price: 242000, description: 'The Porsche Cayman is a highly regarded sports car that delivers a thrilling driving experience, combining exceptional performance, handling, and design. With its mid-engine layout, the Cayman offers a perfect balance of power and agility, making it a joy to drive on both the open road and the racetrack.', image: '/Porsche cayman.svg', rating: 5, country:'Germany', colors:'Black, white, blue, dark green', seats: 4,year: 2022, engine:'T 2.0 MT (300 л.с.)' },
        { id: 6, name: 'Audi q7', price: 17999, description: 'The Audi Q7 is a premium midsize luxury SUV that combines sophisticated design, advanced technology, and impressive performance. With its bold and commanding presence on the road, the Q7 exudes elegance and refinement, making a statement wherever it goes.', image: '/Audi q7.svg', rating: 5, country:'Germany', colors:'Blue, white, black', seats: 4,year: 2021, engine:'2.0 AT (252 л.с.) 4WD' },
    ],

    loading: false,
    error: null,

    bestSales: () => {
        const sortedFlowers: Flower[] = [...useFlowersStore.getState().flowers].sort((a, b) => b.rating - a.rating);
        return sortedFlowers.slice(0,3);
    },
    sortByPrice: () => {
        const sortedFlowers: Flower[] = [...useFlowersStore.getState().flowers].sort((a,b) => b.price - a.price);
        return sortedFlowers;
    },
    sortByRating: () => {
        const sortedFlowers: Flower[] = [...useFlowersStore.getState().flowers].sort((a,b) => b.rating - a.rating);
        return sortedFlowers;
    },
    sortByName: () => {
        const sortedFlowers: Flower[] = [...useFlowersStore.getState().flowers].sort((a,b) => a.name.localeCompare(b.name));
        return sortedFlowers;
    },
    search: (query: string): Flower[] => {
        if (!query) {
            return useFlowersStore.getState().flowers;
        }
        return useFlowersStore.getState().flowers.filter((flower: Flower) =>
            flower.name.toLowerCase().includes(query.toLowerCase())
        );
    },
    getCarId(id:number): Flower | null {
        const {flowers} = useFlowersStore.getState();
        const car = flowers.find((flower: Flower) => flower.id === id);
        return car || null;
    }

}));

