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
import AllergyHistory from '../AllergyHistory';
import CircleButton from '../common/CircleButton';
import CircleExport from '../../CircleExport';
import * as ReactModal from 'react-modal';
import InputText from '../common/InputText';
import Button from '../common/Button';
import { RelationCondition } from '../../store/cmd/actions';

const customStyles = {
  content : {
    top                   : '50%',
    left                  : '50%',
    right                 : 'auto',
    bottom                : 'auto',
    marginRight           : '-50%',
    transform             : 'translate(-50%, -50%)',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center'
  }
};

const drillDownStyles: React.CSSProperties = {
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  color: 'black',
  flexDirection: 'column'
}

const drillDownInfoStyles: React.CSSProperties = {
  backgroundColor: '#fff',
  width: '800px',
  marginTop: '-50px',
  boxShadow: '1px 1px 5px #000',
  padding: '10px',
  marginBottom: '100px'
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
  onNewFamilyHistory: (relationCondition: RelationCondition) => any;
}

type State = {
  modalIsOpen: boolean;
  id: string;
  patient: any;
  newFamilyHistoryCondition: string;
  newFamilyHistoryRelation: string;
};

class IDrillDownMain extends React.Component<Props, State> {
  state = { newFamilyHistoryCondition: '', newFamilyHistoryRelation: '', modalIsOpen: false, id: '', patient: { 
    image: '', 
    name: '', 
    family_history: [], 
    medical_history: [],
    medications: [],
    allergies: []
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

  addFamilyHistory = async () => {
    await this.props.onNewFamilyHistory({
      condition: this.state.newFamilyHistoryCondition,
      relation: this.state.newFamilyHistoryRelation
    });
    this.setState({
      patient: this.props.patientData.patients[0]
    });
  }

  addMedicalHistory() {
    alert('now')
  }

  addMedsHistory() {
    alert('now')
  }

  addAllergyHistory() {
    alert('now')
  }

  clickExport = () => {
    const exportObj = this.props.patientData;
    const dataStr = "data:text/json;charset=utf-8," + encodeURIComponent(JSON.stringify(exportObj));
    const downloadAnchorNode = document.createElement('a');
    downloadAnchorNode.setAttribute("href",     dataStr);
    downloadAnchorNode.setAttribute('download', "patientExport.json");
    document.body.appendChild(downloadAnchorNode); // required for firefox
    downloadAnchorNode.click();
    downloadAnchorNode.remove();
  }

  openModal = () => {
    this.setState({modalIsOpen: true});
  }

  closeModal = () => {
    this.setState({modalIsOpen: false});
  }

  onConditionChange = (event: React.FormEvent<HTMLInputElement>) => {
      this.setState({
          newFamilyHistoryCondition: event.currentTarget.value
      });
  }

  onRelationChange = (event: React.FormEvent<HTMLInputElement>) => {
      this.setState({
          newFamilyHistoryRelation: event.currentTarget.value
      });
  }
  
  render() {
    return (
      <div style={drillDownStyles}>
        <ReactModal
          isOpen={this.state.modalIsOpen}
          onRequestClose={this.closeModal}
          style={customStyles}
          contentLabel="Example Modal"
        >
          <button onClick={this.closeModal}>close</button>
          <InputText
            type="text"
            text={this.state.newFamilyHistoryCondition}
            placeholder="New Condition"
            onChange={this.onConditionChange}
          />
          <InputText
            type="text"
            text={this.state.newFamilyHistoryRelation}
            placeholder="New Relation"
            onChange={this.onRelationChange}
          />
          <Button bgColor="white" text="Add to Family History" onClick={this.addFamilyHistory} />
        </ReactModal>
        <CircleExport onClick={this.clickExport} />
        <Picture image={this.state.patient.image} />
        <div style={drillDownInfoStyles}>
          <span style={drillDownName}>{this.state.patient.name}</span>
          <span style={drillDownHeading}>Family History</span>
          <CircleButton bgColor="white" text="+" onClick={this.openModal} />
          <FamilyHistory personalHistory={this.state.patient.family_history} />
          <hr style={{ borderWidth: '0.5px', width: '40%' }} />
          <span style={drillDownHeading}>Medical History</span>
          <CircleButton bgColor="white" text="+" onClick={() => this.addMedicalHistory} />
          <MedicalHistory personalHistory={this.state.patient.medical_history} />
          <hr style={{ borderWidth: '0.5px', width: '40%' }} />
          <span style={drillDownHeading}>Medications</span>
          <CircleButton bgColor="white" text="+" onClick={() => this.addMedsHistory} />
          <Medications personalHistory={this.state.patient.medications} />
          <hr style={{ borderWidth: '0.5px', width: '40%' }} />
          <span style={drillDownHeading}>Allergies</span>
          <CircleButton bgColor="white" text="+" onClick={() => this.addAllergyHistory} />
          <AllergyHistory personalHistory={this.state.patient.allergies} />
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
  onSendCommand: cmdActions.newCommand,
  onNewFamilyHistory: cmdActions.newFamilyHistory
}, dispatch);

export const DrillDownMain = connect(
  mapStateToProps,
  mapDispatchToProps
)(IDrillDownMain);