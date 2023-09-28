import "normalize.css";
import ReactDOM from "react-dom";

// import { preloadApp, setupApp, startApp } from "wujie";

import App from "./App.tsx";

ReactDOM.render(<App />, document.getElementById("root"));

// ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>
// );

// 测试发布12

console.log("micro-" + import.meta.env.MODE);
