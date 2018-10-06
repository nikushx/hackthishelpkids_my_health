import * as React from 'react';
import { StateType } from 'typesafe-actions';
import rootReducer from '../../store/root-reducer';
import { cmdActions, CMDAction } from '../../store/cmd';
import { connect } from 'react-redux';
import { Dispatch, bindActionCreators } from 'redux';
import Picture from '../common/Picture';
import FamilyHistory from '../FamilyHistory';
import MedicalHistory from '../MedicalHistory';
import Medications from '../Medications';

const drillDownStyles: React.CSSProperties = {
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  color: 'black',
  height: '100vh',
  flexDirection: 'column'
}

const drillDownInfoStyles: React.CSSProperties = {
  backgroundColor: '#fff',
  width: '800px',
  minHeight: '200px',
  marginTop: '-50px',
  boxShadow: '1px 1px 5px #000',
  padding: '10px'
}

const drillDownName: React.CSSProperties = {
  width: '100%',
  textAlign: 'center',
  display: 'block',
  paddingTop: '100px',
  fontSize: '36px',
  fontWeight: 'bold'
}

const drillDownHeading: React.CSSProperties = {
  width: '100%',
  textAlign: 'center',
  display: 'block',
  paddingTop: '10px',
  fontSize: '24px',
  color: 'slate'
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
  state = { id: '', patient: { 
    image: '', 
    name: '', 
    family_history: [], 
    medical_history: [],
    medications: []
  } }

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
        <Picture image={this.state.patient.image} />
        <div style={drillDownInfoStyles}>
          <span style={drillDownName}>{this.state.patient.name}</span>
          <span style={drillDownHeading}>Family History</span>
          <FamilyHistory personalHistory={this.state.patient.family_history} />
          <hr style={{ borderWidth: '0.5px', width: '40%' }} />
          <span style={drillDownHeading}>Medical History</span>
          <MedicalHistory personalHistory={this.state.patient.medical_history} />
          <hr style={{ borderWidth: '0.5px', width: '40%' }} />
          <Medications personalHistory={this.state.patient.medications} />
        </div>
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