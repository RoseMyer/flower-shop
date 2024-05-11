"use client"
import { Stack, Container, Typography } from '@mui/material'


export default function Help(props: any) {
  return (
    <Container maxWidth="lg" sx={{py:3}}>
      <Stack direction="column" spacing={3} sx={{ width: '100%', alignItems: 'center', justifyContent: 'center', my: 7.5 }}>
        {Array(15).fill(undefined).map((_, i) => (
          <Typography key={i} variant="h4" sx={{ textAlign: 'center', color: 'white' }}>
            HELP
          </Typography>
        ))}
      </Stack>
    </Container>
  )
}
