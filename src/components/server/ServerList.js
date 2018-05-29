import React from "react";
import { Avatar, Tooltip } from "antd";
import { getColorHash } from "../../utils/colors";

class ServerList extends React.Component {
	state = {
		servers: [
			{ id: "s1", name: "Resume | NJN" },
			{ id: "s2", name: "이거 매워요?" },
			{ id: "s3", name: "見ぬが花" }
		]
	};

	render() {
		return (
			<section className="server-list">
				{this.state.servers.map(server => (
					<div key={server.id} style={{ margin: ".5em auto" }}>
						<Tooltip placement="right" title={server.name}>
							{server.icon ? (
								<Avatar size="large" src={server.icon} />
							) : (
								<Avatar
									size="large"
									style={{
										backgroundColor: getColorHash(
											server.name
										)
									}}
								>
									{server.name.charAt(0)}
								</Avatar>
							)}
						</Tooltip>
					</div>
				))}
			</section>
		);
	}
}

export default ServerList;
