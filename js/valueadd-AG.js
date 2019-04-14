Highcharts.chart('AG', {

  chart: {
    type: 'item'
  },

  title: {
    text: 'Argentina'
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
      ['Services, value added', 55, '#494947', 'SAD'],
      ['Industry (including construction)', 23, '#35FF69', 'IVA'],
      ['Imports of goods and services',13, '#44CCFF', 'Import'],
      ['Exports of goods and services',13, '#7494EA', 'Export'],
      ['Manufacturing, value added', 14, '#D138BF', 'MVA'],
      ['Agriculture, forestry, and fishing, value added',6, '#040404', 'AFFVA']
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



