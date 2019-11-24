// import React from "react";
// import { shallow } from "enzyme";
// import ToDoCore from "./ToDoCore";

// describe("CreatePost tests", () => {
//   let todocore;
//   beforeEach(() => {
//     todocore = shallow(<ToDoCore />);
//   });

//   test("should match the snapshot", () => {
//     expect(todocore).toMatchSnapshot();
//   });
// });

import React from "react";
import { shallow } from "enzyme";
import ToDoCore from "./ToDoCore";
describe("ToDoCore", () => {
  it('should render correctly in "debug" mode', () => {
    const todocore = shallow(<ToDoCore debug />);

    expect(todocore).toMatchSnapshot();
  });
});
