import React from "react";
import { Layout } from "antd";

import ServerSidebar from "../server/ServerSidebar";
import ChannelSidebar from "../channel/ChannelSidebar";
import MemberSidebar from "../member/MemberSidebar";
import ChannelHeader from "../channel/ChannelHeader";

class MainLayout extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			collapsed: false
		};
	}

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
		const style = {
			minHeight: "100vh",
			maxHeight: "100vh",
			backgroundColor: "transparent"
		};

		return;
		<div className="main-layout background">
			<Layout style={style}>
				<ServerSidebar />
				<ChannelSidebar
					collapsed={this.state.collapsed}
					setCollapsed={this.setCollapsed}
				/>
				<Layout style={style}>
					<ChannelHeader
						toggle={this.toggle}
						collapsed={this.state.collapsed}
					/>
					{this.props.children}
				</Layout>
				<MemberSidebar />
			</Layout>
		</div>;
	}
}

export default MainLayout;
