import React, {
  useState,
  useContext,
  useMemo
} from 'react'

import { useTransition, animated } from 'react-spring'
import '../../components/Scroll/scroll.scss'

import Software from '../Software'
import About from '../About'
import {
  Link,
} from 'react-router-dom'
import { useWindowDimensions } from '../../hooks'
export const SectionContext = React.createContext()

export const SectionContent = ({ children, transition }) => {
  const { currentSection, order } = useContext(SectionContext)

  return <animated.div style={{
    ...transition
  }}>
    {children}
  </animated.div>


  // const transitions = useTransition(current, null, {
  //   from: {
  //     transform: 'translate3d(40px,0 ,0)',
  //     // opacity: 0,
  //     height: 0
  //   },
  //   enter: {
  //     transform: 'translate3d(0px,0,0)',
  //     // opacity: 1,
  //     height: 100,
  //   },
  //   leave: item => async (next, cancel) => {
  //     console.log('leaving')
  //     await next({
  //       transform: 'translate3d(40px,0,0)',

  //       height: 0,
  //     })
  //   },
  // })


  // return transitions.map(({ item, props, key }) =>
  //   item ? <animated.div className="scroll" key={key} style={{
  //     flexFlow: 'column',
  //     overflowX: 'hidden',
  //     overflowY: 'scroll',
  //     ...props,
  //     height: props.height.interpolate(h => `${h}%`)
  //   }}>
  //     {children}
  //   </animated.div> : null
  // )
}

const sections = [
  {
    id: 0,
    render: (props) => <Section flex={true} name='about' {...props}>
      <About></About>
    </Section>
  },
  {
    id: 1,
    render: (props) => <Section name='software' {...props} >
      <Software></Software>
    </Section>
  },
  {
    id: 2,
    render: (props) => <Section name='music' {...props}></Section>
  }
]

export const Section = ({ children, flex = false, name, selected, transition }) => {
  const { height } = useWindowDimensions()
  const tra = useTransition(selected, null, {
    from: {
      opacity: 0,
      height: 0
    },
    enter: {
      opacity: 1,
      height: height
    },
    leave: {
      opacity: 0,
      height: 0
    }
  })

  return (<>
    <Link to={`/${name}`}><code style={{ textTransform: 'capitalize' }}>{name}</code></Link>

    <div className="scroll-container" style={{
      flexFlow: 'column',
      overflowY: 'scroll',
    }}>
      {tra.map(({ item, props }) => (
        item && <SectionContent transition={{
          opacity: props.opacity,
          maxHeight: '100%',
          height: props.height.interpolate(x => `${x}px`),
        }}>{children}</SectionContent>
      ))}
    </div>
  </>)
  // const overrideStyle = {}
  // const { currentSection, order } = useContext(SectionContext)

  // if (name === currentSection) {
  //   Object.assign(overrideStyle, {
  //     overflowY: 'scroll'
  //   })
  // }

  // if (order.indexOf(name)) {
  //   Object.assign(overrideStyle, {
  //     borderTop: 'solid 1px #ffead6'
  //   })
  // }

  // return <animated.div className="scroll-container" style={{
  //   flexFlow: 'column',
  //   // maxHeight: '40px',
  //   // height: '100%',
  //   ...overrideStyle,
  //   overflowY: 'hidden',
  // }}>
  //   <Link to={`/${name}`}><code style={{ textTransform: 'capitalize' }}>{name}</code></Link>
  //   {currentSection === name && <SectionContent transition={transition}>{children}</SectionContent>}
  // </animated.div>
}

export const Menu = () => {

  const [secs] = useState(sections)
  const { currentSection } = useContext(SectionContext)

  const transitions = useTransition(secs, item => item.id, {
    from: { backgroundColor: 'blue' },
    enter: { backgorundColor: 'red' },
    leave: { backgroundColor: 'green' }
  })

  return <>
    <Section transition={transitions[0]} selected={currentSection === 'about'} name='about'>

      <About />
    </Section>
    <Section transition={transitions[1]} selected={currentSection === 'software'} name='software' >
      <Software></Software>
    </Section>
    <Section transition={transitions[2]} name='music'>
    </Section>
  </>
}
