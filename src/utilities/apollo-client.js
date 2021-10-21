import { ApolloClient, InMemoryCache } from "@apollo/client";
const { VITE_API_KEY, VITE_API_URI } = import.meta.env;

export const client = new ApolloClient({
	uri: VITE_API_URI,
	headers: { authorization: `Bearer ${VITE_API_KEY}` },
	cache: new InMemoryCache(),
});
