import React, { useEffect, useState } from "react";
import * as echarts from "echarts";

export const GraphicNumberPol: React.FC = () => {
  const [regionData, setRegionData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("http://localhost:3100/statistcs");
        const data = await response.json();
        setRegionData(data);
      } catch (error) {
        console.error("Erro ao buscar dados do backend:", error);
      }
    };

    fetchData();
  }, []);

  useEffect(() => {
    if (regionData.length === 0) return;

    const regionNames = regionData.map((region) => region.cidade);
    const regionAreas = regionData.map((region) => region.total);

    const colors = ["#0a3958", "#FFCC00", "#09977f82"];

    const option = {
      title: {
        text: "Total de Polígonos por cidade",
        left: "center",
      },
      tooltip: {
        trigger: "axis",
        axisPointer: {
          type: "shadow",
        },
      },
      xAxis: {
        type: "value",
        name: "Área (km²)",
        axisLabel: {
          formatter: "{value}",
        },
      },
      yAxis: {
        type: "category",
        name: "Região",
        data: regionNames,
      },
      series: [
        {
          data: regionAreas,
          type: "bar",
          itemStyle: {
            color: (params: any) => colors[params.dataIndex],
          },
        },
      ],
    };

    const myChart = echarts.init(document.getElementById("chart")!);

    myChart.setOption(option);

    return () => {
      myChart.dispose();
    };
  }, [regionData]);

  return <div id="chart" style={{ width: "600px", height: "400px" }} />;
};
