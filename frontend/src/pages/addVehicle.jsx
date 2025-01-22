import React, { useState } from "react";
import styled from "styled-components";

// Styled Components
const Overlay = styled.div`
  position: fixed;
  top: 80px;
  left: 0;
  width: 100vw;
  height: calc(100vh - 100px); 
  background: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: flex-start;
  z-index: 1000;
  padding: 5px;
`;

const Modal = styled.div`
  background: #fff;
  padding: 20px;
  width: 80%;
  max-width: 800px;
  border-radius: 8px;
  position: relative;
`;

const CloseButton = styled.span`
  position: absolute;
  top: 10px;
  right: 10px;
  font-size: 24px;
  cursor: pointer;
  color: #333;
`;

const FormSection = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr); 
  gap: 20px;
  margin-top: 20px;
`;

const Label = styled.label`
  font-size: 14px;
  font-weight: bold;
`;

const Input = styled.input`
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 4px;
  width: 100%;
`;

const Select = styled.select`
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 4px;
  width: 100%;
`;

const FileInput = styled.input`
  border: 1px solid #ccc;
  border-radius: 4px;
  padding: 10px;
  width: 100%;
`;

const ButtonWrapper = styled.div`
  grid-column: span 2; 
  display: flex;
  justify-content: flex-end;
`;

const Button = styled.button`
  background-color: #007bff;
  color: #fff;
  padding: 10px 20px;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  margin-top: 20px;

  &:hover {
    background-color: #0056b3;
  }
`;

const AddVehicle = ({ onClose }) => {
  // State for the form fields
  const [vehicleName, setVehicleName] = useState("");
  const [vehicleNumber, setVehicleNumber] = useState("");
  const [vendorName, setVendorName] = useState("");
  const [garrageName, setGarrageName] = useState("");
  const [vehicleIMEINumber, setVehicleIMEINumber] = useState("");
  const [vehicleModel, setVehicleModel] = useState("");
 


  const handleSubmit = () => {
    const newVehicle = {
      vehicleName,
      vehicleNumber,
      vendorName,
      garrageName,
      vehicleIMEINumber,
      vehicleModel,
    };

    console.log("Driver Details:", newVehicle);
    // Add logic to save the new driver details
    onClose(); // Close the modal
  };

  return (
    <Overlay>
      <Modal>
        <CloseButton onClick={onClose}>&times;</CloseButton>
        <h2>Add Vehicle</h2>
        <FormSection>
          {/* Vehicle Name */}
          <div>
            <Label>Vehicle Name</Label>
            <Input
              type="text"
              placeholder="Enter Vehicle Name"
              value={vehicleName}
              onChange={(e) => setVehicleName(e.target.value)}
            />
          </div>

          {/* Vehicle Number */}
          <div>
            <Label>Vehicle No.</Label>
            <Input
              type="text"
              placeholder="Enter Vehicle Number"
              value={vehicleNumber}
              onChange={(e) => setVehicleNumber(e.target.value)}
            />
          </div>

          {/* Vendor Name */}
          <div>
            <Label>Vendor Name</Label>
            <Input
              type="text"
              placeholder="Enter Vendor Name"
              value={vendorName}
              onChange={(e) => setVendorName(e.target.value)}
            />
          </div>

          {/*Garrage Name*/}
          <div>
            <Label>Garrage Name</Label>
            <Input
              type="text"
              placeholder="Enter Garrage NAme "
              value={garrageName}
              onChange={(e) => setGarrageName(e.target.value)}
            />
          </div>

          {/* Driver License Number */}
          <div>
            <Label>Vehicle IMEI Number</Label>
            <Input
              type="text"
              placeholder="Enter IMEI Number"
              value={vehicleIMEINumber}
              onChange={(e) => setVehicleIMEINumber(e.target.value)}
            />
          </div>

          {/* Vehicle Model */}
          <div>
            <Label>Vehicle Model</Label>
            <Input
              type="text"
              placeholder="Enter Vehicle Model"
              value={vehicleModel}
              onChange={(e) => setVehicleModel(e.target.value)}
            />
          </div>
          {/* Submit Button */}
          <ButtonWrapper>
            <Button onClick={handleSubmit}>Submit</Button>
          </ButtonWrapper>
        </FormSection>
      </Modal>
    </Overlay>
  );
};

export default AddVehicle;