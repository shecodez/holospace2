import React from 'react';
import { Icon } from 'antd';

class ServerHeader extends React.Component {
	openSettingsMenu = () => {
		console.log('OpenSettingMenu!');
	};

	render() {
		return (
			<div className="server-header">
				<span className="no-display text">Server Name</span>
				<span className="menu">
					<Icon type="down" onClick={this.openSettingsMenu} />
				</span>
			</div>
		);
	}
}

export default ServerHeader;
