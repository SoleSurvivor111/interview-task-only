import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import { MotionPathPlugin } from 'gsap/MotionPathPlugin'
import React from 'react'
import ReactDOM from 'react-dom/client'
import 'reset-css'
import App from './App'
import './index.module.scss'

gsap.registerPlugin(useGSAP, MotionPathPlugin)

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
)
