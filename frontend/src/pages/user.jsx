import { useState } from "react";
import React from "react";
import styled from "styled-components";

// Styled Components
const Container = styled.div`
  padding: 0px;
  font-family: Lato, sans-serif;
`;

const Header = styled.div`
  background-color: rgb(242, 242, 242);
  display: flex;
  padding: 6px 8px;
  margin-bottom: 20px;
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
  gap: 10px;
  justify-content: space-between;
`;

const Title = styled.div`
  color: #333;
  display: flex;
`;

const SearchInput = styled.input`
  padding: 6px 10px;
  border: 1px solid #ccc;
  border-radius: 4px;
  font-family: Arial, sans-serif;
  width: 250px;
`;

const Table = styled.table`
  width: 100%;
  border-collapse: collapse;
  margin-top: 20px;
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
  font-size:13px;
  padding: 10px;
  border: 1px solid #ddd;
`;

const ActionMenu = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  flex-direction: column;
  gap: 10px;
  cursor: pointer;
`;

// UsersPage Component
const UsersPage = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const users = [
    {
      id: 1,
      name: "Anil Kumar",
      empId: "EMP001",
      email: "anil.kumar@jindalstainless.com",
      gender: "Male",
      phone: "9876543210",
      department: "CRM",
      designation: "Executive",
      ridesBooked: 15,
    },
    {
      id: 2,
      name: "Sunita Sharma",
      empId: "EMP002",
      email: "sunita.sharma@jindalstainless.com",
      gender: "Female",
      phone: "9123456789",
      department: "IT",
      designation: "Junior Engineer",
      ridesBooked: 8,
    },
    {
      id: 3,
      name: "Rahul Mehta",
      empId: "EMP003",
      email: "rahul.mehta@jindalstainless.com",
      gender: "Male",
      phone: "9876543211",
      department: "Energy Management",
      designation: "Assistant Manager",
      ridesBooked: 12,
    },
    {
      id: 4,
      name: "Neha Gupta",
      empId: "EMP004",
      email: "neha.gupta@jindalstainless.com",
      gender: "Female",
      phone: "9123456788",
      department: "HSM",
      designation: "GET",
      ridesBooked: 10,
    },
    {
      id: 5,
      name: "Amit Sharma",
      empId: "EMP005",
      email: "amit.sharma@jindalstainless.com",
      gender: "Male",
      phone: "9876543212",
      department: "CPP",
      designation: "Senior Manager",
      ridesBooked: 20,
    },
    {
      id: 6,
      name: "Priya Singh",
      empId: "EMP006",
      email: "priya.singh@jindalstainless.com",
      gender: "Female",
      phone: "9123456787",
      department: "MRSS",
      designation: "Executive",
      ridesBooked: 5,
    },
    {
      id: 7,
      name: "Rohit Verma",
      empId: "EMP007",
      email: "rohit.verma@jindalstainless.com",
      gender: "Male",
      phone: "9876543213",
      department: "Sustainability",
      designation: "Junior Engineer",
      ridesBooked: 9,
    },
    {
      id: 8,
      name: "Sneha Roy",
      empId: "EMP008",
      email: "sneha.roy@jindalstainless.com",
      gender: "Female",
      phone: "9123456786",
      department: "Digitalization",
      designation: "Assistant Manager",
      ridesBooked: 7,
    },
    {
      id: 9,
      name: "Karan Malik",
      empId: "EMP009",
      email: "karan.malik@jindalstainless.com",
      gender: "Male",
      phone: "9876543214",
      department: "Energy Management",
      designation: "GET",
      ridesBooked: 6,
    },
    {
      id: 10,
      name: "Shalini Desai",
      empId: "EMP010",
      email: "shalini.desai@jindalstainless.com",
      gender: "Female",
      phone: "9123456785",
      department: "CRM",
      designation: "Senior Manager",
      ridesBooked: 18,
    },
    {
      id: 11,
      name: "Arjun Nair",
      empId: "EMP011",
      email: "arjun.nair@jindalstainless.com",
      gender: "Male",
      phone: "9876543215",
      department: "HSM",
      designation: "Executive",
      ridesBooked: 11,
    },
    {
      id: 12,
      name: "Pooja Mishra",
      empId: "EMP012",
      email: "pooja.mishra@jindalstainless.com",
      gender: "Female",
      phone: "9123456784",
      department: "CPP",
      designation: "Junior Engineer",
      ridesBooked: 4,
    },
    {
      id: 13,
      name: "Vikram Arora",
      empId: "EMP013",
      email: "vikram.arora@jindalstainless.com",
      gender: "Male",
      phone: "9876543216",
      department: "MRSS",
      designation: "Assistant Manager",
      ridesBooked: 14,
    },
    {
      id: 14,
      name: "Megha Reddy",
      empId: "EMP014",
      email: "megha.reddy@jindalstainless.com",
      gender: "Female",
      phone: "9123456783",
      department: "Sustainability",
      designation: "GET",
      ridesBooked: 3,
    },
    {
      id: 15,
      name: "Rajesh Khanna",
      empId: "EMP015",
      email: "rajesh.khanna@jindalstainless.com",
      gender: "Male",
      phone: "9876543217",
      department: "Digitalization",
      designation: "Senior Manager",
      ridesBooked: 16,
    },
  ];
  

  const filteredUsers = users.filter(
    (user) =>
      user.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      user.empId.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <Container>
      {/* Header Section */}
      <Header>
        <Manage>
          <Title>Manage Users</Title>
          <SearchInput
            type="text"
            placeholder="Search by Name or Emp ID"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </Manage>
      </Header>

      {/* Users Table */}
      <Table>
        <thead>
          <tr>
            <TableHeader>Sl. No.</TableHeader>
            <TableHeader>Name</TableHeader>
            <TableHeader>Employee ID</TableHeader>
            <TableHeader>Email ID</TableHeader>
            <TableHeader>Gender</TableHeader>
            <TableHeader>Mobile Number</TableHeader>
            <TableHeader>Department</TableHeader>
            <TableHeader>Designation</TableHeader>
            <TableHeader>Rides Booked</TableHeader>
            <TableHeader>Actions</TableHeader>
          </tr>
        </thead>
        <tbody>
          {filteredUsers.map((user, index) => (
            <TableRow key={user.id}>
              <TableCell>{index + 1}</TableCell>
              <TableCell>{user.name}</TableCell>
              <TableCell>{user.empId}</TableCell>
              <TableCell>{user.email}</TableCell>
              <TableCell>{user.gender}</TableCell>
              <TableCell>{user.phone}</TableCell>
              <TableCell>{user.department}</TableCell>
              <TableCell>{user.designation}</TableCell>
              <TableCell>{user.ridesBooked}</TableCell>
              <TableCell>
                <ActionMenu>
                  <span>...</span>
                </ActionMenu>
              </TableCell>
            </TableRow>
          ))}
        </tbody>
      </Table>
    </Container>
  );
};

export default UsersPage;
