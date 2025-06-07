import apiSlice from './api'

export const productApiSlice = apiSlice.injectEndpoints({
  endpoints: builder => ({
    getProducts: builder.query({
      query: ({ category, limit, page, sort, query, inStock, discount, price }) => {
        return {
          url: `/api/products`,
          method: 'GET',
          params: { category, limit, page, sort, query, inStock, discount, price },
        }
      },
      async onQueryStarted(arg, { queryFulfilled, dispatch }) {
        try {
          const data = await queryFulfilled
          console.log('Products fetched successfully:', data)
        } catch (error) {
          console.error('Error fetching products:', {
            status: error.status,
            data: error.data,
            message: error.message,
            error,
          })
        }
      },
      serializeQueryArgs: ({ queryArgs }) => {
        const newQueryArgs = { ...queryArgs }
        delete newQueryArgs.page
        return newQueryArgs
      },
      merge: (currentCache, newItems, { arg }) => {
        if (arg.page === 1) {
          return newItems
        }
        return {
          ...newItems,
          data: {
            ...newItems.data,
            products: [...(currentCache?.data?.products || []), ...newItems.data.products],
          },
        }
      },
      // Refetch when the page arg changes
      forceRefetch({ currentArg, previousArg }) {
        if (currentArg?.page === 1) return false
        return currentArg?.page !== previousArg?.page
      },
      providesTags: result =>
        result
          ? [
              ...result.data.products.map(({ _id }) => ({
                type: 'Product',
                id: _id,
              })),
              'Product',
            ]
          : ['Product'],
    }),

    getSingleProductDetail: builder.query({
      query: ({ id }) => ({
        url: `/api/products/${id}`,
        method: 'GET',
      }),
      async onQueryStarted(arg, { queryFulfilled, dispatch }) {
        try {
          const { data } = await queryFulfilled
          console.log('Product detail fetched successfully:', data)
        } catch (error) {
          console.error('Error fetching product detail:', {
            status: error.status,
            data: error.data,
            message: error.message,
          })
        }
      },
      providesTags: (result, error, { id }) => [{ type: 'Product', id }],
    }),

    deleteProduct: builder.mutation({
      query: ({ id }) => ({
        url: `/api/products/${id}`,
        method: 'DELETE',
      }),
      invalidatesTags: ['Product'],
    }),

    createProduct: builder.mutation({
      query: ({ body }) => ({
        url: `/api/products`,
        method: 'POST',
        body,
      }),
      invalidatesTags: ['Product'],
    }),

    updateProduct: builder.mutation({
      query: ({ id, body }) => ({
        url: `/api/products/${id}`,
        method: 'PATCH',
        body,
      }),
      invalidatesTags: (result, error, arg) => [{ type: 'Product', id: arg.id }],
    }),
  }),
})

export const {
  useDeleteProductMutation,
  useCreateProductMutation,
  useGetProductsQuery,
  useGetSingleProductDetailQuery,
  useUpdateProductMutation,
} = productApiSlice
