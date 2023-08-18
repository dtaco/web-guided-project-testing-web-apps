import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App'

//Checks that App renders
test('Render without errors', () => {
    render(<App/>);
})

//Checks that the header exists when the app mounts
test('When app mounts, New Animal Header exists on the screen', () => {
    //Arrange
    render(<App/>);

    //Act
    const header = screen.getByText('Add New Animal');

    //Assert
    expect(header).toBeInTheDocument();
    expect(header).toHaveTextContent(/add new animal/i)
})