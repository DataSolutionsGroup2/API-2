import * as echarts from "echarts";
import { useEffect, useState } from "react";
import axios from "axios";
import { GraficEditorProps } from "../../../types";

const GraficEditor = () => {
  const [data, setData] = useState<GraficEditorProps[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        // Obtendo o token do localStorage
        const token = localStorage.getItem("token");

        // Adicionando o token no cabeçalho da requisição usando o Axios
        const response = await axios.get<GraficEditorProps[]>(
          "http://localhost:3001/estatisticas/getStatusEditorStatistics",
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
      const cities = ["Atibaia", "Cruzeiro", "Taubate"];
      const cityData: Record<string, GraficEditorProps[]> = {};
      cities.forEach((city) => {
        cityData[city] = data.filter((item) => item.cidade === city);
      });

      cities.forEach((city) => {
        const cityItems = cityData[city];

        const categories = cityItems.map(
          (item) => `${item.atribuicao ?? "Sem Atribuição"}`
        );
        const andamentoData = cityItems.map((item) => item.andamento);
        const finalizadoData = cityItems.map((item) => item.finalizado);
        const semAtribuicaoData = cityItems.map((item) => item.sem_atribuicao);

        const option: echarts.EChartsOption = {
          title: {
            text: `Status dos Analistas em ${city}`,
          },
          tooltip: {
            trigger: "axis",
            axisPointer: {
              type: "shadow",
            },
          },
          legend: {
            data: ["Andamento", "Finalizado", "Sem Atribuição"],
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
            {
              name: "Sem Atribuição",
              type: "bar",
              data: semAtribuicaoData,
              itemStyle: {
                color: "red",
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

export default GraficEditor;
