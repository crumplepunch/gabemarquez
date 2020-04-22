import React, { Suspense, useEffect, useState, useRef, useCallback } from 'react'
import Software from './Software'
import { TitleText } from '../components'
import DisplayImage from './DisplayImage'
import { useWindowDimensions } from '../hooks/index'


export default () => {
  const { height, width } = useWindowDimensions()
  const [showMenu, setShowMenu] = useState(false)
  const showMenuCallback = useCallback(() => setShowMenu(true), [setShowMenu])

  return <div style={{
    width
  }}>
    <div style={{
      height,
      width,
      justifyContent: "center",
      // transform: 'rotate(90deg)',
      overflow: 'hidden'
    }}>
      <div style={{
        position: "relative",
        width: 600,
        overflow: "hidden"
      }}>
        <DisplayImage showMenu={showMenuCallback} />
      </div>
    </div>
    <div style={{
      width: '100vw',
      position: 'absolute',
      bottom: ".5vh"
    }}>
      {/* <Software /> */}
      {showMenu && <div style={{
        textTransform: 'lowercase',
        padding: '0 2vw',
        overflow: 'hidden',
        width: '100%'
      }}>
        <TitleText>Menu</TitleText>
      </div>}

    </div>

  </div>
}
