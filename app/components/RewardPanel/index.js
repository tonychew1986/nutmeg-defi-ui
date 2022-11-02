/**
 *
 * RewardPanel
 *
 */

import React from 'react';
// import PropTypes from 'prop-types';
// import styled from 'styled-components';

import { FormattedMessage } from 'react-intl';
import messages from './messages';

import Style from './Style';

const numeral = require('numeral');

import ReactTooltip from "react-tooltip";

let iconInfo = <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAYAAABXAvmHAAAABmJLR0QA/wD/AP+gvaeTAAADWklEQVRoge2Zz0tUURTHP+VkSFNkU1HqIoKYRTsTaRX9gGoY24SEm378EwUFmYvKbT+MIIpEaR8FtcoftDTbBWkG+SO1rE0JGoi2OG/ozJ079u5719FovnDhDPee7/me9+7cH+dBGWX831jniWc90AgcBQ4AaaAGSAb9s8Ak8B4YBHqAAWDRU/zIqAPagQlgybGNAzeB2pKrBlLAfeBXSLHLtXngHrCtVOJbgG8WIZPAQ+AsUI8kuSFo25GpdQ54BExZ/GeAMyspPIE8dTNwL5AFKhy5moA+C19H0O8VVcBzI9AwcNwDdwb4YHA/C2J6QYJC8Z3AJl8BkNWqi8IkvLwJc9pc9UFaBK1GrLtxCVsonfgczCSaoxKlyF9tOn2oC4luFfcrUB2FRE+dYdznfBbZ4MaRP6oLksAIMaZSHfmb1AlXAkR4zn8sgn9G+c8jR5PQaFfOvRGCQ/wEAPoVx42wThXkn22yEYNnkCTGgJMROZqUjlHk0PhXHFROk6zAruiABDCt9DSaA2wZHVP2C2BhRaSFwwLwUv0+Yg6wJVCv7H7fiiKgT9kNZqctgbSy38UInEbm/ydgXwwerSFddJTCd/7MuVSMwFcUz+UYPDsUz4zZaXsDSWX/jBG4UtkbY/D8UPZmszPUsrSWYUtgVtkFGa8Ctii7YEbYEphS9h7vctyhNUyZnbYEhpS937scd2gNQ2anLYFBZR/yLscdh5U9YHbaEnil7Cyrf5TQR/Eec4AtgQHkMAewi2hHaV/IADsDewx4aw6wJbCI3IhyuOhfV2hcUnY3DqXIWuQSkdsBXW9UAG3Kvy2Cf1b5z1HkQlNsI/uMVNByuEP+Dh0Gc0XsMEgGMXN4gBztnZBCzh65p9Dl6L8XudeOBLYLnqi4X4h4qQepVeoSR2tUIgdcM2KejkvYQemSMMXf8kGaQMp8mrgb9//EckiSP22WgKe4FYyXRRWFSYwQbXUykQU+UijeW3E3hwRSYDLL4f1I9cBlx04Ap4DXFr7beHzyNjQjK4MZeBp4DJxH7q7bkUtNZWA3ABeQEmUx/9h/2LCoRt6G3uyitjnkqW8tlXiNGqRiNhZSrG6jwHVgdxwBPj+zNpD/mbWW/M+sE0iR+A1yqhxkDXxmLaOMfx2/AfDaP8xdfX8tAAAAAElFTkSuQmCC"/>

function RewardPanel(props) {
  const {
    earnedBalance,
    availableBalance,
    lockedBalance,
    priceNUT,
    distributionToken,
    distributionEpoch,
    blockHeight,
  } = props;
  
  return (
    <Style>
      <ReactTooltip id="reward" place="bottom" type="dark" effect="float"/>
      <div className="content">
        <div className="title">
          NUT distribution summary
        </div>
        <div className="panels">
          <div className="panel hide">
            <div>
              <div className="panelTitle">
                <div className="panelTitleText">
                  NUT Earned
                </div>
                <div className="panelTitleIcon" data-for="reward" data-tip="xxx">
                  {iconInfo}
                </div>
                <div className="clear"></div>
              </div>
              <div className="panelNum">
                {numeral(earnedBalance).format('0,0.000')}
              </div>
              <div className="panelDollarValue">
                ~ ${numeral(earnedBalance * priceNUT).format('0,0.00')}
              </div>
            </div>
          </div>
          <div className="panel hide">
            <div>
              <div className="panelTitle">
                <div className="panelTitleText">
                  Wallet Balance
                </div>
                <div className="panelTitleIcon" data-for="reward" data-tip="xxx">
                  {iconInfo}
                </div>
                <div className="clear"></div>
              </div>
              <div className="panelNum">
                {numeral(availableBalance).format('0,0.000')}
              </div>
              <div className="panelDollarValue">
                ~ ${numeral(availableBalance * priceNUT).format('0,0.00')}
              </div>
            </div>
          </div>
          <div className="panel hide">
            <div>
              <div className="panelTitle">
                <div className="panelTitleText">
                  Locked Amount
                </div>
                <div className="panelTitleIcon" data-for="reward" data-tip="xxx">
                  {iconInfo}
                </div>
                <div className="clear"></div>
              </div>
              <div className="panelNum">
                {numeral(lockedBalance).format('0,0.000')}
              </div>
              <div className="panelDollarValue">
                ~ ${numeral(lockedBalance * priceNUT).format('0,0.00')}
              </div>
            </div>
          </div>
          <div className="panel">
            <div>
              <div className="panelTitle">
                <div className="panelTitleText">
                  Distribution Epoch
                </div>
                <div className="panelTitleIcon" data-for="reward" data-tip="xxx">
                  {iconInfo}
                </div>
                <div className="clear"></div>
              </div>
              <div className="panelNum num">
                {distributionEpoch}
              </div>
            </div>
          </div>
          <div className="panel hide">
            <div>
              <div className="panelTitle">
                <div className="panelTitleText">
                  ETH block height
                </div>
                <div className="panelTitleIcon" data-for="reward" data-tip="xxx">
                  {iconInfo}
                </div>
                <div className="clear"></div>
              </div>
              <div className="panelNum">
                {blockHeight}
              </div>
            </div>
          </div>
          <div className="panel">
            <div>
              <div className="panelTitle">
                <div className="panelTitleText">
                  NUT Distribution / Epoch
                </div>
                <div className="panelTitleIcon" data-for="reward" data-tip="xxx">
                  {iconInfo}
                </div>
                <div className="clear"></div>
              </div>
              <div className="panelNum num">
                {distributionToken}
              </div>
            </div>
          </div>
          <div className="clear"></div>
        </div>
      </div>
    </Style>
  );
}

RewardPanel.propTypes = {};

export default RewardPanel;
