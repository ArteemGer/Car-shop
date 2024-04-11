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
}

interface CartItem {
    flower: Flower;
    quantity: number;
}

interface CartState {
    items: CartItem[];
    addToCart: (flower: Flower) => void;
    getCartItems: () => Flower[];
    removeFromCart: (flowerId: number) => void;
    plusQuantity: (flowerId: number) => void;
    minusQuantity: (flowerId: number) => void;
}




export const useFlowersStore = create<FlowersState>()((set) => ({
    flowers: [
        { id: 1, name: 'flower 1', price: 10, description: 'lorem', image: '/flower1.png', rating: 5, },
        { id: 2, name: 'AAAAAAA', price: 11, description: 'lorem', image: '/flower2.png', rating: 4, },
        { id: 3, name: 'flower 3', price: 12, description: 'lorem', image: '/flower3.png', rating: 5, },
        { id: 4, name: 'flower 4', price: 13, description: 'lorem', image: '/flower4.png', rating: 5, },
        { id: 5, name: 'BBBBBBBBB', price: 14, description: 'lorem', image: '/flower5.png', rating: 5, },
        { id: 6, name: 'flower 6', price: 15, description: 'lorem', image: '/flower6.png', rating: 3, },
        { id: 7, name: 'flower 7', price: 16, description: 'lorem', image: '/flower1.png', rating: 5, },
        { id: 8, name: 'CCCCCCC', price: 17, description: 'lorem', image: '/flower2.png', rating: 5, },
        { id: 9, name: 'flower 9', price: 18, description: 'lorem', image: '/flower3.png', rating: 3, },
    ],

    loading: false,
    error: null,

    bestSales: () => {
        const sortedFlowers: Flower[] = [...useFlowersStore.getState().flowers].sort((a, b) => b.rating - a.rating);
        return sortedFlowers.slice(0,4);
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

}));

export const useCartStore = create<CartState>()((set) => ({
    items: [] as CartItem[],

    addToCart: (flower: Flower) => {
        set((state) => {
            const {items} = state;
            const existingItemIndex = items.findIndex((item) => item.flower.id === flower.id);
            if (existingItemIndex !== -1) {
                console.log(items);
                return { items: [...items.slice(0, existingItemIndex), {...items[existingItemIndex], quantity: items[existingItemIndex].quantity + 1}, ...items.slice(existingItemIndex + 1)] };
            } else {
                console.log(items);
                return {...state, items: [...state.items, {flower, quantity: 1}]};
            }
        })
    },
    getCartItems: () => {
        const { items } = useCartStore.getState();
        const cartItems: (Flower & { quantity: number })[] = items.map(item => ({
            ...item.flower,
            quantity: item.quantity
        }));
        console.log(cartItems);
        return cartItems;
    },

    removeFromCart: (flowerId: number) => {
        set((state) => {
            const updatedItems = state.items.filter(item => item.flower.id !== flowerId);
            return { items: updatedItems };
        });
    },

    plusQuantity: (flowerId: number) => {
        set((state) => {
            const {items} = state;
            const existingItemIndex = items.findIndex((item) => item.flower.id === flowerId);
            if (existingItemIndex !== -1) {
                const updatedItems = [...items.slice(0, existingItemIndex), {...items[existingItemIndex], quantity: items[existingItemIndex].quantity + 1}, ...items.slice(existingItemIndex + 1)];
                return { items: updatedItems };
            } else {
                return state;
            }
        });
    },
    minusQuantity: (flowerId: number) => {
        set((state) => {
            const { items } = state;
            const existingItemIndex = items.findIndex((item) => item.flower.id === flowerId);
            if (existingItemIndex !== -1) {
                if (items[existingItemIndex].quantity === 1) {
                    const updatedItems = items.filter(item => item.flower.id !== flowerId);
                    return { items: updatedItems };
                } else {
                    const updatedItems = [...items.slice(0, existingItemIndex), { ...items[existingItemIndex], quantity: items[existingItemIndex].quantity - 1 }, ...items.slice(existingItemIndex + 1)];
                    return { items: updatedItems };
                }
            } else {
                return state;
            }
        });
    },
}));