import React from 'react'
import { Menu } from '../components'

import Professional from './Professional'
import Friends from './Friends'
import About from './About'
import Shows from './Bands'


export const Software = () => {
  return <Menu sections={[{
    name: 'professionally',
    label: 'professional',
    content: () => {
      return <Professional />
    }
  }, {
    name: 'collaboratively',
    label: 'friends',
    content: () => <Friends />
  }, {
    name: 'solo',
    label: 'solo',
    content: () => null
  }]} />
}

export const Music = () => {
  return <Menu sections={[{
    name: 'soon',
    label: 'events',
    content: () => null
  }, {
    name: 'solo',
    label: 'solo',
    content: () => null
  }, {
    name: 'friends',
    label: 'friends',
    content: () => null
  }]} />
}

export const Home = () => {
  return <Menu sections={[
    {
      name: 'human',
      label: 'about',
      content: About
    }
  ]} />
}

