import React from "react";
import { List, Icon, Avatar } from "antd";
import { getColorHash } from "../../utils/colors";

const ChatHistory = props => {
	const title = message => (
		<div>
			<span className="auth">{message.author}</span>{" "}
			<small className="date">{message.created_at}</small>
		</div>
	);

	const body = message => (
		<div className="chat-list-item">
			{message.body}{" "}
			{message.updated_at && (
				<small>
					<em>edited</em>
				</small>
			)}
			<span className="menu">
				<Icon type="setting" />
			</span>
		</div>
	);

	return (
		<div className="chat-history">
			<List
				className="chat-list"
				dataSource={props.messages}
				renderItem={message => (
					<List.Item>
						<List.Item.Meta
							avatar={
								<Avatar
									icon="user"
									style={{
										backgroundColor: getColorHash(
											message.author
										)
									}}
								/>
							}
							title={title(message)}
							description={body(message)}
						/>
					</List.Item>
				)}
			/>
		</div>
	);
};

export default ChatHistory;
