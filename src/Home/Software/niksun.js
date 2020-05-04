import React from 'react'
import { Career } from '../../components/Jobs'

const career = {
  company: 'NIKSUN',
  summary: 'Cyber Security',
  location: 'Princeton, New Jersey',
  positions: [
    { title: 'Front End Software Developer', dates: 'from:JAN.2016 to:MAR.2017', tools: 'Angular React Node Docker' }
  ]
}

export default () => {
  return <Career {...career} >
    <p>Though my time here was short, I lead a complete redesign and rebuild of their flagship product's front end. The industry wasn't a good fit, and this particular gig lacked the mentorship I was looking for as a more junior level engineer. </p>
  </Career>
}