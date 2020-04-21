import React from 'react'
import Software from './Software'
import { TitleText } from '../components'
import Display from './Display'

const Image = props => {
  return <>
    <div style={{
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
      }} src={`${process.env.PUBLIC_URL}/bg-image.jpg`} alt="Portrait of Gabe Marquez"></img>
      <img id="mainImageOverlay" style={{
        height: '100vh',
        backgroundRepeat: 'no-repeat',
        backgroundImage: `url('')`,
        backgroundSize: 'contain',
        position: 'absolute',
        left: 0,
        zIndex: 1,
        transform: 'scaleX(-1)'
      }} src={`${process.env.PUBLIC_URL}/bg-image-top.png`} alt="Portrait of Gabe Marquez"></img>

    </div>
    <Display />
    <div style={{

    }}>
      <h1> Test one</h1>
    </div>
  </>
}

export default () => {
  return <>
    <div style={{
      width: '100vw',
      height: '100%',
      zIndex: -2,
      overflow: 'hidden'
    }}>
      <Image />
    </div>
    <div style={{
      width: '100vw',
      position: 'absolute',
      bottom: ".5vh"
    }}>
      {/* <Software /> */}
      <div style={{
        textTransform: 'lowercase',
        padding: '0 2vw',
        width: '100%'
      }}>
        <TitleText>MENU</TitleText>
      </div>

    </div>

  </>
}
