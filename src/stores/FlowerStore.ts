import { create } from "zustand";

export interface Flower {
    id: number;
    name: string;
    price: number;
    description: string;
    image: string;
    rating: number;
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
}

export const useFlowersStore = create<FlowersState>()(() => ({
    flowers: [
        { id: 1, name: 'BMW X5', price: 10000, description: 'lorem', image: '/BMW X5.svg', rating: 5, },
        { id: 2, name: 'Toyota RAF 4', price: 10000, description: 'lorem', image: '/Toyota RAF 4.svg', rating: 5, },
        { id: 3, name: 'Lamborghini Urus', price: 10000, description: 'lorem', image: '/Lamborghini Urus.svg', rating: 4, },
        { id: 4, name: 'Hyundai Genesis G80', price: 10000, description: 'lorem', image: '/Hyundai Genesis G80.svg', rating: 5, },
        { id: 5, name: 'Porsche cayman', price: 10000, description: 'lorem', image: '/Porsche cayman.svg', rating: 5, },
        { id: 6, name: 'Audi q7', price: 10000, description: 'lorem', image: '/Audi q7.svg', rating: 5, },
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

}));

