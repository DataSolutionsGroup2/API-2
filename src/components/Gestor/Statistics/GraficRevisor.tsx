import * as echarts from "echarts";
import { useEffect, useState } from "react";
import axios from "axios";
import { GraficRevisorProps } from "../../../types";

const GraficRevisor = () => {
  const [data, setData] = useState<GraficRevisorProps[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        // Obtendo o token do localStorage
        const token = localStorage.getItem("token");

        // Adicionando o token no cabeçalho da requisição usando o Axios
        const response = await axios.get<GraficRevisorProps[]>(
          "http://localhost:3001/estatisticas/getStatusRevisorStatistics",
          {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          }
        );

        setData(response.data);
      } catch (error) {
        console.error("Erro ao obter os dados:", error);
      }
    };

    fetchData();
  }, []);

  useEffect(() => {
    if (data.length > 0) {
      const cities = ["Cruzeiro", "Atibaia", "Taubate"];
      const cityData: Record<string, GraficRevisorProps[]> = {};
      cities.forEach((city) => {
        cityData[city] = data.filter((item) => item.cidade === city);
      });

      cities.forEach((city) => {
        const cityItems = cityData[city];

        const categories = cityItems.map(
          (item) => `${item.analista ?? "Sem Analista"}`
        );
        const andamentoData = cityItems.map((item) => item.andamento);
        const finalizadoData = cityItems.map((item) => item.finalizado);

        const option: echarts.EChartsOption = {
          title: {
            text: `Status dos Analistas em ${city} `,
          },
          tooltip: {
            trigger: "axis",
            axisPointer: {
              type: "shadow",
            },
          },
          legend: {
            data: ["Andamento", "Finalizado"],
          },
          xAxis: {
            type: "category",
            data: categories,
            axisLabel: {
              interval: 0,
              rotate: 0,
            },
          },
          yAxis: {
            type: "value",
          },
          series: [
            {
              name: "Andamento",
              type: "bar",
              data: andamentoData,
              itemStyle: {
                color: "blue",
              },
            },
            {
              name: "Finalizado",
              type: "bar",
              data: finalizadoData,
              itemStyle: {
                color: "green",
              },
            },
          ],
        };

        const chartDom = document.getElementById(`main-${city}`);
        if (chartDom) {
          const myChart = echarts.init(chartDom);
          myChart.setOption(option);
        }
      });
    }
  }, [data]);

  return (
    <div className="flex flex-col mt-10 ml-[50px] h-auto p-4 mb-4">
      <div id="main-Atibaia" style={{ width: "1000px", height: "400px" }}></div>
      <div
        id="main-Cruzeiro"
        style={{ width: "1000px", height: "400px" }}
      ></div>
      <div id="main-Taubate" style={{ width: "1000px", height: "400px" }}></div>
    </div>
  );
};

export default GraficRevisor;
