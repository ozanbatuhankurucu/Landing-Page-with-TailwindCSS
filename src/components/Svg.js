import React from 'react'

const Svg = ({ color, component: Component, classes }) => {
  return (
    <div className={`${color}`}>
      <Component className={`${classes} fill-current`} />
    </div>
  )
}

export default Svg
