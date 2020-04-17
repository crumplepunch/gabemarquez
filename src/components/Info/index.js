import React from 'react'

export const info = {
  h1: ({ children }) => <h1 className='info-title-text'>{children}</h1>,
  h2: ({ children }) => <h2 className='sub-header-text'>{children}</h2>,
  p: ({ children }) => <p className='info-body-text'>{children}</p>
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
