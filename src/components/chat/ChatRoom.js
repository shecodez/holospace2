import React from "react";

import { messages } from "../../utils/mock";

import ChatHistory from "./ChatHistory";
import ChatInut from "./ChatInput";

class ChatRoom extends React.Component {
	render() {
		return (
			<div className="chat-room">
				<ChatHistory messages={messages} />
				<ChatInut />
			</div>
		);
	}
}

export default ChatRoom;
