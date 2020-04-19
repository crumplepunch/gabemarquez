import React from 'react'
import Info, { info } from '../../components/Info'

export default () => {
  return (
    <Info>
      <info.h1>SureDone </info.h1>
      <info.h2 style={{ marginBottom: 32 }}>Multi-Channel eCommerce</info.h2>
      <info.p>
        Being the third engineering hire on such an earnest, intelligent, and high-performing team was an absolute joy.
    </info.p>

      <info.p>
        In the beginning, my responsibilities included bespoke system integrations with external eCommerce services, while upgrading and maintaining the product's UI and API with an emphasis on performance at scale.
    </info.p>

      <info.p>
        In the later years, I designed and implemented the latest generation order management system, and the next generation of our application.
    </info.p>

      <info.p>
        Weathering mission critical, high-pressure situations with this team will stay with me forever.
    </info.p>

      <info.h2 style={{
        paddingTop: 16,
        borderTop: '1px solid white'
      }}>Junior Software Engineer</info.h2>
      <info.h2>April 2016 - January 2017</info.h2>
      <info.p><code>Angular Node PHP5 MySQL</code></info.p>

      <div style={{
        width: '100%',
        height: '20px'
      }}></div>
      <info.h2>Software Engineer</info.h2>
      <info.h2>January  2017 - January 2020</info.h2>

      <info.p><code>React Node PHP7 MySQL MongoDB</code></info.p>
    </Info>
  )
}