import React from 'react'

export const TitleText = ({ children }) => {
  return <h2 className='underline-hover title-text' style={{
    width: '100%',
    margin: '10px 0',
    boxSizing: 'content-box',
    textAlign: 'right'
  }}> {children}</h2 >
}