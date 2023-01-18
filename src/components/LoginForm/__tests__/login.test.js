import * as React from 'react';
import Login from '../Login';
import user from '@testing-library/user-event';

import { render, screen, cleanup, waitFor  } from '@testing-library/react';


describe("login form" , () => {
    const addUser = jest.fn();

    beforeEach(() => {
        addUser.mockClear();
        render(<Login/>);
      });

    test('should render component - load submit btn' , () => {
        const submitBtn = screen.getByTestId("submit-button");
        expect(submitBtn).toBeInTheDocument();
        expect(submitBtn).toHaveTextContent("Sign up");
      })
      
      test('Submit btn should be disabled component' , () => {
          const submitBtn = screen.getByTestId("submit-button");
          expect(submitBtn).toBeDisabled();
      })
      
      test('error div on typeing invalid firstname' , async () => {
          const firstNameDiv = screen.getByTestId("firstName");
          expect(firstNameDiv).not.toHaveClass('input-error');
          user.type(getFirstName(), "akshat1234");
          user.tab();
          await waitFor(() => {
            expect(screen.getByText(/firstname should have only alphabets/i)).toBeInTheDocument();
          });
          expect(firstNameDiv).toHaveClass('input-error');
      })

      test('error div on typeing invalid lastname' , async () => {
        const lastNameDiv = screen.getByTestId("lastName");
        expect(lastNameDiv).not.toHaveClass('input-error');
        user.type(getLastName(), "akshat1234");
        user.tab();
        await waitFor(() => {
          expect(screen.getByText(/lastName should have only alphabets/i)).toBeInTheDocument();
        });
        expect(lastNameDiv).toHaveClass('input-error');
    })
    
    test('error div on typeing invalid emailid' , async () => {
        const emailDiv = screen.getByTestId("email");
        expect(emailDiv).not.toHaveClass('input-error');
        user.type(getEmail(), "akshat1234");
        user.tab();
        await waitFor(() => {
          expect(screen.getByText(/email id is invalid/i)).toBeInTheDocument();
        });
        expect(emailDiv).toHaveClass('input-error');
    })

    test('error div on typeing invalid password' , async () => {
        const passwordDiv = screen.getByTestId("password");
        expect(passwordDiv).not.toHaveClass('input-error');
        user.type(getPassword(), "akshat");
        user.tab();
        await waitFor(() => {
          expect(screen.getByText(/password should be atleast 8 character long, should not have first or last name and should have 1 uppercase and 1 lowercase character/i)).toBeInTheDocument();
        });
        expect(passwordDiv).toHaveClass('input-error');
    })

    test('submit button is disabled', async () => {
        expect(getSubmitButton()).toBeDisabled();
    })

      test('submit button enabled on valid values', async () => {
        user.type(getFirstName(), 'Akshat');
        user.type(getLastName(), 'Rana');
        user.type(getEmail(), 'akki.rana87@gmail.com');
        getPassword().setAttribute("value", "testTesttest");
        await waitFor(() => {
            expect(getSubmitButton()).toBeDisabled();
        });
      
      })

      test('submit valid values', async () => {
        user.type(getFirstName(), 'Akshat');
        user.type(getLastName(), 'Rana');
        user.type(getEmail(), 'akki.rana87@gmail.com');
        user.type(getPassword(), 'TestTestas');
        user.tab();

        clickSubmitButton();
        await waitFor(() => {
            expect(addUser).toHaveBeenCalledTimes(0);
        });
      })

})

function getFirstName() {
    return screen.getByPlaceholderText(/firstname/i)
}

function getLastName() {
    return screen.getByPlaceholderText(/lastname/i)
}

function getEmail(){
    return screen.getByPlaceholderText(/email/i)
}

function getPassword(){
    return  screen.getByPlaceholderText(/password/i)
}

function getSubmitButton(){
    return screen.getByRole('button', { name: /sign up/i });
}

function clickSubmitButton() {
    user.click(screen.getByRole('button', { name: /sign up/i }));
}