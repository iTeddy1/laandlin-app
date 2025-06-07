import apiSlice from './api'

export const categoryApiSlice = apiSlice.injectEndpoints({
  endpoints: builder => ({
    getCategories: builder.query({
      query: () => ({
        url: '/api/categories',
        method: 'GET',
      }),
      async onQueryStarted(arg, { queryFulfilled, dispatch }) {
        try {
          const data = await queryFulfilled
          console.log('Categories fetched successfully:', data)
        } catch (error) {
          console.error('Error fetching categories:', {
            status: error.status,
            data: error.data,
            message: error.message,
            error,
          })
        }
      },
      providesTags: (result, error, arg) =>
        result
          ? [
              ...result?.data?.categories.map(({ _id }) => ({
                type: 'Category',
                id: _id,
              })),
              'Category',
            ]
          : ['Category'],
    }),

    getSingleCategory: builder.query({
      query: ({ id }) => ({
        url: `/api/categories/${id}`,
        method: 'GET',
      }),
      providesTags: (result, error, arg) => [{ type: 'Category', id: arg.id }],
    }),

    updateCategory: builder.mutation({
      query: ({ id, body }) => ({
        url: `/api/categories/${id}`,
        method: 'PUT',
        body,
      }),
      invalidatesTags: (result, error, arg) => [{ type: 'Category', id: arg.id }],
    }),

    createCategory: builder.mutation({
      query: ({ body }) => ({
        url: '/api/categories',
        method: 'POST',
        body,
      }),
      invalidatesTags: ['Category'],
    }),
  }),
})

export const {
  useCreateCategoryMutation,
  useGetCategoriesQuery,
  useGetSingleCategoryQuery,
  useUpdateCategoryMutation,
} = categoryApiSlice
