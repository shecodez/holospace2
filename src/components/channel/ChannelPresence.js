import React from "react";

import MemberItem from "../member/MemberItem";

const ChannelPresence = props => {
	return (
		<div className="channel-presence">
			{props.presence.users.map(user => (
				<MemberItem member={user} key={user.id} size="small" />
			))}
		</div>
	);
};

export default ChannelPresence;
