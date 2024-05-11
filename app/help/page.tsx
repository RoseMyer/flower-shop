
"use client"
import React from 'react';
import { Container, Typography, Accordion, AccordionSummary, AccordionDetails } from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

export default function Help(props: any) {
  return (
    <Container maxWidth="lg" sx={{ py: 3 }}>
      <Typography variant="h2" sx={{ textAlign: 'center', color: 'white', mt: 7.5, mb:2 }}>
        Help & FAQ
      </Typography>
      <Accordion sx={{backgroundColor:'var(--primary)'}}>
        <AccordionSummary expandIcon={<ExpandMoreIcon sx={{color:'white'}} />} aria-controls="panel1a-content" id="panel1a-header">
          <Typography sx={{ color: 'white' }}>Why is my order not working?</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography sx={{ color: 'white' }}>
            The main cause of this issue is using invalid payment information. Make sure to add valid card information,
            if you are still having issues please reach out to our email.
          </Typography>
        </AccordionDetails>
      </Accordion>

      <Accordion sx={{backgroundColor:'var(--primary)'}}>
        <AccordionSummary expandIcon={<ExpandMoreIcon sx={{color:'white'}} />} aria-controls="panel2a-content" id="panel2a-header">
          <Typography sx={{ color: 'white' }}>Where do you get your flowers from?</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography sx={{ color: 'white' }}>
            Our flowers are sustainably sourced from local greenhouses in the Hudson and Long Island area. We pride
            ourselves on quality assurance and supporting local businesses.
          </Typography>
        </AccordionDetails>
      </Accordion>

      <Accordion sx={{backgroundColor:'var(--primary)'}}>
        <AccordionSummary expandIcon={<ExpandMoreIcon sx={{color:'white'}} />} aria-controls="panel3a-content" id="panel3a-header">
          <Typography sx={{ color: 'white' }}>What if I made a mistake in my order?</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography sx={{ color: 'white' }}>
            Feel free to call or email us with your mistake and changes, we will respond usually within one business
            day and update charges placed. We have a contact us button at the bottom of the page.
          </Typography>
        </AccordionDetails>
      </Accordion>

      <Accordion sx={{backgroundColor:'var(--primary)'}}>
        <AccordionSummary expandIcon={<ExpandMoreIcon sx={{color:'white'}} />} aria-controls="panel4a-content" id="panel4a-header">
          <Typography sx={{ color: 'white' }}>Can I order personalized bouquets?</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography sx={{ color: 'white' }}>
            We offer personalized boutiques for events and parties. However, you will have to contact our store manager,
            Jen Clark, who will go over options, pricing, and seasonal availability. Feel free to reach out to Jen Clark
            through our shop’s number or through contact us link.
          </Typography>
        </AccordionDetails>
      </Accordion>

      <Accordion sx={{backgroundColor:'var(--primary)'}}>
        <AccordionSummary expandIcon={<ExpandMoreIcon sx={{color:'white'}} />} aria-controls="panel5a-content" id="panel5a-header">
          <Typography sx={{ color: 'white' }}>How many flowers do I get in each order?</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography sx={{ color: 'white' }}>
            Each flower comes in a bundle of five flowers. You can increment up by 5 each time you add more to your cart.
          </Typography>
        </AccordionDetails>
      </Accordion>

      <Accordion sx={{backgroundColor:'var(--primary)'}}>
        <AccordionSummary expandIcon={<ExpandMoreIcon sx={{color:'white'}} />} aria-controls="panel6a-content" id="panel6a-header">
          <Typography sx={{ color: 'white' }}>My order was placed, now what?</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography sx={{ color: 'white' }}>
            Once you place your order you will be given a confirmation email, you can pick up your flowers within the week
            of order placement at 123 Willow Street Brooklyn NY 112001.
          </Typography>
        </AccordionDetails>
      </Accordion>

      <Accordion sx={{backgroundColor:'var(--primary)'}}>
        <AccordionSummary expandIcon={<ExpandMoreIcon sx={{color:'white'}} />} aria-controls="panel7a-content" id="panel7a-header">
          <Typography sx={{ color: 'white' }}>Where can I find the pricing for flowers?</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography sx={{ color: 'white' }}>
            Pricing and ordering of flowers can be found in the products page. Go to the top right part of the screen and
            press products. Voila!
          </Typography>
        </AccordionDetails>
      </Accordion>
    </Container>
  );
}
