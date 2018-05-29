import React from "react";
import { Button, Tooltip } from "antd";

class AddDirectBtn extends React.Component {
	state = {};

	render() {
		return (
			<div>
				<Tooltip placement="right" title={"Direct Message"}>
					<Button
						icon="mail"
						shape="circle"
						size="large"
						type="primary"
					/>
				</Tooltip>
			</div>
		);
	}
}

export default AddDirectBtn;
