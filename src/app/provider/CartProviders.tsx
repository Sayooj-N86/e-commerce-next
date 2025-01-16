'use client';

import { CartProvider } from '@mrvautin/react-shoppingcart';
import { Children, ReactNode } from 'react';


type Props = {
    children: ReactNode;
}

export default function CartProviders({ children }: Props) {
    return (
        <CartProvider>
           {children}
        </CartProvider>
    );
}