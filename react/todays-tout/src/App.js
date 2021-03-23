import React from "react";
import Header from "./components/header";
import Footer from "./components/footer";
const mainStyles = {
  width: "100%",
  height: "calc(100%-1rem)"
};
function App(props) {
  return (
    <div className="App">
      <Header />
      {/* 元素中的内容对于文档来说应当是唯一的。它不应包含在文档中重复出现的内容，比如侧栏、导航栏、版权信息、站点标志或搜索表单。 */}
      <main style={mainStyles}>{props.children}</main>
      <Footer />
    </div>
  );
}

export default App;
