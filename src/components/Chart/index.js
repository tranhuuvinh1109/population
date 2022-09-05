import './Chart.css'
import React, { useEffect, useState, useRef } from 'react';
import Highcharts from 'highcharts';
import HighchartsReact from 'highcharts-react-official';

const initOptions = {
    chart: {
        height: 650,
    },
    title: {
        text: null,
    },
    accessibility: {
        enabled: false,
    },
    xAxis: {
        crosshair: true,
        title: {
            text: null,
        },
    },
    yAxis: {
        min: 0,
        title: {
            text: null,
        },
    },
    plotOptions: {
        series: {
            stickyTracking: false,
        },
    },
    series: [],
};


const formatOptions = (data) => {
    return {
        ...initOptions,
        series: data.map((report) => {
            return {
                name: report.prefName,

                data: report.data.map((item) => item.value),
            };
        }),
        xAxis: {
            categories: [1960, 1965, 1970, 1975, 1980, 1985, 1990, 1995, 2000, 2005, 2010, 2015, 2020, 2025, 2030, 2035, 2040, 2045],
            crosshair: true,
            title: {
                text: null,
            },
        },
    };
};

function Chart({ data }) {
    const chartComponent = useRef(null);
    const [options, setOptions] = useState({})
    useEffect(() => {
        if (data.length > 0)
            setOptions(formatOptions(data))
        else
            setOptions(initOptions)
        console.log(data)
    }, [data])

    return (<div className="content" >
        <HighchartsReact options={options} highcharts={Highcharts} ref={chartComponent} isPureConfig={true} />


    </div>);
}

export default Chart;