import apiSlice from './api'
export const reviewApiSlice = apiSlice.injectEndpoints({
  endpoints: builder => ({
    getReviews: builder.query({
      query: () => ({
        url: `/api/reviews`,
        method: 'GET',
      }),
      async onQueryStarted(arg, { queryFulfilled, dispatch }) {
        try {
          await queryFulfilled
        } catch (error) {
          console.error('Error fetching reviews:', {
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
            products: [...(currentCache?.data?.reviews || []), ...newItems.data.reviews],
          },
        }
      },
      // Refetch when the page arg changes
      forceRefetch({ currentArg, previousArg }) {
        if (currentArg?.page === 1) return false
        return currentArg?.page !== previousArg?.page
      },
    }),

    getUserReviews: builder.query({
      query: ({ pageSize, page }) => ({
        url: `/api/reviews/user`,
        method: 'GET',
        params: { pageSize, page },
      }),
      providesTags: result =>
        result
          ? [
              ...result.data.reviews.map(({ _id }) => ({
                type: 'Review',
                id: _id,
              })),
              'Review',
            ]
          : ['Review'],
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
            reviews: [...(currentCache?.data?.reviews || []), ...newItems.data.reviews],
          },
        }
      },
      // Refetch when the page arg changes
      forceRefetch({ currentArg, previousArg }) {
        if (currentArg?.page === 1) return false
        return currentArg?.page !== previousArg?.page
      },
    }),

    createReview: builder.mutation({
      query: ({ body }) => ({
        url: `/api/reviews`,
        method: 'POST',
        body,
      }),
      invalidatesTags: ['Review'],
    }),

    getProductReviews: builder.query({
      query: ({ id }) => ({
        url: `/api/reviews/product/${id}`,
        method: 'GET',
      }),
      providesTags: result =>
        result
          ? [
              ...result.data.reviews.map(({ _id }) => ({
                type: 'Review',
                id: _id,
              })),
              'Review',
            ]
          : ['Review'],
    }),

    getSingleReview: builder.query({
      query: ({ id }) => ({
        url: `/api/reviews/${id}`,
        method: 'GET',
      }),
      providesTags: (result, err, arg) => [{ type: 'Review', id: arg.id }],
    }),

    deleteReview: builder.mutation({
      query: ({ id }) => ({
        url: `/api/reviews/${id}`,
        method: 'DELETE',
      }),
      invalidatesTags: ['Review'],
    }),

    editReview: builder.mutation({
      query: ({ id, body }) => ({
        url: `/api/reviews/${id}`,
        method: 'PATCH',
        body,
      }),
      invalidatesTags: (result, err, arg) => [{ type: 'Review', id: arg.id }],
    }),
  }),
})

export const {
  useGetReviewsQuery,
  useGetSingleReviewQuery,
  useGetUserReviewsQuery,
  useDeleteReviewMutation,
  useGetProductReviewsQuery,
  useEditReviewMutation,
  useCreateReviewMutation,
} = reviewApiSlice
