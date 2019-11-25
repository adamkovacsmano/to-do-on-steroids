import React from "react";
import Header from "./Header";
import { shallow } from "enzyme";

describe("FilterIcon Tests", () => {
  let header;
  beforeEach(() => {
    header = shallow(<Header />);
  });

  test("should match the snapshot", () => {
    expect(header).toMatchSnapshot();
  });
});
