import React from 'react';
import { Card, CardContent, CardActions, Typography, Button, IconButton } from '@mui/material';
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';
import { useContext } from 'react';
import { CartContext } from "@/context/cartProvider";

interface CartItem {
  item: {
    id: number;
    name: string;
    price: number;
    quantity: number;
  };
  quantity: number;
}

export const CartItemCard = ({ cartItem }: { cartItem: CartItem }) => {
  const cart = useContext(CartContext);

  return (
    <Card sx={{ maxWidth: 500, marginBottom: 2 }}>
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {cartItem.item.name}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          Price: ${cartItem.item.price}
          <br />
          Subtotal: ${cartItem.item.price * cartItem.quantity}
        </Typography>
      </CardContent>
      <CardActions>
        <IconButton onClick={() => cart?.updateItemQuantity(cartItem.item.id, cartItem.quantity + 1)}>
          <AddIcon />
        </IconButton>
        <Typography>{cartItem.quantity}</Typography>
        <IconButton onClick={() => {
          if (cartItem.quantity > 1) {
            cart?.updateItemQuantity(cartItem.item.id, cartItem.quantity - 1);
          } else {
            cart?.removeItem(cartItem.item.id);
          }
        }}>
          <RemoveIcon />
        </IconButton>
      </CardActions>
    </Card>
  );
};

export default CartItemCard;
