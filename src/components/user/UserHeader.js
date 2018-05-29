import React from "react";
import { Icon, Avatar } from "antd";
import { getColorHash } from "../../utils/colors";

class UserHeader extends React.Component {
	openMenu = () => {
		console.log("OpenMenu!");
	};

	render() {
		return (
			<div className="user-header">
				<Avatar
					icon="user"
					style={{
						backgroundColor: getColorHash("Niico")
					}}
				/>
				<span className="no-display text">Niico</span>
				<span className="no-display menu">
					<Icon type="up" onClick={this.openMenu} />
					<Icon type="setting" />
				</span>
			</div>
		);
	}
}

export default UserHeader;
