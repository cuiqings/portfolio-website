import React, { useEffect, useRef, useState } from 'react';
import { useTranslation } from 'react-i18next';
import type { EChartsOption } from 'echarts';
import { Skill } from '../../data/skills';

// Dynamic import for Echarts to optimize performance (Requirement 10.6)
let echarts: any = null;

/**
 * SkillChart Component
 * Renders skills using Echarts radar or bar chart
 * Requirements: 3.1, 3.2, 3.4, 3.5, 14.1, 14.3, 14.4
 */
interface SkillChartProps {
  skills: Skill[];
  type?: 'radar' | 'bar';
  className?: string;
}

const SkillChart: React.FC<SkillChartProps> = ({
  skills,
  type = 'radar',
  className = '',
}) => {
  const { i18n } = useTranslation();
  const chartRef = useRef<HTMLDivElement>(null);
  const chartInstanceRef = useRef<any>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  // Load Echarts dynamically
  useEffect(() => {
    const loadEcharts = async () => {
      try {
        if (!echarts) {
          const echartsModule = await import('echarts');
          echarts = echartsModule;
        }
        setIsLoading(false);
      } catch (err) {
        console.error('Failed to load Echarts:', err);
        setError('Failed to load chart library');
        setIsLoading(false);
      }
    };

    loadEcharts();
  }, []);

  // Initialize and update chart
  useEffect(() => {
    if (!chartRef.current || !echarts || isLoading || error) return;

    // Initialize chart instance
    if (!chartInstanceRef.current) {
      chartInstanceRef.current = echarts.init(chartRef.current);
    }

    const chart = chartInstanceRef.current;

    // Get current language
    const currentLang = i18n.language as 'zh' | 'en';

    // Prepare chart options based on type
    let option: EChartsOption;

    if (type === 'radar') {
      // Radar chart configuration (Requirement 3.1, 14.1)
      const indicators = skills.map((skill) => ({
        name: skill.nameTranslations[currentLang],
        max: 5,
      }));

      const values = skills.map((skill) => skill.proficiency);

      option = {
        tooltip: {
          trigger: 'item',
          // Show skill details on hover (Requirement 3.4)
          formatter: (params: any) => {
            const skill = skills[params.dataIndex];
            if (!skill) return '';
            
            const name = skill.nameTranslations[currentLang];
            const desc = skill.descriptionTranslations[currentLang];
            const years =
              currentLang === 'zh'
                ? `${skill.yearsOfExperience} 年经验`
                : `${skill.yearsOfExperience} years`;
            const proficiency =
              currentLang === 'zh'
                ? `熟练度: ${skill.proficiency}/5`
                : `Proficiency: ${skill.proficiency}/5`;

            return `<strong>${name}</strong><br/>${proficiency}<br/>${years}<br/>${desc}`;
          },
        },
        radar: {
          indicator: indicators,
          shape: 'polygon',
          splitNumber: 5,
          axisName: {
            color: 'rgb(107, 114, 128)',
            fontSize: 12,
          },
          splitLine: {
            lineStyle: {
              color: 'rgba(107, 114, 128, 0.2)',
            },
          },
          splitArea: {
            show: true,
            areaStyle: {
              color: [
                'rgba(59, 130, 246, 0.05)',
                'rgba(59, 130, 246, 0.1)',
                'rgba(59, 130, 246, 0.15)',
                'rgba(59, 130, 246, 0.2)',
                'rgba(59, 130, 246, 0.25)',
              ],
            },
          },
          axisLine: {
            lineStyle: {
              color: 'rgba(107, 114, 128, 0.3)',
            },
          },
        },
        series: [
          {
            type: 'radar',
            data: [
              {
                value: values,
                name: currentLang === 'zh' ? '技能水平' : 'Skill Level',
                areaStyle: {
                  color: 'rgba(59, 130, 246, 0.3)',
                },
                lineStyle: {
                  color: 'rgb(59, 130, 246)',
                  width: 2,
                },
                itemStyle: {
                  color: 'rgb(59, 130, 246)',
                },
              },
            ],
            // Entrance animation (Requirement 3.5)
            animation: true,
            animationDuration: 1500,
            animationEasing: 'cubicOut',
          },
        ],
      };
    } else {
      // Bar chart configuration
      const names = skills.map((skill) => skill.nameTranslations[currentLang]);
      const values = skills.map((skill) => skill.proficiency);

      option = {
        tooltip: {
          trigger: 'axis',
          axisPointer: {
            type: 'shadow',
          },
          // Show skill details on hover (Requirement 3.4)
          formatter: (params: any) => {
            const dataIndex = params[0].dataIndex;
            const skill = skills[dataIndex];
            if (!skill) return '';
            
            const name = skill.nameTranslations[currentLang];
            const desc = skill.descriptionTranslations[currentLang];
            const years =
              currentLang === 'zh'
                ? `${skill.yearsOfExperience} 年经验`
                : `${skill.yearsOfExperience} years`;
            const proficiency =
              currentLang === 'zh'
                ? `熟练度: ${skill.proficiency}/5`
                : `Proficiency: ${skill.proficiency}/5`;

            return `<strong>${name}</strong><br/>${proficiency}<br/>${years}<br/>${desc}`;
          },
        },
        grid: {
          left: '3%',
          right: '4%',
          bottom: '3%',
          containLabel: true,
        },
        xAxis: {
          type: 'category',
          data: names,
          axisLabel: {
            rotate: 45,
            color: 'rgb(107, 114, 128)',
            fontSize: 11,
          },
          axisLine: {
            lineStyle: {
              color: 'rgba(107, 114, 128, 0.3)',
            },
          },
        },
        yAxis: {
          type: 'value',
          max: 5,
          axisLabel: {
            color: 'rgb(107, 114, 128)',
          },
          splitLine: {
            lineStyle: {
              color: 'rgba(107, 114, 128, 0.2)',
            },
          },
        },
        series: [
          {
            type: 'bar',
            data: values,
            itemStyle: {
              color: 'rgb(59, 130, 246)',
              borderRadius: [4, 4, 0, 0],
            },
            // Entrance animation (Requirement 3.5)
            animation: true,
            animationDuration: 1500,
            animationEasing: 'cubicOut',
          },
        ],
      };
    }

    // Set chart options
    chart.setOption(option);

    // Responsive resize (Requirement 14.4)
    const handleResize = () => {
      chart.resize();
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, [skills, type, i18n.language, isLoading, error]);

  // Cleanup on unmount
  useEffect(() => {
    return () => {
      if (chartInstanceRef.current) {
        chartInstanceRef.current.dispose();
        chartInstanceRef.current = null;
      }
    };
  }, []);

  if (isLoading) {
    return (
      <div
        className={`flex items-center justify-center ${className}`}
        style={{ minHeight: '400px' }}
      >
        <div className="text-gray-500 dark:text-gray-400">Loading chart...</div>
      </div>
    );
  }

  if (error) {
    return (
      <div
        className={`flex items-center justify-center ${className}`}
        style={{ minHeight: '400px' }}
      >
        <div className="text-red-500">{error}</div>
      </div>
    );
  }

  return (
    <div
      ref={chartRef}
      className={className}
      style={{ width: '100%', height: '100%', minHeight: '400px' }}
    />
  );
};

export default SkillChart;
