import React from 'react'
import Info, { info } from '../components/Info'

const Title = props => {
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
      <Title style={{ minWidth: 700 }}>Gabe</Title>
      <Title style={{ alignSelf: 'flex-end' }}>Marquez</Title>
    </div>
  </div>
}

const TitleText = ({ children }) => {
  return <h2 className='underline-hover title-text' style={{
    width: '100%',
    margin: '10px 0',
    boxSizing: 'content-box',
    textAlign: 'right'
  }}> {children}</h2 >
}

const Jobs = () => {
  return <div style={{
    height: '100%',
    width: '100%',
    display: 'flex',
    color: '#ffead6',
    // color: '#038f88',
    alignItems: 'center',
    alignSelf: 'flex-start',
    justifyContent: 'center',
    zIndex: 1
  }} >
    <div style={{
      flexFlow: 'column',
      width: '50vw',
      margin: '0 50px',
    }}>
      <TitleText>Software Engineer</TitleText>
      <TitleText>Audio Engineer</TitleText>
      <TitleText>Designer</TitleText>
      <TitleText>Musician</TitleText>
    </div>

    <Info>
      <info.h1>SureDone </info.h1>
      <info.h2>Software Engineer</info.h2>
      <info.h2>Multi-Channel eCommerce</info.h2>

      <info.h2>April 2016 - January 2020</info.h2>
      <info.p>
        I didn't know what I was getting into when I agreed to be the third developer at an early stage startup, but I believed the rumors that if you're scared then you're on the right path.
      </info.p>
      <info.p>
         as Junior Dev at 20 person start up toNew York small startup quickly proved the most demanding experience I've had in my lifetime.

        Having friends that took similar opportunities, I knew what I was getting into. A legacy spaghetti codebase with inordinate amount of patchwork, and only one of the contributing authros was around to explain it.
        When I joined, the very first task I had was a mission critical API update for a shipping service that customers leveraged 24/7/365.



        I went from not knowing anything about high performance API design to being asked to build


         of outpacing some of the most mission critical deadlines.

         ended with an expertise on the technical challenges of eCommerce, and complete responsibility several for competitive features from start to finish
        True to form, there continued to be large stretches of days where no matter what I was forced to learn something new and incorporate that into my work.


        Despite a lack of interest in theI couldn't say no when SureDone As my first step toward a high pressure, high performing future, I found myself maturing as a software engineer in the best possible environment.
        Rife with opportunities for designing, building, and delivering the best solutions to the challenging problems that a startup faces at the many stages of growth.
        Talking to

        The value SureDone has had in my life is immeasurable. And as much as I had to leave it behind, there will always be.
      </info.p>
    </Info>
  </div >
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
      <Jobs />
    </div>

  </>
}
