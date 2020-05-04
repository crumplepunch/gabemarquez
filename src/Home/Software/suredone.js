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
      My responsibilities included bespoke system integrations with external eCommerce services, while upgrading and maintaining the product's UI and API with an emphasis on performance at scale.
      Following a promotion, I went on to design, build, and manage the latest generation Order Management System, and the next generation of our application.
    </p>

    <p>
      Being the third engineering hire on such an earnest, intelligent, and high-performing team was an absolute joy.

      Weathering mission critical, high-pressure situations with this team will stay with me forever.
    </p>
  </Career>
}