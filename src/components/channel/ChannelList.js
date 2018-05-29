import React from "react";
import { Collapse, Icon } from "antd";

import ChannelItem from "./ChannelItem";

class ChannelList extends React.Component {
	state = {
		channels: [
			{ id: "c1", server_id: "s1", name: "general", type: "TEXT" },
			{ id: "c2", server_id: "s1", name: "Education", type: "TEXT" },
			{ id: "c3", server_id: "s1", name: "Experience", type: "TEXT" },
			{ id: "c4", server_id: "s1", name: "The Voice", type: "VOIP" },
			{ id: "c5", server_id: "s1", name: "Holodeck 18", type: "HOLO" }
		],
		presence: {
			c4: {
				id: "p1",
				channel_id: "c4",
				users: [{ id: "u4", username: "WillIAm" }]
			},
			c5: {
				id: "p2",
				channel_id: "c5",
				users: [
					{ id: "u2", username: "龍ハヤブサ" },
					{ id: "u6", username: "홍길동" }
				]
			}
		}
	};

	render() {
		const header = type => (
			<div className="channel-types">
				<span className="text">{type} Channels</span>
				<span className="menu">
					<Icon type="plus" />
				</span>
			</div>
		);

		const channels = (type, collapsible) =>
			this.state.channels
				.filter(channel => channel.type === type)
				.map(channel => (
					<ChannelItem
						channel={channel}
						key={channel.id}
						collapsible={collapsible}
						presence={this.state.presence[channel.id]}
					/>
				));

		return (
			<div className="channel-list">
				<Collapse
					bordered={false}
					defaultActiveKey={["1"]}
					style={{ background: "transparent" }}
				>
					<Collapse.Panel
						header={header("Text")}
						key="1"
						className="channel-panel"
					>
						{channels("TEXT", false)}
					</Collapse.Panel>

					<Collapse.Panel
						header={header("VoIP")}
						key="2"
						className="channel-panel"
					>
						{channels("VOIP", true)}
					</Collapse.Panel>

					<Collapse.Panel
						header={header("Holo")}
						key="3"
						className="channel-panel"
					>
						{channels("HOLO", true)}
					</Collapse.Panel>
				</Collapse>
			</div>
		);
	}
}

export default ChannelList;
