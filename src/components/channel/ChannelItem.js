import React from "react";
import { Collapse, Icon } from "antd";
import ChannelPresence from "./ChannelPresence";

const ChannelItem = props => {
	const header = (
		<div className="channel-item-header">
			<span className="text">
				{props.channel.type === "TEXT" ? (
					<span>
						<span className="hash-tag">#</span>
						{props.channel.name}
					</span>
				) : (
					<span>{props.channel.name}</span>
				)}
			</span>
			<span className="menu">
				<Icon type="setting" />
			</span>
		</div>
	);

	const customPanelStyle = {
		background: "transparent",
		borderRadius: 0,
		marginBottom: 0,
		border: 0,
		overflow: "hidden"
	};

	return props.collapsible ? (
		<Collapse
			bordered={false}
			className="channel-collapse-item"
			style={{ background: "transparent" }}
		>
			<Collapse.Panel header={header} style={customPanelStyle}>
				<ChannelPresence presence={props.presence} />
			</Collapse.Panel>
		</Collapse>
	) : (
		<div className="channel-item">{header}</div>
	);
};

export default ChannelItem;
