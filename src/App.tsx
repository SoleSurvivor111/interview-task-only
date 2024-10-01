import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import React, { useState } from 'react'
import { CircularCarousel } from './components/circular-carousel'
import { HistoricalDatesSlider } from './components/historical-dates-slider'
import { data } from './consts'

import * as s from './App.module.scss'

const App = () => {
  const [periodIndex, setPeriodIndex] = useState(0)
  const [circleTl, setCircleTl] = useState<ReturnType<typeof gsap.timeline>>()

  useGSAP(
    () => {
      const tl = gsap.timeline({ paused: true, reversed: true })
      setCircleTl(tl)
    },
    { dependencies: [] }
  )

  return (
    <div className={s['root']}>
      <h1 className={s['title']}>
        Исторические
        <br />
        даты
      </h1>
      <CircularCarousel
        className={s['carousel']}
        data={data}
        onChange={setPeriodIndex}
        value={periodIndex}
        circleTimeline={circleTl}
      />
      <HistoricalDatesSlider
        list={data[periodIndex].list}
        className={s['slider']}
        circleTimeline={circleTl}
      />
    </div>
  )
}

export default App
