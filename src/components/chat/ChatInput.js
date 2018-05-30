import React from "react";
import { Input, Icon } from "antd";

const ChatInut = props => {
	return (
		<div className="chat-input">
			<Input
				addonBefore={<Icon type="upload" />}
				addonAfter={<Icon type="smile-o" />}
				size="large"
				placeholder="Message props.channel.name"
			/>
		</div>
	);
};

export default ChatInut;
