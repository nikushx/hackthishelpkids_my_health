import * as React from 'react';

type DependentName = {
    text: string;
    onClick: () => void;
}
type State = {
    labels: DependentName[];
  }
class StaticLabels extends React.Component<{}, State>{
    state: State = {
        labels: []
      }
      componentDidMount() {
        this.setState({
          labels: [
            {
              text: 'Stephen',
              onClick: this.StephenDrillDown
            },
            {
              text: 'Laura',
              onClick: this.LauraDrillDown
            },
            {
              text: 'Shawn',
              onClick: this.ShawnDrillDown
            }
          ]
        })
      }
      StephenDrillDown() {
        alert('To information regarding Stephen');
      }
      LauraDrillDown(){
        alert('To information regarding Laura');
     }
    ShawnDrillDown(){
        alert('To information regarding Shawn');
     }
      render() {
        return (
          <div>
    
            {
              this.state.labels.map((label, i) => {
                return(
                  <label
                    key={i}
                    onClick={label.onClick}>
                    {label.text}
                    </label>
                );            
              })
            }
          </div>
        );
      }
}
export default StaticLabels;