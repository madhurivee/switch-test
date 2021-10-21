import { useQuery } from "@apollo/client";
import { FETCH_USERS } from "../queries/user.query";
import { List, Avatar, Typography } from "antd";
const { Text } = Typography;

export const SearchList = ({ search }) => {
	const { loading, error, data } = useQuery(FETCH_USERS, {
		variables: { term: search },
	});
	if (loading) return <p>Loading...</p>;
	if (error) return <p>Error :(</p>;
	return (
		<List
			itemLayout="horizontal"
			dataSource={data.search.edges}
			style={{ textAlign: "left", paddingTop: "3em" }}
			renderItem={(item) => (
				<List.Item>
					<List.Item.Meta
						avatar={<Avatar src={item.node.avatarUrl} />}
						title={
							<>
								<div
									style={{ display: "flex", justifyContent: "space-between" }}
								>
									<a href={item.node.url} target="_blank">
										{item.node.login}
									</a>{" "}
									<Text level={5} type="secondary">
										Repos: {item.node.repositories.edges.length}
									</Text>{" "}
								</div>
							</>
						}
						description={item.node.bio}
					/>
				</List.Item>
			)}
		/>
	);
};
