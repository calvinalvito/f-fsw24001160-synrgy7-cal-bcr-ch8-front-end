import React, { useState } from "react";
import { Car } from "../../context/CarContextDashbaord";
import DeleteConfirmation from "./deteleConfirmation";
import { useCarContext } from "../../context/CarContextDashbaord";

interface CarCardProps {
  car: Car;
  onEditCarClick: (carId: number) => void;
}

const CarCardDashboard: React.FC<CarCardProps> = ({ car, onEditCarClick }) => {
  const { deleteCar } = useCarContext();
  const [showDeleteModal, setShowDeleteModal] = useState(false);
  const handleEditClick = () => {
    onEditCarClick(car.id);
  };
  const handleDeleteClick = () => {
    setShowDeleteModal(true);
  };

  const handleConfirmDelete = () => {
    deleteCar(car.id);
    setShowDeleteModal(false);
  };

  const handleCancelDelete = () => {
    setShowDeleteModal(false);
  };
  return (
    <>
      <div className="carCard" style={{ backgroundColor: "whitesmoke" }}>
        <div className="card__content d-flex flex-column">
          <div>
            {car.picture !== null && (
              <img
                src={car.picture}
                alt="Car Image"
                style={{ height: "222px", width: "100%", objectFit: "cover" }}
              />
            )}
          </div>
          <div className="d-flex flex-column">
            <p className="paragraph-font" style={{ marginBottom: "8px" }}>
              {car.name}
            </p>
            <p className="title-card" style={{ marginBottom: "8px" }}>
              {car.price}
            </p>
          </div>
          <div className="cardFitur d-flex flex-column">
            <div className="car-capasity d-flex flex-row">
              <svg
                width="20"
                height="20"
                viewBox="0 0 20 20"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M12.9167 6.25L15.8333 3.33333M17.5 1.66666L15.8333 3.33333L17.5 1.66666ZM9.49168 9.675C9.92197 10.0996 10.264 10.605 10.4981 11.1623C10.7323 11.7196 10.8538 12.3177 10.8559 12.9222C10.8579 13.5267 10.7403 14.1256 10.5099 14.6844C10.2796 15.2433 9.9409 15.751 9.51347 16.1785C9.08604 16.6059 8.57828 16.9445 8.01943 17.1749C7.46058 17.4053 6.86168 17.5229 6.25721 17.5209C5.65274 17.5188 5.05463 17.3973 4.49734 17.1631C3.94005 16.929 3.43457 16.5869 3.01002 16.1567C2.17512 15.2922 1.71315 14.1345 1.72359 12.9327C1.73404 11.731 2.21606 10.5814 3.06585 9.73166C3.91563 8.88188 5.06519 8.39985 6.26693 8.38941C7.46866 8.37897 8.62642 8.84094 9.49085 9.67583L9.49168 9.675ZM9.49168 9.675L12.9167 6.25L9.49168 9.675ZM12.9167 6.25L15.4167 8.75L18.3333 5.83333L15.8333 3.33333L12.9167 6.25Z"
                  stroke="#8A8A8A"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>
              <p className="paragraph-font" style={{ marginLeft: "8px" }}>
                {new Date(car.start_rent).toLocaleDateString()}
              </p>
            </div>
            <div className="car-type d-flex flex-row">
              <svg
                width="20"
                height="20"
                viewBox="0 0 20 20"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M9.99999 18.3333C14.6024 18.3333 18.3333 14.6024 18.3333 10C18.3333 5.39762 14.6024 1.66666 9.99999 1.66666C5.39762 1.66666 1.66666 5.39762 1.66666 10C1.66666 14.6024 5.39762 18.3333 9.99999 18.3333Z"
                  stroke="#8A8A8A"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M10 5V10L13.3333 11.6667"
                  stroke="#8A8A8A"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>
              <p className="paragraph-font" style={{ marginLeft: "8px" }}>
                Updated at 4 Apr 2022, 09.00
              </p>
            </div>
          </div>
          <div className="d-flex flex-row justify-content-between">
            <button
              className="btn btn-outline-danger d-flex flex-row"
              type="submit"
              onClick={handleDeleteClick}
            >
              <svg
                width="19"
                height="18"
                viewBox="0 0 19 18"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M2.5 4.5H4H16"
                  stroke="#FA2C5A"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M6.25 4.5V3C6.25 2.60218 6.40804 2.22064 6.68934 1.93934C6.97064 1.65804 7.35218 1.5 7.75 1.5H10.75C11.1478 1.5 11.5294 1.65804 11.8107 1.93934C12.092 2.22064 12.25 2.60218 12.25 3V4.5M14.5 4.5V15C14.5 15.3978 14.342 15.7794 14.0607 16.0607C13.7794 16.342 13.3978 16.5 13 16.5H5.5C5.10218 16.5 4.72064 16.342 4.43934 16.0607C4.15804 15.7794 4 15.3978 4 15V4.5H14.5Z"
                  stroke="#FA2C5A"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M10.75 8.25V12.75"
                  stroke="white"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M7.75 8.25V12.75"
                  stroke="white"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>
              Delete Car
            </button>
            <button
              className="btn btn-success d-flex flex-row justify-content-center"
              type="submit"
              onClick={handleEditClick}
            >
              <svg
                width="19"
                height="18"
                viewBox="0 0 19 18"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g clip-path="url(#clip0_88443_770)">
                  <path
                    d="M9 3H3.75C3.35218 3 2.97064 3.15804 2.68934 3.43934C2.40804 3.72064 2.25 4.10218 2.25 4.5V15C2.25 15.3978 2.40804 15.7794 2.68934 16.0607C2.97064 16.342 3.35218 16.5 3.75 16.5H14.25C14.6478 16.5 15.0294 16.342 15.3107 16.0607C15.592 15.7794 15.75 15.3978 15.75 15V9.75"
                    stroke="white"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                  <path
                    d="M14.625 1.875C14.9234 1.57663 15.328 1.40901 15.75 1.40901C16.172 1.40901 16.5766 1.57663 16.875 1.875C17.1734 2.17337 17.341 2.57805 17.341 3C17.341 3.42196 17.1734 3.82663 16.875 4.125L9.75 11.25L6.75 12L7.5 9L14.625 1.875Z"
                    stroke="white"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </g>
                <defs>
                  <clipPath id="clip0_88443_770">
                    <rect
                      width="18"
                      height="18"
                      fill="white"
                      transform="translate(0.75)"
                    />
                  </clipPath>
                </defs>
              </svg>
              Edit Car
            </button>
          </div>
        </div>
      </div>
      {showDeleteModal && (
        <DeleteConfirmation
          onDelete={handleConfirmDelete}
          onCancel={handleCancelDelete}
        />
      )}
    </>
  );
};

export default CarCardDashboard;
