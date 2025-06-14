import AboutSection from '@/ui/components/about'
import ContactSection from '@/ui/components/contact'
import HeroSection from '@/ui/components/hero'
import React from 'react'

export default function page() {
  return (
    <div>

      <div id='home'>
         <HeroSection/>
      </div>
   
   <div id='about'>
       <AboutSection/>
   </div>
 

 <div id='contact'>
   <ContactSection/>
 </div>
   





    </div>
  )
}
