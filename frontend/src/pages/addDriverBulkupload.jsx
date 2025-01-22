import React from 'react';
//import { useState } from "react";
import styled from "styled-components";


const Container = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 20px;
  background-color: #fff;
  gap: 30px;

  @media (max-width: 768px) {
    flex-direction: column;
    gap: 20px;
  }
`;

const LeftSection = styled.div`
  width: 50%;
  display: flex;
  flex-direction: column;
  gap: 20px;
`;

const RightSection = styled.div`
  width: 45%;
  background-color: #f9f9f9;
  padding: 20px;
  border-radius: 8px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);

  @media (max-width: 768px) {
    width: 100%;
  }
`;

const Title = styled.h3`
  font-size: 20px;
  margin-bottom: 20px;
`;

const SelectGroup = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
  gap: 30px;
  font-family: Lato;

  @media (max-width: 768px) {
    flex-direction: column;
    align-items: flex-start;
  }
`;

const Label = styled.label`
  font-size: 20px;
  margin-top: 0px;
  font-family: Lato;
  width: 20%;
  display: flex;
  align-items: center;

  @media (max-width: 768px) {
    font-size: 14px;
    width: 100%;
  }
`;

const Select = styled.select`
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 4px;
  font-family: Lato;
  width: auto;

  @media (max-width: 768px) {
    padding: 8px;
  }
`;

const FileUploadBox = styled.div`
  border: 2px dashed #ccc;
  font-family: Lato;
  padding: 40px;
  text-align: center;
  border-radius: 8px;
  background-color: #f9f9f9;
  width: 60%;
  margin-top: 20px;

  @media (max-width: 768px) {
    padding: 20px;
    width: 100%;
  }
`;

const FileButton = styled.button`
  margin-top: 10px;
  background-color: rgb(48, 146, 250);
  color: #fff;
  padding: 10px 20px;
  border: none;
  border-radius: 4px;
  cursor: pointer;

  &:hover {
    background-color: rgb(1, 103, 212);
  }

  @media (max-width: 768px) {
    padding: 8px 15px;
  }
`;

const ButtonsSection = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
  gap: 30px;
  font-family: Lato;
`;

const CancelButton = styled.button`
  margin-top: 20px;
  background-color: rgb(255, 71, 71);
  color: #fff;
  padding: 10px 20px;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  width: 30%; /* Ensures both buttons fit in the row */

  &:hover {
    background-color: rgb(192, 30, 30);
  }

  @media (max-width: 768px) {
    width: 45%; /* Adjust for mobile if needed */
    margin-left: 0;
    padding: 8px 15px;
  }
`;

const UploadButton = styled.button`
  margin-top: 20px;
  background-color: rgb(48, 146, 250);
  color: #fff;
  padding: 10px 20px;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  width: 30%;
  align-self: flex-start;

  &:hover {
    background-color: rgb(1, 103, 212);
  }

  @media (max-width: 768px) {
    width: 50%;
  }
`;

const Instructions = styled.div`
  font-size: 14px;
  line-height: 1.8;
`;

const DownloadButton = styled.button`
  margin-top: 20px;
  margin-left: 180px;
  background-color: rgb(48, 146, 250);
  color: #fff;
  padding: 10px 20px;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  width: 30%;
  display: flex;
  align-items: center;
  justify-content: center;

  &:hover {
    background-color: rgb(1, 103, 212);
  }

  @media (max-width: 768px) {
    width: 80%;
  }
`;
const AddDriverBulkUpload = ({setShowBulkUpload}) => {
    const handleDownloadTemplate = () => {
        // Trigger the download of the template file
        const link = document.createElement("a");
        link.href = "/path/to/template.csv"; // Replace with the actual path to your template file
        link.download = "template.csv"; // Name the downloaded file
        link.click();
      };
    
      return (
        <Container>
          {/* Left Section: Form */}
          <LeftSection>
            <Title>Upload Bulk Data</Title>
    
            {/* Data Type Dropdown */}
            <SelectGroup>
              <Label htmlFor="dataType">Data Type</Label>
              <Select id="dataType">
                <option value="">Select Data Type</option>
                <option value="Shuttle">Shuttle Stop</option>
                <option value="Shuttle Route">Shuttle Route</option>
                <option value="Employees Shuttle Stop">Employees Shuttle Stop</option>
                <option value="Update Shuttle Stop">Update Shuttle Stop</option>
                <option value="Update Shuttle Route">Update Shuttle Route</option>
                <option value="Update Shuttle Route vehicle">Update Shuttle Route vehicle</option>
                <option value="Update Shuttle Route vehicle driver">Update Shuttle Route vehicle driver</option>
              </Select>
            </SelectGroup>
    
            {/* Action Type Dropdown */}
            <SelectGroup>
              <Label htmlFor="actionType">Action Type</Label>
              <Select id="actionType">
                <option value="">Select Action Type</option>
                <option value="upload">Validate</option>
                <option value="delete">Validate Enter</option>
              </Select>
            </SelectGroup>
    
            {/* File Upload Section */}
            <FileUploadBox>
              <p>Drag & drop the file you want to upload</p>
              <FileButton>Choose File</FileButton>
            </FileUploadBox>
    
            {/* Upload Button */}
            <ButtonsSection>
            <CancelButton onClick={() => setShowBulkUpload(false)}>Cancel</CancelButton>
            <UploadButton>Upload</UploadButton>
            </ButtonsSection>
            
          </LeftSection>
    
          {/* Right Section: Instructions */}
          <RightSection>
            <Title>CSV File Format Instructions</Title>
            <Instructions>
              1. Input data in each row according to the order shown below. <br />
              2. Do not add headers in the file. <br />
              3. At the end of every row, add "~" in the last cell. <br />
              Otherwise, the system will not be able to process the uploaded data. <br />
              <br />
              Example: 
              <ul>
                <li>[Shuttle Stop Name], [Geocode], [Landmark], [Office_Name], ~</li>
                <li>Modern High School, 12.875624, 77.856987, PVR Mall, MoveInSync, ~</li>
              </ul>
            </Instructions>
    
            {/* Download Template Button */}
            <DownloadButton onClick={handleDownloadTemplate}>
              Download Template
            </DownloadButton>
          </RightSection>
        </Container>
      );
}

export default AddDriverBulkUpload;