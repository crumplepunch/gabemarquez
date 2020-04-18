import React from 'react'

export const info = {
  h1: ({ children, style={} }) => <h1 style={style} className='info-title-text'>{children}</h1>,
  h2: ({ children, style={} }) => <h2 style={style} className='sub-header-text'>{children}</h2>,
  p: ({ children, style={textAlign:'justify', marginTop: 0} }) => <p style={style} className='info-body-text'>{children}</p>
}

export default ({children}) => {
  return (
    <div style={{
      flexFlow: 'column',
      height: '100%',
      alignItems: 'flex-start',
      justifyContent: 'flex-start',
      paddingTop: '100px',
      width: '50vw',
      margin: '0 50px'
    }}>
      {children}
    </div>
  )
}
