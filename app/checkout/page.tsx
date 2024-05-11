"use client"
import { Stack, Container, Typography } from '@mui/material'

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

export default function Checkout(props: any) {
  return (
    <Container maxWidth="lg" sx={container_style}>
      <Stack direction="column" spacing={3} sx={{ width: '100%', alignItems: 'center', justifyContent: 'center' }}>
        {Array(15).fill(undefined).map((_, i) => (
          <Typography key={i} variant="h4" sx={{ textAlign: 'center', color: 'white' }}>
            CHECKOUT
          </Typography>
        ))}
      </Stack>
    </Container>
  )
}
