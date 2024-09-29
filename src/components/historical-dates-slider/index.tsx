import clsx from 'clsx'
import React, { FC, useEffect, useRef, useState } from 'react'
import { Swiper as SwiperType } from 'swiper'
import { Navigation, Pagination } from 'swiper/modules'
import { Swiper, SwiperSlide } from 'swiper/react'
import ArrowLeft from '../../assets/icons/arrow-left.svg'
import ArrowRight from '../../assets/icons/arrow-right.svg'

import gsap from 'gsap'
import { IPeriodData } from '../../types'
import * as s from './styles.module.scss'

interface IHistoricalDatesSliderProps {
  list: IPeriodData[number]['list']
  className?: string
  circleTimeline: ReturnType<typeof gsap.timeline>
}
export const HistoricalDatesSlider: FC<IHistoricalDatesSliderProps> = ({
  list = [],
  className,
}) => {
  const [isHideList, setHideList] = useState(false)
  const swiperRef = useRef<SwiperType>()
  const containerRef = useRef(null)
  const [isBeginning, setBeginning] = useState(true)

  const [isEnd, setEnd] = useState(false)

  const handleSlideChange = (swiper) => {
    setBeginning(swiper.isBeginning)
    setEnd(swiper.isEnd)
  }

  useEffect(() => {
    setHideList(true)
    setTimeout(() => {
      setHideList(false)
    }, 1000)
  }, [list])

  return (
    <div className={clsx(s['root'], className)} ref={containerRef}>
      <Swiper
        onSlideChange={handleSlideChange}
        modules={[Navigation, Pagination]}
        onBeforeInit={(swiper) => {
          swiperRef.current = swiper
        }}
        breakpoints={{
          300: {
            slidesPerView: 2,
            spaceBetween: 0,
          },
          600: {
            slidesPerView: 3,
            spaceBetween: 50,
          },
          768: {
            slidesPerView: 2,
            spaceBetween: 50,
          },
          1024: {
            slidesPerView: 3,
            spaceBetween: 50,
          },
        }}
      >
        {list.map((item) => (
          <SwiperSlide key={item.id}>
            <div className={clsx(s['slide'], { [s['show']]: !isHideList })}>
              <p className={s['date']}>{item.date}</p>
              <p className={s['description']}>{item.description}</p>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
      {!isBeginning && (
        <button
          className={s['swiper-button-prev']}
          onClick={() => swiperRef.current?.slidePrev()}
        >
          <ArrowLeft />
        </button>
      )}

      {!isEnd && (
        <button
          className={s['swiper-button-next']}
          onClick={() => swiperRef.current?.slideNext()}
        >
          <ArrowRight />
        </button>
      )}
    </div>
  )
}
