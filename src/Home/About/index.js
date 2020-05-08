import React from 'react'
import { BodyText } from '../../components/Text'
import { useSpring, animated } from 'react-spring'

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
      <p>I actually hate talking about myself. </p>
      <p>Love talking to people, though – hit my inbox with the rest </p>
      <p><a href="mailto: who@gabe.is">who@gabe.is</a></p>
    </div>
  </div>

}   