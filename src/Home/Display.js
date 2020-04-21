import React from 'react'
import { useSpring, animated } from 'react-spring'

export default () => {
  const { x, o } = useSpring({
    config: {
      mass: 3
    },
    from: {
      o: 0,
      x: -20
    },
    to: {
      o: 1,
      x: 0
    }
  })

  return <div style={{
    display: 'flex',
    // height: '46vh',
    textTransform: 'uppercase',
    width: '100vh',
    flexFlow: 'column',
    // color: '#0f0f15',
    alignItems: "center",
    position: 'fixed',
    bottom: '0',
    left: '0',
    transformOrigin: 'top left',
    transform: 'translate(2vh, 14.6vh) rotate(-90deg)'
  }}>
    <animated.div class='display-text' style={{
      transform: x.interpolate(x => `translateY(${x}px)`),
      opacity: o
    }}>
      Gabe Marquez
    </animated.div>
    {/* {[...children].map((letter, i) => <h1 key={letter + i} style={{
      margin: 0,
    }}> {letter}</h1>)
    } */}
  </div >
}
