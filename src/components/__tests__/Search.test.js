import Body from "../Body"
import { fireEvent, render } from "@testing-library/react";
import MOCK_DATA from '../mocks/mockResListData.json'
import { act } from "react";
import { BrowserRouter } from "react-router-dom";
import '@testing-library/jest-dom';

global.fetch=jest.fn(()=>{
    return Promise.resolve({
        json:()=>{
            return Promise.resolve(MOCK_DATA);
        }
    })
})
it("should render the body component with search button", async() => {
    await act(async()=>{
        render(
            <BrowserRouter>
                 <Body />
            </BrowserRouter>
    );
    });
    const serachbtn=screen.getByRole("button",{name:"Search"})
    console.log(serachbtn);
    const serachInput=screen.getByTestId(serachInput);
    fireEvent.change(serachInput,{
        target:{
            value:"burger"
        }
    })
    fireEvent.click(serachbtn);
    //screen should load four cards
    expect(serachbtn).toBeInTheDocument();
    
});
