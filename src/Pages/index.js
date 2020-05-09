import React from 'react'
import { Menu } from '../components'


export * from '../Home'

export const Software = () => {
  return <Menu sections={[{
    name: 'professionally',
    label: 'professional',
    content: () => {
      return <h1>hello from profesionally </h1>
    },
  }, {
    name: 'collaboratively',
    label: 'friends',
    content: () => null
  }, {
    name: 'solo',
    label: 'solo',
    content: () => null
  }]} />
}