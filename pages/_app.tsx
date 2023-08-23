"use client";
import '@/styles/globals.css'
import { ThemeProvider } from 'next-themes';
import type { AppProps } from 'next/app'
import { ParallaxProvider } from 'react-scroll-parallax';
import "./styles.css";

export default function App({ Component, pageProps }: AppProps) {

  return (

      <ParallaxProvider scrollAxis='vertical'>
    <ThemeProvider enableSystem={true} attribute="class">
        <Component {...pageProps} />
    </ThemeProvider>
      </ParallaxProvider>
  )
}
