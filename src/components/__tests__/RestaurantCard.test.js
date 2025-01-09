import { render } from "@testing-library/react"
import RestaurantCard from "../RestaurantCard"
import MOCK_DATA from '../mocks/resCardmock.json'
import '@testing-library/jest-dom'

it("Should render RestaurantCard component with props Data",(resData)=>{
    render(<RestaurantCard resData={MOCK_DATA}/>);
    const name= screen.getByText(/Pizza Hut/);
    expect(name).toBeInTheDocument();
});
