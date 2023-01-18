import * as React from 'react';
import Login from '../../src/components/LoginForm/Login';
// import {shallow, configure, mount   } from 'enzyme';
// import Adapter from 'enzyme-adapter-react-16';
// import '@testing-library/jest-dom/extend-expect';
// import {screen} from '@testing-library/dom';
import { render, screen, cleanup  } from '@testing-library/react';

test('should render component' , () => {
  render(<Login/>);
  const submitBtn = screen.getByTestId("submit-button");
  expect(submitBtn).toBeInTheDocument();
})

// const { getByText } = render(Click);

// global.React = React;
// configure({adapter: new Adapter()});

// const setState = jest.fn();
// const useStateSpy = jest.spyOn(React, "useState")
// useStateSpy.mockImplementation((init) => [init, setState]);

// describe("<Login />", () => {
//   let wrapper;
//     const setState = jest.fn();
//     const useStateSpy = jest.spyOn(React, "useState")
//     useStateSpy.mockImplementation((init) => [init, setState]);

//     beforeEach(() => {
//         wrapper = Enzyme.mount(Enzyme.shallow(<Login />).get(0))
//     });

//     afterEach(() => {
//         jest.clearAllMocks();
//     });
// });
// it("renders without crashing", () => {
//     shallow(<Login />);
// });


// it("renders Form  element", () => {
//   const wrapper = shallow(<Login />);
//   const rowClass  = wrapper.find('form.demoForm');
//   expect(rowClass).toHaveLength(1);
// });


// // describe("Title input", () => {
// //   it("button should be disabled initially", () => {
// //     // const wrapper = shallow(<Login />);
// //     // const submitButton = wrapper.find("button.btn-primary").at(0);
// //     // expect(submitButton.closest('button')).toBeDisabled();
// //     // const submitButton = screen.getByTestId('ok-button');
// //     // console.log("--------");
// //     // console.log(wrapper);
// //     // console.log("--------");
// //     // console.log(wrapper.debug());
// //     // console.log("--------");
// //     // console.log(submitButton);
// //     // console.log("--------");
// //     // console.log(submitButton.debug());
// //     // const button = screen.getByRole('button', {name: /Sign up/i});
// //     // expect(getByText(/Sign up/i).closest('button')).toBeDisabled();
// //     // expect(button).toBeDisabled();      
// //     // expect(submitButton.debug()).toHaveAttribute('disabled');
// //     shallow(<Login/>)
// //     const primaryButton = screen.getByRole('button', { name: /primary/i });
// //     expect(primaryButton).toBeDisabled();
// //   })

//   it("Should capture error values correctly onChange", () => {
//       const wrapper = shallow(<Login />);
//       const firstName = wrapper.find("input[name='firstName']");
//       // const handleUserInput = jest.fn();
//       firstName.value = "Akshat";
//       const formGroupDiv = wrapper.find(".form-group").at(0);
      
//       expect(formGroupDiv.hasClass('input-error')).toEqual(false);
//       // expect(handleUserInput).toHaveBeenCalled();
//       // expect(formGroupDiv).toHaveTextContent('First name');
//       // firstName.value = "Akshat#$2";
//       // expect(formGroupDiv.hasClass('input-error')).toEqual(true);
      
//   });
// // });