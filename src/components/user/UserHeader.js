import React from "react";
import { Icon, Avatar } from "antd";

class UserHeader extends React.Component {
	openMenu = () => {
		console.log("OpenMenu!");
	};

	render() {
		return (
			<div className="user-header">
				<Avatar icon="user" className="avatar" />
				<span className="no-display text">username</span>
				<span className="no-display menu">
					<Icon type="up" onClick={this.openMenu} />
					<Icon type="setting" />
				</span>
			</div>
		);
	}
}

export default UserHeader;
