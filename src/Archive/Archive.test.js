import { screen, render, waitFor } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import "@testing-library/jest-dom";
import Archive from "../Archive/Archive";
import { getAdviceSlips } from "../apiCalls/apiCalls";
jest.mock("../apiCalls/apiCalls");
import { BrowserRouter, MemoryRouter } from "react-router-dom";

describe("Archive", () => {
  // it("should render advice cards", async () => {
  //       getAdviceSlips.mockResolvedValue([
  //         {
  //           id: 44,
  //           advice: "Do shower",
  //           name: "Scooby",
  //           email: "scooby@doo.com",
  //         },
  //         {
  //           id: 65,
  //           advice: "Go to bed on time",
  //           name: "Elsa",
  //           email: "frozen@frozen.com",
  //         },
  //       ]);

  //   render(
  //     <MemoryRouter>
  //       <Archive />
  //     </MemoryRouter>
  //   );
  //   expect(screen.getByText("My Saved Advice")).toBeInTheDocument();

  //   const advice1 = await waitFor(() => screen.getByText("Do shower"));
  //   expect(advice1).toBeInTheDocument();
  // });
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
