import { router } from 'expo-router'
import { useEffect } from 'react'

import { useAppDispatch } from './useRedux'
import useVerify from './useVerify'

import { clearToken } from '@/helpers/tokenJWT'
import { useGetUserInfoQuery } from '@/services'
import { userLogout } from '@/store'

export default function useUserInfo() {
  const dispatch = useAppDispatch()
  const isVerify = useVerify()

  const { data, isLoading, error, isError, refetch } = useGetUserInfoQuery(undefined, {
    skip: !isVerify,
  })
  const isLoginVerify = !isVerify ? false : isLoading ? false : !!data?.user

  useEffect(() => {
    if (isError) {
      dispatch(userLogout())
      clearToken()
    }
  }, [isError, dispatch])

  useEffect(() => {
    if (isVerify && !isLoading) refetch()
  }, [isVerify, refetch, isLoading])

  const mustAuthAction = nextAction => {
    if (!isLoginVerify) {
      return router.push('/login')
    }
    nextAction()
  }

  // if (isError) dispatch(userLogout())

  return {
    userInfo: data?.user,
    isVerify,
    isLoginVerify,
    mustAuthAction,
    isLoading,
    error,
    isError,
  }
}
