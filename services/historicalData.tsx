import { mainSlice } from "./api";

export const historicalData: any = mainSlice.injectEndpoints({
  endpoints: (builder: any) => ({
    historicalData: builder.query({
      query: () => ({
        url: "/api/historical-places",
        method: "GET",
      }),
    }),
  }),
});

export const { useHistoricalDataQuery } = historicalData;
