import React, { useReducer, useContext } from 'react'
import { Link } from 'react-router-dom'

export const Card = ({ children }) => {
  return <div style={{
    border: '1px solid white', //get real color and centralize it
    borderRadius: '4px',
    padding: 20
  }}>
    {children}
  </div>
}

const WebGLContext = React.createContext()
export const WEB = 1
export const NONE = 0
export const SOUND = 2
export const MUSIC = 3


const DISPATCH_HOVER_NONE = {
  type: 'writeWebGLState',
  payload: {
    hoveredId: NONE
  }
}

const DISPATCH_HOVER_WEB = {
  type: 'writeWebGLState',
  payload: {
    hoveredId: WEB
  }
}
const DISPATCH_HOVER_SOUND = {
  type: 'writeWebGLState',
  payload: {
    hoveredId: SOUND
  }
}
const DISPATCH_HOVER_MUSIC = {
  type: 'writeWebGLState',
  payload: {
    hoveredId: MUSIC
  }
}

const MenuItem = (props) => {
  const { children, dispatchHoverPayload } = props
  const { dispatch } = useContext(WebGLContext)

  return <div
    onMouseEnter={() => dispatch(dispatchHoverPayload)}
    onMouseLeave={() => dispatch(DISPATCH_HOVER_NONE)}
    style={{}}>
    {children}
  </div>
}
const Menu = () => {
  return <div style={{
    zIndex: 1,
    flexFlow: 'column',
  }}>
    <MenuItem dispatchHoverPayload={DISPATCH_HOVER_WEB}>
      <Link to={`/programming`}>
        <h1>Web</h1>
      </Link>
    </MenuItem>
    <MenuItem dispatchHoverPayload={DISPATCH_HOVER_SOUND}>
      <Link to={`/noisy`}>
        <h1>Sound</h1>
      </Link>
    </MenuItem>
    <MenuItem dispatchHoverPayload={DISPATCH_HOVER_MUSIC}>
      <Link to={`/playing`}>
        <h1>Music</h1>
      </Link>
    </MenuItem>
  </div>
}

export default () => {
  const [state, dispatch] = useReducer((state, { type, payload }) => {
    switch (type) {
      case 'writeWebGLState':
        return { ...state, ...payload }
      default:
        return state
    }
  }, {
    hoveredId: 0,
  })

  return <WebGLContext.Provider value={{
    state,
    dispatch
  }}>
    <Menu />
  </WebGLContext.Provider>
}

// 

// Grab a random primitive?
// Base color pallette
// Grab a random base color?
// Falling of the primitive path ?
// Rotation?
// Wiggle?
// Random rendering ?
// Random Shaders ?