import React from "react";

import MainLayout from "../layout/MainLayout";
import HoloSpace from "../holo/HoloSpace";

class HoloSpacePage extends React.Component {
	constructor(props) {
		super(props);
		this.state = {};
	}
	render() {
		return (
			<div className="holospace-page">
				<MainLayout>
					<HoloSpace />
				</MainLayout>
			</div>
		);
	}
}

export default HoloSpacePage;
