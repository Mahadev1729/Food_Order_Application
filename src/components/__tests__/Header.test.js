import { render, screen } from "@testing-library/react"
import Header from "../Header"
import { Provider } from "react-redux";
import store from "../../Redux/store";
import { BrowserRouter } from "react-router-dom";
import '@testing-library/jest-dom';

test("should header have login button", () => {

    render(
        <BrowserRouter>
            <Provider store={store}>
                <Header />
            </Provider>
        </BrowserRouter>
    );
    // const loginBtn = screen.getByRole('button');
    const loginBtn=screen.getAllByText('Login')
    expect(loginBtn).toBeInTheDocument();
})

it("Should head heave logout button",()=>{
    render(
        <BrowserRouter>
          <Provider store={store}>
             <Header/>
          </Provider>
        </BrowserRouter>
    )
    const logoutBtn=screen.getAllByText('Logout');
    expect(logoutBtn).toBeInTheDocument();
})
