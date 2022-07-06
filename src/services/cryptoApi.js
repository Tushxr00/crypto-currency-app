import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const cryptoHeaders = {
  "X-RapidAPI-Key": process.env.REACT_APP_API_KEY,
  "X-RapidAPI-Host": "coinranking1.p.rapidapi.com",
};

const baseUrl = "https://coinranking1.p.rapidapi.com";

const createRequest = (url, count, timePeriod) => {
  if (count) {
    return {
      url,
      headers: cryptoHeaders,
      params: {
        limit: count,
      },
    };
  } else if (timePeriod) {
    return {
      url,
      headers: cryptoHeaders,
      params: {
        timePeriod: timePeriod,
      },
    };
  } else {
    return {
      url,
      headers: cryptoHeaders,
    };
  }
};

export const cryptoApi = createApi({
  reducerPath: "cryptoApi",
  baseQuery: fetchBaseQuery({ baseUrl }),
  endpoints: (builder) => ({
    getCryptos: builder.query({
      query: (count) => createRequest(`${baseUrl}/coins`, count),
    }),
    getCryptoDetail: builder.query({
      query: (coinId) => createRequest(`${baseUrl}/coin/${coinId}`),
    }),
    getCryptoHistory: builder.query({
      query: ({ coinId, timePeriod }) =>
        createRequest(`${baseUrl}/coin/${coinId}/history`, 0, timePeriod),
    }),
    GetExchanges: builder.query({
      query: (coinId) => createRequest(`${baseUrl}/coin/${coinId}/exchanges`),
    }),
  }),
});

export const {
  useGetCryptosQuery,
  useGetCryptoDetailQuery,
  useGetCryptoHistoryQuery,
  useGetExchangesQuery,
} = cryptoApi;
