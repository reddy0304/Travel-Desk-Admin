import React from "react";
import { useState } from "react";
import styled from "styled-components";

const ShuttleContainer = styled.div`
  padding-bottom: 10px;
  padding-up: 10px;
  display: flex;
  flex-direction: column;
  align-items: center;
  overflow: hidden;

  @media (max-width: 768px) {
    padding: 10px;
  }
`;

const DownloadSection = styled.div`
  background-color: rgb(242, 242, 242);
  display: flex;
 
  align-items: center;
  flex-direction: row;
  padding: 10px 10px;
  margin-bottom: 5px;
  width: 100%;

  @media (max-width: 768px) {
    flex-direction: column;
    gap: 15px;
    padding: 5px;
    align-items:center;
  }
`;

const Header = styled.div`
  font-family: Lato;
  font-size: 20px;
  font-style: normal;
  font-weight: 500;
  width: 45%;

  @media (max-width: 768px) {
    font-size: 20px;
    justify-content: center;
  }
`;

const DownloadLabel = styled.label`
  font-size: 16px;
  margin-right: 8px;
  width: 12.5%;
  margin-left:100px;

  @media (max-width: 768px) {
    width:35%;
    justify-content: center;
    font-size: 15px;
    margin-right: 0;
  }
`;

const DownloadSelect = styled.select`
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 4px;
  width: 15%;
  margin-right:100px;

  @media (max-width: 768px) {
    padding: 8px;
    justify-content: center;
    width: 40%;
    margin-right:0px;
  }
`;

const DownloadButton = styled.button`
 background-color:rgb(48, 146, 250);
  color: #fff;
  display:flex;
  justify-content:center;
  padding: 10px 20px;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  

  &:hover {
    background-color:rgb(1, 103, 212);
  }

  @media (max-width: 768px) {
    width: 25%;
    padding: 8px 10px;
    margin-right: 50px;
  }
`;

const ToggleContainer = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 5px;
  
  margin-left:0px;
  width:100%;
  @media (max-width: 768px) {
    flex-direction: column;
    gap: 10px;
    align-items: stretch;
  }
`;

const ToggleBox = styled.div`
  display: flex;
  gap: 10px;
  padding: 5px;
  background-color:white;
  border-radius: 6px;
  border: 1px solid rgb(155, 150, 150);
  margin-bottom: 0px;
  width:auto;
`;

const Tab = styled.button`
  flex: 1;
  display:flex;
  align-items:center;
  justify-content:center;
  padding: 8px 8px;
  background-color: ${(props) => (props.active ? "#007bff" : "#f5f5f5")};
  color: ${(props) => (props.active ? "#fff" : "#333")};
  border: none;
  border-radius: 4px;
  cursor: pointer;
  width:128px;

  &:hover {
    background-color: ${(props) => (props.active ? "#0056b3" : "#ddd")};
  }
`;

const Form = styled.div`
  display: flex;
  flex-direction: column;
  gap: 30px;
  width: 100%;
  padding : 15px 10px;
  align-items:flex-start;
  background-color: rgb(255, 255, 255);
  @media (max-width: 768px) {
    gap: 25px;
    align-items : center;
  }
`;

const SelectGroup = styled.div`
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  width: 100%;
  row-gap: 100px;
  font-family: Lato;

  @media (max-width: 768px) {
   align-items:center;
  justify-content:center;
    width: 100%;
  }
`;

const Label = styled.label`
  font-size: 20px;
  font-family: Lato;
  margin-up: 18px;
  margin-left: 60px;
  justify-content:center;
  width:15%;

  @media (max-width: 768px) {
    font-size: 14px;
    width:20%;
  }
`;

const Select = styled.select`
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 4px;
  font-family: Lato;
  width: 30%;

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
  width: 40%;
  margin-left:55px;
  margin-bottom:-8px;

  @media (max-width: 768px) {
    padding: 20px;
  }
`;

const FileButton = styled.button`
  margin-top: 10px;
  background-color:rgb(48, 146, 250);
  color: #fff;
  padding: 10px 20px;
  border: none;
  border-radius: 4px;
  cursor: pointer;

  &:hover {
   background-color:rgb(1, 103, 212);
  }

  @media (max-width: 768px) {
    padding: 8px 15px;
  }
`;

const UploadButton = styled.button`
  margin-top: 20px;
  background-color:rgb(48, 146, 250);
  color: #fff;
  padding: 10px 20px;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  width: 10%;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-left: 300px;
  margin-bottom: 8px;

  &:hover {
   background-color:rgb(1, 103, 212);
  }

  @media (max-width: 768px) {
    
    width: 25%;
    margin-left:0px;
    padding: 8px 10px;
  }
`;

const Table = styled.table`
  width: 100%;
  border-collapse: collapse;
  margin-top: 8px;
`;

const TableHeader = styled.th`
  background-color: #f4f4f4;
  padding: 10px;
  border: 1px solid #ddd;
  text-align: left;
  font-size:13px;
`;

const TableRow = styled.tr`
  &:nth-child(even) {
    background-color: #f9f9f9;
  }
`;

const TableCell = styled.td`
  padding: 10px;
  border: 1px solid #ddd;
  font-size:13px;
`;



const ShuttlePage = () => {
   const [activeTab, setActiveTab] = useState("Active");
   const shuttleSchedules = [
    {
      id: 1,
      route: "Dala",
      stops: "KC Sahoo Petrol Pump – Dala Pond – Dala Town Hall – Nahaka (Hotel Royal Kalpana)-Plant",
      busesForShift: 7,
      busesForGShift: 7,
    },
    {
      id: 2,
      route: "Kanheipur",
      stops: "Hotel Dayal Residency – Dr. Tripathy Gali – Prava Care-Plant",
      busesForShift: 3,
      busesForGShift: 3,
    },
    {
      id: 3,
      route: "Bus Stand",
      stops: "Bus Stand – Gobandhu Chowk – Plant",
      busesForShift: 6,
      busesForGShift: 6,
    },
    {
      id: 4,
      route: "Home Town",
      stops: "Home Town – Machhali Market – Sub Registrar Office – College Chowk – Dhabalgiri – Sai Mandir – Kusunpur-Military Chawk",
      busesForShift: 6,
      busesForGShift: 6,
    },
    {
      id: 5,
      route: "Roman Dolipur",
      stops: "Hotel Roman Dolipur – Stadium Hanuman Temple – St. Xavier School – OMC Chawk – Plant",
      busesForShift: 0,
      busesForGShift: 1,
    },
    {
      id: 6,
      route: "Manpur Complex",
      stops: "Manpur Complex – DET Hostel (Hindustan Hotel) – Spring Ville – Plant",
      busesForShift: 1,
      busesForGShift: 2,
    },
    {
      id: 7,
      route: "Trijanga Colony",
      stops: "Trijanga Colony – Plant",
      busesForShift: 1,
      busesForGShift: 2,
    },
    {
      id: 8,
      route: "Jana Shatabdi",
      stops: "Station – Plant",
      busesForShift: 0,
      busesForGShift: 1,
    },
    {
      id: 9,
      route: "Ladies Hostel",
      stops: "Ladies Hostel – Plant",
      busesForShift: 0,
      busesForGShift: 2,
    },
    {
      id: 10,
      route: "Brahmani Bridge",
      stops: "Brahmani Bridge – Pankapal – Duburi – Plant",
      busesForShift: 1,
      busesForGShift: 1,
    },
    {
      id: 11,
      route: "Military Chawk",
      stops: "Military Chawk – Dangadi – Solei – Spring Ville – Plant",
      busesForShift: 1,
      busesForGShift: 1,
    },
    {
      id: 12,
      route: "Kantipur",
      stops: "Kantipur – Plant",
      busesForShift: 0,
      busesForGShift: 1,
    },
    {
      id: 13,
      route: "GET Hostel",
      stops: "GET Hostel – Plant",
      busesForShift: 0,
      busesForGShift: 1,
    },
    {
      id: 14,
      route: "Spring Ville",
      stops: "Spring Ville – Plant",
      busesForShift: 0,
      busesForGShift: 1,
    },
    {
      id: 15,
      route: "Pataranga Colony",
      stops: "Pataranga Colony – Plant",
      busesForShift: 0,
      busesForGShift: 1,
    },
    {
      id: 16,
      route: "Shuttle Bus",
      stops: "Main Gate to Plant",
      busesForShift: 13,
      busesForGShift: 1,
    },
    {
      id: 17,
      route: "Shuttle Bus",
      stops: "Project Department",
      busesForShift: 5,
      busesForGShift: 5,
    },
    {
      id: 18,
      route: "Shuttle Bus",
      stops: "Main gate -Shakti Bhavan",
      busesForShift: 2,
      busesForGShift: 2,
    },
  ];
  
  return (
    <ShuttleContainer>
      <DownloadSection>
        <Header>Manage Shuttle Services</Header>
          <DownloadLabel htmlFor="downloadOption">
            Download Option
          </DownloadLabel>
          <DownloadSelect id="downloadOption">
            <option value="">Select Data Type</option>
            <option value="shuttle-stops">Shuttle Stop</option>
            <option value="shuttle-stops">Shuttle Route</option>
            <option value="shuttle-stops">Employee Shuttle Stop</option>
            <option value="shuttle-stops">Shuttle Route-vehicle</option>
            <option value="shuttle-stops">Shuttle Route-vehicle driver</option>
          </DownloadSelect>
        <DownloadButton>Download</DownloadButton>
      </DownloadSection>
      <ToggleContainer>
        <ToggleBox>
        <Tab active={activeTab === "Active"} onClick={() => setActiveTab("Active")}>
          upload shuttle
        </Tab>
        <Tab active={activeTab === "Inactive"} onClick={() => setActiveTab("Inactive")}>
         shuttle schedules
        </Tab>
        </ToggleBox>
      </ToggleContainer>

      {/* Download Section */}
      {activeTab === "Active" ?(
        <Form>
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
        <UploadButton>Upload</UploadButton>
      </Form>
      ):(
        <Table>
          <thead>
            <tr>
              <TableHeader>S. No</TableHeader>
              <TableHeader>Bus Route</TableHeader>
              <TableHeader>Bus Stoppage</TableHeader>
              <TableHeader>No. of Buses for Shift</TableHeader>
              <TableHeader>No. of Buses for G Shift</TableHeader>
            </tr>
          </thead>
          <tbody>
            {shuttleSchedules.map((schedule) => (
              <TableRow key={schedule.id}>
                <TableCell>{schedule.id}</TableCell>
                <TableCell>{schedule.route}</TableCell>
                <TableCell>{schedule.stops}</TableCell>
                <TableCell>{schedule.busesForShift}</TableCell>
                <TableCell>{schedule.busesForGShift}</TableCell>
              </TableRow>
            ))}
          </tbody>
        </Table>
      )} 
    </ShuttleContainer>
  );
};

export default ShuttlePage;
