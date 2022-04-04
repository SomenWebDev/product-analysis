import React from "react";

import { Col, Container, Row } from "react-bootstrap";
import {
  Bar,
  BarChart,
  CartesianGrid,
  Legend,
  Line,
  LineChart,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";

const DashBoard = () => {
  const data = [
    {
      month: "Mar",
      investment: 100000,
      sell: 241,
      revenue: 10401,
    },
    {
      month: "Apr",
      investment: 200000,
      sell: 423,
      revenue: 24500,
    },
    {
      month: "May",
      investment: 500000,
      sell: 726,
      revenue: 67010,
    },
    {
      month: "Jun",
      investment: 500000,
      sell: 529,
      revenue: 40405,
    },
    {
      month: "Jul",
      investment: 600000,
      sell: 601,
      revenue: 50900,
    },
    {
      month: "Aug",
      investment: 700000,
      sell: 670,
      revenue: 61000,
    },
  ];
  return (
    <div className="mt-5">
      <Container>
        <Row>
          <Col xs={12} md={6}>
            <h3 className="text-center mb-3">Month Wise Sell</h3>
            <LineChart width={400} height={400} data={data}>
              <Line type="monotone" dataKey={"sell"} stroke="#8884d8" />
              <XAxis dataKey={"month"}></XAxis>
              <Tooltip></Tooltip>
              <YAxis dataKey={"sell"}></YAxis>

              <Legend></Legend>
            </LineChart>
          </Col>
          <Col xs={12} md={6}>
            <h3 className="text-center mb-3">Investment Vs Revenue.</h3>
            <BarChart width={550} height={400} data={data}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey={"month"}></XAxis>
              <Tooltip></Tooltip>
              <YAxis dataKey={"revenue"}></YAxis>
              <Bar dataKey={"month"} fill="#8884d8" />
              <Bar dataKey={"revenue"} fill="#8884d8" />

              <Legend></Legend>
            </BarChart>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default DashBoard;
