import React from 'react'
import { useSpring, a } from 'react-spring'

const trans = (x, y, s) => `perspective(600px) rotateX(${x}deg) rotateY(${y}deg) scale(${s})`
const recordTrans = (x, y, s) => `perspective(600px) rotateX(${x}deg) rotateY(${y}deg) scale(${s}) translateX(${10 * (s * 20 - 20)}px) `

const Card = ({ children }) => {
  const [props, set] = useSpring(() => ({ xys: [0, 0, 1], config: { mass: 5, tension: 350, friction: 70 } }))

  const callback = (x, y) => {

    return [
      (y - 80) / 8,
      -(x - 80) / 8,
      1.15
    ]
  }

  return <>
    <div
      style={{
        position: 'relative',
        height: 220,
        width: 220,
      }}
      onMouseMove={({ clientX: x, clientY: y, currentTarget }) => {
        const bounds = currentTarget.getBoundingClientRect()
        set({ xys: callback(x - bounds.left, y - bounds.top) })
      }}
      onMouseLeave={() => set({ xys: [0, 0, 1] })}>
      <a.div style={{
        height: '120px',
        width: '120px',
        flexFlow: 'column',
        backgroundColor: '#ffead6',
        border: 'solid 1px #ffead6',
        borderRadius: 4,
        padding: 20,
        margin: 20,
        justifyContent: 'flex-end',
        transform: props.xys.interpolate(trans)
      }}>
        {children}
      </a.div >

      <a.div style={{
        position: 'absolute',
        zIndex: -1,
        height: 160,
        width: 160,
        margin: 20,
        border: 'solid 1px #ffead6',
        borderRadius: 80,
        transform: props.xys.interpolate(recordTrans)
      }}>

      </a.div>
    </div>

  </>
}

const current = [
  'Crystal Rose Peros',
  'Taxivision',
  'World\'s Afterparty',
  'Jeff Linden and the Black Spot Society',
]

const past = [
  'KNWLDG',
  'Professor Caveman',
  'johnnycola'
]

const friends = [
  'Goodfight',
  'Godcaster',
  'The Planet You',
  'Conundrum',
  'Brain Orchestra',
  'Honey Trap'
]
export default () => {
  return <>
    <div style={{
      maxWidth: 800,
      flexFlow: 'column',
      cursor: 'pointer',
    }}>
      <h1 style={{ fontSize: 30 }}>Artists</h1>
      <p>Artists I perform with</p>
      <div style={{
        maxWidth: 800,
        flexFlow: 'row',
        cursor: 'pointer',
        flexWrap: 'wrap',
      }}>
        {current.map((friend, i) => <Card key={`card-${i}`}><code style={{ color: 'black', cursor: 'pointer' }}>{friend}</code></Card>)}
      </div>
    </div>
    <div style={{
      maxWidth: 800,
      flexFlow: 'column',
      cursor: 'pointer',
    }}>
      <h1 style={{ fontSize: 30 }}>History</h1>
      <p>Artists I no longer perform with but love dearly</p>
      <div style={{
        maxWidth: 800,
        flexFlow: 'row',
        cursor: 'pointer',
        flexWrap: 'wrap',
      }}>
        {past.map((friend, i) => <Card key={`card-${i}`}><code style={{ color: 'black', cursor: 'pointer' }}>{friend}</code></Card>)}
      </div>
    </div>
    <div style={{
      maxWidth: 800,
      flexFlow: 'column',
      cursor: 'pointer',
    }}>
      <h1 style={{ fontSize: 30 }}>Special Mention</h1>
      <p>Artists that deserve a shoutout</p>
      <div style={{
        maxWidth: 800,
        flexFlow: 'row',
        cursor: 'pointer',
        flexWrap: 'wrap',
      }}>
        {friends.map((friend, i) => <Card key={`card-${i}`}><code style={{ color: 'black', cursor: 'pointer' }}>{friend}</code></Card>)}
      </div>
    </div>
  </>
}