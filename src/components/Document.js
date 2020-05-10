import React from 'react'

const style = {
  document: {
    display: 'flex',
    flexFlow: 'column'
  },
  margin: {
    top: {
      display: 'block',
      width: '100%',
      minHeight: 100,
      height: 100
    },
    side: {
      display: 'flex',
      flexFlow: 'column',
      width: 100,
      height: '100%'
    }
  },
  container: {
    display: 'flex',
    flexFlow: 'row',
    flex: '1',
    width: '100%'
  },
  content: {
    display: 'flex',
    flexFlow: 'column',
    flex: 1,
  }
}

const Margin = ({ children, type, size }) => {
  const overrideStyle = {}

  switch (type) {
    case 'top':
      overrideStyle.minHeight = size
      overrideStyle.height = size
      break
    case 'bottom':
      overrideStyle.minHeight = size
      overrideStyle.height = size
      break
    case 'side':
      overrideStyle.width = size
      break
    default:
      break
  }

  return <div style={{
    ...style.margin[type],
    ...overrideStyle
  }}>{children}</div>
}

/*
 * A Document consists of margins on all four sides, surrounding content.
 *
 */
export const Document = ({ children, config = {}, marginContent = '' }) => {
  const { margin = '100px 100px 100px 100px' } = config
  const [top, right, bottom, left] = margin.split(' ')

  const { marginTop = null, marginBottom = null, marginLeft = null, marginRight = null } = marginContent

  return (
    <div style={style.document}>
      <Margin type='top' size={top}>{marginTop}</Margin>
      <div style={style.container}>
        <Margin type='side' size={left}>{marginLeft}</Margin>
        <div style={style.content}>{children}</div>
        <Margin type='side' size={right}>{marginRight}</Margin>
      </div>
      <Margin type='bottom' size={bottom}>{marginBottom}</Margin>
    </div>
  )
}
