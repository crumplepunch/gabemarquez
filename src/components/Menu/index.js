import React, { useRef, useMemo } from 'react'
import { useTrail } from 'react-spring'
import { Section } from './Section'
import { useParams } from 'react-router-dom'
import { SectionContext } from '../../contexts'
import '../../components/Scroll/scroll.scss'

export const Menu = ({ sections }) => {
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
    // ref: trailRef
  })

  const params = useParams()
  const { section } = params

  const currentSection = useMemo(() => section, [section])

  return <SectionContext.Provider value={{ currentSection }}>
    {
      trails.map((trail, index) => {
        const section = sections[index]

        return <Section key={`${index}${section.name}`} {...section} trail={trail} trailRef={trailRef}>
          <section.content />
        </Section>
      })
    }
  </SectionContext.Provider>
}

export * from './Section'