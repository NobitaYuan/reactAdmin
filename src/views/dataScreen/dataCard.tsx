import React ,{FC,useEffect,useState} from "react";
import {Row,Col} from 'antd'

import CountUp from "react-countup";

import * as echarts from 'echarts'
import './dataCard.less'

interface IDataCard{
    title:String,
    maindata:Number,
    zuori:String,
    huanbi:String,
    xiaoshou:String,
}

const DataCard:FC<IDataCard>= (props:any)=>{

    // new CountUp()

    return (<div className="cardBox">
        <h5>{props.title}<span>今日</span></h5>
        <div className="data">
            <div className="main-data"><CountUp start={0} end={props.maindata} decimals={1}/></div>
            <div className="secend-data">
                <span>昨日{props.zuori}</span>
                <span>日环比{props.huanbi}%</span>
            </div>

        </div>
        <div className="money">本月销售额<span>{props.xiaoshou}</span></div>
    </div>)
}

export default DataCard