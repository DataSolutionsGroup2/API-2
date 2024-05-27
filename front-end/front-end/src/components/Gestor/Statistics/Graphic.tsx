import React, { useEffect } from "react";
import * as echarts from "echarts";
import { MockedRegion } from "../../../utils/mockedData/regionMocked";

export const Graphic: React.FC = () => {
  useEffect(() => {
    const mockedData = MockedRegion;

    const regionNames = mockedData.regiao.map((region) => region.name);
    const regionAreas = mockedData.regiao.map((region) =>
      region.data.reduce((acc, curr) => acc + curr.area_km2, 0)
    );

    const option = {
      title: {
        text: "Áreas Finalizadas por Regiões",
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
        },
      ],
    };

    const myChart = echarts.init(document.getElementById("chart")!);

    myChart.setOption(option);

    return () => {
      myChart.dispose();
    };
  }, []);

  return <div id="chart" style={{ width: "750px", height: "400px" }} />;
};
