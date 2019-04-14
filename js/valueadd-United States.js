Highcharts.chart('US', {

  chart: {
    type: 'item'
  },

  title: {
    text: 'United States'
  },

  subtitle: {
    text: ''
  },

  legend: {
    labelFormat: '{name} <span style="opacity: 0.6">{y} (% of GDP)</span>'
  },

  series: [{
    name: '',
    keys: ['name', 'y', 'color', 'label'],
    data: [
      ['Services, value added', 76, '#441151', 'SAD'],
      ['Industry (including construction)', 20, '#883677', 'IVA'],
      ['Imports of goods and services',16, '#CA61C3', 'Import'],
      ['Exports of goods and services',13, '#EE85B5', 'Export'],
      ['Manufacturing, value added', 12, '#FF958C', 'MVA'],
      ['Agriculture, forestry, and fishing, value added',1, '#FFC4EB', 'AFFVA']
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

