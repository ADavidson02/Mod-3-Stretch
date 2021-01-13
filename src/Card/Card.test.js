
import {screen, render } from "@testing-library/react"
import "@testing-library/jest-dom"
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
    )

    expect(screen.getByText("Go to sleep early")).toBeInTheDocument();
    expect(screen.getByText("Mike")).toBeInTheDocument();
    expect(screen.getByText("abc@123.com")).toBeInTheDocument();
  })
})
