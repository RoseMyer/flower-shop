import React from 'react';
import { Card, CardMedia, CardContent, CardActions, Typography, Button } from '@mui/material';
import { CartContext } from "@/context/cartProvider";
import { useContext } from 'react';

interface Product {
  id: number;
  name: string;
  price: number;
  quantity: number;
}

export const ProductCard = ({ product }: { product: Product }) => {
  const cart = useContext(CartContext);

  return (
    <Card sx={{ width: 500, maxWidth: 500, margin: 'auto' }}>
      <CardMedia
        component="img"
        height="140"
        image={`/${product.name}.png`}
        alt={product.name}
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {product.name}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          Price: ${product.price}
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small" onClick={() => cart?.addItem(product)}>Add to Cart</Button>
      </CardActions>
    </Card>
  );
};
