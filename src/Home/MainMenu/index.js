import React from 'react'

const menu = [{
  name: 'software',
  menu: [
    'professional',
    'personal',
    'friends',
    'thoughts',
    'history'
  ],
  index: 0
}, {
  name: 'music',
  menu: [
    'events',
    'listen',
    'history'
  ],
}, {
  name: 'food'
}]

export default () => {
  return <>
    <MenuOptions>
      <>Software</>
      <>Music</>
      <>Recipes</>
    </MenuOptions>
  </>
}