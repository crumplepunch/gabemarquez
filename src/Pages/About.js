import React from 'react'

export default () => {
  return <div style={{
    display: 'flex',
    color: '#ffead6',
    // color: '#038f88',
    alignItems: 'center',
    opacity: 1,
    alignSelf: 'flex-start',
    height: '100%',
    justifyContent: 'center',
    width: '100%',
    flexFlow: 'column',
  }}>
    <div style={{
      maxWidth: 600,
      flexFlow: 'column'
    }}>
      <h1>Hello!</h1>
      <p>I am a programmer and musician living in Jersey City with a strong love for coffee, topology, and a penchant for excellence.</p>
      <p>Looking to write software or music? </p>
      <p>Let's link!</p>
      <p><a href="mailto: who@gabe.is" style={{ textDecoration: 'underline' }}>who@gabe.is</a></p>
    </div>
  </div>

}
