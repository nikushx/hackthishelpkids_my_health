import * as React from 'react';
import { StateType } from 'typesafe-actions';
import rootReducer from '../../store/root-reducer';
import { cmdActions, CMDAction } from '../../store/cmd';
import IntroText from '../../components/common/IntroText';
import { connect } from 'react-redux';
import { Dispatch, bindActionCreators } from 'redux';
import LoginButtons from '../LoginButtons';
import Logo from '../../components/common/Logo';

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
// making the state an array of strings
  log: string[];
};
// Props always go first
class IHomePage extends React.Component<Props, State> {
// must always initilize the state before use
  state = { log: [] }

  sendNewCommand = () => {
    this.props.onSendCommand('NEW LOG');
  }

  render() {
    return (
      <div style={cmdWindowStyles}>
        <p onClick={this.sendNewCommand}>Hello</p>
        <IntroText>Nikush Dalia</IntroText>
        <LoginButtons/>
        <Logo image='/my_health.png'/>
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