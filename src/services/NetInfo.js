import NetInfo from '@react-native-community/netinfo'

export async function checkAppIsConnected() {
  const state = await NetInfo.fetch()
  return state.isConnected
}
