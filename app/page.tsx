import About from '@/section/About'
import Contact from '@/section/Contact'
import Experience from '@/section/Experience'
import Hero from '@/section/Hero'
import Projects from '@/section/Projects'
import Skills from '@/section/Skills'

export default function Home() {
  return (
    <main>
      <section>
        <Hero />
      </section>
      <section id='about'>
        <About />
      </section>
      <section id='experience'>
        <Experience />
      </section>
      <section id='skills'>
        <Skills />
      </section>
      <section id='projects'>
        <Projects />
      </section>
      <section id='contact'>
        <Contact />
      </section>
      
    </main>
  )
}
