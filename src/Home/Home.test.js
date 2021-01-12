
import { screen, render, waitFor } from "@testing-library/react";
import "@testing-library/jest-dom";
import Card from "../Card/Card"
jest.mock("../apiCalls/apiCalls");

describe("Home", () => {
  it('should render two advice buttons', async () => {
    const getNewRandom1 = { 
      id: 45,
      advice: "Do not kick children"
    };
    render(
      <section className="home">
        <div>
          <article>
            <Card slip={getNewRandom1} />
            <h2></h2>
          </article>
        </div>
        <div>
          <button onClick={() => this.getNewRandom()}>
            Get New Advice
          </button>
          <button>Save Advice</button>
        </div>
      </section>
    );
    const newRandomButton = screen.getByText("Get New Advice");
    const addNewButton = screen.getByText("Save Advice");
    expect(newRandomButton).toBeInTheDocument();
    expect(addNewButton).toBeInTheDocument();
  }),
  
  it('should render an advice card', async () => {
    const getNewRandom = (
    { id: 42, advice: "Do not eat yellow snow" }
    );
    render(
      <section className="home">
        <div>
          <article>
            <Card slip={getNewRandom} />
            <h2></h2>
          </article>
        </div>
        <div>
          <button onClick={() => this.getNewRandom()}>Get New Advice</button>
          <button>Save Advice</button>
        </div>
      </section>
    );
    const adviceSlip = await waitFor(() =>
      screen.getByText("Do not eat yellow snow")
    );
    expect(screen.getByText("Do not eat yellow snow")).toBeInTheDocument()
  })
})