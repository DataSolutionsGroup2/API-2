import axios, { AxiosResponse } from "axios";
import React, { useEffect, useState } from "react";
import { PieChart, Pie, Tooltip, Cell } from "recharts";

interface DataItem {
  municipio: string;
  class: string;
  soma_areas: number;
}

interface ChartClass {
  name: string;
  value: number;
  color: string;
}

interface ChartData {
  cidade: string;
  classes: ChartClass[];
}

const ChartChange: React.FC = () => {
  const [chartData, setChartData] = useState<ChartData[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const token: string | null = localStorage.getItem("token");

        if (!token) {
          console.error("Token not available");
          return;
        }

        const response: AxiosResponse<DataItem[]> = await axios.get(
          "http://localhost:3001/estatisticas/getAlteracao",
          {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          }
        );

        const groupedData: Record<string, ChartData> = {};

        response.data.forEach((item: DataItem) => {
          const { municipio, class: className, soma_areas } = item;
          if (!(municipio in groupedData)) {
            groupedData[municipio] = {
              cidade: municipio,
              classes: [],
            };
          }
          const color: string = getClassColor(className);
          const existingClass: ChartClass | undefined = groupedData[
            municipio
          ].classes.find((c: ChartClass) => c.name === className);
          if (existingClass) {
            existingClass.value += soma_areas;
          } else {
            groupedData[municipio].classes.push({
              name: className,
              value: soma_areas,
              color: color,
            });
          }
        });

        const chartData: ChartData[] = Object.values(groupedData);

        setChartData(chartData);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  // Função para obter a cor com base no tipo de classe
  const getClassColor = (className: string): string => {
    switch (className) {
      case "Supressão de Vegetação":
        return "#28f028"; // Verde
      case "Nova Edificação":
        return "#808080"; // Cinza
      case "Solo Exposto":
        return "#c2ad9d"; // Marrom
      default:
        return "#724520dd"; // Cor padrão
    }
  };

  return (
    <div>
      {chartData.map((data: ChartData, index: number) => (
        <div
          key={index}
          style={{
            textAlign: "center",
            display: "inline-block ",
          }}
        >
          <h2 className="font-bold">{data.cidade}</h2>
          <PieChart width={400} height={400}>
            <Pie
              dataKey="value"
              data={data.classes}
              cx="50%"
              cy="50%"
              outerRadius={100}
              label
            >
              {data.classes.map((entry: ChartClass, idx: number) => (
                <React.Fragment key={`fragment-${idx}`}>
                  <Tooltip
                    formatter={(value: number) =>
                      `${(
                        (value /
                          data.classes.reduce(
                            (acc, cur) => acc + cur.value,
                            0
                          )) *
                        100
                      ).toFixed(2)}%`
                    }
                  />

                  <Cell key={`cell-${idx}`} fill={entry.color} />
                </React.Fragment>
              ))}
            </Pie>
            <Tooltip />
          </PieChart>
        </div>
      ))}
    </div>
  );
};

export default ChartChange;
