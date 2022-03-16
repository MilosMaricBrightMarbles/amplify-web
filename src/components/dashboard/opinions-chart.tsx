import {
  CategoryScale,
  Chart as ChartJS,
  ChartData,
  LinearScale,
  LineController,
  LineElement,
  PointElement,
  Title,
  Tooltip,
} from "chart.js";
import { useAtomValue } from "jotai";
import React, { useEffect, useRef, useState } from "react";
import { Chart } from "react-chartjs-2";
import { ChartJSOrUndefined } from "react-chartjs-2/dist/types";

import { useChartGradient } from "../../hooks/use-chart-gradient";
import { useOpinions } from "../../hooks/use-opinions";
import { activeCategoryIndexAtom } from "../../util/atoms";

ChartJS.register(
  CategoryScale,
  LinearScale,
  LineController,
  LineElement,
  PointElement,
  LineElement,
  Title,
  Tooltip
);
ChartJS.register({
  id: "tooltipLine",
  beforeDraw: (chart) => {
    const activeElements = chart.tooltip?.getActiveElements();
    if (activeElements?.length) {
      const { ctx } = chart;
      const { x } = activeElements[0].element;

      ctx.save();
      ctx.beginPath();
      ctx.moveTo(x, chart.chartArea.top);
      ctx.lineTo(x, chart.chartArea.bottom);
      ctx.lineWidth = 1;
      ctx.strokeStyle = "#9CA3AF";
      ctx.stroke();
      ctx.restore();
    }
  },
});
export const OpinionsChart = () => {
  const getGradient = useChartGradient();
  const blueLineIndex = useAtomValue(activeCategoryIndexAtom);
  const { max, labels, datasets, datasetNames } = useOpinions();

  const chartRef = useRef<ChartJSOrUndefined>(null);
  const [chartData, setChartData] = useState<ChartData<"bar">>({
    datasets: [],
  });

  useEffect(() => {
    const chart = chartRef.current;

    if (!chart) return;

    const newData: ChartData<"bar"> = {
      labels,
      datasets: datasets.map((d, i) => ({
        data: d,
        label: datasetNames[i],
        borderColor:
          blueLineIndex === i
            ? getGradient(chart.ctx, chart.chartArea)
            : "#9CA3AF",
      })),
    };

    setChartData(newData);
  }, [blueLineIndex, datasetNames, datasets, getGradient, labels]);

  return (
    <div className="flex flex-col p-6 space-y-8 bg-white rounded-xl shadow-lg">
      <div className="text-xs text-gray-700 sm:text-sm">
        Number of opinions per day (absolute values)
      </div>
      <div>
        <Chart
          ref={chartRef}
          type="line"
          data={chartData}
          options={{
            hover: { intersect: false },
            interaction: {
              mode: "point",
            },
            elements: {
              point: {
                radius: 0,
                hitRadius: 30,
                hoverRadius: 6,
                borderWidth: 5,
                hoverBorderWidth: 4,
                hoverBackgroundColor: "white",
                backgroundColor: "transparent",
              },
              line: { tension: 0.25, borderWidth: 5 },
            },
            plugins: {
              tooltip: {
                position: "nearest",
                padding: 8,
                boxWidth: 0,
                boxHeight: 0,
                titleSpacing: 0,
                yAlign: "bottom",
                bodyAlign: "center",
                titleMarginBottom: 0,
                backgroundColor: "#09B2EF",
                bodyFont: { weight: "400", size: 16 },
                titleFont: { size: 0, lineHeight: 0 },
                filter: (item) => item.datasetIndex === blueLineIndex,
                callbacks: {
                  label: (item): string =>
                    chartData.datasets[item.datasetIndex].data[
                      item.dataIndex
                    ].toString(),
                },
              },
            },
            scales: {
              yAxis: { min: 0, max },
              x: { grid: { display: false } },
            },
          }}
        />
      </div>
    </div>
  );
};
