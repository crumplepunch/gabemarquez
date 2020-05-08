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
    <p>
      Responsible for UI performance improvement and design. Laid the groundwork for a rebuild of their flagship product's front end.
    </p>
  </Career>
}