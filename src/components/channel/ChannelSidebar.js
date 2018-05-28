import React from "react";
import { Layout } from "antd";

import ServerHeader from "../server/ServerHeader";
import ChannelList from "./ChannelList";

class ChannelSidebar extends React.Component {
	handleMenuClick = ({ key }) => {
		//this.props.history.push(key);
	};

	render() {
		return (
			<Layout.Sider
				width={240}
				trigger={null}
				breakpoint="lg"
				collapsedWidth="0"
				collapsible
				collapsed={this.props.collapsed}
				onCollapse={collapsed => {
					this.props.setCollapsed(collapsed);
				}}
				className="channel-sidebar"
			>
				<ServerHeader />
				<ChannelList />
			</Layout.Sider>
		);
	}
}

export default ChannelSidebar;
