import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Route } from "react-router-dom";

import "./styles/style.css";
import App from "./App";

import registerServiceWorker from "./utils/registerServiceWorker";

require("dotenv").config();

ReactDOM.render(
	<BrowserRouter>
		<Route component={App} />
	</BrowserRouter>,
	document.getElementById("root")
);
registerServiceWorker();
