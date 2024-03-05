import { color } from '@mui/system'
import React ,{useState} from 'react'
import Chart from "react-apexcharts";

const RandomColor = () => {
  const [typeOfColor,setColorType]=useState('hex')
  const [color,setColor]=useState('#3230a6')
  const [options] = useState({
    chart: {
      type: 'line',
      height: 40,
      width: 100,
      sparkline: {
          enabled: true
      }
  },
  stroke: {
      show: true,
      curve: 'smooth',
      lineCap: 'butt',
      colors: undefined,
      width: 1.5,
      dashArray: 0,
  },
  fill: {
      type: 'gradient',
      gradient: {
          opacityFrom: 0.9,
          opacityTo: 0.9,
          stops: [0, 98],
      }
  },
  yaxis: {
    min: 0,
    show: false,
    axisBorder: {
        show: false
    },
},
xaxis: {
    show: false,
    axisBorder: {
        show: false
    },
},
tooltip: {
    enabled: false,
},
colors: ["rgb(38, 191, 148)"]
  });

  const [series] = useState([
    {
      name: "series-1",
      data: [20, 20, 22, 9, 14, 19, 10, 25, 12]
    }
  ]);
  function randomColorUtility(length) {
    console.log(Math.floor(Math.random() * length),'Math.floor(Math.random() * length);');
    return Math.floor(Math.random() * length);
  }

 const handleGenerateHexColor=()=>{
  const hex = [1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F"];
  let hexColor='#';
  for(let i=0;i<6;i++){
    hexColor +=hex[randomColorUtility(hex.length)]
   
  }
  console.log(hexColor,'voloe');
  setColor(hexColor)


 }
 const handleGenerateRGBcolor=()=>{
  const r = randomColorUtility(256);
  const g = randomColorUtility(256);
  const b = randomColorUtility(256);

  setColor(`rgb(${r},${g}, ${b})`);
 
  
 }
  return (
    <div style={{width:"100vw",height:"100vh",background:color}}>
      <button onClick={()=>setColorType('hex')} >hex</button>
      <button onClick={typeOfColor==='hex' ? handleGenerateHexColor:handleGenerateRGBcolor}>generate random color</button>
      <button onClick={()=>setColorType('rgb')}>rgb</button>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          color: "#fff",
          fontSize: "60px",
          marginTop: "50px",
          flexDirection  :'column',
          gap :'20px'
        }}
      >
        <h3>{typeOfColor === "rgb" ? "RGB Color" : "HEX Color"}</h3>
        <h1>{color}</h1>
      </div>

      <div className="app">
      <div className="row">
        <div className="mixed-chart">
          <Chart
            options={options}
            series={series}
            type="line"
            width="500"
          />
        </div>
      </div>
    </div>
    </div>
  )
}

export default RandomColor