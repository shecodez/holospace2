import React from 'react';

class ChannelContent extends React.Component {
	render() {
		return (
			<div className="channel-content">
				<div style={{ padding: 24 }}>
					Channels
					{this.props.children}
				</div>
			</div>
		);
	}
}

export default ChannelContent;
