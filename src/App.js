import React from "react";
import Header from "../src/component/Header";
import Content from "../src/component/Content";
import Footer from "../src/component/Footer";

const App = () => {
  let title = "Belajar React";
  title = "Belajar React Lagi";

  const decription = "Tutorial front tahun coding";

  function showHello() {
    const sum = 1 + 2;
    return "hello coy " + sum;
  }

  const showHello2 = () => {
    return "hello dari tahuuuuuu";
  };

  const testParams = (params) => {
    return params;
  };

  return (
    <div
      style={{
        backgroundColor: "#eee",
      }}
    >
      <Header />
      <h1>{title}</h1>
      <h2>{decription}</h2>
      <h2>{showHello()}</h2>
      <h2>{showHello2()}</h2>
      <h2>{testParams("asdasdasd")}</h2>

      <Content>
        <h1> my App </h1>
        <h1> my App </h1>
        <h1> my App dasdyasdasd</h1>
      </Content>
      <Footer />
    </div>
  );
};

export default App;
