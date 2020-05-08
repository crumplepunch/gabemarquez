import React, { useState, useCallback, useMemo } from 'react'
import {
  BrowserRouter,
} from 'react-router-dom'
import { useSpring, a } from 'react-spring'
import { useLocation } from 'react-router-dom'

import DisplayImage from './DisplayImage'
import { useWindowDimensions } from '../hooks'
import { Menu } from './Menu'
import { SectionContext } from '../contexts'


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

const order = ['about', 'home', 'software']
const bodyStyle = {
  borderLeft: 'solid 1px #ffead6',
  flex: '1',
  flexFlow: 'column',
  background: 'rgb(4, 2, 2)'
}

const Body = ({ children }) => {
  const location = useLocation()
  const sectionMemo = useMemo(() => location.pathname.substr(1), [location])

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

  return <SectionContext.Provider value={{
    currentSection: sectionMemo,
    order
  }}>
    <a.div style={{
      ...bodyStyle,
      padding,
      height: height.interpolate(height => `calc(${height}vh - 28px)`),
    }}>
      {children}
    </a.div>
  </SectionContext.Provider>
}


export default () => {
  const { height, width } = useWindowDimensions()
  const [showMenu, setShowMenu] = useState(false)
  const showMenuCallback = useCallback(() => setShowMenu(true), [setShowMenu])

  return <div style={{ width }}>
    <Header>
      <div style={{
        position: "relative",
        width: height * 0.604561404,
        overflow: "hidden"
      }}>
        <DisplayImage showMenu={showMenuCallback} />
      </div>
    </Header>
    <BrowserRouter>
      <Body>
        {showMenu && <Menu />}
        {/* <Menu /> */}
      </Body>
    </BrowserRouter>
  </div >
}

