import React from 'react';
import { Layout } from 'antd';

class MainContent extends React.Component {
	render() {
		return (
			<Layout.Content className="main-content">
				<div style={{ padding: 24 }}>
					Main Content
					{this.props.children}
				</div>
			</Layout.Content>
		);
	}
}

export default MainContent;
