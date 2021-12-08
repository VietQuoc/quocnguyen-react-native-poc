import React, { useEffect } from 'react'
import LaunchScreen from '../components/LaunchScreen'

export default function LaunchScreenContainer({ setIsCheckedApp }) {
  useEffect(() => {
    checkAppStatus()
  }, [])

  function checkAppStatus() {
    setTimeout(() => {
      setIsCheckedApp(true)
    }, 1000)
  }

  return <LaunchScreen checkAppStatus={checkAppStatus} />
}
