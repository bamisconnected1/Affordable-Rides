
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider"
import { HeroHeader } from '@/components/header'
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
        
 <head>
        <script
          async
          crossOrigin="anonymous"
          src="https://tweakcn.com/live-preview.min.js"
        />
      </head>



        <body>
         
         
          <ThemeProvider
            attribute="class"
            defaultTheme="system"
            enableSystem
            disableTransitionOnChange
          >
         <HeroHeader />
            {children}
          </ThemeProvider>
        </body>
      </html>
  );
}
