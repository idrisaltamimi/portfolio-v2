import { useEffect, useRef, useState } from 'react'

import './PathScroll.scss'

const PathScroll = () => {
  const pathRef1 = useRef(null)
  const pathRef2 = useRef(null)
  const pathRef3 = useRef(null)
  const pathRef4 = useRef(null)
  const pathRef5 = useRef(null)
  const pathRef6 = useRef(null)
  const pathRef7 = useRef(null)

  const paths = [pathRef1, pathRef2, pathRef3, pathRef4, pathRef5, pathRef6, pathRef7]
  useFillSvgPaths(paths)

  return (
    <>
      {idrisSvg(paths)}
    </>
  )
}

export default PathScroll

const useFillSvgPaths = (paths: any) => {
  const [scrollPercentage, setScrollPercentage] = useState(0)


  // let scrollPercentage = 0
  const fillSvgPaths = () => {
    const scrollPer = (document.documentElement.scrollTop + document.body.scrollTop) / (document.documentElement.scrollHeight - document.documentElement.clientHeight)

    setScrollPercentage(scrollPer)

    paths.forEach((path: any) => {
      if (!path.current) return
      // @ts-ignore
      const pathLength = path.current.getTotalLength()
      // @ts-ignore
      path.current.style.strokeDasharray = pathLength
      // @ts-ignore
      path.current.style.strokeDashoffset = pathLength
      const drawLength = pathLength * scrollPercentage
      // @ts-ignore
      path.current.style.strokeDashoffset = pathLength - drawLength
    })
  }

  useEffect(() => {
    fillSvgPaths()

    document.addEventListener('scroll', fillSvgPaths)

    return () => document.removeEventListener('scroll', fillSvgPaths)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [scrollPercentage])
}

const idrisSvg = (paths: any) => <svg className='svg-clr static-vector' viewBox="0 0 307.46 617.64">
  <path ref={paths[0]} className="cls-1" d="M121.45,245.81c1.6,1.21,3-.29,4,2.38s1.73,1.86,3.76,3.55,1.58,1.49,2.73,4.71a.4.4,0,0,1,0,.15c.17,2.87,1.1,4.43-1.94,13a21.65,21.65,0,0,1-3.74,6.57,77.45,77.45,0,0,0-13.51,23.72c-1.74,5.15-3,24-2.1,36.85" transform="translate(-97.33 -169.84)" />
  <path ref={paths[1]} className="cls-1" d="M131.63,460.11c1.91,5.84,11.31,18.16,31.37,41s16.38,16.06,25.78,22.85,17.46,6.48,24.7,17.34c6.76,10.14,6.08,11.28,7.09,14.57a.55.55,0,0,1-.53.71c-3.75-.13-30.39-1.69-33.08-2,0,0-.3-.4-.47-.69a21.46,21.46,0,0,0-5.2-6.73c-2.76-2.28-3-2.86-7.81-3a159.55,159.55,0,0,0-16.13.39c-4.14.39-15.68,1.71-21.33,4.69s-2.61,32.77-2.23,37,2.16,10.79,1.84,20-1.71,22.35-.57,30.73,10.1,17.52,12.7,21.39,7.56,3.43,11.18,2.73c3,.51,5.14-6.85,5-9.33s1.78-23.43,3.62-30.6c1.69-6.57,10-18.76,11.37-20.79a.54.54,0,0,1,.55-.23l3.16.56a.55.55,0,0,0,.62-.38c.17-.54.54-1.37,1.21-1.43.88-.09,1.18,1.24,1.24,1.56l.05.15,2.94,2c.1.19,52.75,7.62,52.75,7.62a.55.55,0,0,1,.6.54l0,1.53a.56.56,0,0,0,.15.37l3,5.14a.53.53,0,0,0,.16.39s1.88,2,1.88,2.15l0,6.08.06.25,1.26,2.48.06.24.05,4.15a.54.54,0,0,0,.13.35l2.41,2.81a.55.55,0,0,1,.14.32c0,.34.07,1.19.17,2.59a.86.86,0,0,1,0,.16c-.57,2.78.74,3.47,1.3,3.64a.5.5,0,0,1,.34.32c.69,1.87,4.77,12.82,6.53,16l.05.14c.42,2.48,1.27,2.93,1.71,3a.52.52,0,0,1,.41.3c1.58,3.74,17.13,40.46,19.39,42.36s4.19,5.42,5.62,12.95,7.81,15.62,8.48,19.81,13.33,20.47,15.52,21.14,5.9,18.76,8,22.67,3.62,6,13.52,4.38,13.62-9,17.43-14.38c3.15-5.34,17.43-15.91,17.43-15.91a174.25,174.25,0,0,1,17.62-12c10.76-6.47,17.05-22.85,18.48-27s1.14-9.34-2.1-13.05-9-1.46-10.38-.86c-1.15.49-13.43,9.93-15.3,10.58a33.35,33.35,0,0,1-8.18,2.17c-2.67.45-7.43,1-11.11.24a.62.62,0,0,1-.3-.18c-1.69-1.85-2.72-1.36-3.11-1.1-1.57,1.08-3.13,1.73-4.34,2.54a.53.53,0,0,1-.8-.23c-.26-.62-10.21-2.81-11.24-4.4s-.68-3.11-1-8l-.09-.28c-3.8-5.7-9-19.16-12.78-25.31s-10.47-14.67-14-24.19-7.2-21-8.88-27.24c-2.3-8.49-2.65-18.86-3-21.6a.53.53,0,0,1,.52-.61c2.93-.12,15.93-.65,24.59-1.4l.09,0c11.58-2.85,14.24-7,18.14-10.18s7.05-12.09,9.43-18.85-.38-11.15-3.71-18.67-39-40.48-39-40.48l-15-13.1a39.26,39.26,0,0,1-5.39-5.77l-30.21-39.69a39.61,39.61,0,0,1-4.92-8.5c-2.66-6.19-9.5-16.28-11.2-22-2.09-7-16-48.24-17.14-55.87-1.52-10,.13-2.51-3.68-16.13-2.16-7.71-15.81-38.34-19.49-44.25-2.82-5.39-13.67-19.94-14.91-21.59a.55.55,0,0,1-.1-.35l2.21-8.29a.54.54,0,0,0-.22-.47c-1.39-1-10.38-1.93-12.89-4a.53.53,0,0,1-.14-.56c.6-2,2.46-10,3.2-13.3.78-3.49,1.32-5.51,2.14-9.27v-.07a49,49,0,0,0,.44-8.23v-.1c.89-7,10.54-10.84,13.23-12.17s4.09-6.8,2.73-9.05a21.7,21.7,0,0,0-3.92-4.73,2,2,0,0,1-.6-2c.32-1.12.66-2.64.27-3.46s-.63-1.1-1.31-1.31a.62.62,0,0,1-.44-.78,2.43,2.43,0,0,0,.1-.73,1.76,1.76,0,0,0-1.51-1.74h0a.94.94,0,0,1-.81-.88,9.18,9.18,0,0,1,1.08-4.46,4.89,4.89,0,0,0-.95-5.69c-1.79-1.21-8.33-4.28-11.76-4.57a12.85,12.85,0,0,1-6.72-2.14c-1.57-1-2.65-4.64-4.43-6-2-1.46-6.78-2.91-8.57-4.09-.21-.14-3.79-2.42-6.66-4.7-.72-.57-.19-1.29-.8-1.75-5.84-4.31-7.4-3.49-12.61-3.83h-.1c-21.75,2.22-30.69,10.23-38,28" transform="translate(-97.33 -169.84)" />
  <path ref={paths[2]} className="cls-1" d="M186.43,203.1a3.05,3.05,0,0,0-2.41,1.61" transform="translate(-97.33 -169.84)" />
  <path ref={paths[3]} className="cls-1" d="M177,303.16s-1.34,30.16-2.22,37.78-2.23,8.57-1,16.19a57.29,57.29,0,0,1-.48,19.11c2.83,4.82,4.23,7.55,3.21,10.66-1,1.91-.39,4.81,1.56,4.46s4.08-.26,5.22,3.35,6.71,8.34,6.71,8.34" transform="translate(-97.33 -169.84)" />
  <path ref={paths[4]} className="cls-1" d="M182.11,562.71S177.67,578,179,592.62" transform="translate(-97.33 -169.84)" />
  <path ref={paths[5]} className="cls-1" d="M338.65,725.6S328,750.43,320.56,752.14" transform="translate(-97.33 -169.84)" />
  <path ref={paths[6]} className="cls-1" d="M293.54,606.14s-17-.76-21.65.89S249,610.14,249,610.14" transform="translate(-97.33 -169.84)" />
</svg>