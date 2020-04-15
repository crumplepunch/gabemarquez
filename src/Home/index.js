import React from 'react'
import { Clickable } from '../components'

const Title = props => {
  const { children } = props
  return <div style={{
    flexFlow: 'row',
    flexWrap: 'wrap',
    paddingLeft: 10,
    ...props.style
  }}>
    {[...children].map((letter, i) => <h1 key={letter + i} style={{
      overflow: 'hidden',
      width: '25vw',
      maxWidth: 100,
      margin: 0,
      fontSize: 100,
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
    <img style={{
      height: '100vh',
      backgroundRepeat: 'no-repeat',
      backgroundImage: `url('')`,
      backgroundSize: 'contain',
      transform: 'scaleX(-1)'
    }} src={`${process.env.PUBLIC_URL}/bg-image.jpg`}></img>
    <div style={{
      display: 'flex',
      overflow: 'hidden',
      flexFlow: 'column',
      height: '100%',
      flexFlow: 'column',
      justifyContent: 'space-between',
      color: '#0f0f15',
      position: 'absolute',
      // transform: ' translate(0,0) rotate(70deg)'
    }}>
      <Title style={{ width: 400 }}>Gabe</Title>
      <Title style={{ width: 400, alignSelf: 'flex-end' }}> Marquez</Title>
    </div>
  </div>
}

const JobTitle = ({ children }) => {
  return <h2 className='underline-hover' style={{
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
    color: '#fff',
    alignItems: 'center',
    alignSelf: 'flex-start',
    zIndex: 1
  }} >
    <div style={{
      flexFlow: 'column',
      width: '100%',
      height: 100 % ','
    }}>
      <JobTitle>Software Engineer</JobTitle>
      <JobTitle>Audio Engineer</JobTitle>
      <JobTitle>Musician</JobTitle>
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
      <Jobs />
    </div>

  </>
}