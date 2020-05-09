import React, { useState, useCallback } from 'react'
import { useSpring, a } from 'react-spring'

import DisplayImage from './DisplayImage'
import { useWindowDimensions } from '../../hooks'
import { useHistory } from 'react-router-dom'

const Header = ({ children }) => {
  const { height } = useWindowDimensions()

  return <div style={{
    height,
    justifyContent: "flex-start",
    zIndex: 0,
    // transform: 'rotate(90deg)',
    overflow: 'hidden'
  }}>
    {children}
  </div>
}

const bodyStyle = {
  borderLeft: 'solid 1px #ffead6',
  flex: '1',
  flexFlow: 'column',
  background: 'rgb(4, 2, 2)'
}

const Body = ({ children }) => {

  const { height, padding } = useSpring({
    from: {
      height: 0,
      padding: 0,
    },
    to: {
      padding: 14,
      height: 100,
    }
  })

  return <a.div style={{
    ...bodyStyle,
    zIndex: 2,
    padding,
    height: height.interpolate(height => `calc(${height}vh - 28px)`),
  }}>
    {children}
  </a.div>
}

export const Page = ({ children }) => {
  const { height, width } = useWindowDimensions()
  const [showMenu, setShowMenu] = useState(false)
  const showContentCallback = useCallback(() => setShowMenu(true), [setShowMenu])
  const history = useHistory()

  return <div style={{ width }}>
    <Header>
      <div
        onClick={() => {
          history.push('/')
        }}
        style={{
          position: "relative",
          width: height * 0.604561404,
          overflow: "hidden"
        }}>
        <DisplayImage showMenu={showContentCallback} />
      </div>
    </Header>

    <Body>
      {showMenu && children}
      {/* <Menu /> */}
    </Body>
  </div >
}

