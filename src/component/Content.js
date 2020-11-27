import React from "react";

const Content = (props) => {
  return (
    <section>
      <h1>ini adalah konten</h1>
      {props.children}
    </section>
  );
};

export default Content;
