import React, { useState, useCallback } from 'react'
import {
  BrowserRouter,
} from 'react-router-dom'
import { useTransition, animated } from 'react-spring'
import { useLocation } from 'react-router-dom'

import DisplayImage from './DisplayImage'
import { useWindowDimensions } from '../hooks/index'
import { Menu, SectionContext } from './Menu'


const Header = ({ children }) => {
  const { height } = useWindowDimensions()

  return <div style={{
    height,
    justifyContent: "flex-start",
    // transform: 'rotate(90deg)',
    overflow: 'hidden'
  }}>
    {children}
  </div>
}

const Body = ({ children }) => {
  const location = useLocation()
  const [toggle, setToggle] = useState(true)

  const [transition] = useTransition(toggle, null, {
    from: {
      height: 0,
      padding: 0,
    },
    enter: {
      padding: 20,
      height: 100,
    },
    leave: {
      padding: 0,
      height: 0
    }
  })

  console.log(transition)

  return <SectionContext.Provider value={{
    currentSection: location.pathname.substr(1),
    order: ['about', 'home', 'software']
  }}>
    <animated.div style={{
      // margin: '20px',
      borderLeft: 'solid 1px #ffead6',
      flex: '1',
      flexFlow: 'column',
      padding: transition.props.padding,
      height: transition.props.height.interpolate(height => `calc(${height}vh - 40px)`),
      // background: 'rgb(4, 2, 2)'
    }}>
      {children}
    </animated.div>
  </SectionContext.Provider >
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
      </Body>
    </BrowserRouter>
  </div >
}

