import { useRouter } from 'expo-router'
import * as SecureStore from 'expo-secure-store'
import { Text, TouchableOpacity } from 'react-native'
import Toast from 'react-native-toast-message'

import Icons from './common/Icons'

import { useAppDispatch } from '@/hooks'
import { useLogoutMutation } from '@/services'
import { persistor, userLogout } from '@/store'
import apiSlice from '@/services/api'

export default function Logout() {
  //? Assets
  const router = useRouter()

  const dispatch = useAppDispatch()

  //? Handlers
  const handleLogout = async () => {
    try {
      await SecureStore.deleteItemAsync('access-token')
      dispatch(userLogout())
      await persistor.purge()
      // Reset RTK Query cache
      dispatch(apiSlice.util.resetApiState())
      Toast.show({
        type: 'success',
        text2: 'Log out successfully',
      })

      router.replace('/')
    } catch (error) {
      console.error('Logout error:', error)
      Toast.show({
        type: 'error',
        text2: 'Logout failed',
      })
    }
  }

  //? Render(s)
  return (
    <TouchableOpacity
      className="flex flex-row justify-between items-center transition-colors py-4 text-xs text-gray-700 w-full"
      onPress={handleLogout}
    >
      <Text className="text-gray-700">Quit</Text>
      <Icons.MaterialIcons name="logout" size={24} className="text-gray-700" />
    </TouchableOpacity>
  )
}
