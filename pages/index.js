import Head from 'next/head'
import Navbar from '../components/Navbar'
import Hero from '../components/Hero'
import Categories from '../components/Categories'
import Products from '../components/Products'
import Plans from '../components/Plans'
import Reviews from '../components/Reviews'
import Footer from '../components/Footer'

export default function Home() {
  return (
    <>
      <Head>
        <title>EasyToolShop - Premium Tools at Affordable Price</title>
        <meta name="description" content="Buy ChatGPT, Canva, Netflix, Spotify and 100+ premium tools at best price in Bangladesh" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta property="og:title" content="EasyToolShop" />
        <meta property="og:description" content="Premium Tools at Affordable Price" />
      </Head>
      <main style={{background:'#0F172A', minHeight:'100vh'}}>
        <Navbar />
        <Hero />
        <Categories />
        <Products />
        <Plans />
        <Reviews />
        <Footer />
      </main>
    </>
  )
}
