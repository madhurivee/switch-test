import "./App.css";
import GithubUserSearch from "../../components/github-search";

function App() {
	return (
		<div className="App">
			<h2 className="App-Header">Github Search API</h2>
			<div className="container">
				<GithubUserSearch />
			</div>
		</div>
	);
}

export default App;
