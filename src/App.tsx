import React, { useState } from 'react'
import { HistoricalDatesSlider } from './components/historical-dates-slider'

import * as s from './App.module.scss'
import { CircularCarousel } from './components/circular-carousel'
import { data } from './consts'

const App = () => {
  const [periodIndex, setPeriodIndex] = useState(0)

  return (
    <div className={s['root']}>
      <h1 className={s['title']}>
        Исторические
        <br />
        даты
      </h1>
      {
        //@ts-ignore
      }
      <CircularCarousel
        data={data}
        onChange={setPeriodIndex}
        value={periodIndex}
      />
      <HistoricalDatesSlider data={data} periodIndex={periodIndex} />
    </div>
  )
}

export default App
