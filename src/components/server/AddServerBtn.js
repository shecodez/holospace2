import React from "react";
import { Button } from "antd";

class AddServerBtn extends React.Component {
	render() {
		return (
			<div style={{ position: "sticky", bottom: "0" }}>
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
