import React, { useState, useCallback } from 'react'
import { useSpring, a } from 'react-spring'
import { useParams } from 'react-router-dom'

import DisplayImage from './DisplayImage'
import { useWindowDimensions } from '../../hooks'

const Header = ({ children }) => {
  const { height } = useWindowDimensions()

  return <div style={{
    height,
    justifyContent: "flex-start",
    zIndex: -1,
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

  const params = useParams()
  console.log({ pageParams: params })
  return <div style={{ width }}>
    <Header>
      <div style={{
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

