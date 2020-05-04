import React from 'react'
import { useSpring, animated } from 'react-spring'
export const HoverText = ({ children }) => {
  return <div className='hover-text'>
    <span>
      {children}
    </span>
  </div>
}

export const TitleText = ({ children }) => {
  const { y, o } = useSpring({
    from: { y: 30, o: 0 },
    to: async (next) => {
      await next({ y: 0, o: 1 })
    }
  })
  return <animated.h2 className='code' style={{
    transform: y.interpolate(y => `translateY(${y}px)`),
    opacity: o,
    boxSizing: 'content-box'
  }}> {children}</animated.h2 >
}

export const BodyText = ({ children }) => {
  const { y, o } = useSpring({
    from: { y: -30, o: 0 },
    to: async (next) => {
      await next({ y: 0, o: 1 })
    }
  })

  const props = {
    className: 'body',
    style: {
      fontSize: '22px',
    }
  }
  return <animated.p {...props}>
    {children}
  </animated.p>
}