var colors = ['#370031', '#832232', '#E7A977'];
$( '#gdp' ).highcharts({
  chart: {
    type: 'bar'
  },
  title: {
    text: 'GDP (current US$)'
  },
  subtitle: {
    text: 'Source: https://databank.worldbank.org'
  },
  xAxis: {
    categories: ['Brazil','Canada','United States','Jamaica','Argentina'],
    title: {
      text: null
    }
  },
  yAxis: {
    min: 0,
    title: {
      text: 'Billion (current US$)',
      align: 'high'
    },
    labels: {
      overflow: 'justify'
    }
  },
  tooltip: {
    valueSuffix: ' Billion (current US$)'
  },
  plotOptions: {
    bar: {
      dataLabels: {
        enabled: true
      }
    }
  },
  legend: {
    layout: 'vertical',
    align: 'right',
    verticalAlign: 'top',
    x: -40,
    y: 80,
    floating: true,
    borderWidth: 1,
    backgroundColor: ((Highcharts.theme && Highcharts.theme.legendBackgroundColor) || '#FFFFFF'),
    shadow: true
  },
  credits: {
    enabled: false
  },
  colors:colors,
  series: [{
    name: 'Year 2014',
    data: [246, 180, 1740, 1.39, 52.6]
  }, {
    name: 'Year 2015',
    data: [180, 156, 1810, 1.41, 59.5]
  }, {
    name: 'Year 2016',
    data: [179, 154,1860, 1.41, 55.5]
  }
  ]
});