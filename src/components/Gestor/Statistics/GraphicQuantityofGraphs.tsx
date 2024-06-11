import React, { useEffect, useState } from "react";
import * as echarts from "echarts";
import axios from "axios";
import { GraphicNumberPolProps } from "../../../types";

export const GraphicNumberPol: React.FC = () => {
  const [regionData, setRegionData] = useState<GraphicNumberPolProps[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        // Obtendo o token do localStorage
        const token = localStorage.getItem("token");

        // Adicionando o token no cabeçalho da requisição usando o Axios
        const response = await axios.get<GraphicNumberPolProps[]>(
          "http://localhost:3001/estatisticas/numberPolCity",
          {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          }
        );

        setRegionData(response.data);
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

    const option: echarts.EChartsOption = {
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
        name: "Polígonos",
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
            color: (params: any) => colors[params.dataIndex % colors.length],
          },
        },
      ],
    };

    const chartDom = document.getElementById("chart");
    if (chartDom) {
      const myChart = echarts.init(chartDom);

      myChart.setOption(option);

      return () => {
        myChart.dispose();
      };
    }
  }, [regionData]);

  return <div id="chart" style={{ width: "720px", height: "400px" }} />;
};
