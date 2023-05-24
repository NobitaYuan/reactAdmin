import { FC, useEffect, useState } from "react";
import { Row, Col } from "antd";
import * as echarts from "echarts";
import china from './china.json'
interface IEChartsProps {}
const Echarts: FC<IEChartsProps> = () => {
   
  var myChart:any ;
  useEffect(()=>{
      loadingChina()
  },[])

  const loadingChina = () => {
      mapOption("china", china)  //初始化-创建中国地图
    }
    const convertData = () => {
      let res = [{
        name: "南海诸岛",
        value: 0,
        itemStyle: {
          normal: {
            opacity: 0,
            label: {
              show: false
            }
          }
        }
      }]
      return res
    }
  const mapOption=(mapName:any,data:any)=>{
      if (myChart !== null && myChart !== "" && myChart !== undefined) {
          myChart.dispose();//销毁（如果存在需要销毁，点击时会创建新的图表对象）
        }
        myChart = echarts.init(document.querySelector('.map')!);//初始化
        
        echarts.registerMap(mapName, data)
        var option = {

          geo: {
              map: mapName,
              geoIndex: 0,
              label: {
                emphasis: {
                  show: true,
                  color: '#fff' //地区显示文字样式
                }
              },
              roam: true,
              zoom: 1.2,   //设置地图放大
              regions: convertData(),//去掉南海诸岛
      
              itemStyle: {
                normal: {
                  areaColor: 'rgb(30,55,106)', //地区填充颜色
                  borderColor: 'rgba(128,208,255,.8)',//边界线颜色
                  shadowColor: 'rgb(20,50,97)',//阴影颜色
                  shadowBlur: 20,//模糊大小
                  borderWidth: 1.8,
                },
                emphasis: {  //选中样式
                  areaColor: {
                    type: 'linear',
                    x: 0,
                    y: 0,
                    x2: 0,
                    y2: 1,
                    colorStops: [{
                      offset: 0, color: '#0AFBFF'
                    }, {
                      offset: 1, color: '#0157C9'
                    }],
                    global: false
                  },
                }
              }
            }
          };
          myChart.setOption(option); //绘图
         //点击画布内还是画布外
          myChart.getZr().on('click', (params:any) => {
              if (params.target) {
                  myChart.on('click', echartsMapClick);//增加点击事件
                }                   
           })
  }
  const echartsMapClick=()=>{
      //点击地图模块逻辑事件
  }

    return (
        <>
            <h2>China</h2>
            <Row>
                <Col span={24}>
                    {/* <p>China</p> */}
                    <div
                        className="map"
                        style={{ width: "100%", height: "600px",overflow:'hidden' }}
                    ></div>
                </Col>
            </Row>
        </>
    );
};

export default Echarts;
