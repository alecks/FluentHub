import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import * as serviceWorker from "./serviceWorker";

import { Fabric } from "@fluentui/react";
import { initializeIcons } from "@uifabric/icons";

initializeIcons();

ReactDOM.render(
    <React.StrictMode>
        <Fabric><App /></Fabric>
    </React.StrictMode>,
    document.getElementById("root"),
);

serviceWorker.register();
