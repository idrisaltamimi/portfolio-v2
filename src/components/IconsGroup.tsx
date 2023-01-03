import { useState, useRef } from 'react'

import { CSSIcon, FigmaIcon, GitHubIcon, HTMLIcon, JavascriptIcon, MongooseIcon, NodeIcon, ReactIcon, TypescriptIcon } from '../assets/SVGIcons'
import './IconsGroup.css'

const IconsGroup = () => {
  const rectRef = useRef<HTMLDivElement>(null)
  const [angleDeg, setAngleDeg] = useState(0)

  // const enter=()=>setSvgFill()


  // if (rectRef.current) {
  //   const rect = rectRef.current.getBoundingClientRect()
  //   const anchorX = rect.left + rect.width / 2
  //   const anchorY = rect.top + rect.height / 2

  //   console.log(anchorX, anchorY)
  //   setAngleDeg(angle(mouseX, mouseY, anchorX, anchorY))
  // }

  return (
    <div className='svg-container-home' ref={rectRef}>
      <div className='svg-home'>{HTMLIcon()}</div>
      <div className='svg-home'>{JavascriptIcon()}</div>
      <div className='svg-home'>{ReactIcon()}</div>
      <div className='svg-home'>{CSSIcon()}</div>
      <div className='svg-home' />
      <div className='svg-home' />
      <div className='svg-home'>{NodeIcon()}</div>
      <div className='svg-home ui-text'>UX</div>
      <div className='svg-home'>{TypescriptIcon()}</div>
      <div className='svg-home'>{MongooseIcon()}</div>
      <div className='svg-home'>{GitHubIcon()}</div>
      <div className='svg-home'>{FigmaIcon()}</div>
    </div>
  )
}

export default IconsGroup

const angle = (cx: number, cy: number, ex: number, ey: number) => {
  const dy = ey - cy
  const dx = ex - cx
  const rad = Math.atan2(dy, dx)
  const deg = rad * 180 / Math.PI

  return deg
}