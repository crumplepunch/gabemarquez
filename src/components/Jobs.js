import React from 'react'
import Info, { info } from './Info'
export const Career = ({ company, summary, positions, children: experience }) => {
  return <Info>
    <info.h1>{company} </info.h1>
    <info.h2 style={{ marginBottom: 32, color: 'rgb(77, 72, 66)' }}>{summary}</info.h2>

    {experience}

    <info.space />

    {positions.map(position => <Position {...position} />)}
  </Info>

}

export const Position = ({ title, dates, tools }) => {
  return <>
    <div style={{
      justifyContent: 'space-between',
      fontSize: 12,
      width: '100%'
    }}>
      <div style={{
        flexFlow: 'column',
        width: '50%'
      }}>
        <info.h2>{title}</info.h2>
        <info.p style={{ textAlign: 'left' }}><code style={{ textTransform: 'lowercase', color: 'rgb(77, 72, 66)' }}>{tools}</code></info.p>
      </div>
      <info.h2 style={{ fontSize: 12, lineHeight: "20px", maxWidth: 110, color: 'rgb(77, 72, 66)', textAlign: 'right' }}>{dates}</info.h2>
    </div>
  </>
}