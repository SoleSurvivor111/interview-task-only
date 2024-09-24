//@ts-nocheck
import React, { Component, FC, useRef, useState } from 'react'
import { gsap, Linear } from 'gsap'
import { useGSAP } from '@gsap/react'
import { MotionPathPlugin } from 'gsap/MotionPathPlugin'
import * as s from './styles.module.scss'
import clsx from 'clsx'
import { IPeriodData } from '../../types'

gsap.registerPlugin(useGSAP, MotionPathPlugin)

interface CircularCarouselProps {
  data: IPeriodData
  onChange: (i) => void
  value?: number
}

export const CircularCarousel: FC<CircularCarouselProps> = ({
  data = [],
  onChange,
  value = 0,
}) => {
  const containerRef = useRef()

  useGSAP(
    () => {
      const firstDateRef = document.querySelectorAll(
        `.${s['date']}:first-child`
      )[0]

      const lastDateRef = document.querySelectorAll(
        `.${s['date']}:last-child`
      )[0]
      firstDateRef.textContent = data[value].list[0].date
      lastDateRef.textContent =
        data[value].list[data[value].list.length - 1].date
    },
    { scope: containerRef, dependencies: [] }
  )

  useGSAP(
    () => {
      const circlePath = MotionPathPlugin.convertToPath('#holder', false)[0]
      circlePath.id = 'circlePath'
      document.querySelector('svg').prepend(circlePath)

      let items = gsap.utils.toArray(`.${s['item']}`),
        numItems = items.length,
        itemStep = 1 / numItems,
        wrapProgress = gsap.utils.wrap(0, 1),
        snap = gsap.utils.snap(itemStep),
        wrapTracker = gsap.utils.wrap(0, numItems),
        tracker = { item: 0 }

      gsap.set(items, {
        motionPath: {
          path: circlePath,
          align: circlePath,
          alignOrigin: [0.5, 0.5],
          end: (i) => i / items.length,
        },
        scale: 0.9,
      })

      const tl = gsap.timeline({ paused: true, reversed: true })

      if (!tl.isActive()) {
        items[0].classList.add(s['active'])
      }

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
            item(value) {
              return wrapTracker(numItems - Math.round(value))
            },
          },
        },
        0
      )

      items.forEach((el, i) => {
        el.addEventListener('click', () => {
          var current = tracker.item,
            activeItem = i

          if (i === current) {
            return
          }

          //set active item to the item that was clicked and remove active class from all items
          document
            .querySelector(`.${s['active']}`)
            .classList.remove(s['active'])

          items[activeItem].classList.add(s['active'])

          var diff = current - i

          if (Math.abs(diff) < numItems / 2) {
            moveWheel(diff * itemStep)
          } else {
            var amt = numItems - Math.abs(diff)

            if (current > i) {
              moveWheel(amt * -itemStep)
            } else {
              moveWheel(amt * itemStep)
            }
          }
        })
      })

      document
        .getElementById('next')
        .addEventListener('click', () => moveWheel(-itemStep))

      document
        .getElementById('prev')
        .addEventListener('click', () => moveWheel(itemStep))

      function moveWheel(amount, _i, _index) {
        onChange(tracker.item)
        let progress = tl.progress()
        tl.progress(wrapProgress(snap(tl.progress() + amount)))
        let next = tracker.item
        tl.progress(progress)

        gsap.to(tl, {
          progress: snap(tl.progress() + amount),
          modifiers: {
            progress: wrapProgress,
          },
          onComplete: () => {},
        })
      }
    },
    { scope: containerRef, dependencies: [containerRef, data, onChange] }
  )

  useGSAP(
    () => {
      const firstDateRef = document.querySelectorAll(
        `.${s['date']}:first-child`
      )[0]

      const lastDateRef = document.querySelectorAll(
        `.${s['date']}:last-child`
      )[0]

      let newFirstDateValue = +data[value].list[0].date
      let newLastDateValue = +data[value].list[data[value].list.length - 1].date

      gsap.to(firstDateRef, {
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

      gsap.to(lastDateRef, {
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
    },
    { scope: containerRef, dependencies: [value] }
  )

  return (
    <div>
      <div className={s['container']} ref={containerRef}>
        <div className={s['dates']}>
          <h2 className={s['date']} />
          <h2 className={s['date']} />
        </div>
        <div className={s['wrapper']}>
          {data.map((item, i) => (
            <button className={s['item']} key={item.label}>
              <h3 className={s['subtitle']}>{i + 1}</h3>
              {item.label && <p className={s['label']}>{item.label}</p>}
            </button>
          ))}
          <svg viewBox="0 0 300 300">
            <circle
              id="holder"
              className={s['st0']}
              cx="151"
              cy="151"
              r="268"
            />
          </svg>
        </div>
        <div className={s['buttons']} styles={{ textAlign: 'center' }}>
          <button id="prev">Prev</button>
          <button id="next">Next</button>
        </div>
      </div>
    </div>
  )
}
