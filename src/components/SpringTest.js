import React from 'react'
import { useSpring, animated } from 'react-spring'
import './clickable.scss'

const calc = (x, y) => [-(y - window.innerHeight / 2) / 20, (x - window.innerWidth / 2) / 20, 1.1]
const trans = (x, y, s) => `perspective(600px) rotateX(${x}deg) rotateY(${y}deg) scale(${s})`
const spring = () => ({ xys: [0, 0, 1], config: { mass: 5, tension: 350, friction: 40 } })

export function Clickable() {
  const [props, set] = useSpring(spring)

  return (
    <animated.div
      class="card"
      onMouseMove={({ clientX: x, clientY: y }) => set({ xys: calc(x, y) })}
      onMouseLeave={() => set({ xys: [0, 0, 1] })}
      style={{ transform: props.xys.interpolate(trans), height: '200', width: '200', backgroundColor: 'red' }}
    />
  )
}