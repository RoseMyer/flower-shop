"use client"
import { useState, useEffect, useContext, Dispatch, SetStateAction} from 'react'
import { Stack, Container, Typography, Button } from '@mui/material'
import { CartContext } from "@/context/cartProvider"
import { CartItemCard } from "@/components/CartItemCard"
import { CheckoutButton } from "@/components/CheckoutButton"
import { useRouter } from 'next/navigation'

export default function Checkout(props: any) {
  const cart = useContext(CartContext);
  const items = cart?.items;
  console.log('items', items, items ?'true':'false')
  const router = useRouter();
  const backToProducts = () => {
    router.push('/products');
  };
  return (
    <Container maxWidth="lg" sx={{py:3}}>
      <Stack direction="column" spacing={3} sx={{ width: '100%', alignItems: 'center', justifyContent: 'center', my: 7.5 }}>
        <Typography variant="h2" sx={{ textAlign: 'center', color: 'white' }}>Checkout</Typography>

        {items && Object.keys(items).length > 0 ? Object.values(items).map(cartItem => (
          <CartItemCard key={cartItem.item.id} cartItem={cartItem} />
        )) : <Typography variant="h4" sx={{ textAlign: 'center', color: 'white' }}>Your cart is empty!</Typography>}

        {items && Object.keys(items).length > 0 ? <CheckoutButton /> : <Button variant="contained" color="primary" onClick={backToProducts} sx={{ mt: 2 }}>
              Back to Products
            </Button>}
      </Stack>
    </Container>
  )
}
