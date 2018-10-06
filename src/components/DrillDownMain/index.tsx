import * as React from 'react';
import { StateType } from 'typesafe-actions';
import rootReducer from '../../store/root-reducer';
import { cmdActions, CMDAction } from '../../store/cmd';
import { connect } from 'react-redux';
import { Dispatch, bindActionCreators } from 'redux';

const drillDownStyles: React.CSSProperties = {
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  color: 'black',
  height: '100vh'
}

export type Props = {
  patientData: any,
  onIncrement: (num: any) => any;
  onSendCommand: (cmd: string) => any;
}

type State = {
  id: string;
  patient: any;
};

class IDrillDownMain extends React.Component<Props, State> {
  state = { id: '', patient: {} }

  componentDidMount() {
    const url = window.location.href;
    const n = url.lastIndexOf('/');
    const id = url.substr(n + 1);

    const foundPatient = this.props.patientData.patients.find( (patient: any) => {
      return id === patient.id;
    } );

    console.log(foundPatient);

    this.setState({
      patient: foundPatient
    })
  }


  
  render() {
    return (
      <div style={drillDownStyles}>
        k
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
  patientData: state.cmd.patientData
});

const mapDispatchToProps = (dispatch: Dispatch<RootAction>) => bindActionCreators({
  onIncrement: cmdActions.add,
  onSendCommand: cmdActions.newCommand
}, dispatch);

export const DrillDownMain = connect(
  mapStateToProps,
  mapDispatchToProps
)(IDrillDownMain);