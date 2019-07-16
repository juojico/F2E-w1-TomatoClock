import React from 'react';
import styled from 'styled-components';
import AniIcon from '../components/Icons';
import { breakpoint } from '../themes/mixins';
import { FabButton } from '../components/Buttons';
import { Panel, PanelHeader } from '../components/Panel';

const FabButtonTodo = styled(FabButton)`
  position: absolute;
  right: 0;
  top: 0;
  z-index: 20;
`;

const SettingWrapper = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0,0,0,0.5);
  z-index: 11;
`;

const Setting = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  min-width: 300px;
  height: 50%;
  background-color: rgba(255,255,255,0.3);
  z-index: 12;
  ${breakpoint.down('m')`
    height: 100%;
  `}
`;

class SettingContainer extends React.PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      open: false,
      type: 'setting'
    };
  }
  onOpanClick = () => {
    this.setState({ open: !this.state.open, type: this.state.open ? 'setting' : 'delete' });
  }
  render() {
    return (
      <React.Fragment>
        <FabButtonTodo outLine onClick={this.onOpanClick}>
          <AniIcon type={this.state.type}></AniIcon>
        </FabButtonTodo>
        <Setting hidden={!this.state.open}>
          <Panel>
            <PanelHeader>SettingContainer</PanelHeader>
            <h3>提醒方式</h3>
          </Panel>
        </Setting>
        <SettingWrapper hidden={!this.state.open} onClick={this.onOpanClick}>
        </SettingWrapper>
      </React.Fragment>
    );
  }
}

export default SettingContainer;
