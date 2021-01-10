import { screen, render, waitFor } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import "@testing-library/jest-dom";
import Home from "./Home";
import Card from "../Card/Card"
import { getNewRandom } from "../apiCalls/apiCalls";
jest.mock("../apiCalls/apiCalls");

describe("Home", () => {

  it('should render two advice buttons', async () => {
    
    render(<Home />);
    const newRandomButton = screen.getByText("Get New Advice");
    const addNewButton = screen.getByText("Add New Advice");
    expect(newRandomButton).toBeInTheDocument();
    expect(addNewButton).toBeInTheDocument();
    
  }),
  
  it('should render an advice card', async () => {
    
    const getNewRandom = ({ slip: 
    { id: 42, advice: "Do not eat yellow snow" }
    });

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
          <button>Add New Advice</button>
        </div>
      </section>
    );

    const adviceSlip = await waitFor(() =>
      screen.getByText("Do not eat yellow snow")
    );
    screen.debug()

  })
})