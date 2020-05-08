import React, { useRef } from 'react'

import { useTrail } from 'react-spring'

import Software from '../Resume'
import About from '../About'
import Music from '../Music'
import { Section } from './Section'

import '../../components/Scroll/scroll.scss'


const sections = [
  {
    name: 'about',
    content: () => <About />
  },
  {
    name: 'software',
    content: () => <Software />
  }, {
    name: 'music',
    content: () => <Music />
  }, {
    name: 'thoughts',
    content: () => null
  }
]

export const Menu = () => {
  const trailRef = useRef()
  const trails = useTrail(sections.length, {
    from: {
      opacity: 0,
      width: 0
    },
    to: {
      opacity: 1,
      width: 100
    },
    ref: trailRef
  })

  return <>
    {
      trails.map((trail, index) => {
        const section = sections[index]
        return <Section key={`${index}${section.name}`} {...section} trail={trail} trailRef={trailRef}>
          <section.content />
        </Section>
      })
    }
  </>
}

export * from './Section'