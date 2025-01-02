import React, { useState } from "react";
import styled from "styled-components";

// Styled Components
const BookingsContainer = styled.div`
  padding: 0px;
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: #f9f9f9;

  @media (max-width: 768px) {
    padding: 10px;
  }
`;
const Header = styled.div`
  background-color: rgb(242, 242, 242);
  display: flex;
  padding: 6px 8px;
  margin-bottom: 0px;
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
  justify-content: center;
`;

const Title = styled.div`
  color: #333;
  display: flex;
  width:40%;
`;
const SearchBar = styled.input`
  padding:  10px 20px;
  width: 420px;
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




const FilterButton = styled.button`
  padding: 5px 10px;
  border: 1px solid #007bff;
  border-radius: 4px;
  background-color: ${(props) => (props.active ? "#007bff" : "#fff")};
  color: ${(props) => (props.active ? "#fff" : "#007bff")};
  cursor: pointer;
  transition: 0.3s;

  &:hover {
    background-color: ${(props) => (props.active ? "#0056b3" : "#e7f3ff")};
  }
`;

const TableContainer = styled.div`
  width: 100%;
  overflow-x: auto;
  background-color: #fff;
  border-radius: 8px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);

  @media (max-width: 768px) {
    padding: 10px;
  }
`;

const Table = styled.table`
  width: 100%;
  border-collapse: collapse;
  text-align: left;

  th,
  td {
    padding: 12px 10px;
    border-bottom: 1px solid #ddd;
    font-size:13px;

    @media (max-width: 768px) {
      padding: 8px 10px;
    }
  }

  th {
    background-color: #007bff;
    color: #fff;
    font-size:13px;
  }

  tr:hover {
    background-color: #f1f1f1;
  }
`;




const BookingsPage = () => {
  const [activeFilter, setActiveFilter] = useState("All");
  const [searchQuery, setSearchQuery] = useState("");
  // Sample Bookings Data
  const bookingsData = [
    {
      "id": 1,
      "driverName": "Driver_1",
      "driverId": "D001",
      "vehicle": "Car_1",
      "vehicleNumber": "OD-21-0606",
      "seaterType": "5-Seater",
      "employees": [
        {
          "empId": 90014287,
          "name": "Employee_T"
        },
        {
          "empId": 90014288,
          "name": "Employee_I"
        },
        {
          "empId": 90014289,
          "name": "Employee_V"
        },
        {
          "empId": 90014290,
          "name": "Employee_S"
        }
      ],
      "destinations": "JSL_Automobile",
      "startLocation": "JSL_Safety House",
      "pickupLocations": "JSL_SMS Pump House, JSL_Safety House, JSL_Sms lab office",
      "rideType": "Pooled",
      "status": "Current Pooled Rides"
    },
    {
      "id": 2,
      "driverName": "Driver_2",
      "driverId": "D002",
      "vehicle": "Car_2",
      "vehicleNumber": "OD-85-1730",
      "seaterType": "7-Seater",
      "employees": [
        {
          "empId": 90014287,
          "name": "Employee_F"
        },
        {
          "empId": 90014288,
          "name": "Employee_P"
        },
        {
          "empId": 90014289,
          "name": "Employee_E"
        }
      ],
      "destinations": "JSL_Store 1",
      "startLocation": "JSL_Safety House",
      "pickupLocations": "JSL_Store 1, JSL_SMS Pump House, JSL_HSM",
      "rideType": "Pooled",
      "status": "Current Pooled Rides"
    },
    {
      "id": 3,
      "driverName": "Driver_3",
      "driverId": "D003",
      "vehicle": "Car_3",
      "vehicleNumber": "OD-21-1930",
      "seaterType": "4-Seater",
      "employees": [
        {
          "empId": 90014287,
          "name": "Employee_M"
        },
        {
          "empId": 90014288,
          "name": "Employee_V"
        },
        {
          "empId": 90014289,
          "name": "Employee_L"
        }
      ],
      "destinations": "JSL_Quality House",
      "startLocation": "JSL_SMS Pump House",
      "pickupLocations": "JSL_SMS Pump House, JSL_Sms lab office, JSL_Quality House",
      "rideType": "Pooled",
      "status": "Current Pooled Rides"
    },
    {
      "id": 4,
      "driverName": "Driver_4",
      "driverId": "D004",
      "vehicle": "Car_4",
      "vehicleNumber": "OD-51-8006",
      "seaterType": "5-Seater",
      "employees": [
        {
          "empId": 90014287,
          "name": "Employee_K"
        },
        {
          "empId": 90014288,
          "name": "Employee_G"
        },
        {
          "empId": 90014289,
          "name": "Employee_S"
        },
        {
          "empId": 90014290,
          "name": "Employee_F"
        },
        {
          "empId": 90014291,
          "name": "Employee_C"
        }
      ],
      "destinations": "JSL_Automobile",
      "startLocation": "JSL_Automobile",
      "pickupLocations": "JSL_Store 1, JSL_SMS Pump House, JSL_Safety House",
      "rideType": "Pooled",
      "status": "Current Pooled Rides"
    },
    {
      "id": 5,
      "driverName": "Driver_5",
      "driverId": "D005",
      "vehicle": "Car_5",
      "vehicleNumber": "OD-21-9713",
      "seaterType": "7-Seater",
      "employees": [
        {
          "empId": 90014287,
          "name": "Employee_R"
        },
        {
          "empId": 90014288,
          "name": "Employee_B"
        },
        {
          "empId": 90014289,
          "name": "Employee_T"
        },
        {
          "empId": 90014290,
          "name": "Employee_X"
        },
        {
          "empId": 90014291,
          "name": "Employee_A"
        }
      ],
      "destinations": "JSL_Sms lab office",
      "startLocation": "JSL_Shakti Bhavan",
      "pickupLocations": "JSL_Quality House, JSL_Automobile, JSL_HSM",
      "rideType": "Pooled",
      "status": "Current Pooled Rides"
    },
    {
      "id": 6,
      "driverName": "Driver_6",
      "driverId": "D006",
      "vehicle": "Car_6",
      "vehicleNumber": "OD-39-9007",
      "seaterType": "5-Seater",
      "employees": [
        {
          "empId": 90014287,
          "name": "Employee_T"
        },
        {
          "empId": 90014288,
          "name": "Employee_I"
        }
      ],
      "destinations": "JSL_HSM",
      "startLocation": "JSL_Safety House",
      "pickupLocations": "JSL_Quality House, JSL_Store 1, JSL_Sms lab office",
      "rideType": "Pooled",
      "status": "Current Pooled Rides"
    },
    {
      "id": 7,
      "driverName": "Driver_7",
      "driverId": "D007",
      "vehicle": "Car_7",
      "vehicleNumber": "OD-87-0990",
      "seaterType": "7-Seater",
      "employees": [
        {
          "empId": 90014287,
          "name": "Employee_C"
        },
        {
          "empId": 90014288,
          "name": "Employee_W"
        },
        {
          "empId": 90014289,
          "name": "Employee_K"
        },
        {
          "empId": 90014290,
          "name": "Employee_S"
        }
      ],
      "destinations": "JSL_Sms lab office",
      "startLocation": "JSL_Automobile",
      "pickupLocations": "JSL_Sms lab office, JSL_Safety House, JSL_Shakti Bhavan",
      "rideType": "Pooled",
      "status": "Current Pooled Rides"
    },
    {
      "id": 8,
      "driverName": "Driver_8",
      "driverId": "D008",
      "vehicle": "Car_8",
      "vehicleNumber": "OD-27-5890",
      "seaterType": "7-Seater",
      "employees": [
        {
          "empId": 90014287,
          "name": "Employee_G"
        },
        {
          "empId": 90014288,
          "name": "Employee_Y"
        }
      ],
      "destinations": "JSL_HSM",
      "startLocation": "JSL_Automobile",
      "pickupLocations": "JSL_Safety House, JSL_Sms lab office, JSL_CRM",
      "rideType": "Pooled",
      "status": "Current Pooled Rides"
    },
    {
      "id": 9,
      "driverName": "Driver_9",
      "driverId": "D009",
      "vehicle": "Car_9",
      "vehicleNumber": "OD-69-1438",
      "seaterType": "5-Seater",
      "employees": [
        {
          "empId": 90014287,
          "name": "Employee_R"
        }
      ],
      "destinations": "JSL_Store 1",
      "startLocation": "JSL_Sms lab office",
      "pickupLocations": "None",
      "rideType": "Non-Pooled",
      "status": "Current Non-Pooled Rides"
    },
    {
      "id": 10,
      "driverName": "Driver_10",
      "driverId": "D010",
      "vehicle": "Car_10",
      "vehicleNumber": "OD-88-1261",
      "seaterType": "5-Seater",
      "employees": [
        {
          "empId": 90014287,
          "name": "Employee_F"
        }
      ],
      "destinations": "JSL_Quality House",
      "startLocation": "JSL_CRM",
      "pickupLocations": "None",
      "rideType": "Non-Pooled",
      "status": "Current Non-Pooled Rides"
    },
    {
      "id": 11,
      "driverName": "Driver_11",
      "driverId": "D011",
      "vehicle": "Car_11",
      "vehicleNumber": "OD-06-8599",
      "seaterType": "4-Seater",
      "employees": [
        {
          "empId": 90014287,
          "name": "Employee_Q"
        }
      ],
      "destinations": "JSL_Automobile",
      "startLocation": "JSL_CRM",
      "pickupLocations": "None",
      "rideType": "Non-Pooled",
      "status": "Current Non-Pooled Rides"
    },
    {
      "id": 12,
      "driverName": "Driver_12",
      "driverId": "D012",
      "vehicle": "Car_12",
      "vehicleNumber": "OD-78-5563",
      "seaterType": "7-Seater",
      "employees": [
        {
          "empId": 90014287,
          "name": "Employee_V"
        }
      ],
      "destinations": "JSL_SMS Pump House",
      "startLocation": "JSL_SMS Pump House",
      "pickupLocations": "None",
      "rideType": "Non-Pooled",
      "status": "Current Non-Pooled Rides"
    },
    {
      "id": 13,
      "driverName": "Driver_13",
      "driverId": "D013",
      "vehicle": "Car_13",
      "vehicleNumber": "OD-12-6150",
      "seaterType": "5-Seater",
      "employees": [
        {
          "empId": 90014287,
          "name": "Employee_S"
        }
      ],
      "destinations": "JSL_SMS Pump House",
      "startLocation": "JSL_Quality House",
      "pickupLocations": "None",
      "rideType": "Non-Pooled",
      "status": "Current Non-Pooled Rides"
    },
    {
      "id": 14,
      "driverName": "Driver_14",
      "driverId": "D014",
      "vehicle": "Car_14",
      "vehicleNumber": "OD-21-5788",
      "seaterType": "4-Seater",
      "employees": [
        {
          "empId": 90014287,
          "name": "Employee_D"
        }
      ],
      "destinations": "JSL_HSM",
      "startLocation": "JSL_Sms lab office",
      "pickupLocations": "None",
      "rideType": "Non-Pooled",
      "status": "Current Non-Pooled Rides"
    },
    {
      "id": 15,
      "driverName": "Driver_15",
      "driverId": "D015",
      "vehicle": "Car_15",
      "vehicleNumber": "OD-34-9172",
      "seaterType": "4-Seater",
      "employees": [
        {
          "empId": 90014287,
          "name": "Employee_W"
        }
      ],
      "destinations": "JSL_Automobile",
      "startLocation": "JSL_HSM",
      "pickupLocations": "None",
      "rideType": "Non-Pooled",
      "status": "Current Non-Pooled Rides"
    },
    {
      "id": 16,
      "driverName": "Driver_16",
      "driverId": "D016",
      "vehicle": "Car_16",
      "vehicleNumber": "OD-50-8491",
      "seaterType": "7-Seater",
      "employees": [
        {
          "empId": 90014287,
          "name": "Employee_K"
        }
      ],
      "destinations": "JSL_CRM",
      "startLocation": "JSL_Quality House",
      "pickupLocations": "None",
      "rideType": "Non-Pooled",
      "status": "Current Non-Pooled Rides"
    },
    {
      "id": 17,
      "driverName": "Driver_17",
      "driverId": "D017",
      "vehicle": "Car_17",
      "vehicleNumber": "OD-69-8507",
      "seaterType": "4-Seater",
      "employees": [
        {
          "empId": 90014287,
          "name": "Employee_L"
        }
      ],
      "destinations": "JSL_Shakti Bhavan",
      "startLocation": "JSL_Quality House",
      "pickupLocations": "None",
      "rideType": "Non-Pooled",
      "status": "Current Non-Pooled Rides"
    },
    {
      "id": 18,
      "driverName": "Driver_18",
      "driverId": "D018",
      "vehicle": "Car_18",
      "vehicleNumber": "OD-01-7108",
      "seaterType": "5-Seater",
      "employees": [
        {
          "empId": 90014287,
          "name": "Employee_K"
        }
      ],
      "destinations": "JSL_Safety House",
      "startLocation": "JSL_CRM",
      "pickupLocations": "None",
      "rideType": "Non-Pooled",
      "status": "Current Non-Pooled Rides"
    },
    {
      "id": 19,
      "driverName": "Driver_19",
      "driverId": "D019",
      "vehicle": "Car_19",
      "vehicleNumber": "OD-45-6274",
      "seaterType": "7-Seater",
      "employees": [
        {
          "empId": 90014287,
          "name": "Employee_E"
        }
      ],
      "destinations": "JSL_Automobile",
      "startLocation": "JSL_Quality House",
      "pickupLocations": "None",
      "rideType": "Scheduled",
      "status": "Scheduled Rides"
    },
    {
      "id": 20,
      "driverName": "Driver_20",
      "driverId": "D020",
      "vehicle": "Car_20",
      "vehicleNumber": "OD-99-4268",
      "seaterType": "4-Seater",
      "employees": [
        {
          "empId": 90014287,
          "name": "Employee_W"
        }
      ],
      "destinations": "JSL_CRM",
      "startLocation": "JSL_Store 1",
      "pickupLocations": "None",
      "rideType": "Scheduled",
      "status": "Scheduled Rides"
    },
    {
      "id": 21,
      "driverName": "Driver_21",
      "driverId": "D021",
      "vehicle": "Car_21",
      "vehicleNumber": "OD-54-4542",
      "seaterType": "5-Seater",
      "employees": [
        {
          "empId": 90014287,
          "name": "Employee_V"
        }
      ],
      "destinations": "JSL_CRM",
      "startLocation": "JSL_Store 1",
      "pickupLocations": "None",
      "rideType": "Scheduled",
      "status": "Scheduled Rides"
    },
    {
      "id": 22,
      "driverName": "Driver_22",
      "driverId": "D022",
      "vehicle": "Car_22",
      "vehicleNumber": "OD-92-6161",
      "seaterType": "5-Seater",
      "employees": [
        {
          "empId": 90014287,
          "name": "Employee_Z"
        }
      ],
      "destinations": "JSL_SMS Pump House",
      "startLocation": "JSL_Shakti Bhavan",
      "pickupLocations": "None",
      "rideType": "Scheduled",
      "status": "Scheduled Rides"
    },
    {
      "id": 23,
      "driverName": "Driver_23",
      "driverId": "D023",
      "vehicle": "Car_23",
      "vehicleNumber": "OD-49-5693",
      "seaterType": "4-Seater",
      "employees": [
        {
          "empId": 90014287,
          "name": "Employee_O"
        }
      ],
      "destinations": "JSL_Sms lab office",
      "startLocation": "JSL_Quality House",
      "pickupLocations": "None",
      "rideType": "Scheduled",
      "status": "Scheduled Rides"
    },
    {
      "id": 24,
      "driverName": "Driver_24",
      "driverId": "D024",
      "vehicle": "Car_24",
      "vehicleNumber": "OD-30-4280",
      "seaterType": "5-Seater",
      "employees": [
        {
          "empId": 90014287,
          "name": "Employee_Z"
        }
      ],
      "destinations": "JSL_CRM",
      "startLocation": "JSL_Automobile",
      "pickupLocations": "None",
      "rideType": "Scheduled",
      "status": "Scheduled Rides"
    },
    {
      "id": 25,
      "driverName": "Driver_25",
      "driverId": "D025",
      "vehicle": "Car_25",
      "vehicleNumber": "OD-80-3207",
      "seaterType": "4-Seater",
      "employees": [
        {
          "empId": 90014287,
          "name": "Employee_P"
        }
      ],
      "destinations": "JSL_SMS Pump House",
      "startLocation": "JSL_SMS Pump House",
      "pickupLocations": "None",
      "rideType": "Scheduled",
      "status": "Scheduled Rides"
    },
    {
      "id": 26,
      "driverName": "Driver_26",
      "driverId": "D026",
      "vehicle": "Car_26",
      "vehicleNumber": "OD-15-6273",
      "seaterType": "5-Seater",
      "employees": [
        {
          "empId": 90014287,
          "name": "Employee_Y"
        }
      ],
      "destinations": "JSL_HSM",
      "startLocation": "JSL_Shakti Bhavan",
      "pickupLocations": "None",
      "rideType": "Scheduled",
      "status": "Scheduled Rides"
    },
    {
      "id": 27,
      "driverName": "Driver_27",
      "driverId": "D027",
      "vehicle": "Car_27",
      "vehicleNumber": "OD-62-2392",
      "seaterType": "5-Seater",
      "employees": [
        {
          "empId": 90014287,
          "name": "Employee_X"
        }
      ],
      "destinations": "JSL_CRM",
      "startLocation": "JSL_SMS Pump House",
      "pickupLocations": "None",
      "rideType": "Scheduled",
      "status": "Scheduled Rides"
    },
    {
      "id": 28,
      "driverName": "Driver_28",
      "driverId": "D028",
      "vehicle": "Car_28",
      "vehicleNumber": "OD-22-1190",
      "seaterType": "4-Seater",
      "employees": [
        {
          "empId": 90014287,
          "name": "Employee_T"
        }
      ],
      "destinations": "JSL_SMS Pump House",
      "startLocation": "JSL_Shakti Bhavan",
      "pickupLocations": "None",
      "rideType": "Scheduled",
      "status": "Scheduled Rides"
    },
    {
      "id": 29,
      "driverName": "Driver_29",
      "driverId": "D029",
      "vehicle": "Car_29",
      "vehicleNumber": "OD-68-1831",
      "seaterType": "4-Seater",
      "employees": [
        {
          "empId": 90014287,
          "name": "Employee_H"
        }
      ],
      "destinations": "JSL_Sms lab office",
      "startLocation": "JSL_Sms lab office",
      "pickupLocations": "None",
      "rideType": "Completed",
      "status": "Completed Rides"
    },
    {
      "id": 30,
      "driverName": "Driver_30",
      "driverId": "D030",
      "vehicle": "Car_30",
      "vehicleNumber": "OD-51-6025",
      "seaterType": "5-Seater",
      "employees": [
        {
          "empId": 90014287,
          "name": "Employee_L"
        }
      ],
      "destinations": "JSL_HSM",
      "startLocation": "JSL_Store 1",
      "pickupLocations": "None",
      "rideType": "Completed",
      "status": "Completed Rides"
    },
    {
      "id": 31,
      "driverName": "Driver_31",
      "driverId": "D031",
      "vehicle": "Car_31",
      "vehicleNumber": "OD-38-0688",
      "seaterType": "7-Seater",
      "employees": [
        {
          "empId": 90014287,
          "name": "Employee_I"
        }
      ],
      "destinations": "JSL_Shakti Bhavan",
      "startLocation": "JSL_CRM",
      "pickupLocations": "None",
      "rideType": "Completed",
      "status": "Completed Rides"
    },
    {
      "id": 32,
      "driverName": "Driver_32",
      "driverId": "D032",
      "vehicle": "Car_32",
      "vehicleNumber": "OD-45-6363",
      "seaterType": "7-Seater",
      "employees": [
        {
          "empId": 90014287,
          "name": "Employee_N"
        }
      ],
      "destinations": "JSL_Quality House",
      "startLocation": "JSL_HSM",
      "pickupLocations": "None",
      "rideType": "Completed",
      "status": "Completed Rides"
    },
    {
      "id": 33,
      "driverName": "Driver_33",
      "driverId": "D033",
      "vehicle": "Car_33",
      "vehicleNumber": "OD-30-4673",
      "seaterType": "4-Seater",
      "employees": [
        {
          "empId": 90014287,
          "name": "Employee_G"
        }
      ],
      "destinations": "JSL_Safety House",
      "startLocation": "JSL_Sms lab office",
      "pickupLocations": "None",
      "rideType": "Completed",
      "status": "Completed Rides"
    },
    {
      "id": 34,
      "driverName": "Driver_34",
      "driverId": "D034",
      "vehicle": "Car_34",
      "vehicleNumber": "OD-11-2500",
      "seaterType": "5-Seater",
      "employees": [
        {
          "empId": 90014287,
          "name": "Employee_O"
        }
      ],
      "destinations": "JSL_SMS Pump House",
      "startLocation": "JSL_Sms lab office",
      "pickupLocations": "None",
      "rideType": "Completed",
      "status": "Completed Rides"
    },
    {
      "id": 35,
      "driverName": "Driver_35",
      "driverId": "D035",
      "vehicle": "Car_35",
      "vehicleNumber": "OD-73-2958",
      "seaterType": "5-Seater",
      "employees": [
        {
          "empId": 90014287,
          "name": "Employee_Y"
        }
      ],
      "destinations": "JSL_Automobile",
      "startLocation": "JSL_Sms lab office",
      "pickupLocations": "None",
      "rideType": "Completed",
      "status": "Completed Rides"
    },
    {
      "id": 36,
      "driverName": "Driver_36",
      "driverId": "D036",
      "vehicle": "Car_36",
      "vehicleNumber": "OD-61-3477",
      "seaterType": "4-Seater",
      "employees": [
        {
          "empId": 90014287,
          "name": "Employee_E"
        }
      ],
      "destinations": "JSL_SMS Pump House",
      "startLocation": "JSL_Shakti Bhavan",
      "pickupLocations": "None",
      "rideType": "Completed",
      "status": "Completed Rides"
    },
    {
      "id": 37,
      "driverName": "Driver_37",
      "driverId": "D037",
      "vehicle": "Car_37",
      "vehicleNumber": "OD-20-2308",
      "seaterType": "7-Seater",
      "employees": [
        {
          "empId": 90014287,
          "name": "Employee_Y"
        }
      ],
      "destinations": "JSL_Shakti Bhavan",
      "startLocation": "JSL_Quality House",
      "pickupLocations": "None",
      "rideType": "Completed",
      "status": "Completed Rides"
    },
    {
      "id": 38,
      "driverName": "Driver_38",
      "driverId": "D038",
      "vehicle": "Car_38",
      "vehicleNumber": "OD-33-4712",
      "seaterType": "4-Seater",
      "employees": [
        {
          "empId": 90014287,
          "name": "Employee_U"
        }
      ],
      "destinations": "JSL_CRM",
      "startLocation": "JSL_Automobile",
      "pickupLocations": "None",
      "rideType": "Completed",
      "status": "Completed Rides"
    },
    {
      "id": 39,
      "driverName": "Driver_39",
      "driverId": "D039",
      "vehicle": "Car_39",
      "vehicleNumber": "OD-90-9836",
      "seaterType": "4-Seater",
      "employees": [
        {
          "empId": 90014287,
          "name": "Employee_J"
        }
      ],
      "destinations": "JSL_Shakti Bhavan",
      "startLocation": "JSL_SMS Pump House",
      "pickupLocations": "None",
      "rideType": "Completed",
      "status": "Completed Rides"
    },
    {
      "id": 40,
      "driverName": "Driver_40",
      "driverId": "D040",
      "vehicle": "Car_40",
      "vehicleNumber": "OD-66-5235",
      "seaterType": "5-Seater",
      "employees": [
        {
          "empId": 90014287,
          "name": "Employee_L"
        }
      ],
      "destinations": "JSL_Automobile",
      "startLocation": "JSL_Sms lab office",
      "pickupLocations": "None",
      "rideType": "Completed",
      "status": "Completed Rides"
    },
    {
      "id": 41,
      "driverName": "Driver_41",
      "driverId": "D041",
      "vehicle": "Car_41",
      "vehicleNumber": "OD-75-9675",
      "seaterType": "4-Seater",
      "employees": [
        {
          "empId": 90014287,
          "name": "Employee_N"
        }
      ],
      "destinations": "JSL_Safety House",
      "startLocation": "JSL_Store 1",
      "pickupLocations": "None",
      "rideType": "Completed",
      "status": "Completed Rides"
    },
    {
      "id": 42,
      "driverName": "Driver_42",
      "driverId": "D042",
      "vehicle": "Car_42",
      "vehicleNumber": "OD-59-8405",
      "seaterType": "5-Seater",
      "employees": [
        {
          "empId": 90014287,
          "name": "Employee_W"
        }
      ],
      "destinations": "JSL_Automobile",
      "startLocation": "JSL_Shakti Bhavan",
      "pickupLocations": "None",
      "rideType": "Completed",
      "status": "Completed Rides"
    },
    {
      "id": 43,
      "driverName": "Driver_43",
      "driverId": "D043",
      "vehicle": "Car_43",
      "vehicleNumber": "OD-28-9262",
      "seaterType": "4-Seater",
      "employees": [
        {
          "empId": 90014287,
          "name": "Employee_V"
        }
      ],
      "destinations": "JSL_Automobile",
      "startLocation": "JSL_Shakti Bhavan",
      "pickupLocations": "None",
      "rideType": "Completed",
      "status": "Completed Rides"
    },
    {
      "id": 44,
      "driverName": "Driver_44",
      "driverId": "D044",
      "vehicle": "Car_44",
      "vehicleNumber": "OD-47-4479",
      "seaterType": "4-Seater",
      "employees": [
        {
          "empId": 90014287,
          "name": "Employee_J"
        }
      ],
      "destinations": "JSL_HSM",
      "startLocation": "JSL_Safety House",
      "pickupLocations": "None",
      "rideType": "Completed",
      "status": "Completed Rides"
    },
    {
      "id": 45,
      "driverName": "Driver_45",
      "driverId": "D045",
      "vehicle": "Car_45",
      "vehicleNumber": "OD-56-5271",
      "seaterType": "7-Seater",
      "employees": [
        {
          "empId": 90014287,
          "name": "Employee_Q"
        }
      ],
      "destinations": "JSL_Shakti Bhavan",
      "startLocation": "JSL_CRM",
      "pickupLocations": "None",
      "rideType": "Completed",
      "status": "Completed Rides"
    },
    {
      "id": 46,
      "driverName": "Driver_46",
      "driverId": "D046",
      "vehicle": "Car_46",
      "vehicleNumber": "OD-65-0952",
      "seaterType": "7-Seater",
      "employees": [
        {
          "empId": 90014287,
          "name": "Employee_B"
        }
      ],
      "destinations": "JSL_Sms lab office",
      "startLocation": "JSL_Store 1",
      "pickupLocations": "None",
      "rideType": "Completed",
      "status": "Completed Rides"
    },
    {
      "id": 47,
      "driverName": "Driver_47",
      "driverId": "D047",
      "vehicle": "Car_47",
      "vehicleNumber": "OD-60-9726",
      "seaterType": "7-Seater",
      "employees": [
        {
          "empId": 90014287,
          "name": "Employee_Y"
        }
      ],
      "destinations": "JSL_Sms lab office",
      "startLocation": "JSL_CRM",
      "pickupLocations": "None",
      "rideType": "Completed",
      "status": "Completed Rides"
    },
    {
      "id": 48,
      "driverName": "Driver_48",
      "driverId": "D048",
      "vehicle": "Car_48",
      "vehicleNumber": "OD-55-9598",
      "seaterType": "4-Seater",
      "employees": [
        {
          "empId": 90014287,
          "name": "Employee_Y"
        }
      ],
      "destinations": "JSL_HSM",
      "startLocation": "JSL_HSM",
      "pickupLocations": "None",
      "rideType": "Completed",
      "status": "Completed Rides"
    }
  ];

  // Filter bookings based on active filter and search query
  const filteredBookings = bookingsData.filter((booking) => {
    const matchesFilter =
      activeFilter === "All" ||
      (activeFilter === "Current Pooled Rides" && booking.status === "Current Pooled Rides" && booking.rideType === "Pooled") ||
      (activeFilter === "Current Non-Pooled Rides" && booking.status === "Current Non-Pooled Rides" && booking.rideType === "Non-Pooled") ||
      (activeFilter === "Scheduled Rides" && booking.status === "Scheduled Rides") ||
      (activeFilter === "Completed Bookings" && booking.status === "Completed Rides");
  
    const lowerCaseQuery = searchQuery.toLowerCase();
  
    const matchesSearch =
      booking.driverName.toLowerCase().includes(lowerCaseQuery) || // Match driver name
      booking.vehicleNumber.toLowerCase().includes(lowerCaseQuery) || // Match vehicle number
      booking.employees.some((emp) =>
        emp.name.toLowerCase().includes(lowerCaseQuery) // Match employee name
      );
  
    return matchesFilter && matchesSearch;
  });
  return (
    <BookingsContainer>
      <Header>
        <Manage>
          <Title>Manage Bookings</Title>
          <SearchBar
           type="text"
           placeholder="Search by Emp_Name, Vehicle_No.,Driver Name..."
           value={searchQuery}
           onChange={(e) => setSearchQuery(e.target.value)}
          />
        </Manage>
      </Header>
      {/* Filters */}
      <ToggleContainer>
        <ToggleBox>
        <FilterButton active={activeFilter === "All"} onClick={() => setActiveFilter("All")}>
          All Rides
        </FilterButton>
        <FilterButton active={activeFilter === "Current Pooled Rides"} onClick={() => setActiveFilter("Current Pooled Rides")}>
          Current Pooled Rides
        </FilterButton>
        <FilterButton active={activeFilter === "Current Non-Pooled Rides"} onClick={() => setActiveFilter("Current Non-Pooled Rides")}>
          Current Non-Pooled Rides
        </FilterButton>
        <FilterButton active={activeFilter === "Scheduled Rides"} onClick={() => setActiveFilter("Scheduled Rides")}>
          Scheduled Rides
        </FilterButton>
        <FilterButton active={activeFilter === "Completed Bookings"} onClick={() => setActiveFilter("Completed Bookings")}>
          Completed Bookings
        </FilterButton>
        </ToggleBox>
      </ToggleContainer>

      {/* Table */}
      <TableContainer>
        <Table>
          <thead>
            <tr>
              <th>Sl.no</th>
              <th>Driver Name</th>
              <th>Driver ID</th>
              <th>Vehicle</th>
              <th>Vehicle Number</th>
              <th>Seater Type</th>
              <th>Ride Type</th>
              <th>Employees</th>
              <th>Destinations</th>
              <th>Start Location</th>
              <th>Pickup Locations</th>
            </tr>
          </thead>
          <tbody>
            {filteredBookings.length > 0 ? (
              filteredBookings.map((booking) => (
                <tr key={booking.id}>
                  <td>{booking.id}</td>
                  <td>{booking.driverName}</td>
                  <td>{booking.driverId}</td>
                  <td>{booking.vehicle}</td>
                  <td>{booking.vehicleNumber}</td>
                  <td>{booking.seaterType}</td>
                  <td>{booking.rideType}</td>
                  <td>
                    {booking.employees.map((emp) => (
                      <div key={emp.empId}>
                        {emp.name} ({emp.empId})
                      </div>
                    ))}
                  </td>
                  <td>{booking.destinations}</td>
                  <td>{booking.startLocation}</td>
                  <td>{booking.pickupLocations}</td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan="11">No bookings found</td>
              </tr>
            )}
          </tbody>
        </Table>
      </TableContainer>
    </BookingsContainer>
  );
};

export default BookingsPage;
