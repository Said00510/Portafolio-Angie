import * as echarts from 'echarts';
import React, { useEffect, useRef } from 'react';

const MyChart = () => {
  const chartContainerRef = useRef(null);

  useEffect(() => {
    const dom = chartContainerRef.current;
    const myChart = echarts.init(dom, 'light', {
      renderer: 'canvas',
      useDirtyRect: false,
    });

    const option = {
      dataset: [
        {
          dimensions: ['name', '', '', 'score', ''],
          source: [
            ['Visión', , '', 80, ''],
            ['Liderazgo', , '', 100, ''],
            ['Trabajo en Equipo', , '', 100, ''],
            ['Comunicación', , '', 90, ''],
            ['Analítica', 25, '', 85, ''],
            ['Adaptabilidad', , '', 90, ''],
            ['Resolver Problemas', , '', 95, ''],
          ],
        },
        {
          transform: {
            type: 'sort',
            config: { dimension: 'score', order: 'desc' },
          },
        },
      ],
      xAxis: {
        type: 'category',
        axisLabel: {
          interval: 0,
          rotate: 30,
        },
      },
      yAxis: {},
      series: {
        type: 'bar',
        encode: { x: 'name', y: 'score' },
        datasetIndex: 1,
        itemStyle: {
          color: '#000',
        },
      },
    };

    if (option && typeof option === 'object') {
      myChart.setOption(option);
    }

    window.addEventListener('resize', myChart.resize);

    // Limpia el gráfico cuando el componente se desmonta
    return () => {
      myChart.dispose();
    };
  }, []);

  return <div ref={chartContainerRef} style={{ width: '100%', height: '400px' }} />;
};

export default MyChart;
