import React from 'react'
import { useSpring, animated } from 'react-spring'

export const TitleText = ({ children }) => {
  const { y, o } = useSpring({
    from: { y: 30, o: 0 },
    to: async (next) => {
      await next({ y: 0, o: 1 })
    }
  })
  return <animated.h2 className='underline-hover title-text' style={{
    transform: y.interpolate(y => `translateY(${y}px)`),
    opacity: o,
    width: '100%',
    margin: '10px 30px',
    boxSizing: 'content-box',
    textAlign: 'right'
  }}> {children}</animated.h2 >
}