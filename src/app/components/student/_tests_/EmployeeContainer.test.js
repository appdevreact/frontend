import React from "react";
import { shallow } from "enzyme";
import { Provider } from "react-redux";
import configureMockStore from "redux-mock-store";
import EmployeeContainer from "../EmployeeContainer";
const mockStore = configureMockStore();
const store = mockStore({});
describe("Test EmployeeContainer data", () => {
  let wrapper, props;
  props = {
    renderSteps: jest.fn(),
  };
  wrapper = shallow(
    <Provider store={store}>
      <EmployeeContainer {...props} />
    </Provider>
  );
  it("should render without throwing an error", () => {});
});
