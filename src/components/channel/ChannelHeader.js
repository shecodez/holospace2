import React from 'react';
import { Layout, Icon } from 'antd';

class ChannelHeader extends React.Component {
	toggle = () => {
		this.props.toggle();
	};

	render() {
		return (
			<Layout.Header className="channel-header">
				<Icon
					className="trigger"
					type={this.props.collapsed ? 'menu-unfold' : 'menu-fold'}
					onClick={this.toggle}
				/>
				Channel Name | Topic...
				<span className="menu">
					<Icon type="search" />
					<Icon type="notification" />
					<Icon type="calendar" />
				</span>
			</Layout.Header>
		);
	}
}

export default ChannelHeader;
