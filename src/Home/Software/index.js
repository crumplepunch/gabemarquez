import React from 'react'
import SureDone from './suredone'
import NIKSUN from './niksun'
import DIMACS from './dimacs'
import { TitleText } from '../../components'


export default () => {
  const carousel = [
    <SureDone />,
    <NIKSUN />,
    <DIMACS />
  ]
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
      width: '500px',
      margin: '0 50px',
      textTransform: 'lowercase'
    }}>
      <TitleText>Friends</TitleText>
      <TitleText>Startups</TitleText>
      <TitleText>Freelance</TitleText>
    </div>

    <SureDone />
    {/* <NIKSUN />
    <DIMACS /> */}
  </div >
}
