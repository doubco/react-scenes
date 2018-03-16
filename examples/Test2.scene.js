import React, { Component } from "react";

import controls from "./engine/controls";

import { Layout } from "/imports/ui/components/Layout";

export default {
  title: "Layouts>Layout",
  target: p => (
    <div>
      <Layout {...p}>
        <div style={{ background: "#ccc" }}> Hello World</div>
      </Layout>
      Foo
    </div>
  ),
  controllers: [
    {
      key: "debug",
      title: "Debug?",
      controller: controls.boolean()
    }
  ],
  // events: ["onClick"],
  options: {
    theme: "light" // ligth, dark, none
  },
  docs: `## Layout 
  **Hello World**
  `
};
