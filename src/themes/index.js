import { useState, useEffect } from 'react'
import { lightTheme, darkTheme } from './colors'

export { lightTheme, darkTheme }

export default function useTheme() {
  const [colors, setColors] = useState(darkTheme)
  return [colors]
}
