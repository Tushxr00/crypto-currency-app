import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const cryptoHeaders = {
  "X-RapidAPI-Key": "58aa3c5c3emsh9a8f077611deb15p143f2cjsn441a9f0ce517",
  "X-RapidAPI-Host": "coinranking1.p.rapidapi.com",
};

const baseUrl = "https://coinranking1.p.rapidapi.com";

const createRequest = (url) => ({
  url: `${baseUrl}${url}`,
  headers: cryptoHeaders,
});

export const cryptoApi = createApi({
  reducerPath: "cryptoApi",
  baseQuery: fetchBaseQuery({ baseUrl }),
  endpoints: (builder) => ({
    getCryptos: builder.query({
      query: () => createRequest("/coins"),
    }),
  }),
});

export const { useGetCryptosQuery } = cryptoApi;

// const options = {
//   method: "GET",
//   url: "https://coinranking1.p.rapidapi.com/coin/Qwsogvtv82FCd/exchanges",
//   params: {
//     referenceCurrencyUuid: "yhjMzLPhuIDl",
//     limit: "50",
//     offset: "0",
//     orderBy: "24hVolume",
//     orderDirection: "desc",
//   },
//   headers: {
//     "X-RapidAPI-Key": "58aa3c5c3emsh9a8f077611deb15p143f2cjsn441a9f0ce517",
//     "X-RapidAPI-Host": "coinranking1.p.rapidapi.com",
//   },
// };
