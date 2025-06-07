import apiSlice from './api'

export const orderApiSlice = apiSlice.injectEndpoints({
  endpoints: builder => ({
    getOrdersList: builder.query({
      query: (limit, page) => ({
        url: `/api/orders`,
        method: 'GET',
        params: { limit, page },
      }),

      providesTags: (result, error, arg) =>
        result
          ? [
              ...result.data.orders.map(({ _id }) => ({
                type: 'Order',
                id: _id,
              })),
              'Order',
            ]
          : ['Order'],
    }),

    getUserOrders: builder.query({
      query: ({ page = 1, pageSize = 10 }) => ({
        url: `/api/orders/user`,
        method: 'GET',
      }),
      async onQueryStarted(arg, { queryFulfilled, dispatch }) {
        try {
          const { data } = await queryFulfilled
          console.log('Orders fetched successfully:', data)
        } catch (error) {
          console.error('Error fetching orders:', {
            status: error.status,
            data: error.data,
            message: error.message,
            error,
          })
        }
      },
      serializeQueryArgs: ({ queryArgs, ...rest }) => {
        const newQueryArgs = { ...queryArgs }
        if (newQueryArgs.page) {
          delete newQueryArgs.page
        }
        return newQueryArgs
      },
      // Always merge incoming data to the cache entry
      merge: (currentCache, newItems) => {
        if (currentCache) {
          newItems.data.orders.unshift(...currentCache.data.orders)
          return {
            ...currentCache,
            ...newItems,
          }
        }
        return newItems
      },
      // Refetch when the page arg changes
      forceRefetch({ currentArg, previousArg }) {
        if (currentArg?.page === 1) return false
        return currentArg?.page !== previousArg?.page
      },
    }),

    getSingleOrder: builder.query({
      query: ({ id }) => ({
        url: `/api/orders/${id}`,
        method: 'GET',
      }),
      providesTags: (result, error, arg) => [{ type: 'Order', id: arg.id }],
    }),

    updateOrder: builder.mutation({
      query: ({ id, body }) => ({
        url: `/api/orders/${id}`,
        method: 'PATCH',
        body,
      }),
      invalidatesTags: (result, error, arg) => [{ type: 'Order', id: arg.id }],
    }),

    createOrder: builder.mutation({
      query: ({ body }) => ({
        url: '/api/orders',
        method: 'POST',
        body,
      }),
      invalidatesTags: ['Order'],
    }),
  }),
})

export const {
  useGetUserOrdersQuery,
  useGetSingleOrderQuery,
  useUpdateOrderMutation,
  useCreateOrderMutation,
  useGetOrdersListQuery,
} = orderApiSlice
