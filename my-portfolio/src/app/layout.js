import {
  Inter,
  Inter_Tight,
  JetBrains_Mono,
  Playfair_Display,
} from 'next/font/google';
import './globals.css';

// 1. Body Text
const inter = Inter ({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
});

// 2. Headlines (Tighter tracking built-in)
const interTight = Inter_Tight ({
  subsets: ['latin'],
  variable: '--font-inter-tight',
  display: 'swap',
});

// 3. Code/Labels
const jetbrains = JetBrains_Mono ({
  subsets: ['latin'],
  variable: '--font-jetbrains',
  display: 'swap',
});

// 4. Elegant Accents
const playfair = Playfair_Display ({
  subsets: ['latin'],
  variable: '--font-playfair',
  display: 'swap',
});

export const metadata = {
  title: 'Jasmine Lai Hwee Ying',
  description: 'Software Engineer Portfolio',
};

export default function RootLayout({children}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body
        className={`${inter.variable} ${interTight.variable} ${jetbrains.variable} ${playfair.variable} font-sans antialiased selection:bg-accent selection:text-accent-foreground`}
      >
        {children}
      </body>
    </html>
  );
}
