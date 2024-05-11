"use client"
import React, { createContext, useState, useContext, ReactNode } from 'react';

interface Product {
    id: number;
    name: string;
    quantity: number;
    price: number
}

interface CartItem {
    item: Product;
    quantity: number;
}

interface CartContextType {
    items: Record<number, CartItem>;
    addItem: (item: Product) => void;
    updateItemQuantity: (itemId: number, quantity: number) => void;
    removeItem: (itemId: number) => void;
    clearCart: () => void;
}

export const CartContext = createContext<CartContextType | undefined>(undefined);

export const CartProvider = ({ children }: { children: ReactNode }) => {
    const [items, setItems] = useState<Record<number, CartItem>>({});

    const addItem = (product: Product) => {
        setItems(prevItems => ({
            ...prevItems,
            [product.id]: {
                item: product,
                quantity: 1
            }
        }));
    };

    const updateItemQuantity = (itemId: number, quantity: number) => {
        if (items[itemId]) {
            setItems(prevItems => ({
                ...prevItems,
                [itemId]: { ...prevItems[itemId], quantity }
            }));
        }
    };

    const removeItem = (itemId: number) => {
        setItems(prevItems => {
            const updatedItems = { ...prevItems };
            delete updatedItems[itemId];
            return updatedItems;
        });
    };

    const clearCart = () => {
        setItems({});
    };

    return (
        <CartContext.Provider value={{ items, addItem, updateItemQuantity, removeItem, clearCart }}>
            {children}
        </CartContext.Provider>
    );
};
