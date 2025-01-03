import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const TAGS = ["historyData"];

// Base URL 
const mainQuery = fetchBaseQuery({
  baseUrl: "",
  credentials: "include",
  prepareHeaders: (headers, { getState }: any) => {
    const token: any = getState().data.token;
    if (token) {
      headers.set("authorization", `Bearer ${token}`);
    }
    return headers;
  },
});



const baseQueryWithReAuth =
  (baseQuery: any) => async (args: any, api: any, extraOptions: any) => {
    try {
      let result: any = await baseQuery(args, api, extraOptions);

      if (result?.error?.originalStatus === 403) {
        // Send refresh token to get new access token
        const refreshResult = await baseQuery("/refresh", api, extraOptions);

        if (refreshResult?.data) {
          const user = api.getState().data.user;
          // Store the new token
          // api.dispatch(setCredentials({ ...refreshResult.data, user }));

          // Retry the original query with new access token
          // result = await baseQuery(args, api, extraOptions);
        } else {
          api.dispatch(logOut());
        }
      }

      return result;
    } catch (error) {
      console.error("Error in baseQueryWithReauth:", error);
      throw error;
    }
  };

// Create API slices for each base URL


export const mainSlice: any = createApi({
  reducerPath: "mainApi",
  tagTypes: TAGS,
  baseQuery: baseQueryWithReAuth(mainQuery),
  endpoints: (builder) => ({}),
});



function logOut(): any {
  throw new Error("Function not implemented.");
}
