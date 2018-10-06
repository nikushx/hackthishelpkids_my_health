import * as React from 'react';
import StaticLabels from '../common/StaticLabels';
import WelcomeUsername from '../WelcomeUsername';
import Logo from '../common/Logo';
import { StateType } from 'typesafe-actions';
import { rootReducer } from '../../store';
import { CMDAction, cmdActions } from '../../store/cmd';
import { Dispatch, bindActionCreators } from 'redux';
import { connect } from 'react-redux';
  
  type Dependents = {
    id: string,
    name: string;
    relation: string;
  }
  
  type Props = {
    patientData: any,
  }

  type State = {
    list: Dependents[];
  }
  
  class IDependentList extends React.Component<Props, State> {
    
    state: State = {
      list: []
    }
    componentDidMount() {
      const filteredPatients = this.props.patientData.patients.map( (patient: any) => {
        return {
          id: patient.id,
          name: patient.name,
          relation: patient.relation
        }
      } );

      this.setState({
        list: filteredPatients
      })
    }
    render() {
      return (
        <div className="Portal">
          <Logo image="/my_health.png" />
          <WelcomeUsername username="Sai" />
          {
            this.state.list.map((dependent) => {
              return(
                <StaticLabels
                  id={dependent.id}
                  text={dependent.name}
                  relation={dependent.relation}
                  key={dependent.id}
                />
              );            
            })
          }
        </div>
      );
    }
  }
  

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

export const DependentList = connect(
  mapStateToProps,
  mapDispatchToProps
)(IDependentList);