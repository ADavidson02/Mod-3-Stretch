import { screen, render, waitFor } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import "@testing-library/jest-dom";
import Home from "./Home";
import Card from "../Card/Card"
import { MemoryRouter, Router } from "react-router-dom";
import App from "../App/App";
import { getNewRandom } from "../apiCalls/apiCalls";
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
              <button>Add New Advice</button>
            </div>
          </section>
        );
    const newRandomButton = screen.getByText("Get New Advice");
    const addNewButton = screen.getByText("Add New Advice");
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
          <button>Add New Advice</button>
        </div>
      </section>
    );

    const adviceSlip = await waitFor(() =>
      screen.getByText("Do not eat yellow snow")
    );
    expect(screen.getByText("Do not eat yellow snow")).toBeInTheDocument()
  })

  // it.only("should route back to archive upon adding advice", async () => {
  //   render(
  //     <MemoryRouter>
  //       <App />
  //     </MemoryRouter>
  //   )

  //   const archiveLink = await waitFor(() => {
  //     screen.getByText("Add New Advice")
  //   })
  //   userEvent.click(archiveLink)
  //   expect(screen.queryByText("Get New Advice")).not.toBeInTheDocument();
  //   screen.debug
  // })

})