import React from 'react'
import Info, { info } from '../../components/Info'

export default () => {
  return (
    <Info>
      <info.h1>NIKSUN</info.h1>
      <info.h2 style={{ marginBottom: 32 }}>Cyber Security</info.h2>

      <info.p>Though my time here was short, I lead a complete redesign and rebuild of their flagship product's front end. The industry wasn't a good fit, and this particular gig lacked the mentorship I was looking for as a more junior level engineer. </info.p>
      <info.h2 style={{
        paddingTop: 16,
        borderTop: '1px solid white'
      }}>Front End Software Developer</info.h2>
      <info.h2>January 2016 - March 2017</info.h2>

      <info.p><code>Angular React Node Docker</code></info.p>
    </Info>
  )
}