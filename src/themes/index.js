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
      const theme = getTheme(themeID)
      setColors(theme)
    }
  }, [themeID])
  return colors
})

function getTheme(themeID) {
  if (themeID !== null) {
    switch (themeID) {
      case 0:
        return lightTheme
      case 1:
        return darkTheme
      default:
        return lightTheme
    }
  }
}

export { useTheme, getTheme, Dimensions }
