import { useState, MouseEvent, useRef } from 'react'

import { CSSIcon, FigmaIcon, GitHubIcon, HTMLIcon, JavascriptIcon, MongooseIcon, NodeIcon, ReactIcon, TypescriptIcon } from '../assets/SVGIcons'
import './IconsGroup.css'

const IconsGroup = () => {
  const rectRef = useRef<HTMLDivElement>(null)
  const [angleDeg, setAngleDeg] = useState(0)

  const onMouseMove = (e: MouseEvent) => {
    const mouseX = (e.clientX)
    const mouseY = (e.clientY)

    if (rectRef.current) {
      const rect = rectRef.current.getBoundingClientRect()
      const anchorX = rect.left + rect.width / 2
      const anchorY = rect.top + rect.height / 2

      setAngleDeg(angle(mouseX, mouseY, anchorX, anchorY))
    }
  }

  return (
    <div className='svg-container-home' onMouseMove={onMouseMove} ref={rectRef}>
      <div className='svg-home' data-angle={angleDeg}>{HTMLIcon()}</div>
      <div className='svg-home' data-angle={angleDeg}>{JavascriptIcon()}</div>
      <div className='svg-home' data-angle={angleDeg}>{ReactIcon()}</div>
      <div className='svg-home' data-angle={angleDeg}>{CSSIcon()}</div>
      <div className='svg-home' data-angle={angleDeg}>{NodeIcon()}</div>
      <div className='svg-home' data-angle={angleDeg}>{TypescriptIcon()}</div>
      <div className='svg-home' data-angle={angleDeg}>{MongooseIcon()}</div>
      <div className='svg-home' data-angle={angleDeg}>{GitHubIcon()}</div>
      <div className='svg-home' data-angle={angleDeg}>{FigmaIcon()}</div>
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