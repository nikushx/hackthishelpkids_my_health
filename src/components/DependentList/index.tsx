import * as React from 'react';
import StaticLabels from '../common/StaticLabels';
import WelcomeUsername from '../WelcomeUsername';
import Logo from '../common/Logo';
  
  type Dependents = {
    text: string;
    relation: string;
  }
  
  type State = {
    list: Dependents[];
  }
  
  class DependentList extends React.Component<{}, State> {
    
    state: State = {
      list: []
    }
    componentDidMount() {
      this.setState({
        list: [
          {
            text: 'Sai',
            relation: 'self'
          },
          {
            text: 'Laura',
            relation: 'wife'
          },
          {
            text: 'Shawn',
            relation: 'son'
          }
        ]
      })
    }
    render() {
      return (
        <div className="Portal">
          <Logo image="/my_health.png" />
          <WelcomeUsername username="Sai" />
          {
            this.state.list.map((dependent, i) => {
              return(
                <StaticLabels
                  text={dependent.text}
                  relation={dependent.relation}
                  key={i}
                />
              );            
            })
          }
        </div>
      );
    }
  }
  
  export default DependentList; 