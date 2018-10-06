import * as React from 'react';
import StaticLabels from '../common/StaticLabels';
  
  type Dependents = {
    text: string;
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
            text: 'Stephen'
          },
          {
            text: 'Laura'
          },
          {
            text: 'Shawn'
          }
        ]
      })
    }
    render() {
      return (
        <div>
  
          {
            this.state.list.map((dependent, i) => {
              return(
                <StaticLabels
                  text={dependent.text}
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