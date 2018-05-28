import React from 'react';
import { Icon, Avatar } from 'antd';

class UserHeader extends React.Component {
	openMenu = () => {
		console.log('OpenMenu!');
	};

	render() {
		return (
			<div className="user-header ">
				<Avatar icon="user" className="avatar" />
				<span className="no-display">username</span>
				<span className="no-display menu">
					<Icon type="ellipsis" onClick={this.openMenu} />
				</span>
			</div>
		);
	}
}

export default UserHeader;
