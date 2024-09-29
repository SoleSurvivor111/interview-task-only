import { useGSAP } from '@gsap/react'
import clsx from 'clsx'
import { gsap } from 'gsap'
import { MotionPathPlugin } from 'gsap/MotionPathPlugin'
import React, { FC, useCallback, useRef } from 'react'
import ArrowLeft from '../../assets/icons/arrow-left.svg'
import ArrowRight from '../../assets/icons/arrow-right.svg'
import { IPeriodData } from '../../types'
import * as s from './styles.module.scss'

gsap.registerPlugin(useGSAP, MotionPathPlugin)

interface CircularCarouselProps {
  className?: string
  data: IPeriodData
  onChange: (i) => void
  value?: number
  circleTimeline: ReturnType<typeof gsap.timeline>
}

export const CircularCarousel: FC<CircularCarouselProps> = ({
  className,
  data = [],
  value = 0,
  circleTimeline,
  onChange,
}) => {
  const containerRef = useRef(null)
  const firstDateRef = useRef(null)
  const lastDateRef = useRef(null)
  const isDisablePrvBtn = value === 0 || data.length < 2
  const isDisableNextBtn = value === data.length - 1 || data.length < 2

  const handlePrvClick = () => {
    onChange(value - 1)
  }

  const handleNextClick = () => {
    onChange(value + 1)
  }

  const updateDates = useCallback(() => {
    const newFirstDateValue = +data[value].list[0].date
    const newLastDateValue = +data[value].list[data[value].list.length - 1].date

    gsap.to(firstDateRef.current, {
      textContent: newFirstDateValue,
      duration: 1,
      ease: 'power1.in',
      snap: { textContent: 1 },

      stagger: {
        each: 1.0,
        onUpdate: function () {
          this.targets()[0].innerHTML = this.targets()[0].textContent
        },
      },
    })

    gsap.to(lastDateRef.current, {
      textContent: newLastDateValue,
      duration: 1,
      ease: 'power1.in',
      snap: { textContent: 1 },

      stagger: {
        each: 1.0,
        onUpdate: function () {
          this.targets()[0].innerHTML = this.targets()[0].textContent
        },
      },
    })
  }, [data, value, firstDateRef.current, lastDateRef.current])

  const setDefaultDates = useCallback(() => {
    firstDateRef.current.textContent = data[value].list[0].date
    lastDateRef.current.textContent =
      data[value].list[data[value].list.length - 1].date
  }, [])

  useGSAP(
    () => {
      setDefaultDates()
    },
    { scope: containerRef, dependencies: [setDefaultDates] }
  )

  useGSAP(
    () => {
      updateDates()
    },
    { scope: containerRef, dependencies: [updateDates] }
  )

  useGSAP(
    () => {
      const tl = circleTimeline

      if (!tl) {
        return
      }

      const circlePath = MotionPathPlugin.convertToPath('#holder', false)[0]
      circlePath.id = 'circlePath'
      document.querySelector('svg').prepend(circlePath)

      const items: HTMLElement[] = gsap.utils.toArray(`.${s['item']}`),
        numItems = items.length,
        itemStep = 1 / numItems,
        wrapProgress = gsap.utils.wrap(0, 1),
        snap = gsap.utils.snap(itemStep),
        wrapTracker = gsap.utils.wrap(0, numItems),
        tracker = { item: 0 }

      ;(items[0] as HTMLElement).classList.add(s['active'])

      gsap.set(items, {
        // @ts-ignore
        motionPath: {
          path: circlePath,
          align: circlePath,
          alignOrigin: [0.5, 0.5],
          end: (i) => gsap.utils.wrap(0, 1, i / items.length - 0.17),
        },
      })

      tl.to(`.${s['wrapper']}`, {
        rotation: 360,
        transformOrigin: 'center',
        duration: 1,
        ease: 'none',
      })

      tl.to(
        items,
        {
          rotation: '-=360',
          transformOrigin: 'center',
          duration: 1,
          ease: 'none',
        },
        0
      )

      tl.to(
        tracker,
        {
          item: numItems,
          duration: 1,
          ease: 'none',
          modifiers: {
            item: (value) => wrapTracker(numItems - Math.round(value)),
          },
        },
        0
      )

      items.forEach(function (el, i) {
        el.addEventListener('click', function () {
          const current = tracker.item,
            activeItem = i

          if (i === current) {
            return
          }

          //set active item to the item that was clicked and remove active class from all items
          document
            .querySelector(`.${s['active']}`)
            .classList.remove(s['active'])
          items[activeItem].classList.add(s['active'])

          const diff = current - i

          if (Math.abs(diff) < numItems / 2) {
            moveWheel(diff * itemStep)
          } else {
            const amt = numItems - Math.abs(diff)

            if (current > i) {
              moveWheel(amt * -itemStep)
            } else {
              moveWheel(amt * itemStep)
            }
          }
        })
      })

      document.getElementById('next').addEventListener('click', () => {
        return moveWheel(-itemStep)
      })

      document.getElementById('prev').addEventListener('click', () => {
        return moveWheel(itemStep)
      })

      function moveWheel(amount) {
        const progress = tl.progress()
        tl.progress(wrapProgress(snap(tl.progress() + amount)))
        const next = tracker.item
        tl.progress(progress)
        const activeElement = document.querySelector(`.${s['active']}`)
        const nextActiveElement = items[next] as HTMLElement
        activeElement.classList.remove(s['active'])
        nextActiveElement.classList.add(s['active'])

        gsap.to(tl, {
          progress: snap(tl.progress() + amount),
          modifiers: {
            progress: wrapProgress,
          },
        })
      }
    },
    { scope: containerRef, dependencies: [circleTimeline] }
  )

  return (
    <div className={clsx(s['root'], className)} ref={containerRef}>
      <div className={s['dates']}>
        <h2 ref={firstDateRef} className={s['date']} />
        <h2 ref={lastDateRef} className={s['date']} />
      </div>
      <div className={s['wrapper']}>
        {data.map((item, i) => (
          <div
            className={s['item']}
            key={item.label}
            onClick={() => onChange(i)}
          >
            <button className={s['item-btn']} />
            <h3 className={s['subtitle']}>{i + 1}</h3>
            {item.label && <p className={s['label']}>{item.label}</p>}
          </div>
        ))}
        <svg viewBox="0 0 300 300" className={s['circle']}>
          <circle id="holder" className={s['st0']} cx="151" cy="151" r="268" />
        </svg>
      </div>
      <div className={s['controls']}>
        <div
          className={s['counter']}
        >{`0${value + 1}/0${data[value].list.length}`}</div>
        <div className={s['buttons']}>
          <button
            className={s['prev-btn']}
            id="prev"
            disabled={isDisablePrvBtn}
            onClick={handlePrvClick}
          >
            <ArrowLeft />
          </button>
          <button
            className={s['next-btn']}
            id="next"
            disabled={isDisableNextBtn}
            onClick={handleNextClick}
          >
            <ArrowRight />
          </button>
        </div>
      </div>
    </div>
  )
}
