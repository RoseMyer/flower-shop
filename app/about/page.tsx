"use client"
import { Stack, Container, Typography, Box, Divider } from '@mui/material';

export default function About(props: any) {
  return (
    <Container maxWidth="lg" sx={{ py: 3 }}>
      <Stack spacing={3} sx={{ my: 7.5 }}>
        <Typography variant="h2" sx={{ textAlign: 'center', color: 'white' }}>
          ABOUT
        </Typography>
        
        <Box sx={{ width: '100%', display: 'flex', justifyContent: 'center', my: 2 }}>
          <img src="/full_store.png" alt="Full View of Flower Shop" style={{ maxWidth: '100%', height: 'auto' }} />
        </Box>

        <Box>
          <Typography variant="h5" sx={{ color: 'white' }}>
            Located:
          </Typography>
          <Typography sx={{ color: 'white' }}>
            123 Willow Street, Brooklyn, NY 112001
          </Typography>
          <Typography sx={{ color: 'white' }}>
            Hours: Monday through Sunday from 9:00 AM to 5:00 PM
          </Typography>
          <Typography sx={{ color: 'white' }}>
            Phone Number: 123-111-1234
          </Typography>
        </Box>
        
        <Divider variant="middle" sx={{ borderColor: 'grey' }} />
        
        <Box sx={{ width: '100%', display: 'flex', justifyContent: 'center', my: 2 }}>
          <img src="/old_timey.png" alt="Historic View of the Flower Shop" style={{ maxWidth: '100%', height: 'auto' }} />
        </Box>
        
        <Box>
          <Typography variant="h5" sx={{ color: 'white' }}>
            History:
          </Typography>
          <br/>
          <Typography sx={{ color: 'white' }}>
            Blackfords flower shop has been in business since 1956 when Ted Blackford opened it up with his wife. The Blackford family has been providing flowers to the local Brooklyn community ever since. They are focused on providing fresh, sustainably harvested flowers. Ted Blackford was known for saying “If nothing else will fix it, flowers will.” and we could not agree more.
          </Typography>
        </Box>
        
        <Divider variant="middle" sx={{ borderColor: 'grey' }} />

        <Box sx={{ width: '100%', display: 'flex', justifyContent: 'center', my: 2 }}>
          <img src="/two_guys.png" alt="Current Team at the Flower Shop" style={{ maxWidth: '100%', height: 'auto' }} />
        </Box>
        
        <Box>
          <Typography variant="h5" sx={{ color: 'white' }}>
            Team:
          </Typography>
          <br/>
          <Typography sx={{ color: 'white' }}>
            <strong>Tom Blackford:</strong> Third-generation flower shop owner, Tom grew up seeing the importance of putting smiles on people's faces through the gift of flowers. He scouts for ways to find the best blooms.
          </Typography>
          <br/>
          <Typography sx={{ color: 'white' }}>
            <strong>Haley Blackford:</strong> Co-owner of the flower shop, Haley is the eyes and ears of the company. She makes sure business is running smoothly and ensures consumer satisfaction.
          </Typography>
          <br/>
          <Typography sx={{ color: 'white' }}>
            <strong>Jen Clark:</strong> Jen has been the store manager for over 10 years, she is a Brooklyn native and knows what the community wants! She takes care of orders and administrative tasks.
          </Typography>
          <br/>
          <Typography sx={{ color: 'white' }}>
            <strong>Josh Fenzo:</strong> Josh is our florist and long-time friend of Tom. He takes his artistic knowledge and applies it to the flowers.
          </Typography>
        </Box>
        
        <Divider variant="middle" sx={{ borderColor: 'grey' }} />
        
        <Box>
          <Typography variant="h5" sx={{ color: 'white' }}>
            Reviews:
          </Typography>
          <br/>
          <Typography sx={{ color: 'white', mb: 1 }}>
            “Every time I walk into this shop, I remember why I can never leave this neighborhood. The customer service is the best and the flowers are always fresh and beautiful!” — Fionia M.
          </Typography>
          <br/>
          <Typography sx={{ color: 'white', mb: 1 }}>
            “The team takes great care in their flowers and customers. They are easy to reach and always willing to help!” — Edward P.
          </Typography>
          <br/>
          <Typography sx={{ color: 'white' }}>
            “I got my wedding flowers from them and the flowers made the whole venue smell like a burst of spring. Highly recommend!” — Sammy C.
          </Typography>
          <br/>
        </Box>
      </Stack>
    </Container>
  );
}
