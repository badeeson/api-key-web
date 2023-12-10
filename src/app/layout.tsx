import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';
import ThemeRegistry from '@/components/ThemeRegistry/ThemeRegistry';
import { Box } from '@mui/material';
import DrawerAppBar from '@/components/DrawerAppBar';

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'API Keys',
  description: 'Generated API Keys',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <DrawerAppBar>
          {children}
        </DrawerAppBar>
        {/* <ThemeRegistry>
          <Box
            component="main"
            sx={{
              flexGrow: 1,
              bgcolor: 'background.default',
              mx: 2,
              my: 3,
              p: 3,
            }}
          >
            {children}
          </Box>
        </ThemeRegistry> */}
      </body>
    </html>
  )
}
