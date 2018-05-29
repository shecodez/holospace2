import React from "react";
import { Layout, Icon } from "antd";

import UserHeader from "../user/UserHeader";
import MemberList from "./MemberList";

class MemberSidebar extends React.Component {
	state = {
		collapsed: false
	};

	toggle = () => {
		this.setState({
			collapsed: !this.state.collapsed
		});
	};

	handleMenuClick = ({ key }) => {
		//this.props.history.push(key);
	};

	render() {
		return (
			<Layout.Sider
				width={240}
				trigger={null}
				breakpoint="lg"
				collapsible
				collapsed={this.state.collapsed}
				className="member-sidebar"
			>
				<div className="header">
					<Icon
						className="trigger"
						type={
							this.state.collapsed ? "menu-fold" : "menu-unfold"
						}
						onClick={this.toggle}
					/>
					<span className="no-display">Members</span>
				</div>
				<MemberList />

				<UserHeader />
			</Layout.Sider>
		);
	}
}

export default MemberSidebar;
