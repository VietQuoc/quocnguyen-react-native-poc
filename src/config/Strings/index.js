import { useState, useEffect } from 'react'
import { useSelector } from 'react-redux'
import { singletonHook } from 'react-singleton-hook'
import VietNamese from './StringVN'
import English from './StringEN'

const useLanguage = singletonHook(VietNamese, () => {
  const [language, setLanguage] = useState(VietNamese)
  const languageID = useSelector((state) => state.app.languageID)
  useEffect(() => {
    if (languageID !== null) {
      switch (languageID) {
        case 0:
          setLanguage(VietNamese)
          break
        case 1:
          setLanguage(English)
          break
        default:
          setLanguage(VietNamese)
          break
      }
    }
  }, [languageID])
  return language
})

export { useLanguage }
