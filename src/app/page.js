"use client"

import About from '@/components/about'
import Banner from '@/components/banner'
import Contact from '@/components/contact'
import Header from '@/components/header'
import Navbar from '@/components/navbar'
import Services from '@/components/services'
import Works from '@/components/work'
import "../i18n";

export default function Home() {
  return (
    <main
      className="bg-gradient-to-r from-slate-900 from-21% to-slate-700 to-117% text-slate-50/50 h-full"
    >
      <div className='bg-no-repeat bg-cover overflow-hidden'>
        <Header />
        <Banner />
        <Navbar />
        <About />
        <Services />
        <Works />
        <Contact />
        <div className="h-[4000px]"></div>
      </div>
    </main>
  )
}
