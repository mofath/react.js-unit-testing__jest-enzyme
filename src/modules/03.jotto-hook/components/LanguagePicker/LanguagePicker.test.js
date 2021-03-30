import React from "react";
import { shallow } from "enzyme";

import { findByTestAttribute, checkProps } from "../../../../testUtils";
import LanguagePicker from "./LanguagePicker";

const mockSetLanguage = jest.fn();

const setup = () => {
  return shallow(<LanguagePicker setLanguage={mockSetLanguage} />);
};

test("renders without error", () => {
  const wrapper = setup();
  const component = findByTestAttribute(wrapper, "component-language-picker");
  expect(component.exists()).toBe(true);
});

test("does not throw warning with expected props", () => {
  checkProps(LanguagePicker, { setLanguage: jest.fn() });
});

test("renders non-zero language icons", () => {
  const wrapper = setup();
  const languageIcons = findByTestAttribute(wrapper, "language-icon");
  expect(languageIcons.length).toBeGreaterThan(0);
});

test("calls setLanguage prop upon click", () => {
    const wrapper = setup();
    const languageIcons = findByTestAttribute(wrapper, "language-icon");

    const firstIcon = languageIcons.first();
    firstIcon.simulate("click");

    expect(mockSetLanguage).toHaveBeenCalled();
});