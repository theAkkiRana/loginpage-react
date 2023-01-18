import * as React from 'react';
import Notification from '../Notification';
import user from '@testing-library/user-event';

import { render, screen, cleanup, waitFor  } from '@testing-library/react';


describe("Notification component" , () => {
    const addUser = jest.fn();

    beforeEach(() => {
        addUser.mockClear();
        const notification={"variant":"success", "message":"testmessage"};
        render(<Notification notification={notification}/>);
      });

    test('should render component - Notification' , () => {
        const alertComponent = screen.getByTestId("notification-alert");
        expect(alertComponent).toBeInTheDocument();
      })
      
      test('Notification component must show message' , () => {
        const alertComponent = screen.getByTestId("notification-alert");
        expect(alertComponent).toHaveTextContent("testmessage");
      })
  }) 