
import { screen, render, waitFor } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import "@testing-library/jest-dom";
import Form from "../Form/Form";
import { getNewRandom } from "../apiCalls/apiCalls";
jest.mock("../apiCalls/apiCalls");
