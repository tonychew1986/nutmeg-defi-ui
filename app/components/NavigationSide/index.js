/**
 *
 * NavigationSide
 *
 */

import React from 'react';
import PropTypes from 'prop-types';
// import styled from 'styled-components';

import { FormattedMessage } from 'react-intl';
import messages from './messages';

import {
  Link,
} from 'react-router-dom';

import ReactTooltip from "react-tooltip";

import NavSide from './NavSide';

import logoNutmeg from './images/nutmeg.png';

let iconHome = <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAYAAABXAvmHAAAABmJLR0QA/wD/AP+gvaeTAAAD3UlEQVRoge2Zz29NQRTHP68eIq348WpB7S3s2mprI1igXm1EmoYW2+qf0KgfKbZExYb4FSuRCMIODbuqhViosqBNq4qVRMWPZ3HmeudO77ude9+9LdFvMsm9c+ec8525Z86cmYF5zOP/RiYhPRVAA7AVqAPWAWuAKvP9CzAGvAQGgQfAAPArIfuxsRY4BYwChYhlBDgJ1Mw6ayAHnAe+OZINK1PAOWDlbJFvAz4GEBkDLgAdQC3SyYWmVCOutR+4CIwHyE8CrWkSzyKjbht+COSBBVb7CqDdFHuuZYEW4FGAvj7zPVEsAe5Yhl4B20Jk2lXbfSHtmoFhS/dtYzMRZJlO/jJQOYOcawdAotVVpncikT9hu81hR7kMQnwv7uG6x7J1NhLTALQRTL4J8eEk1pGM0dVk3u1O7ImrOIc/2lw29U3IAlQADsVVrtBldP0CGk3dNWX3A7CilHBFiOJepBMgk6zLPOcojnx1LMp+eDoyyl4n8MY8rwKOR1W6Fv8itV19yyAj38PME9kFlUZXJ36XbFb2p5DUxBmnlPDDBEjGRb/iccJVaAH+3CafCjU3tCgebwl3+T9oUkJjpLAqRkAWeK/4NNgNgnq0VT3fA36kQk0WrzzQDVwB7iJ5k8YP4L563+Ki+CbFHneUTbOIDJLQHQOeAN+VnVFgYwm5A6rdDRdDL5RAbVmUZT5tBs4gPmwnbj+R5G1ZiI561f65i9FPSiBHeFYZhp34/dcuzwjw6QB7q5TMpIthHf8XES0p0xgpQfwtsi8oFVFse4vV+5TdOM0IU7DePyPrS18QkSRhu1CcrBJgB/AO+RPdwFJHOdteZBfSk7guAuG0sIGQSRzkh0PqeX1KpKJAcxiyPwZ1YFA9b0qcTnRsVs8DLgKNFH/ZOHOfSkwoPvUuQhX4Q+BcJnO78Idfp2QO5MTME3yUCjU3PFY8eqMI1iCx2hNuVt8yyO7sCMlsaKqAo0anDtN5Zf8rETc0IMd9noJhige1Okfvicta4YjSt9PUVSFbSq/+TBzFOWTh8JRcNfV6U98Zl7VC0Kb+urI7Qcimfia0KkV6xBuR0UrqWCVPMbHTf6QA7C7XQB/BnUgDNvnTSSjNIsd8WvE1inMiCVThd5sCcIvpB8axsYTpnXiNPzrFRR7/hPXIJ3a46yGLnFXa+X0/EpmirNhZZJHScV5HnMRGPgh78C/vXnkPXEL2sPXIidsiU6pN3UHkiLKUfNkT1hUrkL+hF7u45Ssy6stni7zGGuTE7J0jWXtr2QusLodAktes9fivWWvwX7OOIrc6T5Fr1kH+gmvWeczjX8dvvOOOUpasTigAAAAASUVORK5CYII="/>

let iconEarn = <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAYAAABXAvmHAAAABmJLR0QA/wD/AP+gvaeTAAACdUlEQVRoge3YP08UQRgG8N9pJNFItFEbAyQSjaWF2hiNINpY0SnG+B20wdKINmopWGjCJ/BPYusHsDA2NoIQxIBWIhDQBIPFLmG4u71dljvuMPskb26y98zO87wzO/vuUKBAgQIFCvyH6MIzTGMFq02KlVjDCDqzir+M+SaKTopfuJQmvqtFxYcmOmoZeBaQJ9CDtjTXDUQbejEZ6Bqu1WE6IPY0Wt0m0Gtd11QtYvjANjPz5Wiz8cFORLjeyvEAy7Kv12UMpQjrxngc3SncWtpSSSUsbEL8WiykiBoMuIONNECUzXrNQAm3MBbwZ3APextloJ4Ylmz8HXbn1bYdBq5In72bWbXtaqDQJPQH7VHsi+N+cP1v3ptvZRfKsuvAm6DPteB6CTcwELczaSsnrib8VxKVGPtTxC2iPYUzhLtxexbP437zeIuvCf2StFWQ8u5CWWfgqKimqXaPP7idQ9vmSHXABXyXnIz+Kn22tIQagXZcxXHR3n8RZ+L/3uNsHm3bMQPduKOydDgUjL2UV1saqRcfRev9peS3Zi18ie8/Lco+0XY+EIw9nkNbKukEfpdxHuOwyMwSXuNgioEJlWu+PJ40wsBolYGWRDVMeO0DTmNPwhh9KhMRxifVk7BlA2Hh9bOGgCzb6inRrIWfrz/wCAdyaMtEWiunl3G9jDuLhyoz23Ll9EL8WxJ9P8/jFY7EnJN4IXqbLsr2QTOGzzhWDwM77pOyvBqdCdrnGixqMzgftL/VIo5YdzopOkhq9rFKn43HKk9rdeiUXGi1QsxJOdgiynormpgTVQKZ0CGaqinNP9ydirWkZr5AgQIFChTYcfgHMUYxgeMhvX4AAAAASUVORK5CYII="/>

let iconFarm = <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAYAAABXAvmHAAAABmJLR0QA/wD/AP+gvaeTAAADl0lEQVRoge2YSUhVURjHf6ZJZdazoMmiVpoQQS2iRWpry6KICNpEIw0QFLURKqJW0iqIBgKLNkFBJBZppA2rWkSC2UwRFJUR2eDQU1uce7nfve/c4dz3nrW4f/jgvnf+33TG7xxIkCBBgv8RhUAD8BYYMZQ+4Pjoh+xGA+aBS/kx+iG7Eafn44xAHfAQGDDUC4UMqCACv1HwGyP6qAOGydPISaNRsFLwH0XUeUj8kQuFaQKTgbTFT1u/wzAgfJTFiDEQpgmA6nlbZ2WefGRgTDbKHnSI79oc2g1ELhO4K76X59BuLMQZXu86SOXBRwZyOQLfgcfWdyGwLIe2fZHLBOAfrQMddMM7E9gPNAPvgF8eXr4kDbwCjgDj4yQwHWgCBkcp4CB5AIwzTeDbfxC4lEOmCUi5BWwBKoESS+YDW4FWD3cY2BTFWQjGAgeF3RdxEugm2q5SDTwTemlglXHImSj22AxEOe7g7xCttrGRAtqF/hdgqlm8WkQ+Ny7g7nmT4G2kcI/EuRg2JApwT01flAN/BDmbw6hG2OkHpmRha7Gw9SmIeEAQb2Xh0EabsLczCzuXhZ2LQcQWQdziw5kLXAV6gC5gO/63tm3C3lXTqC1UAUM402dREPm9cFipaS9BnYreXWqbj735gtNpHjsAl4SN695Gb8/9xjmuJ5F5R12PGk4vuoAFmv9LgV7rux9VDpigGDiMKg4BlhByZe3FybZU076HzN63t0odSn34ceSGzoG3Gv0gvmdp+PfRb2Mdmv9A7Wq5wk3dn0We369x5n418NzT/gRVixzFSf4lsM/HaY347kYzh4GNwGxPoJ3AHKAeZyYcA64AH318AbAbZ8haA3gLUdNpHTAhgHdb2NujaZ+G+3Vis6d9HqpT7fbQN6fZuA+y6jCFANQKO4Pop9MGwbnnY6decLqjOD4jFJ4RfrfVoQxVNdp2zvrwZJV5woeTEpy+KM5nou63tlI7ZkmUoRa1rf8V9xyX2Ct4TT6cCsHx2+0ysALn9BtBLeaaQA2FWtw9PwysDuHLRHVV60nBaYkWvsIunGcSW9pQp24VMNGSKlQ5cdvDHcL/hLZRBLwROo+BpahrY4UVvHwAXmOSAKiRkNMpqvQAayP6WEXmK7VOrpkGb2MGcBr37uQnA8B51DoywQ6CHw2uoUY7K5SjSuIW4CmqTvqJKu6aUQsym5O3AjiFOhj7gc+WL+NpkyBBggSjh79mC/pwQWgGBwAAAABJRU5ErkJggg=="/>

let iconPortfolio = <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAYAAABXAvmHAAAABmJLR0QA/wD/AP+gvaeTAAAECklEQVRoge2ZW4hOURTHf0MyuZsXyZQHYco9ZFCMS+SaUErzpKQUT8qTUkq55TJySUZJPLg8iAfl9uJSrhOilGaSeCDGZcwYM5+H9X2+dc639zl7n3OYl/nX7pz23muv///svde+HOhGJjgHfM8/Z3cxF29UA7lQugfM7EpSPjhAqYAc0AkcBHp3HbV49ADeUST9iFIhD4GhXUUwDjUUiX4AegILgecERbwBRv4rEhXAaqAOuIl80ea84y9AE3Ad2A+sAPop2+OKZJ3K7wUcNYjItCfmA5eANsxj2JZakWhTA3xU+aZJuwn4TXA4pZ4T04H7nqTjUiNQZvG3OVR3T1Li5cBhoMNAoAHYCawBxoTKxgK1wF7gmUXA7hjfx1TdDmCKL/lK4HHIaRsybica6ut6YVQDZ0J1JsX47wW8UPVv+ZAfjUxE7fAqMCrCJkoAwCpV/sqRx6JQu7NcjCoJkm8HNjrYxQk4r8q3uxBBQqxeJ87FGZQTHDbNwAJHZ1EC+gMtqrwqop0yYAZwCHgfarc5jsRhgl/elTxEC6hVZU8s9pOAXUh0skWu01EEphOMNi7DxlXAFVW2VeVXIcPpVQTpd8jeqTqOgI7zVzzJRwmoAH7l8zuRxWwr0hM20h+RFXsOsneKxXxl3EZ0tPEVsF7ld+ZT3CJX4+v8ojKui6lrg03AjQiiLUh0WgWcUvlnfRxXENzbmBapNAI+h8p+IUO0FolOBejV/CfQ19XxamXYkIw7YBewDfiE9MR65IPZ8FS1sdzVcZ0y2unOtwRxC5kLdqg29tkqhWf1WPWepgeywAP1Pt7V6C1F1WNSOM+iB0aoNhpdjb6GnGeRnGK3AYNUG19slcKN90noLAonDH5c8EO9O0ehb2TfAzmgPoGIIco+duNWQFZzoAdwkqCIk/iJGKdsm1yNbimjtR7OTEgrYomyuxHlROO5ep/gytSCTmSxqld563CfE3PU+wtXp/qoZ9ur+yJpTzSo+itdnQ1G7m0KhpP9+RrhK6KK4k61FQmpztC70SPJ+BrhI6Je1bng62ieMv5JsvOADS4ihlM89OTyfLxxTzVwHfutWRJEiSgDrqn8O0mdVBM8E29IRbkUNhH6GrEDmJrGid5atwPL0jRmgEmEPmIeTOugnOBFUgvB2JwFTCJyZHQLDeabuS1kNyfKkGGjv3wjMCyj9gHz3ehl0v8xGU5wwhbIZxn1/qKS0v9X7cjtga/DqrydDpWFYZPplw+jN3JHafo/8BK5/1+MnKQGION7CLKrXJovb6D0LqgDuW37b38jpwF3DSKSpDukDJVpMA/Zdui9k0tqzdvNzYJEFtFkMBJea5BD0EhkCA1ETlJfgdfIlvg28ifTesbtRjf+M/4AH2g1PzlBoy0AAAAASUVORK5CYII="/>

let iconFaq = <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAYAAABXAvmHAAAABmJLR0QA/wD/AP+gvaeTAAAEd0lEQVRoge2ZX4hUVRzHP7dcaAtHfEtNVxOcSrN2CSLFBS1fSmazLBJa6iXwJXvosdqtdsVeI6Q0jd4CH5agdtRy1wi3YIUgDLUiVm2F6M+6k1tpqNvD7wz7O+fec+bemdv00HzhwMw5398539+9v3N+vzMDLbTw/0ZUh00X0AN0A7cCS03/T8AF4BhwGBgHruegMRdEwDbgDDCbsp0EngJu+A/0WlgBfEl64W4bAzqartqgG/jFEfQbsB8oAUXgFtNuBx4F3gEuOjZTwINN1k43cEWJ+AMYAAopbAtAH3DZsd/wryhNwArsJ38e6Kxjnk7gBzVPBViek0YvIuyYPw8sbmC+DuCsmm+U+k6/1NiG/dpDT/4OYBJxclWAdw92OD6di9IERNhH5UAN/nuKe6AG91XF/aoxmX50qUV+JbxhFwJ/Yr+thQH+AuB3xV+Xg95YkulRnz80C/rwLNCuvt8MPBPgV4AP1PeH0gjMimPMPaGeAM8NtWo7TXiDPqm4n+agN4Zv1QKhTblJ8aaxE9emBH4EPADswXZ4BnF6FHgNCeGGoGN0foB3UPHeAt5U3w86wnuBb4i/LV87DTxOnUftX2qimzycRcDfircauBOpPGfN2CJgJXA8g/CkGipz0rugJljm4bycYvEhpGZKU0MVkf12IMHmZzKWH58o41LC+I3AuRQO6Ja1hhrEPp6vZHGiXxm+nTBeyii+3hqqy9jqN5EqnNYqoyniG7msxnc7YxF2zDdaQy3GduI4KTf2F8roeWdsxvRfQypWjV7ssPE9+S3AiJnrkvn8iIfbiR1Oj6VxYJ8y6HPGdpmFB53+CLlC1qqhBvGH2+spbE6lcWBCGaTdPOuUja+G2hIQX20PJ9gVsE+ne0NCioo4DbSldEA/pf0ezqjifAQsMe1j1X/UY6ur3v6QkBcUccj0zUOul31mPClDjyg7Xw2ls/wS1b9U9Vc8tlsVZyTkgD5lho0TFezXfBG5uJeQZNeOnRt8NZSeI8sY2JFxJuSAK7ae5quhGnFgvhq3Snz3PvC9Z4KzwLvIEVsLV1NwskLPOS9EXAOcQLwsIzFfdDh3I/vhCHIf1gXgLHCXZ+5LinOb6td7YMpj26E4P4YcqBeH1QK+ZHNUccpG1HLgkOof9tj2KM6R3FQrvKQWeN/D2cxcyZ3UrgLrPbZ7Fc9NrrngfrVABf9G3oF9l9Din/PYFLBvfGtyU+3ghFrkjQCvE6l09Z64jhzZ24kXbDsVbyxfyTa2q4UuU7uMLpH8Nnodni7x9+WoN4YI+aWhutgk9mmThM3Ad4Qd6FZjEznqTUQHUkNVFzwH3FfDpg0p4l4kOYTasBOse6znjvXM3RtmkTwxgPwyVwsFJPf0IU++mrSG1Hw7c9abiI3EL+hTyMV9K3OX+nakniohR6X7x0jFiB9WfeVmOACSYT8nvkkbbdPNcgCk1noC+DqDwDHktJnwjI8304EqIiTZ9QOfISfPDHLfnUTKg1eIJ6kiEvNlJJzGkR/SWmihBYN/ALQGQwL6J4vVAAAAAElFTkSuQmCC"/>

let iconCommunity = <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAYAAABXAvmHAAAABmJLR0QA/wD/AP+gvaeTAAACnElEQVRoge2Yu24TQRSGPxBIFkmsEAkokRIFEoGwgQLxCFwKwsU1abiIBwBCCw8CNQRakBDQQRyQgAJSYKBIw0VCkJsbh2LOkrPZtXeO12u22E8aabWz5z9n1jPzzxoKCgoKCvrAIHALeA0sSZsHZqQvb7ohJoGvwHqb9gWYyJFuiDLQ6JAkaJ+AoRzoRphRYr+BaWCPtGm5F/TfyIFuhDdK6FJM/xXVP58D3QgrSmhXTP9u1b/8P3S3JiRaNxTVMjzbM92kASyo67Mx/freQkx/v3Uj3CS82C7idoUhoovteg50I5RxW1kW22gWurFMAJ87JGkQNhxfd7XqpmIA97PXgT/S6rg9ekA9Z3VXX92+0Dd3zYq+uasPp4E5oEnyG61KTDfuWvXQb0otpyzFJ4nqNixx3bjrsDHXGZ8B1I2iJYlbNgxgSe6VjLle+QxAT5sRnwBBT6HLMf3dHtBGVNyaT4AesYUs3dVUU7cDyNJdTTX9VA/vNybKwl0nVfwPn4BHKuAjcNCYsJfuOg68V/XM+gQdwS0WvXBmgRpwADdVdgCjwHFgm7EozXbRGBXNsuSoSU69oayy4TmJ1CSg01x+TG/++hgEniTkWgHOWYWrwLM2gg3c2wI4ib9rBy1w1xOiUcYd9OKefQpUrMVrKsAdEVrEvY2rqviWofDNraUGcU20FyXXbeBQmsJ9mEtRvMlds0JPm52GOLO7tmNLmmDCxmLVShP7j6R/JXJP2gF8V9fjhrh96vpbyhpS8ZCNufwWGPOIGQPeqbgHmVXnwWHCrt0E7gJTwF7ceb8k11PAPcILfw2Du2bFBZJdO66t0oW7ZkUFeIF/8c9J6a4BabfRzRwFzgPHcMfg4Hv5F/ABeAncx329FRQUFMBf7H/vROaIHugAAAAASUVORK5CYII="/>

function NavigationSide(props) {
  const {
    currentPage,
    onSelectPage
  } = props;
  
  return (
    <NavSide>
      <Link to="/">
        <div className="logo">
          <div className="svgLogo">
            <img src={logoNutmeg} />
          </div>
          <div className="logoText">
          
          </div>
        </div>
      </Link>
      <Link to="/">
        <div className={(currentPage == "dashboard") ? "navSideEntry navSideEntrySelected" : "navSideEntry"} onClick={() => onSelectPage("dashboard")}>
          <div className="icon">
            {iconHome}
          </div>
          <div className="iconText">
            Dashboard
          </div>
          <div className="icon"></div>
        </div>
      </Link>
      <Link to="/earn">
        <div className={(currentPage == "earn") ? "navSideEntry navSideEntrySelected" : "navSideEntry"} onClick={() => onSelectPage("earn")}>
          <div className="icon">
            {iconEarn}
          </div>
          <div className="iconText">
            Earn
          </div>
          <div className="icon"></div>
        </div>
      </Link>
      <Link to="/farm">
        <div className={(currentPage == "farm") ? "navSideEntry navSideEntrySelected" : "navSideEntry"} onClick={() => onSelectPage("farm")}>
          <div className="icon">
            {iconFarm}
          </div>
          <div className="iconText">
            Farm
          </div>
          <div className="icon"></div>
        </div>
      </Link>
      <Link to="/portfolio">
        <div className={(currentPage == "portfolio") ? "navSideEntry navSideEntrySelected" : "navSideEntry"} onClick={() => onSelectPage("portfolio")}>
          <div className="icon">
            {iconPortfolio}
          </div>
          <div className="iconText">
            Portfolio
          </div>
          <div className="icon"></div>
        </div>
      </Link>
      <Link to="/faq">
        <div className={(currentPage == "faq") ? "navSideEntry navSideEntrySelected" : "navSideEntry"} onClick={() => onSelectPage("faq")}>
          <div className="icon">
            {iconFaq}
          </div>
          <div className="iconText">
            FAQ
          </div>
          <div className="icon"></div>
        </div>
      </Link>
      <Link to="/community">
        <div className={(currentPage == "community") ? "navSideEntry navSideEntrySelected" : "navSideEntry"} onClick={() => onSelectPage("community")}>
          <div className="icon">
            {iconCommunity}
          </div>
          <div className="iconText">
            Community
          </div>
          <div className="icon"></div>
        </div>
      </Link>
      
    </NavSide>
  );
}

NavigationSide.propTypes = {};

export default NavigationSide;
