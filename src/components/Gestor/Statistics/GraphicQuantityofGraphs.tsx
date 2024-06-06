import React, { useEffect, useState } from "react";
import * as echarts from "echarts";
import { GraphicQuantityofGraphsProps } from "../../../types";

const GraphicQuantityofGraphs: React.FC = () => {
  const [graphData, setGraphData] = useState<GraphicQuantityofGraphsProps[]>(
    []
  );

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("http://localhost:3100/quantitygraphs");
        const data: GraphicQuantityofGraphsProps[] = await response.json(); // Tipagem do resultado
        setGraphData(data);
      } catch (error) {
        console.error("Erro ao buscar dados do backend:", error);
      }
    };

    fetchData();
  }, []);

  useEffect(() => {
    if (graphData.length === 0) return;

    const categories = graphData.map((item) => item.cidade);
    const quantities = graphData.map((item) => item.quantidade);

    const option: echarts.EChartsOption = {
      title: {
        text: "Quantidade de Gráficos por cidade",
        left: "center",
      },
      tooltip: {
        trigger: "axis",
        axisPointer: {
          type: "shadow",
        },
      },
      xAxis: {
        type: "category",
        data: categories,
      },
      yAxis: {
        type: "value",
      },
      series: [
        {
          data: quantities,
          type: "bar",
          itemStyle: {
            color: "#0a3958",
          },
        },
      ],
    };

    const myChart = echarts.init(document.getElementById("chart")!);

    myChart.setOption(option);

    return () => {
      myChart.dispose();
    };
  }, [graphData]);

  return <div id="chart" style={{ width: "720px", height: "400px" }} />;
};

export default GraphicQuantityofGraphs;
