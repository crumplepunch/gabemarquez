import React from 'react'
import { Career } from '../../components/Jobs'

const career = {
  company: 'SureDone',
  summary: 'Multi-Channel eCommerce',
  positions: [
    { title: 'Software Engineer', dates: 'from:JAN.2017 to:JAN.2020', tools: 'react node php7 mysql mongodb' },
    { title: 'Junior Software Engineer', dates: 'from:APR.2016 to:JAN.2017', tools: 'angular node php5 mysql' }
  ]
}

export default () => {
  return <Career {...career} >
    <p>
      Deep integration with external services, product UI and API design, development, and maintenance.
      I went on to design, build, and manage the Order Management System, and the next generation of the product UI.
    </p>
  </Career>
}
