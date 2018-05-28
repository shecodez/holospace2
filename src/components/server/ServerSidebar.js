import React from "react";
import { Layout } from "antd";

import AddServerBtn from "./AddServerBtn";
import AddDirectBtn from "../channel/AddDirectBtn";
import ServerList from "./ServerList";

class ServerSidebar extends React.Component {
	render() {
		return (
			<Layout.Sider
				trigger={null}
				collapsed={true}
				className="server-sidebar"
			>
				<AddDirectBtn />
				<div>Servers</div>
				<ServerList />
				<AddServerBtn />
			</Layout.Sider>
		);
	}
}

export default ServerSidebar;
