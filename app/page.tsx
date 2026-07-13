'use client'

import { Fragment } from 'react'
import Intro from './components/intro'
import About from './components/about'
import Projects from './components/projects'
import Skills from './components/skills'
import Experience from './components/experience'
import Contact from './components/contact'
export const metadata: Metadata = {
  title: "Frontend Developer in Pokhara, Nepal",

};
export default function Home() {
  return (
    <Fragment>
      <Intro />
      {/* <About /> */}
      <Skills />
      <Projects />
      <Experience />
      <Contact />
    </Fragment>
  )
}
