import * as React from "react";
import * as ReactDOM from "react-dom";

// 导入定义的组件
import { Hello } from "./components/Hello";

// 渲染到example节点上
ReactDOM.render(
    <Hello compiler="TypeScript" framework="React" />,
    document.getElementById("root")
);