
import {screen, render } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import "@testing-library/jest-dom";
import Card from "./Card"

describe("Card", () => {
  it("should render correctly", () => {
    const mockAdviceObj = {
      id: 22, advice: "Go to sleep early"
    }
    render(
      <Card 
      slip={mockAdviceObj}
      />
    )

    const deleteButton = screen.getByText("Delete")
    expect(screen.getByText("Go to sleep early")).toBeInTheDocument();
    expect(deleteButton).toBeInTheDocument();
  })

  //Need to add test once delete button is functional 
})