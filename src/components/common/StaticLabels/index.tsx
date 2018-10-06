import * as React from 'react';

type DependentName = {
    text: string;
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
              this.state.labels.map((label, i) => {
                return(
                  <label
                    key={i}>{label.text}</label>
                );            
              })
            }
          </div>
        );
      }
}
export default StaticLabels;