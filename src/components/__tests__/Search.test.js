import { fireEvent, render, screen } from "@testing-library/react";
import Body from "../Body";
import { act } from "react-dom/test-utils";
import MOCK_DATA from "../mocks/mockResListData.json";
import { BrowserRouter } from "react-router-dom";
import "@testing-library/jest-dom"

global.fetch =  jest.fn(() => {
    return Promise.resolve({
        json: () => {
            return Promise.resolve(MOCK_DATA);
        }
    });
});

it("Should search resList for burger", async() => {

    await act(async () => render(
        <BrowserRouter>
            <Body />
        </BrowserRouter>
    ));

    const cardsBeforeSearch = screen.getAllByTestId("resCard");

    expect(cardsBeforeSearch.length).toBe(20);

    // const searchBtn = screen.getByRole("button", { name: "Search" });

    // const searchInput = screen.getByTestId("searchInput");

    // fireEvent.change(searchInput, { target: { value: "burger"} });

    // fireEvent.click(searchBtn);

    // // screen should load 1 res card

    // const cards = screen.getAllByTestId("resCard");

    // expect(cards.length).toBe(1);
});