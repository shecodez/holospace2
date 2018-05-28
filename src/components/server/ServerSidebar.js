import React from 'react';
import { Layout } from 'antd';

class ServerSidebar extends React.Component {
	handleMenuClick = ({ key }) => {
		//this.props.history.push(key);
	};

	render() {
		return (
			<Layout.Sider
				trigger={null}
				collapsible
				collapsed={true}
				className="server-sidebar"
			>
				<div className="header">Servers</div>
				{this.props.children}
			</Layout.Sider>
		);
	}
}

export default ServerSidebar;
