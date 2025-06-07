import apiSlice from './api'

export const commonApiSlice = apiSlice.injectEndpoints({
  endpoints: builder => ({
    getUploadToken: builder.query({
      query: () => ({
        url: `/api/upload/getToken`,
        method: 'GET',
      }),
    }),
    getBanners: builder.query({
      query: () => ({
        url: `/api/banner`,
        method: 'GET',
      }),
    }),
  }),
})

export const { useGetBannersQuery, useGetUploadTokenQuery, useLazyGetUploadTokenQuery } =
  commonApiSlice
