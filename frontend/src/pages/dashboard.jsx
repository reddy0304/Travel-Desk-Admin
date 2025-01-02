import React from "react";
import styled from "styled-components";
import { LineChart, Line, XAxis, YAxis, Tooltip, CartesianGrid, ResponsiveContainer, Legend } from "recharts";


const DashboardContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  padding:  20px 2px;
  background-color:rgb(249, 247, 243); /* Light orange background */
  min-height: 100vh;
  overflow-y:hidden;
`;
const DetailsContainer = styled.div`
  flex: 1;
  max-width: 40%;
  background-color: #ffdab9;
  border-radius: 8px;
  padding: 20px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  margin-right:10px;
  margin-left:2px;

  h2 {
    margin-bottom: 20px;
    color: #333;
    font-size: 1.5rem;
  }
`;

const DetailItem = styled.div`
  margin-bottom: 15px;
  color: #333;
  font-size: 1rem;

  strong {
    color: #d35400;
  }

  ul {
    margin: 5px 0 0 20px;
    list-style: disc;
  }

  li {
    margin-bottom: 5px;
  }
`;

const GraphContainer = styled.div`
  flex: 2;
  max-width: 55%;
  background-color: #fff;
  border-radius: 8px;
  padding: 20px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);

  h2 {
    margin-bottom: 20px;
    text-align: center;
    color: #333;
    font-size: 1.5rem;
  }
`;

const graphData = [
  { time: "10 AM", pooled: 10, nonPooled: 5 },
  { time: "11 AM", pooled: 15, nonPooled: 10 },
  { time: "12 PM", pooled: 30, nonPooled: 20 },
  { time: "1 PM", pooled: 20, nonPooled: 15 },
  { time: "2 PM", pooled: 40, nonPooled: 30 },
  { time: "3 PM", pooled: 35, nonPooled: 25 },
];

// Dashboard Component
const Dashboard = () => {
  return (
    <DashboardContainer>
      <DetailsContainer>
        <h2>Dashboard Details</h2>
        <DetailItem>
          <strong>No. of Available Cars:</strong> 12
        </DetailItem>
        <DetailItem>
          <strong>Current Rides:</strong>
          <ul>
            <li>Total: 25</li>
            <li>Pooled Rides: 15</li>
            <li>Individual Rides: 10</li>
          </ul>
        </DetailItem>
        <DetailItem>
          <strong>Upcoming Scheduled Rides:</strong> 8
        </DetailItem>
        <DetailItem>
          <strong>Driver Status:</strong>
          <ul>
            <li>Active Drivers: 20</li>
            <li>Idle Drivers: 5</li>
          </ul>
        </DetailItem>
        <DetailItem>
          <strong>Vehicle Utilization Rate:</strong> 77%
        </DetailItem>
        <DetailItem>
          <strong>Pending Actions:</strong> 6
        </DetailItem>
      </DetailsContainer>

      <GraphContainer>
        <h2>Pooled and Non-Pooled Rides</h2>
        <ResponsiveContainer width="100%" height={300}>
          <LineChart data={graphData}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="time" />
            <YAxis />
            <Tooltip />
            <Legend />
            <Line type="monotone" dataKey="pooled" stroke="#ff6b6b" strokeWidth={2} />
            <Line type="monotone" dataKey="nonPooled" stroke="#ffa600" strokeWidth={2} />
          </LineChart>
        </ResponsiveContainer>
      </GraphContainer>
    </DashboardContainer>
  );
};

export default Dashboard;


