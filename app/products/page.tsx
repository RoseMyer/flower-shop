"use client"
import { useState, useEffect, Dispatch, SetStateAction} from 'react'
import { Stack, Container, Typography } from '@mui/material'
import { _read } from '@/utils/crud'
import {QueryResult} from 'mysql2/promise'

const container_style = {
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',
  height: '100vh',
  py: '64px',
  boxSizing: 'border-box',
  overflowY: 'auto'
}

const fetchProducts = async(table: string, setData: Dispatch<SetStateAction<any[]>>) => {
  try {
    console.log('at least it is being called')
    const rows = await _read(table);
    console.log('client-side rows', rows)
    setData(rows);
  } catch (error) {
    console.error("Failed to fetch data:", error);
  }
}

export default function Products(props: any) {

  const [products, setProducts] = useState<any[]>([])

  useEffect(() => {
    fetchProducts('products', setProducts);
  }, []);

  console.log('products', products)

  return (
    <Container maxWidth="lg" sx={container_style}>
      <Stack direction="column" spacing={3} sx={{ width: '100%', alignItems: 'center', justifyContent: 'center' }}>
        {products.map((product: any, i: number) => (
          <Typography key={i} variant="h4" sx={{ textAlign: 'center', color: 'white' }}>
            {product.name}
          </Typography>
        ))}
      </Stack>
    </Container>
  )
}
