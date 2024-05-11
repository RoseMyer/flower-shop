"use client"
import { useState, useEffect, useContext, Dispatch, SetStateAction} from 'react'
import { Stack, Container, Typography } from '@mui/material'
import { CartContext } from "@/context/cartProvider"
import { CartItemCard } from "@/components/CartItemCard"
import { CheckoutButton } from "@/components/CheckoutButton"


export default function Checkout(props: any) {
  const cart = useContext(CartContext);
  const items = cart?.items;
  return (
    <Container maxWidth="lg" sx={{py:3}}>
      <Stack direction="column" spacing={3} sx={{ width: '100%', alignItems: 'center', justifyContent: 'center', my: 7.5 }}>
      <Typography variant="h2" sx={{ textAlign: 'center', color: 'white' }}>Checkout</Typography>

        {items ? Object.values(items).map(cartItem => (
          <CartItemCard key={cartItem.item.id} cartItem={cartItem} />
        )) : null}

        <CheckoutButton />
      </Stack>
    </Container>
  )
}
