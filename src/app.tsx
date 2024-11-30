import { createRoot } from "react-dom/client";
import { Widget } from "./components/widget";
import { Entry } from "./components/entry";

const root = createRoot(document.body);

root.render(<Entry />);
