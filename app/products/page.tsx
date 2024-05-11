"use client"
import { useState, useEffect, useContext, Dispatch, SetStateAction} from 'react'
import { Stack, Container, Typography } from '@mui/material'
import { _read, _create } from '@/utils/crud'
import { CartContext } from "@/context/cartProvider"
import { ProductCard } from "@/components/ProductCard"



const fetchProducts = async(table: string, setData: Dispatch<SetStateAction<any[]>>) => {
  try {
    const rows = await _read(table);
    setData(rows);
  } catch (error) {
    console.error("Failed to fetch data:", error);
  }
}

export default function Products(props: any) {

  const [products, setProducts] = useState<any[]>([])
  const cart = useContext(CartContext);

  useEffect(() => {
    fetchProducts('products', setProducts);
  }, []);

  console.log('products', products)

  return (
    <Container maxWidth="lg" sx={{py:3}}>
      <Stack direction="column" spacing={3} sx={{ width: '100%', alignItems: 'center', justifyContent: 'center',  my: 7.5 }}>
        <Typography variant="h2" sx={{ textAlign: 'center', color: 'white' }}>{JSON.stringify(cart)}</Typography>
        {products.map((product, i) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </Stack>
    </Container>
  )
}
