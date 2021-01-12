
import {screen, render } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import "@testing-library/jest-dom";
import Card from "./Card"

describe("Card", () => {
  it("should render correctly", () => {
    const mockAdviceObj = {
      id: 22,
      advice: "Go to sleep early",
      email: 'abc@123.com',
      name: 'Mike'
    }
    render(
      <Card
        id={mockAdviceObj.id}
        advice={mockAdviceObj.advice}
        email={mockAdviceObj.email}
        name={mockAdviceObj.name}
      />
    );

    const deleteButton = screen.getByText("Delete")
    expect(screen.getByText("Go to sleep early")).toBeInTheDocument();
    expect(deleteButton).toBeInTheDocument();
  }),

    it("should render without a delete button when anonymous", () => {
    const mockAdviceObj = {
      id: 22,
      advice: "Go to sleep late"
    }
    render(
      <Card
        id={mockAdviceObj.id}
        advice={mockAdviceObj.advice}
      />
    );
    const deleteButton = screen.queryByText("Delete")
    expect(deleteButton).not.toBeInTheDocument();
    expect(screen.getByText("Go to sleep late")).toBeInTheDocument();
    })

  //Need to add test once delete button is functional 
})