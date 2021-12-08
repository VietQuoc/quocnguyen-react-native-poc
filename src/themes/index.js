import { useState, useEffect } from 'react'
import { useSelector } from 'react-redux'
import { singletonHook } from 'react-singleton-hook'
import { lightTheme, darkTheme } from './colors'

const useTheme = singletonHook([lightTheme], () => {
  const [colors, setColors] = useState(lightTheme)
  const themeID = useSelector((state) => state.app.themeID)
  useEffect(() => {
    if (themeID !== null) {
      console.log('changeThemeID')
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
  console.log('useTheme')
  return [colors]
})

export default useTheme
