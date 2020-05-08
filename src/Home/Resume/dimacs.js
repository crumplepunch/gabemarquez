import React from 'react'
import { Career } from '../../components/Jobs'

const career = {
  company: 'DIMACS',
  summary: 'Center for Discrete Mathematics & Theoratical Computer Science',
  location: 'Piscataway, New Jersey',
  positions: [
    { title: 'Research Assistant', dates: 'from:AUG.2014 to:AUG.2015', tools: ['graph theory', ''] },
    { title: 'Research Assistant', dates: ['AUG.2014', 'AUG.2015'], tools: ['graph theory', 'python 3', 'django'] }
  ]
}

export default () => {
  return <Career {...career}>
    <p></p>
  </Career>
} 