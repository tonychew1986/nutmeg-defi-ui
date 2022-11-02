/**
 *
 * HomeTreasuryBalanceGraph
 *
 */

import React from 'react';
// import PropTypes from 'prop-types';
// import styled from 'styled-components';

import { FormattedMessage } from 'react-intl';
import { ResponsiveStream } from '@nivo/stream';
import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from 'recharts';
import messages from './messages';

import Style from './Style';

const numeral = require('numeral');

function HomeTreasuryBalanceGraph(props) {
  const { treasuryBalance, graphData, graphKey } = props;

  return (
    <Style>
      <div className="content">
        <div className="title">Total Treasury Balance</div>
        <div className="tvlNum num">
          $ {numeral(treasuryBalance).format('0,0.000')}
        </div>
        <div className="chart">
          <ResponsiveStream
            data={graphData}
            keys={graphKey}
            margin={{ top: 0, right: 0, bottom: 0, left: 0 }}
            axisTop={null}
            axisRight={null}
            axisBottom={null}
            axisLeft={null}
            enableGridX={false}
            offsetType="none"
            colors={{ scheme: 'yellow_orange_red' }}
            fillOpacity={0.85}
            borderColor={{ theme: 'background' }}
            defs={[
              {
                id: 'dots',
                type: 'patternDots',
                background: 'inherit',
                color: '#2c998f',
                size: 4,
                padding: 2,
                stagger: true,
              },
              {
                id: 'squares',
                type: 'patternSquares',
                background: 'inherit',
                color: '#e4c912',
                size: 6,
                padding: 2,
                stagger: true,
              },
            ]}
            fill={[
              {
                match: {
                  id: 'Paul',
                },
                id: 'dots',
              },
              {
                match: {
                  id: 'Marcel',
                },
                id: 'squares',
              },
            ]}
            dotSize={8}
            dotColor={{ from: 'color' }}
            dotBorderWidth={2}
            dotBorderColor={{ from: 'color', modifiers: [['darker', 0.7]] }}
            legends={[
              {
                anchor: 'bottom-right',
                direction: 'column',
                translateX: 100,
                itemWidth: 80,
                itemHeight: 20,
                itemTextColor: '#999999',
                symbolSize: 12,
                symbolShape: 'circle',
                effects: [
                  {
                    on: 'hover',
                    style: {
                      itemTextColor: '#000000',
                    },
                  },
                ],
              },
            ]}
          />
        </div>
      </div>
    </Style>
  );
}
// <ResponsiveContainer width="100%" height={200}>
//   <AreaChart
//     data={data}
//     margin={{
//       top: 0,
//       right: 0,
//       left: 0,
//       bottom: 0,
//     }}
//   >
//     <Area type="monotone" dataKey="uv" stackId="1" stroke="#FFAA00" fill="#FFC300" isAnimationActive={false} />
//     <Area type="monotone" dataKey="pv" stackId="1" stroke="#007ea7" fill="#00a8e8" isAnimationActive={false} />
//     <Area type="monotone" dataKey="amt" stackId="1" stroke="#007200" fill="#38b000" isAnimationActive={false} />
//
//   </AreaChart>
// </ResponsiveContainer>

HomeTreasuryBalanceGraph.propTypes = {};

export default HomeTreasuryBalanceGraph;
