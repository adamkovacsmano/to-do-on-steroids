import React from "react";
import ListItem from "./ListItem";
import { shallow, mount } from "enzyme";

describe("FilterIcon Tests", () => {
  let listItem;
  beforeEach(() => {
    listItem = shallow(<ListItem />);
  });

  test("should match the snapshot", () => {
    expect(listItem).toMatchSnapshot();
  });
});

describe("ListItem Tests", () => {
  let event;

  let data = {
    text: "lorem",
    isMarked: false,
    userName: "john dove",
    userImage:
      "https://lh3.googleusercontent.com/a-/AAuE7mBtNtlAK6pzmOGy2AxSBDaUeGB56EhdQlp8AXSGCg"
  };

  beforeEach(() => {
    event = shallow(<ListItem eventData={data} />);
  });

  test("should match the snapshot", () => {
    expect(event).toMatchSnapshot();
  });
});

//-------------------------------------- docId undefined for both tests:

// const clickFn = jest.fn();
// describe("button", () => {
//   it("button click should delete", () => {
//     const component = shallow(<ListItem onClick={clickFn} />);
//     component.find("button#testButton3").simulate("click");
//     expect(clickFn).toHaveBeenCalled();
//   });
// });

// const mockFunction = jest.fn();
// it("should call mockFunction on button click", () => {
//   const component = mount(<ListItem onClickFunction={mockFunction} />);
//   component.find("button#testButton3").simulate("click");
//   expect(mockFunction).toHaveBeenCalled();

//   component.unmount();
// });
