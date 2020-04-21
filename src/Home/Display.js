import React from 'react'
import { useSpring, animated } from 'react-spring'
import { useWindowDimensions } from '../hooks/index'


export default () => {
  const { x, o } = useSpring({
    config: {
      mass: 5
    },
    from: {
      o: 0,
      x: -40
    },
    to: {
      o: 1,
      x: 0
    }
  })

  const { height, width } = useWindowDimensions()

  return <div style={{
    display: 'flex',
    // height: '46vh',
    textTransform: 'uppercase',
    width: height,
    fontSize: .108 * height,
    flexFlow: 'column',
    // color: '#0f0f15',
    alignItems: "center",
    position: 'absolute',
    bottom: 0,
    left: '0',
    transformOrigin: 'top left',
    transform: `translate(${.02 * height}px, 120px) rotate(-90deg)`
  }}>
    <animated.div class='display-text' style={{
      height: 120,
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
