import SigninPromoRenderer from '../renderer/SigninPromoRenderer'

import { useUserInfo } from '@/hooks'

export default function AuthWrapper({ children }) {
  const { userInfo, isVerify, isLoading } = useUserInfo()
  if (isLoading) return null
  if (!isVerify || !userInfo) return <SigninPromoRenderer />
  return <>{children}</>
}
