import { useState } from "react";
import { SearchList } from "../components/search";
import { Input, Card } from "antd";
const { Search } = Input;

function GithubUserSearch() {
	const [search, setSearch] = useState(undefined);
	const onSearch = async (value) => {
		setSearch(value);
	};

	return (
		<Card style={{ width: 800 }}>
			<Search placeholder="input search text" enterButton onSearch={onSearch} />
			{search && <SearchList search={search} />}
		</Card>
	);
}

export default GithubUserSearch;
