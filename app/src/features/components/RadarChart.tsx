'use client'
import React from 'react';
import {
  Chart as ChartJS,
  RadialLinearScale,
  PointElement,
  LineElement,
  Filler,
  Tooltip,
  Legend,
} from 'chart.js';
import { Radar } from 'react-chartjs-2';

ChartJS.register(
  RadialLinearScale,
  PointElement,
  LineElement,
  Filler,
  Tooltip,
  Legend
);

export type RadarChartProps = {
  label?: string;
  labels?: string[];
  radarData?: number[];
};

const RadarChart: React.FC<RadarChartProps> = ({
  label = 'test',
  labels = ['Thing 1', 'Thing 2', 'Thing 3', 'Thing 4', 'Thing 5', 'Thing 6'],
  radarData = [2, 2, 3, 4, 5, 5]
}: RadarChartProps): JSX.Element => {
  
  const data = {
    labels: labels,
    datasets: [
      {
        label: label,
        data: radarData,
        backgroundColor: 'rgba(54, 162, 235, 0.2)',
        borderColor: 'rgba(54, 162, 235, 1)',
        borderWidth: 2,
        pointBackgroundColor: 'rgba(54, 162, 235, 1)',
        pointBorderColor: '#fff',
        pointHoverBackgroundColor: '#fff',
        pointHoverBorderColor: 'rgba(54, 162, 235, 1)',
      },
    ],
  };

  const options = {
    scales: {
      r: {
        angleLines: {
          display: true,
        },
        min: 0,
        max: 5,
        ticks: {
          stepSize: 1
        }
      }
    },
    plugins: {
      legend: {
        position: 'top' as const
      }
    },
    maintainAspectRatio: false,
  };

  return (
    <div style={{ height: '400px', width: '100%' }}>
      <Radar className='radar' data={data} options={options} />
    </div>
  );
};

export default RadarChart;