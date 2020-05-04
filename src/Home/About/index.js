import React from 'react'
import { BodyText } from '../../components/Text'

export default () => {

  return <div style={{
    display: 'flex',
    color: '#ffead6',
    // color: '#038f88',
    alignItems: 'center',
    alignSelf: 'flex-start',
    height: '100%',
    justifyContent: 'center',
    width: '100%',
    flexFlow: 'column'
  }}>
    <div style={{
      maxWidth: 600,
    }}>
      <BodyText> Gabe Marquez is a musician and software engineer with an appetite for quality. </BodyText>
    </div>
  </div>

}