Highcharts.chart('brazil', {

  chart: {
    type: 'item'
  },

  title: {
    text: 'Brazil'
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
      ['Services, value added', 62, '#734B5E', 'SAD'],
      ['Industry (including construction)', 19, '#BCBDC0', 'IVA'],
      ['Imports of goods and services',13, '#565857', 'Import'],
      ['Exports of goods and services', 12, '#F5D3C8', 'Export'],
      ['Manufacturing, value added', 10, '#8A8D91', 'MVA'],
      ['Agriculture, forestry, and fishing, value added',4, '#D89D6A', 'AFFVA']
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
