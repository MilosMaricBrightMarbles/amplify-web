import { ChartArea } from "chart.js";
import { useCallback } from "react";

export const useChartGradient = () => {
  const getGradient = useCallback(
    (ctx: CanvasRenderingContext2D, area: ChartArea) => {
      const gradient = ctx.createLinearGradient(
        area.left,
        area.bottom,
        area.right,
        area.top
      );

      gradient.addColorStop(0, "#09B2EF");
      gradient.addColorStop(1, "#0043C0");

      return gradient;
    },
    []
  );

  return getGradient;
};
