import React from 'react'
import { Menu } from '../components'
import Work from './Work'

export const Home = () => {
  return <Menu sections={[
    {
      name: 'working',
      label: 'work',
      content: () => <Work />
    }
  ]} />
}

