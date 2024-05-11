import React, { useContext, useState } from 'react';
import { Button, Dialog, DialogTitle, DialogContent, TextField, DialogActions } from '@mui/material';
import { _create } from "@/utils/crud"
import { sendEmail } from '@/utils/sendEmail';
import { CartContext } from "@/context/cartProvider";


const CheckoutModal = ({ open, onClose, onConfirm }: any) => {
  const [formData, setFormData] = useState({
    first_name: '',
    last_name: '',
    phone: '',
    email: '',
    card_number: '',
    sec_code: '',
    exp_date: ''
  });

  const handleChange = (e: any) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = () => {
    onConfirm(formData, setFormData);
    onClose();
  };

  return (
    <Dialog open={open} onClose={onClose}>
      <DialogTitle>Enter Payment Information</DialogTitle>
      <DialogContent>
        <TextField label="First Name" name="first_name" fullWidth margin="dense" value={formData.first_name} onChange={handleChange} />
        <TextField label="Last Name" name="last_name" fullWidth margin="dense" value={formData.last_name} onChange={handleChange} />
        <TextField label="Phone" name="phone" fullWidth margin="dense" value={formData.phone} onChange={handleChange} />
        <TextField label="Email" name="email" fullWidth margin="dense" value={formData.email} onChange={handleChange} />
        <TextField label="Card Number" name="card_number" fullWidth margin="dense" value={Number(formData.card_number)} onChange={handleChange} />
        <TextField label="Security Code" name="sec_code" fullWidth margin="dense" value={Number(formData.sec_code)} onChange={handleChange} />
        <TextField label="Expiration Date" name="exp_date" fullWidth margin="dense" type="month" value={formData.exp_date} onChange={handleChange} />
      </DialogContent>
      <DialogActions>
        <Button onClick={onClose}>Cancel</Button>
        <Button onClick={handleSubmit}>Submit</Button>
      </DialogActions>
    </Dialog>
  );
};

export function CheckoutButton() {
  const [open, setOpen] = useState(false)
  const cart = useContext(CartContext)
  const items = cart?.items
  const calculateTotal = () => {
    return items ? Object.values(items).reduce((total: number, {item, quantity}:any) => {
        return total + item.price * quantity;
    }, 0) : 0;
  };
  const constructOrderData = () => {
    if (!items) {
      return
    }
    const orderData: Record<string, number> = {};
    Object.keys(items).forEach((id) => {
      const cartItem: any = items[Number(id)];
      orderData[Number(id)] = cartItem.quantity;
    });
    return orderData;
  };

  const getCurrentDateString = () => {
    const now = new Date();
    const month = now.getMonth() + 1;
    const day = now.getDate();
    const year = now.getFullYear();
  
    const formattedMonth = month < 10 ? `0${month}` : month;
    const formattedDay = day < 10 ? `0${day}` : day;
  
    return `${formattedMonth}/${formattedDay}/${year}`;
  }

  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const handleConfirm = async (formData: any, setFormData: any) => {
    console.log('type of card_number', typeof formData.card_number)
    console.log('type of sec_code', typeof formData.sec_code)
    if (isNaN(Number(formData.card_number)) || isNaN(Number(formData.sec_code))) {
      alert('Card Number and Security Code must be integers. Please re-enter your information.')
      return
    }
    console.log(formData);
    const customer_res = await _create('customers', formData)
    if (customer_res === -1) {
        alert("something went wrong. Please try again.")
        return
    }
    console.log("customer_res", customer_res)
    const order_payload = {
        customer_id: customer_res,
        date: getCurrentDateString(),
        total: calculateTotal(),
        status: 'pending',
        payload: constructOrderData()
    }
    console.log("order_payload", order_payload)
    const order_res = await _create('orders', order_payload)
    console.log("order_res", order_res)
    if (order_res === -1) {
      alert("something went wrong. Please give us a call and we'll sort you out.")
      return
    }
    sendEmail(formData, order_payload)
    alert("Order complete. You should receive a confirmation email shortly.")
    setFormData({
      first_name: '',
      last_name: '',
      phone: '',
      email: '',
      card_number: '',
      sec_code: '',
      exp_date: ''
    })
    cart?.clearCart()
  };

  return (
    <>
      <Button variant="contained" onClick={handleOpen}>Checkout</Button>
      <CheckoutModal open={open} onClose={handleClose} onConfirm={handleConfirm} />
    </>
  );
}
