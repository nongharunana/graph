Highcharts.chart('canada', {

  chart: {
    type: 'item'
  },

  title: {
    text: 'Canada'
  },

  subtitle: {
    text: ''
  },

  legend: {
    labelFormat: '{name} <span style="opacity: 0.4">{y}</span>'
  },

  series: [{
    name: '',
    keys: ['name', 'y', 'color', 'label'],
    data: [
      ['Services, value added', 65, '#EB5E55', 'SAD'],
      ['Industry (including construction)', 28, '#3A3335', 'IVA'],
      ['Imports of goods and services',33, '#D81E5B', 'Import'],
      ['Exports of goods and services',31, '#392061', 'Export'],
      ['Manufacturing, value added', 10, '#9883E5', 'MVA'],
      ['Agriculture, forestry, and fishing, value added',1, '#C6D8D3', 'AFFVA']
    ],
    dataLabels: {
      enabled: true,
      format: '{point.label}'
    },

    // Circular options
    center: ['50%', '88%'],
    size: '170%',
    startAngle: -100,
    endAngle: 100
  }]
});

