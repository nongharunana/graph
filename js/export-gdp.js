
var colors = ['#C7DFC5', '#F6FEAA', '#FCE694'];
$( '#export' ).highcharts({
    tooltip: {
    headerFormat: '<span style="font-size:10px">{point.key}</span><table>',
    pointFormat: '<tr><td style="color:{series.color};padding:0">{series.name}: </td>' +
      '<td style="padding:0"><b>{point.y:.1f} (% of GDP)</b></td></tr>',
    footerFormat: '</table>',
    shared: true,
    useHTML: true
  },
  title: {
    text: 'Imports of goods and services (% of GDP)'
  },
  subtitle: {
    text: 'Source: https://databank.worldbank.org'
  },
  xAxis: {
    categories: [
      'Brazil',
      'Canada',
      'United States',
      'Jamaica',
      'Argentina'],
    crosshair: true
  },
  yAxis: {
    min: 0,
    title: {
      text: '(% of GDP)'
    }
  },
  
    plotOptions: {
        pie: { //working here
            colors: colors
        }
    },
    colors:colors,
    series: [{
        type: 'column',
        name: '2014',
        data: [11.01194282, 31.53689616, 13.62004392, 31.25774688, 14.40547859] 
    },{
        type: 'column',
        name: '2015',
        data: [12.90019142, 31.52797293, 12.49904391, 29.90168163, 10.70565205]  
    },{
        type: 'column',
        name: '2016',
        data: [12.49461885, 30.96787727, 11.89062242, 31.28847629, 12.58383239]  
    }]

  });










