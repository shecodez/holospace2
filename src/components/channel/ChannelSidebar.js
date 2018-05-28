import React from 'react';
import { Layout } from 'antd';

import ServerHeader from '../server/ServerHeader';
import ChannelContent from './ChannelContent';

class ChannelSidebar extends React.Component {
	handleMenuClick = ({ key }) => {
		//this.props.history.push(key);
	};

	render() {
		return (
			<Layout.Sider
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
				<ChannelContent />
			</Layout.Sider>
		);
	}
}

export default ChannelSidebar;
