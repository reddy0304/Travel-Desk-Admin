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

const AddDriver = ({ onClose }) => {
  // State for the form fields
  const [driverName, setDriverName] = useState("");
  const [driverPhone, setDriverPhone] = useState("");
  const [vendorType, setVendorType] = useState("");
  const [driverAddress, setDriverAddress] = useState("");
  const [licenseNumber, setLicenseNumber] = useState("");
  const [vehicleAssigned, setVehicleAssigned] = useState("");
  const [driverDocuments, setDriverDocuments] = useState(null);

  const vendors = [
    "AMIT KUMAR PATRA",
    "BAGHA TRAVELS",
    "BM TRAVELS",
    "JSL",
    "ASSOCIATED TRAVEL AGENCY",
  ];

  const handleFileUpload = (e) => {
    setDriverDocuments(e.target.files[0]);
  };

  const handleSubmit = () => {
    const newDriver = {
      driverName,
      driverPhone,
      vendorType,
      driverAddress,
      licenseNumber,
      vehicleAssigned,
      driverDocuments,
    };

    console.log("Driver Details:", newDriver);
    // Add logic to save the new driver details
    onClose(); // Close the modal
  };

  return (
    <Overlay>
      <Modal>
        <CloseButton onClick={onClose}>&times;</CloseButton>
        <h2>Add Driver</h2>
        <FormSection>
          {/* Driver Name */}
          <div>
            <Label>Driver Name</Label>
            <Input
              type="text"
              placeholder="Enter Driver Name"
              value={driverName}
              onChange={(e) => setDriverName(e.target.value)}
            />
          </div>

          {/* Driver Phone */}
          <div>
            <Label>Driver Phone</Label>
            <Input
              type="text"
              placeholder="Enter Driver Phone Number"
              value={driverPhone}
              onChange={(e) => setDriverPhone(e.target.value)}
            />
          </div>

          {/* Vendor Type */}
          <div>
            <Label>Vendor Type</Label>
            <Select
              value={vendorType}
              onChange={(e) => setVendorType(e.target.value)}
            >
              <option value="" disabled>
                Select Vendor Type
              </option>
              {vendors.map((vendor, index) => (
                <option key={index} value={vendor}>
                  {vendor}
                </option>
              ))}
            </Select>
          </div>

          {/* Driver Address */}
          <div>
            <Label>Driver Address</Label>
            <Input
              type="text"
              placeholder="Enter Driver Address"
              value={driverAddress}
              onChange={(e) => setDriverAddress(e.target.value)}
            />
          </div>

          {/* Driver License Number */}
          <div>
            <Label>Driver License Number</Label>
            <Input
              type="text"
              placeholder="Enter License Number"
              value={licenseNumber}
              onChange={(e) => setLicenseNumber(e.target.value)}
            />
          </div>

          {/* Vehicle Assigned */}
          <div>
            <Label>Vehicle Assigned</Label>
            <Input
              type="text"
              placeholder="Enter Vehicle Assigned"
              value={vehicleAssigned}
              onChange={(e) => setVehicleAssigned(e.target.value)}
            />
          </div>

          {/* Driver Documents Upload */}
          <div>
            <Label>Upload Documents (License, Photo ID, etc.)</Label>
            <FileInput
              type="file"
              onChange={handleFileUpload}
              accept=".pdf, .jpg, .jpeg, .png"
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

export default AddDriver;
