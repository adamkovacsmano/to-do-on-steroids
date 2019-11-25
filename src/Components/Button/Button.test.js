import React from "react";
import Button from "./Button";
import { shallow, mount } from "enzyme";

describe("Button Tests", () => {
  let button;
  beforeEach(() => {
    button = shallow(<Button />);
  });

  test("should match the snapshot", () => {
    expect(button).toMatchSnapshot();
  });
});

const clickFn = jest.fn();
describe("button", () => {
  it("button click should filter component", () => {
    const component = shallow(<Button onClick={clickFn} />);
    component.find("button#testButton2").simulate("click");
    expect(clickFn).toHaveBeenCalled();
  });
});

it("should be possible to activate Button with onClick", () => {
  const component = mount(<Button />);
  component.find("button#testButton2").simulate("click");
  expect(component).toMatchSnapshot();
  component.unmount();
});
