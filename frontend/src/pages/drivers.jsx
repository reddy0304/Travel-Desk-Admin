import { useState } from "react";
import React from "react";
import styled from "styled-components";
import AddDriver from "./adddriver";
import AddDriverBulkUpload  from "./addDriverBulkupload";

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
gap: 9px;
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
  background-color: ${(props) => (props.$primary ? "#007bff" : "#f5f5f5")};
  color: ${(props) => (props.$primary ? "#fff" : "#333")};
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
  background-color: ${(props) => (props.$active ? "#007bff" : "#f5f5f5")};
  color: ${(props) => (props.$active ? "#fff" : "#333")};
  border: none;
  border-radius: 4px;
  cursor: pointer;
  width:118px;

  &:hover {
    background-color: ${(props) => (props.$active ? "#0056b3" : "#ddd")};
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

const ActionMenu = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  flex-direction: column;
  gap: 10px;
  cursor: pointer;
`;

const DriversPage = () => {
    const [activeTab, setActiveTab] = useState("Active");
    const [showBulkUpload, setShowBulkUpload] = useState(false);
    const [showAddDriver, setShowAddDriver] = useState(false);
    const [searchQuery, setSearchQuery] = useState("");
    const drivers = [
        {
          id: 1,
          name: "LIPUNA JENA",
          license: "OD0420160261869",
          driverId: "AKP 1",
          vendor: "AMIT KUMAR PATRA",
          phone: "9777348072",
          vehicleId: "4514",
          imei: "96a4d4218974af3a",
          status: "Available",
        },
        {
          id: 2,
          name: "SK AZAD BUX",
          license: "OR0419920147052",
          driverId: "ATA 1",
          vendor: "ASSOCIATED TRAVEL AGENCY",
          phone: "9338665586",
          vehicleId: "7163",
          imei: "Not Found",
          status: "Available",
        },
        {
          id: 3,
          name: "ABINASH MALIK",
          license: "OD3420210011439",
          driverId: "",
          vendor: "BAGHA TRAVELS",
          phone: "8144669568",
          vehicleId: "BT9876",
          imei: "Not Found",
          status: "Available",
        },
        {
          id: 4,
          name: "AJAY SAHOO",
          license: "OD0420150236530",
          driverId: "BT 1",
          vendor: "BAGHA TRAVELS",
          phone: "8249079351",
          vehicleId: "3526",
          imei: "Not Found",
          status: "Available",
        },
        {
          id: 5,
          name: "AJMER ALI KHAN",
          license: "OD3420220007544",
          driverId: "BT 2",
          vendor: "BAGHA TRAVELS",
          phone: "9777693988",
          vehicleId: "3450",
          imei: "Not Found",
          status: "Available",
        },
        {
          id: 6,
          name: "AKBAR KHAN",
          license: "OD0420170271111",
          driverId: "",
          vendor: "BAGHA TRAVELS",
          phone: "8249974010",
          vehicleId: "",
          imei: "Not Found",
          status: "Available",
        },
        {
          id: 7,
          name: "ALOK SAHU",
          license: "OR0419950013763",
          driverId: "BT 3",
          vendor: "BAGHA TRAVELS",
          phone: "9337441434",
          vehicleId: "3526",
          imei: "Not Found",
          status: "Available",
        },
        {
          id: 8,
          name: "ANANDI CHARAN MALIK",
          license: "OR0419950034750",
          driverId: "",
          vendor: "BAGHA TRAVELS",
          phone: "9938741503",
          vehicleId: "BT9477",
          imei: "Not Found",
          status: "Unavailable",
        },
        {
          id: 9,
          name: "ANIL KUMAR",
          license: "OD3420210010742",
          driverId: "",
          vendor: "BAGHA TRAVELS",
          phone: "7735564848",
          vehicleId: "BT7636",
          imei: "Not Found",
          status: "Available",
        },
        {
          id: 10,
          name: "BICHITRA JENA",
          license: "OD0420180259420",
          driverId: "",
          vendor: "BAGHA TRAVELS",
          phone: "9861617834",
          vehicleId: "BT5705",
          imei: "Not Found",
          status: "Unavailable",
        },
        {
          id: 11,
          name: "BIJAY BAHERA",
          license: "OD3420230007834",
          driverId: "",
          vendor: "BAGHA TRAVELS",
          phone: "7205087174",
          vehicleId: "BT7174",
          imei: "Not Found",
          status: "Unavailable",
        },
        {
          id: 12,
          name: "BUTU",
          license: "OR0420090104266",
          driverId: "",
          vendor: "BAGHA TRAVELS",
          phone: "8455918909",
          vehicleId: "BT2606",
          imei: "Not Found",
          status: "Unavailable",
        },
        {
          id: 13,
          name: "DAYANIDHI NAYAK",
          license: "OD3420180001478",
          driverId: "",
          vendor: "BAGHA TRAVELS",
          phone: "7750009024",
          vehicleId: "BT7921",
          imei: "Not Found",
          status: "Available",
        },
        {
          id: 14,
          name: "DEBENDRA KU JENA",
          license: "OD0220220005192",
          driverId: "",
          vendor: "BAGHA TRAVELS",
          phone: "9692734297",
          vehicleId: "BT9079",
          imei: "Not Found",
          status: "Unavailable",
        },
        {
          id: 15,
          name: "DHANESWAR MALIK",
          license: "OD3420220003877",
          driverId: "",
          vendor: "BAGHA TRAVELS",
          phone: "7894809572",
          vehicleId: "BT8345",
          imei: "Not Found",
          status: "Unavailable",
        },
    ];
    const filteredDrivers = drivers.filter((driver) =>
        (activeTab === "Active" ? driver.status === "Available" : driver.status === "Unavailable") && 
        driver.name.toLowerCase().includes(searchQuery.toLowerCase())
    );
    

  return (
    <Container>
      {/* Header Section */}
      <Header>
        <Manage>
        <Title>Manage Drivers</Title>
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
        <Button $primary onClick={() => setShowAddDriver(true)}> {/* Open modal */}
            Add Driver
        </Button>
          <Button $primary onClick={() => setShowBulkUpload(true)}>Bulk Upload</Button> {/* Switch to bulkupload page */}
        </ActionButtons>
      </Header>

      {/* Tabs Section */}
      {!showBulkUpload &&
        <ToggleContainer>
        <ToggleBox>
        <Tab $active={activeTab === "Active"} onClick={() => setActiveTab("Active")}>
          Active Driver
        </Tab>
        <Tab $active={activeTab === "Inactive"} onClick={() => setActiveTab("Inactive")}>
          Inactive Driver
        </Tab>
        </ToggleBox>
        <SearchInput
          type="text"
          placeholder="Search Driver by name"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
        />
        </ToggleContainer>
      }
      
      {/* Drivers Table */}
      {!showBulkUpload &&
        <Table>
        <thead>
          <tr>
            <TableHeader>Sl. No.</TableHeader>
            <TableHeader>Name</TableHeader>
            <TableHeader>License No.</TableHeader>
            <TableHeader>Driver ID</TableHeader>
            <TableHeader>Vendor</TableHeader>
            <TableHeader>Driver Phone</TableHeader>
            <TableHeader>Vehicle ID</TableHeader>
            <TableHeader>IMEI</TableHeader>
            <TableHeader>Actions</TableHeader>
          </tr>
        </thead>
        <tbody>
          {filteredDrivers.map((driver, index) => (
            <TableRow key={driver.id}>
              <TableCell>{index + 1}</TableCell>
              <TableCell>{driver.name}</TableCell>
              <TableCell>{driver.license}</TableCell>
              <TableCell>{driver.driverId}</TableCell>
              <TableCell>{driver.vendor}</TableCell>
              <TableCell>{driver.phone}</TableCell>
              <TableCell>{driver.vehicleId}</TableCell>
              <TableCell>{driver.imei}</TableCell>
              <TableCell>
                <ActionMenu>
                  <span>...</span>
                </ActionMenu>
              </TableCell>
            </TableRow>
          ))}
        </tbody>
      </Table>
      }
      {/* Add driverBulkupload modal*/}
      {showBulkUpload && <AddDriverBulkUpload setShowBulkUpload={setShowBulkUpload}/> }
      {/* Add Driver Modal */}
      {showAddDriver && <AddDriver onClose={() => setShowAddDriver(false)} />}
    </Container>
  );
};

export default DriversPage;
