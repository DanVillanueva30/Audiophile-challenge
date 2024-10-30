import { create } from "zustand";
import { devtools, persist } from "zustand/middleware";
import { CartItem } from "./types";

type CartState = {
    cart: CartItem[];
    addToCart: (item: CartItem) => void;
    removeAll: () => void;
    modal: boolean;
    decreaseQuantity: (id: CartItem['id']) => void;
    increaseQuantity: (id: CartItem['id']) => void;
    showModal: () => void;
    closeModal: () => void;
    resetCartState: () => void;
}
const MIN_ITEMS = 1;
const MAX_ITEMS = 5;

export const useCartStore = create<CartState>()(
    devtools(
        persist((set, get) => ({
            cart: [] as CartItem[],
            modal: false,
            addToCart: (item) => {
                const cart = get().cart;
                const itemIndex = cart.findIndex(product => product.id === item.id);
                if(itemIndex >= 0) {
                    const updatedCart = cart.map((product, index) => {
                        if(index === itemIndex && product.quantity < MAX_ITEMS) {
                            return {...product, quantity: product.quantity + 1};
                        }
                        return product;
                    });
                    set({cart: updatedCart});
                } else {
                    set((state) => ({
                        cart: [...state.cart , item]
                    }));
                }
            },
            removeAll: () => {
                set({
                    cart: []
                })
            },
            decreaseQuantity: (id) => {
                const cart = get().cart;
                const updatedCart = cart.map(product => {
                    if(product.id === id && product.quantity > MIN_ITEMS) {
                        return {...product, quantity: product.quantity - 1}
                    }
                    return product;
                });
                set({cart: updatedCart});
            },
            increaseQuantity: (id) => {
                const cart = get().cart;
                const updatedCart = cart.map(product => {
                    if(product.id === id && product.quantity < MAX_ITEMS) {
                        return {...product, quantity: product.quantity + 1};
                    }
                    return product;
                });
                set({cart: updatedCart});
            },
            showModal: () => set({ modal: true }) ,
            closeModal:() => set({ modal: false }),
            resetCartState: () => set({cart: [] }),
        }), {
            name: 'audiophile-storage'
        }) //localStorage
    ) //Devtools
)// useCartStore