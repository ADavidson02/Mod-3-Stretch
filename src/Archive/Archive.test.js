
import { screen, render } from "@testing-library/react"
import "@testing-library/jest-dom"
import Archive from "../Archive/Archive"
import { getAdviceSlips } from "../apiCalls/apiCalls"
import Card from "../Card/Card"
jest.mock("../apiCalls/apiCalls")
import { MemoryRouter, Link } from "react-router-dom"
import { createMemoryHistory } from "history"

describe("Archive", () => {
  it("should render advice cards", async () => {
    const history = createMemoryHistory();
    const adviceOne = {
      id: 44,
      advice: "Do shower",
      name: "Scooby",
      email: "scooby@doo.com",
    }
    render(
      <MemoryRouter> 
      <section>
        <div>
          <header>My Saved Advice</header>
          <Link to="/add-new-advice">
            <button>Add New Advice</button>
          </Link>
          <Link to="/">
            <button>Get Random Advice</button>
          </Link>
        </div>
        <div>
          return (
            <Card
            id={adviceOne.id}
            key={adviceOne.id}
            advice={adviceOne.advice}
            email={adviceOne.email}
            name={adviceOne.name}
            />
            );
        </div>
      </section>
    </MemoryRouter>
    );
    expect(screen.getByText("My Saved Advice")).toBeInTheDocument();
    const name = screen.getByText("Scooby")
    expect(name).toBeInTheDocument()
  }),

  it("should render two buttons", async () => {
    getAdviceSlips.mockResolvedValue([
      {
        id: 44,
        advice: "Do shower",
        name: "Scooby",
        email: "scooby@doo.com",
      }])

      render(
      <MemoryRouter>
        <Archive />
      </MemoryRouter>
    )

    const getRandomButtom = screen.getByText("Get Random Advice");
    const addAdviceButton = screen.getByText("Add New Advice");

    expect(getRandomButtom).toBeInTheDocument();
    expect(addAdviceButton).toBeInTheDocument();
  })
});
