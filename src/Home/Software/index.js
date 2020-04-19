import React from 'react'
import SureDone from './suredone'
import NIKSUN from './niksun'
import { TitleText } from '../../components'


export default () => {
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
      <TitleText>Freelance</TitleText>
      <TitleText>Startups</TitleText>
      <TitleText>Friends</TitleText>
    </div>

    <SureDone />
    <NIKSUN />
  </div >
}
