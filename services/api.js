import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import * as SecureStore from 'expo-secure-store'

const apiSlice = createApi({
  reducerPath: 'api',
  baseQuery: fetchBaseQuery({
    baseUrl: process.env.EXPO_PUBLIC_BASE_URL,
    prepareHeaders: async (headers, { getState }) => {
      const token = await SecureStore.getItemAsync('access-token')

      if (token) headers.set('Authorization', `Bearer ${token}`)
      headers.set('Content-Type', 'application/json')
      return headers
    },
  }),
  tagTypes: ['User', 'Review', 'Details', 'Order', 'Product', 'Category', 'Slider', 'Banner'],
  endpoints: builder => ({}),
})

export default apiSlice
