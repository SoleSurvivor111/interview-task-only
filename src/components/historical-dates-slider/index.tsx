import React, { FC } from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import * as s from './styles.module.scss'
import { IPeriodData } from '../../types'

interface IHistoricalDatesSliderProps {
  data: IPeriodData
  periodIndex: number
}
export const HistoricalDatesSlider: FC<IHistoricalDatesSliderProps> = ({
  data = [],
  periodIndex,
}) => {
  return (
    <Swiper
      spaceBetween={50}
      slidesPerView={3}
      onSlideChange={() => console.log('slide change')}
      onSwiper={(swiper) => console.log(swiper)}
    >
      {data[periodIndex].list.map((item) => (
        <SwiperSlide key={item.id}>{item.date}</SwiperSlide>
      ))}
    </Swiper>
  )
}
