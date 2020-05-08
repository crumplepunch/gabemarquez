import React from 'react'
import { Document } from './Document'

export const Position = ({ title, dates, tools }) => {
  return <>
    <div style={{
      fontFamily: 'mplus m1 light',
      justifyContent: 'space-between',
      marginBottom: 10,
      marginTop: 10,
      fontSize: 12
    }}>
      <div style={{
        flexFlow: 'column',
        width: '50%'
      }}>
        <h2 style={{
          fontFamily: 'mplus m1 light',
          fontSize: 16
        }}>{title}</h2>
        <p style={{ margin: 0, textAlign: 'left' }}><code style={{ textTransform: 'lowercase', color: 'rgb(77, 72, 66)' }}>{tools}</code></p>
      </div>
      <h2 style={{ fontSize: 12, lineHeight: "20px", maxWidth: 110, color: 'rgb(77, 72, 66)', textAlign: 'right' }}>{dates}</h2>
    </div>
  </>
}

export const Career = ({ company, summary, positions, children: experience }) => {
  return <div style={{
    flexFlow: 'column',
    maxWidth: 600,
    border: '1px solid #ffead6',
    marginBottom: 40,
    borderRadius: '4px',
  }}>

    <Document config={{
      margin: '10px 10px 10px 10px'
    }}>
    <h1 style={{
      fontSize: 20,
    }}>{company} </h1>
    <h2 style={{ fontSize: 20, marginBottom: 10, color: 'rgb(77, 72, 66)' }}>{summary}</h2>

    {experience}


    {positions.map((position, key) => <Position key={key} {...position} />)}
    </Document>
  </div>
}

