Highcharts.chart('tax', {

  chart: {
    type: 'boxplot'
  },

  title: {
    text: 'Tax'
  },

  legend: {
    enabled: false
  },

  xAxis: {
    categories: ['US', 'Canada', 'Jamaica', 'Argentina', 'Brazil'],
    title: {
      text: 'Country'
    }
  },


  yAxis: {
    title: {
      text: 'Tax'
    },
    plotLines: [{
      value: 54245,
      color: 'red',
      width: 1,
      label: {
        text: 'Theoretical mean: 54245',
        align: 'center',
        style: {
          color: 'gray'
        }
      }
    }]
  },

  series: [{
    name: '',
    data: [
      [1200,20400,31200,66900,203500],
      [1500,22100,37700,56550,181500],
      [2500,29750,45500,68250,192500],
      [900,22950,40300,68250,192500],
      [1500,23375,35750,53625,151250]
    ],
    tooltip: {
      headerFormat: '<em>{point.key}</em><br/>'
    }
  }, {
    name: 'Outlier',
    color: Highcharts.getOptions().colors[0],
    type: 'scatter',
    data: [ // x, y positions where 0 is the first category
      
    ],
    marker: {
      fillColor: 'white',
      lineWidth: 1,
      lineColor: Highcharts.getOptions().colors[0]
    },
    tooltip: {
      pointFormat: 'Observation: {point.y}'
    }
  }]

});