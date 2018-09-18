$(function(){
	var myChart = echarts.init(document.getElementById('map'));
	$.get('./Echarts/xicheng.json',function(geoJson){
		echarts.registerMap('xicheng',geoJson,{});
		var option = {
		    tooltip: {
		        trigger: 'item',
            	formatter: '{b}<br/>{c} (p / km2)'
		    },
		    visualMap: {
	            min: 500,
	            max: 50000,
	            text:['High','Low'],
	            left: 'right',
	            realtime: false,
	            calculable: true,
	            inRange: {
	                color: ['#313695','#4575b4', '#74add1','#abd9e9','#e0f3f8']
	            }
	        },
		    series: [
		        {
		        	name: '西城',
		            type: 'map',
		            mapType: 'xicheng',
		            aspectScale: 0.85,  //地图长度比
		            label: {
		                normal: {
		                    show: true,
		                    textStyle: {
		                        color: '#fff'
		                    }
		                },
		                emphasis: {
		                    show: true,
		                    textStyle: {
		                        color: '#333'
		                    }
		                }
		            },
		            data: [
		            	{name: '德胜门', value: 17000},
	                    {name: '什刹海', value: 1000},
	                    {name: '新街口', value: 5000},
	                    {name: '展览路', value: 20000},
	                    {name: '月坛', value: 25000},
	                    {name: '金融街', value: 30000},
	                    {name: '西长安街', value: 18000},
	                    {name: '广安门外', value: 2300},
	                    {name: '广安门内', value: 20000},
	                    {name: '大栅栏', value: 16000},
	                    {name: '陶然亭', value: 28000}
		            ]
		        }                              
		    ]
		};
		myChart.setOption(option);
	});
});