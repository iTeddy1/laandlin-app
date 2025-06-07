import { yupResolver } from '@hookform/resolvers/yup'
import { Link, Stack, useRouter } from 'expo-router'
import * as SecureStore from 'expo-secure-store'
import { useEffect } from 'react'
import { useForm } from 'react-hook-form'
import { Text, View } from 'react-native'

import { Button, HandleResponse, Logo, TextField } from '@/components'
import { useAppDispatch } from '@/hooks'
import { useLoginMutation } from '@/services'
import apiSlice from '@/services/api'
import { userLogin } from '@/store'
import { logInSchema } from '@/utils'

export default function LoginScreen() {
  //? Assets
  const dispatch = useAppDispatch()
  const router = useRouter()

  //? Login User
  const [login, { data, isSuccess, isError, isLoading, error }] = useLoginMutation()

  //? Form Hook
  const {
    handleSubmit,
    formState: { errors: formErrors },
    setFocus,
    control,
  } = useForm({
    resolver: yupResolver(logInSchema),
    defaultValues: { email: '', password: '' },
  })

  //? Focus On Mount
  useEffect(() => {
    setFocus('email')
  }, [])

  //? Handlers
  const onSubmit = async ({ email, password }) => {
    try {
      const response = await login({ body: { email, password } }).unwrap()
      // console.log('Login response:', response)
      await SecureStore.setItemAsync('access-token', response.token)
      dispatch(userLogin(response.token))
      dispatch(apiSlice.util.invalidateTags(['User']))
      router.replace('(main)/(tabs)/profile')
    } catch (err) {
      console.error('Login error:', err)
    }
  }

  const onSuccess = () => {
    dispatch(userLogin(data.token))
    router.back()
  }

  return (
    <>
      <Stack.Screen
        options={{
          title: 'Login',
          headerBackTitleVisible: false,
        }}
      />
      {/*  Handle Login Response */}
      {(isSuccess || isError) && (
        <HandleResponse
          isError={isError}
          isSuccess={isSuccess}
          error={error?.data?.message || 'An exception occurred'}
          message={data?.message}
          onSuccess={onSuccess}
        />
      )}
      <View className="h-[100%]  bg-white pt-10">
        <View className="w-[100vw] px-8 py-6 space-y-4">
          <Logo className="mx-auto" />

          <Text className=" mt-56">Login</Text>
          <View className="space-y-0">
            <TextField
              errors={formErrors.email}
              placeholder="Please enter your account email"
              name="email"
              keyboardType="email-address"
              autoCapitalize="none"
              control={control}
            />

            <TextField
              errors={formErrors.password}
              secureTextEntry
              placeholder="Please enter your account password"
              name="password"
              control={control}
            />
            <Button isLoading={isLoading} onPress={handleSubmit(onSubmit)}>
              Login
            </Button>
          </View>

          <View className="flex flex-row">
            <Text className="inline mr-2 text-gray-800 text-xs">I don't have an account yet</Text>
            <Link replace href="/register" className="text-blue-400 text-xs">
              Go to register
            </Link>
          </View>
        </View>
      </View>
    </>
  )
}
