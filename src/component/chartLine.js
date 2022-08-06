import { Container, Table } from "react-bootstrap"
import { Line } from "react-chartjs-2";
import { Chart as ChartJS } from "chart.js/auto";
import { API } from '../config/api';
import React, { useState, useEffect } from "react";

export default function ChartLine() {
    const [chart, setChart] = useState([]);

    const getData = async () => {
        try {
          const response = await API.get("/friends");
          if (response.data.status === "success") {
            setChart(response.data.data);
          }
        } catch (error) {
          console.log(error);
        }
    };

    let femaleUnder19 = [];
    let maleUnder19 = [];
    let femaleOver19 = [];
    let maleOver19 = [];

    chart.map((item) => {
        if (item.gender === "Female" && item.age <= 19) {
            femaleUnder19.push(femaleUnder19.length + 1);
        }
        if (item.gender === "Male" && item.age <= 19) {
            maleUnder19.push(maleUnder19.length + 1);
        }
        if (item.gender === "Female" && item.age > 19) {
            femaleOver19.push(femaleOver19.length + 1);
        }
        if (item.gender === "Male" && item.age > 19) {
            maleOver19.push(maleOver19.length + 1);
        }
    });

    const data = {
        labels: [
            "Female under 19 y.o.",
            "Male under 19 y.o.",
            "Female over 19 y.o.",
            "Male over 19 y.o.",
        ],
        datasets: [
          {
            label: "Friend Data by Gender and Age",
            data: [
                femaleUnder19.length,
                maleUnder19.length,
                femaleOver19.length,
                maleOver19.length,
            ],
            borderColor: "black",
            borderWidth: 2,
          },
        ],
    };

    useEffect(() => {
        getData();
    }, []);

    return(
        <Container className="base">
            <h1 className='py-3'>Chart Data</h1>
            <div className="chart">
                <Line data={data} />
            </div>
        </Container>
    )
}