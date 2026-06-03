import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Sudak Maroc — La Chimie qui Bâtit le Maroc',
  description:
    'Colles à carrelage et adjuvants pour mortier et béton de haute qualité, fabriqués à Agadir. Votre partenaire qualité depuis 2008.',
  keywords: ['colles carrelage Maroc', 'adjuvants mortier Agadir', 'SUDAK MAROC', 'chimie construction'],
  metadataBase: new URL('https://sudakmaroc.com'),
  openGraph: {
    title: 'Sudak Maroc — La Chimie qui Bâtit le Maroc',
    description: 'Colles à carrelage & adjuvants pour mortier et béton. Votre partenaire qualité depuis 2008.',
    locale: 'fr_MA',
    type: 'website',
    images: [{ url: '/og-image.jpg', width: 1200, height: 630, alt: 'Sudak Maroc' }],
  },
  twitter: { card: 'summary_large_image', title: 'Sudak Maroc', description: 'Colles à carrelage & adjuvants. Depuis 2008, Agadir Maroc.' },
  icons: {
    icon: '/favicon.svg',
    shortcut: '/favicon.svg',
    apple: '/favicon.svg',
  },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="fr">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Bebas+Neue&family=Outfit:wght@300;400;500;600;700&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="antialiased">{children}</body>
    </html>
  )
}
