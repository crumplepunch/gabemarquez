import React, { useState, useEffect, useCallback } from 'react'
import { useWindowDimensions } from '../../hooks/index'
import DisplayText from './DisplayText'
import { useSpring, animated } from 'react-spring'

const BG_IMAGE = `${process.env.PUBLIC_URL}/bg-image.jpg`
const FG_IMAGE = `${process.env.PUBLIC_URL}/bg-image-top.png`


const loadImage = async (setImage, img) => {
  const image = await fetch(`${process.env.PUBLIC_URL}/${img}`)
  setImage(URL.createObjectURL(await image.blob()))
}

const imgStyle = {
  backgroundRepeat: 'no-repeat',
  backgroundSize: 'contain',
  transform: 'scaleX(-1)'
}
const Img = ({ height, src }) => <img id="mainImage" style={{ height, ...imgStyle }} src={src} alt="Portrait of Gabe Marquez"></img>
const animatedStyle = {
  overflow: 'hidden',
  boxSizing: 'content-box',
  position: 'absolute',
  flexWrap: 'nowrap',
}

const AnimatedImage = ({ showDisplayText, showMenu }) => {
  const { height } = useWindowDimensions()
  const [loaded, setLoaded] = useState(false)

  const { o, x } = useSpring({
    config: {
    },
    from: { o: 0, x: 20 },
    to: async (next, cancel) => {
      if (!loaded) {
        await next({ o: 0, x: 10 })
        showDisplayText()

        setLoaded(true)
      }
      await next({ o: 1, x: 0 })
      if (loaded) {
        showMenu()
      }
    },
  })


  return <>
    <animated.div style={{
      ...animatedStyle,
      opacity: o,
      height,
      transform: x.interpolate([0, 6, 10, 30], [0, 3, 8, 30]).interpolate(x => `translateX(${x}px)`)
    }}>
      <Img height={height} src={FG_IMAGE} />
    </animated.div>
    <animated.div style={{
      ...animatedStyle,
      height,
      zIndex: -2,
      opacity: o,
      transform: x.interpolate([0, 6, 10, 30], [0, 3, 8, 30]).interpolate(x => `translateX(${x}px)`)
    }}>
      <Img height={height} src={BG_IMAGE} />
    </animated.div>
  </>
}

export default ({ showMenu }) => {
  const [image, setImage] = useState()
  const [image2, setImage2] = useState()
  const [show, setShow] = useState(false)

  useEffect(() => {
    loadImage(setImage, 'bg-image-top.png')
  }, [setImage])

  useEffect(() => {
    loadImage(setImage2, 'bg-image.jpg')
  }, [setImage2])

  const showDisplayText = useCallback(() => setShow(true), [setShow])

  return <>
    {show && <DisplayText />}
    <AnimatedImage fg={image} bg={image2} showDisplayText={showDisplayText} showMenu={showMenu} />
  </>
}