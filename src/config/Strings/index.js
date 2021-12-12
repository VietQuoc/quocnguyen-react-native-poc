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
      const result = getLanguage(languageID)
      setLanguage(result)
    }
  }, [languageID])
  return language
})

function getLanguage(languageID) {
  switch (languageID) {
    case 0:
      return VietNamese
    case 1:
      return English
    default:
      return VietNamese
  }
}

export { useLanguage, getLanguage }
