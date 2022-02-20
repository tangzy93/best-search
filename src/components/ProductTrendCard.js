import {Box, Stack} from "@mui/material";
import Chart from 'chart.js/auto';
import {useEffect, useRef} from "react";
import styled from "@emotion/styled";
import _ from 'lodash'

const Title = styled.div`
  padding: 10px;
`
const SubTitle = styled.div`
  padding: 0 10px;
  font-size: 12px;
  color: #CECECE;
`

function ProductTrendCard(props) {
  const {name, growth, search_msv = []} = props;
  const startYear = _.get(search_msv, [0, 'date']);
  const endYear = _.get(search_msv, [search_msv.length - 1, 'date']);
  useEffect(() => {
    const formattedDatas = search_msv.reduce((prev, cur) =>{
      const {labels, data} = prev;
      const {date, sv} = cur;
      labels.push(date);
      data.push(sv);
      return {
        labels,
        data
      }
    }, {labels: [], data: []});

    const data = {
      labels: formattedDatas.labels,
      datasets: [{
        label: 'My First dataset',
        backgroundColor: 'rgb(255, 99, 132)',
        borderColor: 'rgb(255, 99, 132)',
        data: formattedDatas.data,
      }]
    };

    const config = {
      type: 'line',
      data: data,
      options: {
        datasets: {
          line: {
            fill: true,
            pointBorderWidth: 0,
            pointRadius: 0,
          }
        },
        plugins: {
          legend: {
            display: false
          }
        },
        scales: {
          xAxis: {
            display: false
          },
          yAxis: {
            display: false
          }
        }
      }
    };
    console.log(document.getElementById(`chart-${name}`))
    const chart = new Chart(
      document.getElementById(`chart-${name}`),
      config
    );
    return () => {
      if (chart) {
        chart.destroy()
      }
    }
  }, []);
  return (
    <Box width={210} border={'1px solid #dddddd'} borderRadius={'5px'} minHeight={200} bgcolor={'#FFFFFF'}>
      <Title>{name}</Title>
      <SubTitle style={{marginBottom: '30px'}}>Growth {growth / 100} %</SubTitle>
      <canvas id={`chart-${name}`} width={'210px'} height={'210px'}/>
      <Stack justifyContent={'center'} alignItems={'center'} style={{padding: '10px 0'}}>
        <SubTitle>
          {startYear} - {endYear}
        </SubTitle>
      </Stack>
    </Box>
  )
}

export default ProductTrendCard;
