var colors = ['#A0CFD3', '#8D94BA', '#9A7AA0'];
$( '#import' ).highcharts({
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
        data: [13.673463, 31.53689616, 16.54361766, 53.49171623, 14.00131506]
    },{
        type: 'column',
        name: '2015',
        data: [14.05343452, 33.9997624,15.39099398,46.20342834,11.78057404]
  
    },{
        type: 'column',
        name: '2016',
        data: [12.07966389,33.38422977,14.68929997,44.64144255,13.53808142]
 
    }]

  });















  









