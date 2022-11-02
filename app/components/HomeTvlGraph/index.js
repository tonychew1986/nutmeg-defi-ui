/**
 *
 * HomeTvlGraph
 *
 */

import React from 'react';
// import PropTypes from 'prop-types';
// import styled from 'styled-components';

import { FormattedMessage } from 'react-intl';
import { ResponsiveLine } from '@nivo/line';
import {
  LineChart,
  Line,
  CartesianGrid,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
} from 'recharts';
import messages from './messages';

import Style from './Style';

const numeral = require('numeral');

function HomeTvlGraph(props) {
  const { totalTVL, graphData } = props;

  return (
    <Style>
      <div className="content">
        <div className="title">Total Value Locked</div>
        <div className="tvlNum num">$ {numeral(totalTVL).format('0,0.000')}</div>
        <div className="chart">
          <ResponsiveLine
            data={graphData}
            curve="basis"
            colors={{ scheme: 'yellow_orange_red' }}
            margin={{ top: 0, right: 0, bottom: 0, left: 0 }}
            xScale={{ type: 'point' }}
            yScale={{
              type: 'linear',
              min: 'auto',
              max: 'auto',
              stacked: true,
              reverse: false,
            }}
            yFormat=" >-.2f"
            axisTop={null}
            axisRight={null}
            axisBottom={null}
            axisLeft={null}
            enableGridX={false}
            enableGridY={false}
            enablePoints={false}
            pointSize={10}
            pointColor={{ theme: 'background' }}
            pointBorderWidth={2}
            pointBorderColor={{ from: 'serieColor' }}
            pointLabelYOffset={-12}
            useMesh
            legends={[]}
          />
        </div>
      </div>
    </Style>
  );
}

HomeTvlGraph.propTypes = {};

export default HomeTvlGraph;
