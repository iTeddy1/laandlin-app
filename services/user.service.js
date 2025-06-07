import * as SecureStore from 'expo-secure-store'

import apiSlice from './api'

import { userLogout } from '@/store'

export const userApiSlice = apiSlice.injectEndpoints({
  endpoints: builder => ({
    login: builder.mutation({
      query: ({ body }) => ({
        url: '/api/users/login',
        method: 'POST',
        body,
      }),
      async onQueryStarted(arg, { queryFulfilled }) {
        try {
          const { data } = await queryFulfilled
          await SecureStore.setItemAsync('access-token', data.token)
        } catch (error) {
          console.log('Error details:', error)
        }
      },
      invalidatesTags: ['User'],
    }),

    getUserInfo: builder.query({
      query: () => ({
        url: '/api/users/me',
        method: 'GET',
      }),
      async onQueryStarted(arg, { queryFulfilled, dispatch }) {
        try {
          await queryFulfilled
        } catch (error) {
          if (error.status === 401) {
            await SecureStore.deleteItemAsync('access-token') // Clear token on unauthorized access
          }
        }
      },
      providesTags: ['User'],
    }),

    createUser: builder.mutation({
      query: ({ body }) => {
        return {
          url: '/api/users/register',
          method: 'POST',
          body,
        }
      },
      async onQueryStarted(arg, { queryFulfilled }) {
        try {
          const { data } = await queryFulfilled
          console.log('Success:', data)
        } catch (error) {
          console.log('Error details:', error)
        }
      },
      invalidatesTags: [
        'User',
        'Review',
        'Details',
        'Order',
        'Product',
        'Category',
        'Slider',
        'Banner',
      ],
    }),
    getUsers: builder.query({
      query: ({ page }) => ({
        url: `/api/users/?page=${page}`,
        method: 'GET',
      }),
      providesTags: (result, error, arg) =>
        result
          ? [
              ...result.data.users.map(({ _id }) => ({
                type: 'User',
                id: _id,
              })),
              'User',
            ]
          : ['User'],
    }),

    editUser: builder.mutation({
      query: ({ body }) => ({
        url: '/api/users',
        method: 'PATCH',
        body,
      }),
      invalidatesTags: (result, err, arg) => [{ type: 'User', id: arg.body._id }],
    }),

    deleteUser: builder.mutation({
      query: ({ id }) => ({
        url: `/api/users/${id}`,
        method: 'DELETE',
      }),
      invalidatesTags: ['User'],
    }),

    logout: builder.mutation({
      query: () => ({
        url: '/api/users/logout',
        method: 'POST',
      }),
      async onQueryStarted(arg, { queryFulfilled, dispatch }) {
        try {
          await queryFulfilled
          await SecureStore.deleteItemAsync('access-token')
          dispatch(userLogout())
          console.log('Logout successful')
        } catch (error) {
          console.log('Error details:', error)
        }
      },
      invalidatesTags: ['User'],
    }),
  }),
})

export const {
  useLoginMutation,
  useGetUserInfoQuery,
  useCreateUserMutation,
  useGetUsersQuery,
  useDeleteUserMutation,
  useEditUserMutation,
  useLogoutMutation,
} = userApiSlice
