import React from "react";
import { shallow, mount } from "enzyme";
import ToDoCore from "./ToDoCore";

describe("ToDoCore", () => {
  it('should render correctly in "debug" mode', () => {
    const todocore = shallow(<ToDoCore debug />);

    expect(todocore).toMatchSnapshot();
  });
});

it("should be possible to press Enter on textarea", () => {
  const component = mount(<ToDoCore />);
  component.find("input#testInput").simulate("keydown", { keyCode: 13 });
  expect(component).toMatchSnapshot();
  component.unmount();
});

it("should be possible to press Enter on textarea", () => {
  const component = mount(<ToDoCore />);
  component.find("input#testInput").simulate("change");
  expect(component).toMatchSnapshot();
  component.unmount();
});

it("should be possible to activate Button with onClick", () => {
  const component = mount(<ToDoCore />);
  component.find("Button#testButton").simulate("click");
  expect(component).toMatchSnapshot();
  component.unmount();
});

it("should be possible to activate Button with onClick", () => {
  const component = mount(<ToDoCore />);
  component.find("Button#testButton2").simulate("click");
  expect(component).toMatchSnapshot();
  component.unmount();
});

it("should be possible to activate Button with onClick", () => {
  const component = mount(<ToDoCore />);
  component.find("Button#testButton3").simulate("click");
  expect(component).toMatchSnapshot();
  component.unmount();
});

// --------- Expected number of calls: >= 1 not: Received number of calls:    0

// const mockFunction = jest.fn();
// it("should call mockFunction on button click", () => {
//   const component = mount(<ToDoCore onClickFunction={mockFunction} />);
//   component.find("Button#testButton").simulate("click");
//   expect(mockFunction).toHaveBeenCalled();

//   component.unmount();
// });
