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
      <p>I am a software engineer and musician living in Jersey City, working and playing around NYC.</p>
      <p>Do you have an idea you need help on? Hit my inbox with the rest.</p>
      <p><a href="mailto: who@gabe.is">who@gabe.is</a></p>
    </div>
  </div>

}   