import { render, screen, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import React from 'react';
import AnimalForm from '../AnimalForm';

test('Animal Form Render without errors', () => {
    render(<AnimalForm/>);
})

test('When users fills all fields and submits, species appears in list', async () => {
    // arrange:
    render(<AnimalForm/>);
    const species = 'feline';

    // act:
    const speciesInput = screen.getByLabelText(/species:/i);
    userEvent.type(speciesInput, species);

    const ageInput = screen.getByLabelText(/age:/i);
    userEvent.type(ageInput, '9');

    const notesInput = screen.getByLabelText(/notes:/i);
    userEvent.type(notesInput, 'some notes')

    const submitButton = screen.getByRole('button')
    userEvent.click(submitButton);

    //assert:
    await waitFor(() => {
        const speciesFeedback = screen.queryByText(species);
        expect(speciesFeedback).toBeInTheDocument();
    })
})