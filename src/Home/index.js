import React from 'react'
import Info, { info } from '../components/Info'
import Software from './Software'

const Name = props => {
  const { children } = props
  return <div className='display-text' style={{
    flexFlow: 'row',
    flexWrap: 'wrap',
    paddingLeft: 10,
    transform: 'rotate(36deg)',
    // color: '#00ffc3',
    color: '#ffb825',
    ...props.style
  }}>
    {[...children].map((letter, i) => <h1 key={letter + i} style={{
      overflow: 'hidden',
      width: '20vw',
      maxWidth: 100,
      margin: 0,
      fontSize: 76,
    }}> {letter}</h1>)
    }
  </div >
}

const Image = props => {
  return <div style={{
    height: '100vh',
    width: '100vw',
    overflow: 'hidden',
    boxSizing: 'content-box',
    flexWrap: 'nowrap'
  }}>
    <img id="mainImage" style={{
      height: '100vh',
      backgroundRepeat: 'no-repeat',
      backgroundImage: `url('')`,
      backgroundSize: 'contain',
      transform: 'scaleX(-1)'
    }} src={`${process.env.PUBLIC_URL}/bg-image.jpg`}></img>
    <div style={{
      display: 'flex',
      overflow: 'hidden',
      height: '100%',
      flexFlow: 'column',
      justifyContent: 'space-evenly',
      // color: '#0f0f15',
      position: 'absolute',
      // transform: ' translate(0,0) rotate(70deg)'
    }}>
      <Name style={{ minWidth: 700 }}>Gabe</Name>
      <Name style={{ alignSelf: 'flex-end' }}>Marquez</Name>
    </div>
  </div>
}

export default () => {
  return <>
    <div style={{
      width: '100vw',
      height: '100vh',
      zIndex: -2,
      overflow: 'hidden'
    }}>
      <Image />
    </div>
    <div style={{
      width: '100vw',
      height: '100vh',
      position: 'absolute'
    }}>
      <Software />
    </div>

  </>
}
