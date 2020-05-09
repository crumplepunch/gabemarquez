import React from 'react'
import { Menu } from '../components'
import { useParams } from 'react-router-dom'
import Work from './Work'

export const Home = () => {
  const params = useParams()

  console.log({ params })

  return <Menu sections={[
    {
      name: 'work',
      content: () => <Work />
    }
  ]} />
}

