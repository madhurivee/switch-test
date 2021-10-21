import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./pages/app";
import { ApolloProvider } from "@apollo/client";
import { client } from "./utilities/apollo-client";

ReactDOM.render(
	<React.StrictMode>
		<ApolloProvider client={client}>
			<App />
		</ApolloProvider>
	</React.StrictMode>,
	document.getElementById("root")
);
