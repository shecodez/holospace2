import React from "react";

import MemberItem from "./MemberItem";

class MemberList extends React.Component {
	state = {
		members: [
			{ id: "u1", username: "Niico", online: true },
			{ id: "u2", username: "龍ハヤブサ", online: true },
			{ id: "u3", username: "Kai", online: true, status: "hide" },
			{ id: "u4", username: "WillIAm", online: true },
			{ id: "u5", username: "山田太郎", online: false },
			{ id: "u6", username: "홍길동", online: true },
			{ id: "u7", username: "IronMan", online: false }
		]
	};

	render() {
		return (
			<section className="member-list">
				<div style={{ padding: 24 }}>
					<p>Online</p>
					{this.state.members
						.filter(
							member => member.online && member.status !== "hide"
						)
						.map(member => (
							<MemberItem member={member} key={member.id} />
						))}

					<br />
					<p>Offline</p>
					{this.state.members
						.filter(
							member => !member.online || member.status === "hide"
						)
						.map(member => (
							<MemberItem member={member} key={member.id} />
						))}
				</div>
			</section>
		);
	}
}

export default MemberList;
