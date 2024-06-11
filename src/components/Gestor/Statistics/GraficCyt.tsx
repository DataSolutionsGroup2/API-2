import * as echarts from "echarts";
import { useEffect, useRef, useState } from "react";
import axios from "axios";
import { StatisticCityProps } from "../../../types";

const City = () => {
  const [statistics, setStatistics] = useState<StatisticCityProps[]>([]);
  const chartRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        // Obtendo o token do localStorage
        const token = localStorage.getItem("token");

        if (!token) {
          console.error("Token não encontrado no localStorage.");
          return;
        }

        // Adicionando o token no cabeçalho da requisição usando o Axios
        const response = await axios.get<StatisticCityProps[]>(
          "http://localhost:3001/estatisticas/getAreaStatistics",
          {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          }
        );

        setStatistics(response.data);
      } catch (error) {
        console.error("Erro ao buscar estatísticas de área:", error);
      }
    };

    fetchData();
  }, []);

  useEffect(() => {
    if (!statistics.length || !chartRef.current) return;

    const myChart = echarts.init(chartRef.current);

    const option: echarts.EChartsOption = {
      tooltip: {
        trigger: "item",
      },
      legend: {
        top: "5%",
        left: "center",
      },
      series: [
        {
          name: "Área",
          type: "pie",
          radius: ["40%", "70%"],
          avoidLabelOverlap: false,
          itemStyle: {
            borderRadius: 10,
          },
          label: {
            show: false,
            position: "center",
          },
          emphasis: {
            label: {
              show: true,
              fontSize: 40,
              fontWeight: "bold",
            },
          },
          labelLine: {
            show: false,
          },
          data: statistics.map((item) => ({
            value: item.area_km2,
            name: item.cidade,
            itemStyle: {
              color:
                item.cidade === "Atibaia"
                  ? "#FFCC00"
                  : item.cidade === "Taubate"
                  ? "#09977f82"
                  : "#0a3958",
            },
          })),
        },
      ],
    };

    myChart.setOption(option);

    return () => {
      myChart.dispose();
    };
  }, [statistics]);

  return (
    <div>
      <h1 className="font-bold text-center">Área Total</h1>
      <div ref={chartRef} style={{ width: "500px", height: "400px" }} />
    </div>
  );
};

export default City;
