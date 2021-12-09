import { useState, useEffect } from 'react'
import { useSelector } from 'react-redux'
import { singletonHook } from 'react-singleton-hook'
import { lightTheme, darkTheme } from './colors'
import Dimensions from './dimensions'

const useTheme = singletonHook(lightTheme, () => {
  const [colors, setColors] = useState(lightTheme)
  const themeID = useSelector((state) => state.app.themeID)
  useEffect(() => {
    if (themeID !== null) {
      switch (themeID) {
        case 0:
          setColors(lightTheme)
          break
        case 1:
          setColors(darkTheme)
          break
        default:
          setColors(lightTheme)
          break
      }
    }
  }, [themeID])
  return colors
})

export { useTheme, Dimensions }
