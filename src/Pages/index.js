import React from 'react'
import { Menu } from '../components'


export * from '../Home'

export const Software = () => {
  return <Menu sections={[{
    name: 'startups',
    content: () => {
      return <h1>hello from profesionally </h1>
    },
  }, {
    name: 'friends',
    content: () => null
  }, {
    name: 'personal',
    content: () => null
  }]} />
}