import React from "react";
import PropTypes from "prop-types";

import { Panel, PanelHeader, PanelHeaderBack } from "@vkontakte/vkui";

import "./Persik.css";

var num = Math.floor(Math.random() * 101);

const Persik = (props) => (
  <Panel id={props.id}>
    <PanelHeader left={<PanelHeaderBack onClick={props.go} data-to="home" />}>
      Вы выиграли Алмазов💎   </PanelHeader>
    <h1 className="number">{num}</h1>
  </Panel>
);

Persik.propTypes = {
  id: PropTypes.string.isRequired,
  go: PropTypes.func.isRequired,
};

export default Persik;
