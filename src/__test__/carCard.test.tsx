import "@testing-library/jest-dom";
import React from "react";
import { render, screen } from "@testing-library/react";
import CarCard from "../component/users/carCard";

test("renders car information correctly", () => {
  const car = {
    id: "1",
    plate: "XYZ 123",
    manufacture: "Toyota",
    model: "Camry",
    image: "https://example.com/car.jpg",
    rentPerDay: 100,
    capacity: 5,
    description: "A reliable car.",
    transmission: "Automatic",
    available: true,
    type: "Sedan",
    year: 2020,
    options: ["Option1", "Option2"],
    specs: ["Spec1", "Spec2"],
    availableAt: "Location",
    typeDriver: "Self-drive",
  };

  render(<CarCard car={car} />);

  expect(screen.getByText(/Camry \/ Sedan/i)).toBeInTheDocument();
  expect(screen.getByText(/100 \/ hari/i)).toBeInTheDocument();
  expect(screen.getByText(/A reliable car\./i)).toBeInTheDocument();
  expect(screen.getByText(/5/i)).toBeInTheDocument();
});
