import React, { useState } from "react";
import styled from "styled-components";

// Styled Components
const AlertsContainer = styled.div`
  padding: 0px;
  background-color: #f9f9f9;
`;

const Header = styled.div`
  background-color: rgba(224, 219, 219, 0.93);
  display: flex;
  padding: 6px 8px;
  margin-bottom: 6px;
  width: 100%;

  @media (max-width: 768px) {
    flex-direction: column;
    gap: 15px;
    padding: 5px;
    align-items: center;
  }
`;

const Manage = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 0px;
  justify-content: center;
`;

const Title = styled.div`
  color: #333];
  font-family:lato;
  font-size:20px;
  display: flex;
  width:40%;
`;

const SearchInput = styled.input`
  padding:  10px 20px;
  width: 220px;
  border: 1px solid #ccc;
  border-radius: 4px;
  margin-right:10px
  @media (max-width: 768px) {
    width: 80%;
  }
`;
const ToggleContainer = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 6px;
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

const FilterButton = styled.button`
  flex: 1;
  display:flex;
  align-items:center;
  justify-content:center;
  padding: 8px 2px;
  background-color: ${(props) => (props.active ? "#007bff" : "#f5f5f5")};
  color: ${(props) => (props.active ? "#fff" : "#333")};
  border: none;
  border-radius: 4px;
  cursor: pointer;
  width:126px;

  &:hover {
    background-color: ${(props) => (props.active ? "#0056b3" : "#ddd")};
  }
`;

const TableContainer = styled.div`
  // margin: 20px auto;
  overflow-x: auto;
`;

const Table = styled.table`
  width: 100%;
  border-collapse: collapse;
  margin: 0 auto;
  background: #fff;
`;

const TableHeader = styled.thead`
  background-color: #333;
  color: #fff;

  th {
    padding: 10px;
    text-align: left;
    border: 1px solid #ddd;
  }
`;

const TableRow = styled.tr`
  &:nth-child(even) {
    background-color: #f2f2f2;
  }
`;

const TableCell = styled.td`
  padding: 10px;
  text-align: left;
  border: 1px solid #ddd;
`;

const ActionButton = styled.button`
  padding: 8px 12px;
  margin: 5px;
  border: none;
  border-radius: 4px;
  color: #fff;
  background-color: ${(props) => (props.action === "start" ? "#28a745" : "#dc3545")};
  cursor: pointer;

  &:hover {
    background-color: ${(props) => (props.action === "start" ? "#218838" : "#c82333")};
  }
`;

// Alerts Page Component
const AlertsPage = () => {
  const [alerts, setAlerts] = useState([
    {
      id: 1,
      bookingId: "B001",
      tripName: "Trip 001",
      driverName: "Driver A",
      vehicleNumber: "OD-21-0606",
      employees: ["Employee X", "Employee Y"],
      location: "JSL Safety House",
      status: "Pending Start",
      eta: "10:00 AM",
    },
    {
      id: 2,
      bookingId: "B002",
      tripName: "Trip 002",
      driverName: "Driver B",
      vehicleNumber: "OD-22-0707",
      employees: ["Employee A", "Employee B"],
      location: "JSL SMS Lab Office",
      status: "Pending End",
      eta: "11:00 AM",
    },
    {
      id: 3,
      bookingId: "B003",
      tripName: "Trip 003",
      driverName: "Driver C",
      vehicleNumber: "OD-23-0808",
      employees: ["Employee C", "Employee D"],
      location: "JSL Head Office",
      status: "Completed",
      eta: "2:00 PM",
    },
    {
      id: 4,
      bookingId: "B004",
      tripName: "Trip 004",
      driverName: "Driver D",
      vehicleNumber: "OD-24-0909",
      employees: ["Employee E", "Employee F"],
      location: "JSL Factory",
      status: "Started Manually",
      eta: "3:00 PM",
    },
  ]);

  const [filter, setFilter] = useState("all");
  const [searchTerm, setSearchTerm] = useState("");

  const handleMarkStart = (id) => {
    setAlerts((prev) =>
      prev.map((alert) =>
        alert.id === id ? { ...alert, status: "Started Manually" } : alert
      )
    );
    alert(`Trip ${id} marked as started manually.`);
  };

  const handleMarkEnd = (id) => {
    setAlerts((prev) =>
      prev.map((alert) =>
        alert.id === id ? { ...alert, status: "Ended Manually" } : alert
      )
    );
    alert(`Trip ${id} marked as ended manually.`);
  };

  const handleFilterChange = (filterType) => {
    setFilter(filterType);
  };

  const filteredAlerts = alerts
    .filter((alert) => {
      if (filter === "all") return true;
      if (filter === "active") return alert.status === "Pending Start" || alert.status === "Pending End";
      if (filter === "completed") return alert.status === "Completed" || alert.status === "Started Manually" || alert.status === "Ended Manually";
      return true;
    })
    .filter((alert) => {
      return alert.bookingId.toLowerCase().includes(searchTerm.toLowerCase());
    });

  return (
    <AlertsContainer>
      {/* Header Section with Search */}
      <Header>
      <Manage>
      <Title>Alerts </Title>
      <SearchInput
            type="text"
            placeholder="Search by Booking ID"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
      </Manage>
      </Header>

      {/* Filter Section */}
      <ToggleContainer>
        <ToggleBox>
        <FilterButton active={filter === "all"} onClick={() => handleFilterChange("all")}>
          All Alerts
        </FilterButton>
        <FilterButton active={filter === "active"} onClick={() => handleFilterChange("active")}>
          Active Alerts
        </FilterButton>
        <FilterButton active={filter === "completed"} onClick={() => handleFilterChange("completed")}>
          Trip Complete Alerts
        </FilterButton>
        </ToggleBox>
      </ToggleContainer>

      {/* Table Section */}
      <TableContainer>
        <Table>
          <TableHeader>
            <tr>
              <th>Trip ID</th>
              <th>Booking ID</th>
              <th>Trip Name</th>
              <th>Driver Name</th>
              <th>Vehicle Number</th>
              <th>Employees</th>
              <th>Location</th>
              <th>Status</th>
              <th>ETA</th>
              <th>Actions</th>
            </tr>
          </TableHeader>
          <tbody>
            {filteredAlerts.length > 0 ? (
              filteredAlerts.map((alert) => (
                <TableRow key={alert.id}>
                  <TableCell>{alert.id}</TableCell>
                  <TableCell>{alert.bookingId}</TableCell>
                  <TableCell>{alert.tripName}</TableCell>
                  <TableCell>{alert.driverName}</TableCell>
                  <TableCell>{alert.vehicleNumber}</TableCell>
                  <TableCell>
                    {alert.employees.map((employee, index) => (
                      <div key={index}>{employee}</div>
                    ))}
                  </TableCell>
                  <TableCell>{alert.location}</TableCell>
                  <TableCell>{alert.status}</TableCell>
                  <TableCell>{alert.eta}</TableCell>
                  <TableCell>
                    {alert.status === "Pending Start" && (
                      <ActionButton action="start" onClick={() => handleMarkStart(alert.id)}>
                        Mark as Started
                      </ActionButton>
                    )}
                    {alert.status === "Pending End" && (
                      <ActionButton action="end" onClick={() => handleMarkEnd(alert.id)}>
                        Mark as Ended
                      </ActionButton>
                    )}
                  </TableCell>
                </TableRow>
              ))
            ) : (
              <TableRow>
                <TableCell colSpan="10">No alerts found</TableCell>
              </TableRow>
            )}
          </tbody>
        </Table>
      </TableContainer>
    </AlertsContainer>
  );
};

export default AlertsPage;
