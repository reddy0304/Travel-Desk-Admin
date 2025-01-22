import { useState } from "react";
import React from "react";
import styled from "styled-components";
import AddVehicle from "./addVehicle";

// Styled Components
const Container = styled.div`
  padding: 0px; 
  font-family: Lato, sans-serif;
`;

const Header = styled.div`
  background-color: rgb(242, 242, 242);
  display: flex;
  padding: 6px 8px;
  margin-bottom: 5px;
  width: 100%;

  @media (max-width: 768px) {
    flex-direction: column;
    gap: 15px;
    padding: 5px;
    align-items:center;
  }
`;

const Manage = styled.div`
display:flex;
flex-direction: row;
align-items: center;
gap: 10px;
justify-content: space-between;
`;

const Title = styled.div`
color: #333;
display:flex;
`;
const Select = styled.select`
  display:flex;
  padding: 6px 10px;
  border: 1px solid #ccc;
  border-radius: 4px;
  font-family: Arial, sans-serif;
`;

const ActionButtons = styled.div`
  display: flex;
  gap: 10px;
  margin-bottom: 5px;
  width:70%;
  justify-content: end;
`;

const Button = styled.button`
  background-color: ${(props) => (props.primary ? "#007bff" : "#f5f5f5")};
  color: ${(props) => (props.primary ? "#fff" : "#333")};
  margin-top: 10px;
  padding: 9px 20px;
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

const ToggleContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 8px;

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
  border: 1px solid black;
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
  width:118px;

  &:hover {
    background-color: ${(props) => (props.active ? "#0056b3" : "#ddd")};
  }
`;

const SearchInput = styled.input`
  padding: 8px 12px;
  border: 1px solid #ccc;
  border-radius: 4px;
  width: 300px;

  @media (max-width: 768px) {
    width: 100%;
  }
`;

const Table = styled.table`
  width: 100%;
  border-collapse: collapse;
  margin-top: 5px;
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

const ActionMenu = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  flex-direction: column;
  gap: 10px;
  cursor: pointer;
`;

const VehiclesPage = () => {
  const [activeTab, setActiveTab] = useState("Active");
  const [showAddVehicle, setShowAddVehicle] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");


  // Vehicle data with workingCondition
  const vehicles = [
    { id: "AA101", vehicleNo: "OD-04-V-4514", model: "40 Seater", contractType: "40S", vendor: "AMIT KUMAR PATRA", driver: "LIPUNA JENA", garageName: "Patra Garage", deviceIMEI: "96a4d4218974af3a", lastContact: "2024-12-25 14:32", workingCondition: "Yes" },
    { id: "BB102", vehicleNo: "OD-34-P-7163", model: "40 Seater", contractType: "40S", vendor: "ASSOCIATED TRAVEL AGENCY", driver: "SK AZAD BUX", garageName: "Agency Garage", deviceIMEI: "Not Found", lastContact: "2024-12-25 12:10", workingCondition: "Yes" },
    { id: "CC103", vehicleNo: "OD-12-A-6543", model: "20 Seater", contractType: "20S", vendor: "BAGHA TRAVELS", driver: "RAJESH KUMAR", garageName: "Bagha Garage", deviceIMEI: "a47b6c1289deff0b", lastContact: "2024-12-25 11:55", workingCondition: "Yes" },
    { id: "DD104", vehicleNo: "OD-09-Z-9211", model: "50 Seater", contractType: "50S", vendor: "KUMAR TRAVELS", driver: "SUNIL DAS", garageName: "Kumar Garage", deviceIMEI: "Not Found", lastContact: "2024-12-25 10:20", workingCondition: "Yes" },
    { id: "EE105", vehicleNo: "OD-23-B-2134", model: "30 Seater", contractType: "30S", vendor: "PRASAD AGENCY", driver: "CHANDAN PATNAIK", garageName: "Prasad Garage", deviceIMEI: "f12c3e4567a8901b", lastContact: "2024-12-25 09:45", workingCondition: "Yes" },
    { id: "FF106", vehicleNo: "OD-45-K-7642", model: "40 Seater", contractType: "40S", vendor: "JENA TRANSPORT", driver: "MANOJ JENA", garageName: "Jena Garage", deviceIMEI: "3d9b0c4512a7f8c6", lastContact: "2024-12-25 08:30", workingCondition: "Yes" },
    { id: "GG107", vehicleNo: "OD-02-V-9821", model: "20 Seater", contractType: "20S", vendor: "SWAIN TRAVELS", driver: "PRADEEP SWAIN", garageName: "Swain Garage", deviceIMEI: "58a94b2c13d7f0e6", lastContact: "2024-12-25 07:15", workingCondition: "Yes" },
    { id: "HH108", vehicleNo: "OD-31-M-1003", model: "50 Seater", contractType: "50S", vendor: "ROYAL TRANSPORT", driver: "KARTIK ROY", garageName: "Royal Garage", deviceIMEI: "Not Found", lastContact: "2024-12-25 06:50", workingCondition: "Yes" },
    { id: "II109", vehicleNo: "OD-44-P-3456", model: "40 Seater", contractType: "40S", vendor: "AMIT KUMAR PATRA", driver: "LIPUNA JENA", garageName: "Patra Garage", deviceIMEI: "Not Found", lastContact: "2024-12-24 15:10", workingCondition: "No" },
    { id: "JJ110", vehicleNo: "OD-39-J-5555", model: "40 Seater", contractType: "40S", vendor: "ASSOCIATED TRAVEL AGENCY", driver: "SK AZAD BUX", garageName: "Agency Garage", deviceIMEI: "Not Found", lastContact: "2024-12-24 14:32", workingCondition: "No" },
    { id: "KK111", vehicleNo: "OD-16-R-1212", model: "20 Seater", contractType: "20S", vendor: "BAGHA TRAVELS", driver: "RAJESH KUMAR", garageName: "Bagha Garage", deviceIMEI: "Not Found", lastContact: "2024-12-24 13:55", workingCondition: "No" },
    { id: "LL112", vehicleNo: "OD-12-G-9999", model: "50 Seater", contractType: "50S", vendor: "KUMAR TRAVELS", driver: "SUNIL DAS", garageName: "Kumar Garage", deviceIMEI: "Not Found", lastContact: "2024-12-24 12:20", workingCondition: "No" },
    { id: "MM113", vehicleNo: "OD-33-Q-4321", model: "30 Seater", contractType: "30S", vendor: "PRASAD AGENCY", driver: "CHANDAN PATNAIK", garageName: "Prasad Garage", deviceIMEI: "Not Found", lastContact: "2024-12-24 11:45", workingCondition: "No" },
    { id: "NN114", vehicleNo: "OD-27-K-7865", model: "40 Seater", contractType: "40S", vendor: "JENA TRANSPORT", driver: "MANOJ JENA", garageName: "Jena Garage", deviceIMEI: "Not Found", lastContact: "2024-12-24 10:30", workingCondition: "No" },
    { id: "OO115", vehicleNo: "OD-36-T-8877", model: "20 Seater", contractType: "20S", vendor: "SWAIN TRAVELS", driver: "PRADEEP SWAIN", garageName: "Swain Garage", deviceIMEI: "Not Found", lastContact: "2024-12-24 09:15", workingCondition: "No" },
    { id: "PP116", vehicleNo: "OD-55-F-1111", model: "50 Seater", contractType: "50S", vendor: "ROYAL TRANSPORT", driver: "KARTIK ROY", garageName: "Royal Garage", deviceIMEI: "Not Found", lastContact: "2024-12-24 08:50", workingCondition: "No" },
  ];
  

  // Filtering vehicles based on activeTab and search query
  const filteredVehicles = vehicles.filter(
    (vehicle) =>
      (activeTab === "Active" ? vehicle.workingCondition =="Yes" : vehicle.workingCondition=="No") &&
      vehicle.vehicleNo.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <Container>
      {/* Header Section */}
      <Header>
        <Manage>
          <Title>Manage Vehicles</Title>
          <Select>
            <option>All Vendors</option>
            <option> AMIT KUMAR PATRA</option>
            <option> BAGHA TRAVELS</option>
            <option> BM TRAVELS</option>
            <option> JSL</option>
            <option>ASSOCIATED TRAVEL AGENCY</option>
          </Select>
        </Manage>
        <ActionButtons>
          <Button primary onClick={() => setShowAddVehicle(true)}>Add Vehicle</Button>
          <Button primary>Bulk Upload</Button>
        </ActionButtons>
      </Header>

      {/* Tabs and Search Section */}
      <ToggleContainer>
        <ToggleBox>
          <Tab active={activeTab === "Active"} onClick={() => setActiveTab("Active")}>
            Active Vehicles
          </Tab>
          <Tab active={activeTab === "Inactive"} onClick={() => setActiveTab("Inactive")}>
            Inactive Vehicles
          </Tab>
        </ToggleBox>
        <SearchInput
          type="text"
          placeholder="Search Vehicle by Number"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
        />
      </ToggleContainer>

      {/* Vehicles Table */}
      <Table>
        <thead>
          <tr>
            <TableHeader>Sl. No.</TableHeader>
            <TableHeader>Vehicle ID</TableHeader>
            <TableHeader>Vehicle No</TableHeader>
            <TableHeader>Model</TableHeader>
            <TableHeader>Contract Type</TableHeader>
            <TableHeader>Vendor</TableHeader>
            <TableHeader>Driver</TableHeader>
            <TableHeader>Garage Name</TableHeader>
            <TableHeader>Device IMEI</TableHeader>
            <TableHeader>Last Contact Time</TableHeader>
            <TableHeader>Actions</TableHeader>
          </tr>
        </thead>
        <tbody>
          {filteredVehicles.map((vehicle, index) => (
            <TableRow key={vehicle.id}>
              <TableCell>{index + 1}</TableCell>
              <TableCell>{vehicle.id}</TableCell>
              <TableCell>{vehicle.vehicleNo}</TableCell>
              <TableCell>{vehicle.model}</TableCell>
              <TableCell>{vehicle.contractType}</TableCell>
              <TableCell>{vehicle.vendor}</TableCell>
              <TableCell>{vehicle.driver}</TableCell>
              <TableCell>{vehicle.garageName}</TableCell>
              <TableCell>{vehicle.deviceIMEI}</TableCell>
              <TableCell>{vehicle.lastContact}</TableCell>
              <TableCell>
                <ActionMenu>
                  <span>...</span>
                </ActionMenu>
              </TableCell>
            </TableRow>
          ))}
        </tbody>
      </Table>
      {/* Add Driver Modal */}
      {showAddVehicle && <AddVehicle onClose={() => setShowAddVehicle(false)} />}
    </Container>
  );
};

export default VehiclesPage;
