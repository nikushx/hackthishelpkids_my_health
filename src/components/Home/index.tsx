import * as React from 'react';
import { StateType } from 'typesafe-actions';
import rootReducer from '../../store/root-reducer';
import { cmdActions, CMDAction } from '../../store/cmd';
import IntroText from '../../components/common/IntroText';
import { connect } from 'react-redux';
import { Dispatch, bindActionCreators } from 'redux';

const cmdWindowStyles: React.CSSProperties = {
  padding: '10px'
}

export type Props = {
  testProp: number;
  cmdLog: string[];
  onIncrement: (num: any) => any;
  onSendCommand: (cmd: string) => any;
}

type State = {
  log: string[];
};

class IHomePage extends React.Component<Props, State> {
  state = { log: [] }

  addNum = () => {
    this.props.onIncrement(1);
  }

  sendNewCommand = () => {
    this.props.onSendCommand('NEW LOG');
  }

  render() {
    return (
      <div style={cmdWindowStyles}>
        <p onClick={this.sendNewCommand}>Hello</p>
        <IntroText>Nikush Dalia</IntroText>
      </div>
    );
  }
}

/**
 * Redux Connections
 */

type RootState = StateType<typeof rootReducer>;
type RootAction = CMDAction;
// type RootAction = ReactRouterAction | CountersAction;

const mapStateToProps = (state: RootState) => ({
  testProp: state.cmd.reduxCounter,
  cmdLog: state.cmd.cmdLog
});

const mapDispatchToProps = (dispatch: Dispatch<RootAction>) => bindActionCreators({
  onIncrement: cmdActions.add,
  onSendCommand: cmdActions.newCommand
}, dispatch);

export const HomePage = connect(
  mapStateToProps,
  mapDispatchToProps
)(IHomePage);