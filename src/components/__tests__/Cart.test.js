import RestaurantMenu from "../RestaurantMenu";
import { fireEvent, render, screen } from "@testing-library/react";
import { act } from "react-dom/test-utils";
import MOCK_DATA from "../mocks/mockResMenu.json"
import "@testing-library/jest-dom"
import appStore from "../../utils/appStore";
import Header from "../Header"
import Cart from "../Cart"

global.fetch = jest.fn(() =>
    Promise.resolve({
        json: () => Promise.resolve(MOCK_DATA)
    })
);

it("Should load restaurant menu component", async () => {

    await act(async () => render(
        <Provider store={appStore}>
            <Header />
            <RestaurantMenu />
            <Cart />
        </Provider>
    ));

    const accordionHeader = screen.getByText("Plum Cakes (2)");
    fireEvent.click(accordionHeader);

    expect(screen.getAllByTestId("fooditems").length).toBe(2);
    
    expect(screen.getByText("Cart - {0 items}")).toBeInTheDocument();

    const addBtn = screen.getAllByRole("button", {name: "Add +"});
    fireEvent.click(addBtn[0]);

    expect(screen.getByText("Cart - {1 items}")).toBeInTheDocument();

    fireEvent.click(addBtn[1]);

    expect(screen.getByText("Cart - {2 items}")).toBeInTheDocument();

    fireEvent.click(screen.getByRole("button", { name: "Clear Cart" }));

    expect(screen.getAllByTestId("fooditems").length).toBe(2);

    expect(screen.getByAltText("Cart is empty. Add items to the cart!").toBeInTheDocument());
})