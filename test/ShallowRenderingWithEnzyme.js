import React from "react";
import expect from "must";
import { shallow } from "enzyme";

import MyComponent from "../src/MyComponent";

describe('MyComponent', function () {

  it('can be tested', function () {

    const view = shallow(<MyComponent />);

    expect(view.type()).to.eql('a type');

  });
});
