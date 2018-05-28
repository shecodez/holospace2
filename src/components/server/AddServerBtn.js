import React from "react";
import { Button } from "antd";

class AddServerBtn extends React.Component {
	render() {
		return (
			<div>
				<Button
					icon="plus"
					shape="circle"
					size="large"
					type="dashed"
					ghost
				/>
			</div>
		);
	}
}

export default AddServerBtn;
