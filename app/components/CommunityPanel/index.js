/**
 *
 * CommunityPanel
 *
 */

import React from 'react';
// import PropTypes from 'prop-types';
// import styled from 'styled-components';

import { FormattedMessage } from 'react-intl';
import messages from './messages';

import Style from './Style';

import assetIconDefipulse from './images/defipulse.png';
import assetIconDharma from './images/dharma.png';
import assetIconDiscord from './images/discord.png';
import assetIconGithub from './images/github.png';
import assetIconMedium from './images/medium.png';
import assetIconSushi from './images/sushi.png';
import assetIconTelegram from './images/telegram.png';
import assetIconTwitter from './images/twitter.png';
import assetIconUniswap from './images/uniswap.png';

function CommunityPanel(props) {
  const {
    source,
    desc,
    link,
  } = props;
  
  return (
    <Style>
      <div className="sourceLogo">
        <img className={(source == "DeFi Pulse") ? "" : "hide"} src={assetIconDefipulse} />
        <img className={(source == "Dharma") ? "" : "hide"} src={assetIconDharma} />
        <img className={(source == "Discord") ? "" : "hide"} src={assetIconDiscord} />
        <img className={(source == "GitHub") ? "" : "hide"} src={assetIconGithub} />
        <img className={(source == "Medium") ? "" : "hide"} src={assetIconMedium} />
        <img className={(source == "Sushiswap") ? "" : "hide"} src={assetIconSushi} />
        <img className={(source == "Telegram") ? "" : "hide"} src={assetIconTelegram} />
        <img className={(source == "Twitter") ? "" : "hide"} src={assetIconTwitter} />
        <img className={(source == "Uniswap") ? "" : "hide"} src={assetIconUniswap} />
      </div>
      <div className="sourceContent">
        <div className="sourceContentTitle">
          {source}
        </div>
        <div className="sourceContentDesc">
          {desc}
        </div>
        <div className="sourceContentLink">
          <a href={link} target="_blank">
            {link}
          </a>
        </div>
      </div>
      <div className="clear"></div>
    </Style>
  );
}

CommunityPanel.propTypes = {};

export default CommunityPanel;
