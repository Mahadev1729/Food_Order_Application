import { render, screen } from '@testing-library/react';
import Contact from '../Contact'
import '@testing-library/jest-dom';



test("should laod 2 input boxes on the contact component",()=>{
    render(<Contact/>)
    //quering
    const inputBoxes=screen.getAllByRole("textbox");
    expect(inputBoxes.length).toBe(3)
    console.log(inputBoxes.length);
});
