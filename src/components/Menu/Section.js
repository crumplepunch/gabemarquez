import React, { useContext, useMemo, useRef } from 'react'
import { Link } from 'react-router-dom'
import { useWindowDimensions } from '../../hooks'
import { SectionContext } from '../../contexts'
import { useSpring, useChain, a } from 'react-spring'
import { Document } from '../../components'


export const SectionContent = ({ children, spring }) => {
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

const SectionHeader = ({ name, spring, label }) => {

  return <a.div style={{
    width: '100%', opacity: spring.opacity,
    textAlign: 'right'
  }} >
    <Link style={{ marginLeft: -144, minWidth: 100 }} to={`/${name}`}><code style={{ textTransform: 'capitalize' }}>{label || name}</code></Link>
    <a.div style={{
      width: spring.width.interpolate(x => `calc(${x}% + 25px)`),
      height: 10,
      marginLeft: 5,
      borderBottom: 'solid 1px white'
    }}></a.div>
  </a.div>
}

export const Section = ({ children, name, trail, trailRef, label, menu }) => {
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
    }
  })

  useChain([trailRef, springRef])

  return <>
    <SectionHeader name={name} spring={trail} label={label} />
    <SectionContent spring={spring} menu={menu}>{children}</SectionContent>
  </>
}
