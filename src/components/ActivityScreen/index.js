import React from 'react'
import { useSelector } from 'react-redux'
import Processingcreen from './ProcessingScreen'

export default function ActivityScreen(props) {
  const isProcessing = useSelector((state) => state.app.isProcessing)
  const appMessage = useSelector((state) => state.app.appMessage)
  if (isProcessing) {
    return <Processingcreen isProcessing={isProcessing} />
  }
  if (appMessage) {
    return null
  }
  return null
}
