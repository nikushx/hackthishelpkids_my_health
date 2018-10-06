import * as React from 'react';
import { StateType } from 'typesafe-actions';
import { rootReducer } from '../../store';
import { CMDAction, cmdActions } from '../../store/cmd';
import { Dispatch, bindActionCreators } from 'redux';
import { connect } from 'react-redux';
// import { Link } from 'react-router-dom';
// import { ROOT_PATH, TICKER_PATH } from '../../constants/paths';

const navStyles: React.CSSProperties = {
  backgroundColor: '#03DAC6',
  position: 'absolute',
  width: '100%',
  bottom: 0,
  height: '40px'
};

// const inputStyles: React.CSSProperties = {
//   backgroundColor: '#3700B3',
//   position: 'absolute',
//   width: '100%',
//   height: '100%',
//   padding: '0 10px',
//   color: '#fff',
//   fontFamily: `'Source Code Pro', monospace`
// }

const commands = [
  'help',
]

type State = {
  cmdInput: string
};

class ICMDLine extends React.Component<object, State> {
  state = { cmdInput: '' }

  onInputChange = (e: React.FormEvent<HTMLInputElement>) => {
    this.setState({
      cmdInput: e.currentTarget.value
    })
  }

  sendCommand = () => {
    const command = this.state.cmdInput.substr(1);
    if (commands.indexOf(command) > -1) {
      alert(command);
    } else {
      alert("command not found");
    }
  }

  render() {
    return (
      <div style={navStyles}>
        {
          /*
          <Link to={ROOT_PATH}>Home</Link>
          <Link to={TICKER_PATH} style={{ marginLeft: '20px' }}>
            Ticker
          </Link>
          */
        }
      </div>
    );
  }
}

type RootState = StateType<typeof rootReducer>;
type RootAction = CMDAction;

const mapStateToProps = (state: RootState) => ({
  testProp: state.cmd.reduxCounter,
  cmdLog: state.cmd.cmdLog
});

const mapDispatchToProps = (dispatch: Dispatch<RootAction>) => bindActionCreators({
  onSendCommand: cmdActions.newCommand
}, dispatch);

export const CMDLine = connect(
  mapStateToProps,
  mapDispatchToProps
)(ICMDLine);