import React from 'react';
import { Icon } from 'antd';

class ServerHeader extends React.Component {
	openMenu = () => {
		console.log('OpenMenu!');
	};

	render() {
		return (
			<div className="server-header">
				<span className="no-display text">Server Name</span>
				<span className="no-display menu">
					<Icon type="down" onClick={this.openMenu} />
				</span>
			</div>
		);
	}
}

export default ServerHeader;
