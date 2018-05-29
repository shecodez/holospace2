import React from "react";
import { Avatar, Popover } from "antd";
import { getColorHash } from "../../utils/colors";

const MemberItem = props => {
	const content = (
		<div>
			<p>Content</p>
			<p>Content</p>
		</div>
	);

	return (
		<div className="member">
			<Popover
				placement="leftTop"
				title={props.member.username}
				content={content}
				trigger="click"
			>
				{props.member.icon ? (
					<Avatar src={props.member.icon} />
				) : (
					<Avatar
						style={{
							backgroundColor: getColorHash(props.member.username)
						}}
					>
						{props.member.username.charAt(0)}
					</Avatar>
				)}
				<span className="no-display text">{props.member.username}</span>
			</Popover>
		</div>
	);
};

export default MemberItem;
