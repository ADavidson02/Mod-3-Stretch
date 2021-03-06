import { screen, render, waitFor, act } from "@testing-library/react"
import userEvent from "@testing-library/user-event"
import "@testing-library/jest-dom"
import App from "../App/App"
import { Router } from "react-router-dom"
import { getRandomAdvice, getAdviceSlips } from "../apiCalls/apiCalls";
import { createMemoryHistory } from "history"
jest.mock("../apiCalls/apiCalls")


describe("App", () => {
  it("should send user to archive from home page", async () => {
    getRandomAdvice.mockResolvedValue([
      { id: 42, advice: "Do not eat yellow snow" },
    ]);
    getAdviceSlips.mockResolvedValue([
      {
        id: 44,
        advice: "Do shower",
        name: "Scooby",
        email: "scooby@doo.com",
      },
    ]);
    const history = createMemoryHistory();
    render(
      <Router history={history}>
        <App />
      </Router>
    );
    expect(screen.queryByText("Delete")).not.toBeInTheDocument();

    const archiveButton = screen.getByText("Save Advice");
    userEvent.click(archiveButton);

    await waitFor(() => {
      expect(screen.getByText("My Saved Advice")).toBeInTheDocument();
    });
    expect(screen.queryByText("Save Advice")).not.toBeInTheDocument();
  }),

  it("should route from form to archive", async () => {
    getAdviceSlips.mockResolvedValue([
      {
        id: 44,
        advice: "Do shower",
        name: "Scooby",
        email: "scooby@doo.com",
      },
    ]);
    const history = createMemoryHistory();
    render(
      <Router history={history}>
        <App />
      </Router>
    );

    const formButton = screen.getByText("Add New Advice");
    await waitFor(() => {
      expect(screen.getByText("My Saved Advice")).toBeInTheDocument();
    });
    userEvent.click(formButton);
    userEvent.type(
      screen.getByPlaceholderText("Add Advice Here"),
      "Do not speed"
    );
    userEvent.type(screen.getByPlaceholderText("Name"), "Amy");
    userEvent.type(screen.getByPlaceholderText("Email"), "hope@745.com");
    const archiveButton = screen.getByText("Save Advice");
    userEvent.click(archiveButton);

    await waitFor(() =>
      expect(screen.queryByText("Save Advice")).not.toBeInTheDocument()
    );
  }),

  it("should return home from the archive", async () => {
    getRandomAdvice.mockResolvedValue({
      slip: [{ id: 42, advice: "Do not eat yellow snow" }],
    });
    getAdviceSlips.mockResolvedValue([
      {
        id: 44,
        advice: "Do shower",
        name: "Scooby",
        email: "scooby@doo.com",
      }
    ]);

    const history = createMemoryHistory();
    render(
      <Router history={history}>
        <App />
      </Router>
    );
    
    const homeButton = screen.getByText("Get Random Advice");
    await waitFor(() => {
      expect(screen.getByText("My Saved Advice")).toBeInTheDocument();
    });
    userEvent.click(homeButton);
    await waitFor(() =>
      expect(screen.queryByText("Save Advice")).toBeInTheDocument()
    );
  }),

  it("should have a modal in the nav bar", () => {
    const history = createMemoryHistory();
    render(
      <Router history={history}>
        <App />
      </Router>
    );

    expect(screen.getByText("User Info")).toBeInTheDocument()
  }),

  it("should show user info in the modal", () => {
    getRandomAdvice.mockResolvedValue({
      slip: [{ id: 42, advice: "Do not eat yellow snow" }],
    });
    const history = createMemoryHistory();
    render(
      <Router history={history}>
        <App />
      </Router>
    );
    const modalButton = screen.getByText("User Info")
    userEvent.click(modalButton)
    expect(screen.getByText("Welcome Mike")).toBeInTheDocument();
  })
})