
import { screen, render, waitFor } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import "@testing-library/jest-dom";
import Form from "../Form/Form";
import { createAdvice } from "../apiCalls/apiCalls"
jest.mock("../apiCalls/apiCalls");
import { createMemoryHistory } from "history";


describe("Form", () => {
  it("should render the form correctly", () => {

    render(
      <Form />
    )
    expect(screen.getByPlaceholderText("Add Advice Here")).toBeInTheDocument()
    expect(screen.getByPlaceholderText("Name")).toBeInTheDocument()
    expect(screen.getByPlaceholderText("Email")).toBeInTheDocument()
    expect(screen.getByText("Save Advice")).toBeInTheDocument()
  }),

  it("should reflect what user types in inputs", () => {
    render(
      <Form />
    )
    userEvent.type(screen.getByPlaceholderText("Add Advice Here"), "Do not speed")
    userEvent.type(screen.getByPlaceholderText("Name"), "Amy")
    userEvent.type(screen.getByPlaceholderText("Email"), "hope@745.com")

    expect(screen.getByPlaceholderText("Add Advice Here").value).toEqual("Do not speed")
    expect(screen.getByPlaceholderText("Name").value).toEqual("Amy")
    expect(screen.getByPlaceholderText("Email").value).toEqual("hope@745.com")
  }),

  it("should show an error when not all input fields are filled", () => {
    render(
      <Form />
    )
    const submitButton = screen.getByText("Save Advice")
    userEvent.type(screen.getByPlaceholderText("Name"), "Amy");
    userEvent.type(screen.getByPlaceholderText("Email"), "hope@745.com");
    userEvent.click(submitButton)
    expect(screen.getByText("Please fill out all fields")).toBeInTheDocument()
  })
})