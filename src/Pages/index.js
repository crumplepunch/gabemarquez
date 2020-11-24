import React from 'react'
import { Menu } from '../components'

import About from './About'

export const Home = () => {
  return <Menu sections={[
    {
      name: 'human',
      label: 'about',
      content: About
    }
  ]} />
}

