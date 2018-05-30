import React from "react";
import { Layout } from "antd";

import ServerSidebar from "./components/server/ServerSidebar";
import ChannelSidebar from "./components/channel/ChannelSidebar";
import MemberSidebar from "./components/member/MemberSidebar";
import ChannelHeader from "./components/channel/ChannelHeader";
import ChatRoom from "./components/chat/ChatRoom";

class App extends React.Component {
	state = {
		collapsed: false
	};

	toggle = () => {
		this.setState({
			collapsed: !this.state.collapsed
		});
	};

	setCollapsed = collapsed => {
		this.setState({
			collapsed
		});
	};

	render() {
		return (
			<div className="App background">
				<Layout
					style={{
						minHeight: "100vh",
						backgroundColor: "transparent"
					}}
				>
					<ServerSidebar />
					<ChannelSidebar
						collapsed={this.state.collapsed}
						setCollapsed={this.setCollapsed}
					/>
					<Layout style={{ backgroundColor: "transparent" }}>
						<ChannelHeader
							toggle={this.toggle}
							collapsed={this.state.collapsed}
						/>
						<ChatRoom />
					</Layout>
					<MemberSidebar />
				</Layout>
			</div>
		);
	}
}

export default App;
