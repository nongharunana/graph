Highcharts.chart('JM', {

  chart: {
    type: 'item'
  },

  title: {
    text: 'Jamaica'
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
      ['Services, value added', 62, '#476A6F', 'SAD'],
      ['Industry (including construction)', 19, '#519E8A', 'IVA'],
      ['Imports of goods and services',48, '#775253', 'Import'],
      ['Exports of goods and services',31, '#C5C9A4', 'Export'],
      ['Manufacturing, value added', 8, '#7A82AB', 'MVA'],
      ['Agriculture, forestry, and fishing, value added',6, '#ECBEB4', 'AFFVA']
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


