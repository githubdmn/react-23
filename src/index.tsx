import React from "react";
import { createRoot } from "react-dom/client";

import Finefoods from "./finefoods-material-ui/App";
import Auth from "./auth-material-ui/App"

import "./i18n";
import dayjs from "dayjs";
import relativeTime from "dayjs/plugin/relativeTime";

dayjs.extend(relativeTime);

const container = document.getElementById("root");
// eslint-disable-next-line
const root = createRoot(container!);
root.render(
  <React.StrictMode>
    <React.Suspense>
        <>
            <Finefoods />
            <Auth />
        </>
    </React.Suspense>
  </React.StrictMode>,
);
