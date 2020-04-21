import React from 'react'
import Software from './Software'
import { TitleText } from '../components'
import Display from './Display'
import { useWindowDimensions } from '../hooks/index'


const Image = props => {
  const { height, width } = useWindowDimensions()

  return <div style={{
    height,
    width,
    overflow: 'hidden'
  }}>
    <div style={{
      width,
      height,
      overflow: 'hidden',
      boxSizing: 'content-box',
      position: 'absolute',
      flexWrap: 'nowrap'
    }}>
      <img id="mainImage" style={{
        height: height,
        backgroundRepeat: 'no-repeat',
        backgroundImage: `url('')`,
        backgroundSize: 'contain',
        transform: 'scaleX(-1)'
      }} src={`${process.env.PUBLIC_URL}/bg-image.jpg`} alt="Portrait of Gabe Marquez"></img>

    </div>
    <div style={{
      width,
      height,
      overflow: 'hidden',
      boxSizing: 'content-box',
      flexWrap: 'nowrap'
    }}>
      <img id="mainImageOverlay" style={{
        height: height,
        backgroundRepeat: 'no-repeat',
        backgroundImage: `url('')`,
        backgroundSize: 'contain',
        position: 'absolute',
        left: 0,
        zIndex: 1,
        transform: 'scaleX(-1)'
      }} src={`${process.env.PUBLIC_URL}/bg-image-top.png`} alt="Portrait of Gabe Marquez"></img>

      <Display />
    </div>

  </div>
}

export default () => {
  const { height, width } = useWindowDimensions()

  return <>
    <div style={{
      width: width,
      height: height,
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
        <TitleText>x: {width}</TitleText>
        <TitleText>y: {height}</TitleText>

      </div>

    </div>

  </>
}
