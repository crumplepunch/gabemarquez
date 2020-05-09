import React, { useContext, useMemo, useRef } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { useWindowDimensions } from '../../hooks'
import { SectionContext } from '../../contexts'
import { useSpring, useChain, a } from 'react-spring'
import { Document } from '../../components'

import { useParams } from 'react-router-dom'

export const SectionContent = ({ children, spring }) => {

  console.log(spring)
  const params = useParams()

  console.log({ sectionContentParams: params })

  return <div className="scroll-container" style={{
    flexFlow: 'column'
  }}>
    <a.div className='scroll' style={{
      maxHeight: '100%',
      maxWidth: '100%',
      ...spring
    }}>
      <Document>{children}</Document>
    </a.div>
  </div>
}

const SectionHeader = ({ name, spring }) => {
  const { pathname } = useLocation()
  const base = useMemo(() => pathname.split('/')[1], [pathname])


  return <a.div style={{
    width: '100%', opacity: spring.opacity,
    textAlign: 'right'
  }} >
    <Link style={{ marginLeft: -124, minWidth: 80 }} to={`/${base}/${name}`}><code style={{ textTransform: 'capitalize' }}>{name}</code></Link>
    <a.div style={{
      width: spring.width.interpolate(x => `calc(${x}% + 25px)`),
      height: 10,
      marginLeft: 5,
      borderBottom: 'solid 1px white'
    }}></a.div>
  </a.div>
}

export const Section = ({ children, name, trail, trailRef }) => {
  const { height } = useWindowDimensions()
  const { currentSection } = useContext(SectionContext)
  const selected = useMemo(() => currentSection === name, [currentSection, name])

  const springRef = useRef()
  const spring = useSpring({
    from: {
      height: 0,
      opacity: 0,
      //  transform: 'translate3d(20px,0,0)'
    },
    to: {
      height: selected ? height : 0,
      opacity: selected ? 1 : 0,
      // transform: `translate3d(${selected ? 0 : 200}px,0,0)`
    },
    ref: springRef
  })

  useChain([trailRef, springRef])

  const params = useParams()
  console.log({ sectionParams: params })
  return <>
    <SectionHeader name={name} spring={trail} />
    <SectionContent spring={spring}>{children}</SectionContent>
  </>
}
