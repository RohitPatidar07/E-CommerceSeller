import React, { useState, useEffect } from 'react';
import * as echarts from 'echarts';

const Dashboard = () => {
  const [selectedPeriod, setSelectedPeriod] = useState('7 Days');
  const [mainChartInstance, setMainChartInstance] = useState(null);
  const [growthChartInstance, setGrowthChartInstance] = useState(null);
  const [companyChartInstance, setCompanyChartInstance] = useState(null);
  const [revenueChartInstance, setRevenueChartInstance] = useState(null);

  // Initialize main chart
  useEffect(() => {
    const chartDom = document.getElementById('main-chart');
    if (chartDom) {
      const myChart = echarts.init(chartDom);
      setMainChartInstance(myChart);

      const option = getMainChartOption(selectedPeriod);
      myChart.setOption(option);

      const handleResize = () => {
        myChart.resize();
      };

      window.addEventListener('resize', handleResize);

      return () => {
        window.removeEventListener('resize', handleResize);
        myChart.dispose();
      };
    }
  }, [selectedPeriod]);

  // Initialize additional charts
  useEffect(() => {
    // Total Growth Chart
    const growthChartDom = document.getElementById('growth-chart');
    if (growthChartDom) {
      const chart = echarts.init(growthChartDom);
      setGrowthChartInstance(chart);
      chart.setOption(getGrowthChartOption());
    }

    // Company Signup Chart
    const companyChartDom = document.getElementById('company-chart');
    if (companyChartDom) {
      const chart = echarts.init(companyChartDom);
      setCompanyChartInstance(chart);
      chart.setOption(getCompanyChartOption());
    }

    // Revenue Trends Chart
    const revenueChartDom = document.getElementById('revenue-chart');
    if (revenueChartDom) {
      const chart = echarts.init(revenueChartDom);
      setRevenueChartInstance(chart);
      chart.setOption(getRevenueChartOption());
    }

    const handleResize = () => {
      if (growthChartInstance) growthChartInstance.resize();
      if (companyChartInstance) companyChartInstance.resize();
      if (revenueChartInstance) revenueChartInstance.resize();
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
      if (growthChartInstance) growthChartInstance.dispose();
      if (companyChartInstance) companyChartInstance.dispose();
      if (revenueChartInstance) revenueChartInstance.dispose();
    };
  }, []);

  // Update main chart when period changes
  useEffect(() => {
    if (mainChartInstance) {
      const option = getMainChartOption(selectedPeriod);
      mainChartInstance.setOption(option);
    }
  }, [selectedPeriod, mainChartInstance]);

  const getMainChartOption = (period) => {
    // This is a simplified version - you would adjust data based on selected period
    let xAxisData, userData, revenueData;
    
    switch(period) {
      case '30 Days':
        xAxisData = Array.from({length: 30}, (_, i) => `Day ${i+1}`);
        userData = Array.from({length: 30}, () => Math.floor(Math.random() * 300) + 50);
        revenueData = Array.from({length: 30}, () => Math.floor(Math.random() * 5000) + 2000);
        break;
      case '90 Days':
        xAxisData = Array.from({length: 12}, (_, i) => `Week ${i+1}`);
        userData = Array.from({length: 12}, () => Math.floor(Math.random() * 800) + 100);
        revenueData = Array.from({length: 12}, () => Math.floor(Math.random() * 15000) + 5000);
        break;
      default: // 7 Days
        xAxisData = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'];
        userData = [120, 140, 110, 145, 95, 240, 220];
        revenueData = [3200, 3800, 3100, 4200, 2800, 4800, 4200];
    }

    return {
      animation: false,
      grid: {
        left: '3%',
        right: '4%',
        bottom: '3%',
        containLabel: true
      },
      xAxis: [{
        type: 'category',
        data: xAxisData,
        axisPointer: { type: 'shadow' }
      }],
      yAxis: [
        {
          type: 'value',
          name: 'Users',
          position: 'left',
          axisLine: {
            show: true,
            lineStyle: { color: '#10b981' }
          },
          axisLabel: { formatter: '{value}' }
        },
        {
          type: 'value',
          name: 'Revenue ($)',
          position: 'right',
          axisLine: {
            show: true,
            lineStyle: { color: '#3b82f6' }
          },
          axisLabel: { formatter: '{value}' }
        }
      ],
      series: [
        {
          name: 'User Growth',
          type: 'bar',
          yAxisIndex: 0,
          data: userData,
          itemStyle: { color: '#10b981' }
        },
        {
          name: 'Revenue',
          type: 'line',
          yAxisIndex: 1,
          data: revenueData,
          lineStyle: { color: '#3b82f6', width: 3 },
          itemStyle: { color: '#3b82f6' }
        }
      ]
    };
  };

  const getGrowthChartOption = () => {
    return {
      title: {
        text: 'Total Growth',
        left: 'center',
        textStyle: {
          fontSize: 14,
          fontWeight: 'bold'
        }
      },
      tooltip: {
        trigger: 'axis',
        axisPointer: {
          type: 'shadow'
        }
      },
      grid: {
        left: '3%',
        right: '4%',
        bottom: '3%',
        containLabel: true
      },
      xAxis: {
        type: 'category',
        data: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
        axisLabel: {
          rotate: 45
        }
      },
      yAxis: {
        type: 'value',
        name: 'Growth (%)'
      },
      series: [{
        name: 'Growth',
        type: 'line',
        smooth: true,
        data: [5.2, 8.1, 12.4, 15.3, 18.7, 22.5, 25.8, 28.3, 32.1, 35.6, 38.9, 42.5],
        itemStyle: {
          color: '#8b5cf6'
        },
        areaStyle: {
          color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
            {
              offset: 0,
              color: 'rgba(139, 92, 246, 0.5)'
            },
            {
              offset: 1,
              color: 'rgba(139, 92, 246, 0.1)'
            }
          ])
        }
      }]
    };
  };

  const getCompanyChartOption = () => {
    return {
      title: {
        text: 'Company Signups',
        left: 'center',
        textStyle: {
          fontSize: 14,
          fontWeight: 'bold'
        }
      },
      tooltip: {
        trigger: 'axis',
        axisPointer: {
          type: 'shadow'
        }
      },
      grid: {
        left: '3%',
        right: '4%',
        bottom: '3%',
        containLabel: true
      },
      xAxis: {
        type: 'category',
        data: ['Q1', 'Q2', 'Q3', 'Q4'],
        axisLabel: {
          rotate: 45
        }
      },
      yAxis: {
        type: 'value',
        name: 'Companies'
      },
      series: [{
        name: 'New Companies',
        type: 'bar',
        data: [45, 78, 92, 120],
        itemStyle: {
          color: function(params) {
            const colorList = ['#10b981', '#3b82f6', '#f59e0b', '#ef4444'];
            return colorList[params.dataIndex];
          }
        }
      }]
    };
  };

  const getRevenueChartOption = () => {
    return {
      title: {
        text: 'Revenue Trends',
        left: 'center',
        textStyle: {
          fontSize: 14,
          fontWeight: 'bold'
        }
      },
      tooltip: {
        trigger: 'axis',
        axisPointer: {
          type: 'cross',
          label: {
            backgroundColor: '#6a7985'
          }
        }
      },
      legend: {
        data: ['Recurring', 'One-time', 'Services'],
        bottom: 0
      },
      grid: {
        left: '3%',
        right: '4%',
        bottom: '15%',
        containLabel: true
      },
      xAxis: [
        {
          type: 'category',
          boundaryGap: false,
          data: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul']
        }
      ],
      yAxis: [
        {
          type: 'value',
          name: 'Revenue ($)'
        }
      ],
      series: [
        {
          name: 'Recurring',
          type: 'line',
          stack: 'Total',
          smooth: true,
          lineStyle: {
            width: 0
          },
          showSymbol: false,
          areaStyle: {
            opacity: 0.8,
            color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
              {
                offset: 0,
                color: 'rgba(16, 185, 129, 0.8)'
              },
              {
                offset: 1,
                color: 'rgba(16, 185, 129, 0.1)'
              }
            ])
          },
          emphasis: {
            focus: 'series'
          },
          data: [14000, 18200, 19100, 23400, 29000, 33000, 41000]
        },
        {
          name: 'One-time',
          type: 'line',
          stack: 'Total',
          smooth: true,
          lineStyle: {
            width: 0
          },
          showSymbol: false,
          areaStyle: {
            opacity: 0.8,
            color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
              {
                offset: 0,
                color: 'rgba(59, 130, 246, 0.8)'
              },
              {
                offset: 1,
                color: 'rgba(59, 130, 246, 0.1)'
              }
            ])
          },
          emphasis: {
            focus: 'series'
          },
          data: [3000, 5200, 11000, 13000, 14000, 18000, 21000]
        },
        {
          name: 'Services',
          type: 'line',
          stack: 'Total',
          smooth: true,
          lineStyle: {
            width: 0
          },
          showSymbol: false,
          areaStyle: {
            opacity: 0.8,
            color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
              {
                offset: 0,
                color: 'rgba(245, 158, 11, 0.8)'
              },
              {
                offset: 1,
                color: 'rgba(245, 158, 11, 0.1)'
              }
            ])
          },
          emphasis: {
            focus: 'series'
          },
          data: [5000, 8000, 9000, 10000, 12500, 15000, 18000]
        }
      ]
    };
  };

  // KPI data
  const kpiData = [
    {
      title: 'Total Users',
      value: '12,847',
      change: '+12.5%',
      changeType: 'positive',
      icon: 'fas fa-users',
      iconColor: 'text-primary'
    },
    {
      title: 'Total Admins',
      value: '156',
      change: '+8.2%',
      changeType: 'positive',
      icon: 'fas fa-user-shield',
      iconColor: 'text-primary'
    },
    {
      title: 'Platform Revenue',
      value: '$89,234',
      change: '+15.7%',
      changeType: 'positive',
      icon: 'fas fa-dollar-sign',
      iconColor: 'text-success'
    },
    {
      title: 'Error Rate Today',
      value: '0.23%',
      change: '-2.1%',
      changeType: 'positive',
      icon: 'fas fa-exclamation-triangle',
      iconColor: 'text-danger'
    }
  ];

  // Recent activities data
  const recentActivities = [
    {
      id: '#USR-2024-001',
      type: 'New User Registration',
      status: 'Active',
      statusColor: 'bg-success text-white',
      date: '2 hours ago'
    },
    {
      id: '#ADM-2024-002',
      type: 'Admin Login',
      status: 'Processing',
      statusColor: 'bg-primary text-white',
      date: '4 hours ago'
    },
    {
      id: '#ERR-2024-003',
      type: 'System Error',
      status: 'Resolved',
      statusColor: 'bg-success text-white',
      date: '6 hours ago'
    },
    {
      id: '#REV-2024-004',
      type: 'Revenue Update',
      status: 'Pending',
      statusColor: 'bg-warning text-dark',
      date: '8 hours ago'
    },
    {
      id: '#USR-2024-005',
      type: 'User Deactivation',
      status: 'Cancelled',
      statusColor: 'bg-danger text-white',
      date: '10 hours ago'
    }
  ];

  return (
    <div className="">
      <div className="">
        {/* Header Section */}
        <div className="mb-5">
          <h1 className="h2 mb-1 mb-md-2">Welcome back, Admin!</h1>
          <p className="text-muted">Here's what's happening with your platform today.</p>
        </div>

        {/* KPI Cards */}
        <div className="row mb-4">
          {kpiData?.map((kpi, index) => (
            <div key={index} className="col-md-6 col-lg-3 mb-4">
              <div className="card h-100 shadow-sm">
                <div className="card-body">
                  <div className="d-flex align-items-center justify-content-between mb-3">
                    <div className="d-flex align-items-center">
                      <div className="rounded bg-light p-3 me-3">
                        <i className={`${kpi.icon} ${kpi.iconColor} fs-4`}></i>
                      </div>
                      <div>
                        <p className="mb-0 text-muted small">{kpi.title}</p>
                      </div>
                    </div>
                  </div>
                  <div className="d-flex align-items-end justify-content-between">
                    <div>
                      <p className="h4 fw-bold mb-0">{kpi.value}</p>
                    </div>
                    <div className="d-flex align-items-center">
                      <span className={`small fw-bold ${kpi.changeType === 'positive' ? 'text-success' : 'text-danger'}`}>
                        {kpi.change}
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Chart Section */}
        <div className="card shadow-sm mb-4">
          <div className="card-body">
            <div className="d-flex align-items-center justify-content-between mb-4">
              <h2 className="h5 fw-bold mb-0">Platform Analytics</h2>
              <div className="btn-group" role="group">
                {['7 Days', '30 Days', '90 Days']?.map((period) => (
                  <button
                    key={period}
                    onClick={() => setSelectedPeriod(period)}
                    className={`btn btn-sm ${selectedPeriod === period ? 'btn-primary' : 'btn-outline-secondary'}`}
                  >
                    {period}
                  </button>
                ))}
              </div>
            </div>
            <div className="chart-container" style={{ height: '400px' }}>
              <div id="main-chart" className="w-100 h-100"></div>
            </div>
          </div>
        </div>

        {/* Additional Charts Row */}
        <div className="row mb-4">
          {/* Total Growth Chart */}
          <div className="col-md-4 mb-4 mb-md-0">
            <div className="card shadow-sm h-100">
              <div className="card-body">
                <div id="growth-chart" style={{ height: '300px' }}></div>
              </div>
            </div>
          </div>

          {/* Company Signup Chart */}
          <div className="col-md-4 mb-4 mb-md-0">
            <div className="card shadow-sm h-100">
              <div className="card-body">
                <div id="company-chart" style={{ height: '300px' }}></div>
              </div>
            </div>
          </div>

          {/* Revenue Trends Chart */}
          <div className="col-md-4">
            <div className="card shadow-sm h-100">
              <div className="card-body">
                <div id="revenue-chart" style={{ height: '300px' }}></div>
              </div>
            </div>
          </div>
        </div>

        {/* Recent Activities Table */}
        <div className="card shadow-sm">
          <div className="card-header">
            <h2 className="h5 fw-bold mb-0">Recent Activities</h2>
          </div>
          <div className="card-body p-0">
            <div className="table-responsive">
              <table className="table table-hover mb-0">
                <thead className="table-light">
                  <tr>
                    <th className="ps-4 py-3 text-uppercase small fw-bold">Activity ID</th>
                    <th className="py-3 text-uppercase small fw-bold">Type</th>
                    <th className="py-3 text-uppercase small fw-bold">Status</th>
                    <th className="pe-4 py-3 text-uppercase small fw-bold">Date</th>
                  </tr>
                </thead>
                <tbody>
                  {recentActivities?.map((activity, index) => (
                    <tr key={index}>
                      <td className="ps-4 py-3 fw-bold">{activity.id}</td>
                      <td className="py-3">{activity.type}</td>
                      <td className="py-3">
                        <span className={`badge ${activity.statusColor}`}>
                          {activity.status}
                        </span>
                      </td>
                      <td className="pe-4 py-3 text-muted">{activity.date}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;