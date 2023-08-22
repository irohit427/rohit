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
      <section>
        <About />
      </section>
      <section>
        <Experience />
      </section>
      <section>
        <Skills />
      </section>
      <section>
        <Projects />
      </section>
      <section>
        <Contact />
      </section>
      
    </main>
  )
}
