import React from 'react'
import Info, { info } from '../../components/Info'

const TitleText = ({ children }) => {
  return <h2 className='underline-hover title-text' style={{
    width: '100%',
    margin: '10px 0',
    boxSizing: 'content-box',
    textAlign: 'right'
  }}> {children}</h2 >
}


export default () => {
  return <div style={{
    height: '100%',
    width: '100%',
    display: 'flex',
    color: '#ffead6',
    // color: '#038f88',
    alignItems: 'center',
    alignSelf: 'flex-start',
    justifyContent: 'center',
    zIndex: 1
  }} >
    <div style={{
      flexFlow: 'column',
      width: '50vw',
      margin: '0 50px',
    }}>
      <TitleText>Personal </TitleText>
      <TitleText>Professional</TitleText>
      <TitleText>Friends</TitleText>
      <TitleText>Calendar</TitleText>
    </div>

    <Info>
      <info.h1>SureDone </info.h1>
      <info.h2 style={{ marginBottom: 32 }}>Multi-Channel eCommerce</info.h2>
      <info.p>
        Being the third engineering hire on such an earnest, intelligent, and high-performing team was an absolute joy.
      </info.p>

      <info.p>
        In the beginning, my responsibilities included bespoke system integrations with external eCommerce services, while upgrading and maintaining the product's UI and API.
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

    <Info>
      <info.h1>NIKSUN</info.h1>
      <info.h2 style={{ marginBottom: 32 }}>Cyber Security</info.h2>

      <info.p>Though my time here was short, I lead a complete redesign and rebuild of their flagship product's front end. The industry wasn't a good fit, and this particular gig lacked the mentorship I was looking for as a more junior level engineer. </info.p>
      <info.h2 style={{
        paddingTop: 16,
        borderTop: '1px solid white'
      }}>Front End Software Developer</info.h2>
      <info.h2>January 2016 - March 2017</info.h2>

      <info.p><code>Angular React Node Docker</code></info.p>
    </Info>
  </div >
}
