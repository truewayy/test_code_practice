import '@testing-library/jest-dom';

import { fireEvent, render } from '@testing-library/react';

import Input from '../Input';

test('renders input component and updates value on change', () => {
  // Arrange
  const { getByText, getByRole } = render(<Input />);

  // Act
  const inputValue = 'Hello, World!';
  fireEvent.change(getByRole('textbox'), { target: { value: inputValue } });

  expect(getByText(inputValue)).toBeInTheDocument();
});
