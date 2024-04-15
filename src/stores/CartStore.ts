import { create } from "zustand";
import { Flower } from "./FlowerStore";


interface CartItem {
    flower: Flower;
    quantity: number;
}

interface CartState {
    items: CartItem[];
    addToCart: (flower: Flower) => void;
    getCartItems: () => CartItem[];
    removeFromCart: (flowerId: number) => void;
    plusQuantity: (flowerId: number) => void;
    minusQuantity: (flowerId: number) => void;
}




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
        const cartItems: CartItem[] = items.map(item => ({
            flower: item.flower,
            quantity: item.quantity
        }));
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