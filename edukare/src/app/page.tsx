"use client";
import Image from 'next/image'
import Navbar from "@/app/components/Navbar"
import Hero from "@/app/components/Hero"
import About from "@/app/components/About"
import Features from "@/app/components/Features"
import Middle from "@/app/components/Middle"
import Carousel from "@/app/components/Carousel"
import Clients from "@/app/components/Clients"
import Footer from "@/app/components/Footer"

export default function Home() {
  return (
    <main>
      <Navbar/>
      <Hero/>
      <Middle/>
      <Carousel/>
      <Clients/>
      <Footer/>
    </main>
  )
}
