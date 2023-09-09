import Image from 'next/image'

import Hero from '@/components/homeComponents/Hero'
import About from '@/components/homeComponents/About'
import Project from '@/components/homeComponents/Project'

export default async function Home() {

  return (
    <main>
      <Hero />
      <About />
      <Project />
    </main>
  )
}
