import type { Metadata } from 'next';
import { Nunito_Sans } from 'next/font/google';
import './globals.css';

const nunitoSans = Nunito_Sans({
  subsets: ['latin'],
  weight: ['400', '600', '700', '800'],
  variable: '--font-nunito-sans',
  display: 'swap',
});

export const metadata: Metadata = {
  title: 'Thinking Trainer',
  description: 'Learn to fact-check through short daily exercises.',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={nunitoSans.variable}>
      {/*
        Outer body: fills the viewport with the neutral dark background so
        desktop sidebars don't show white.
        Inner div: 430 px phone shell, centred horizontally.
      */}
      <body className="bg-neutral-900 font-sans antialiased">
        <div className="relative mx-auto max-w-[430px] min-h-screen bg-background">
          {children}
        </div>
      </body>
    </html>
  );
}
