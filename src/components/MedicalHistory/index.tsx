import * as React from 'react';

type Props = {
  personalHistory: any
}

class MedicalHistory extends React.Component<Props> {
  render() {
    console.log(this.props.personalHistory);
    return (
      <div className="MedicalHistory">
        {
          this.props.personalHistory.map((diagnosis: any, i: number) => {
            return(
              <div key={i}>
                <span>
                  Date: {diagnosis.date}
                </span>
                <br/>
                <span>
                  Description: {diagnosis.description}
                </span>
                <br/>
                <span>
                  Cause: {diagnosis.cause}
                </span>
              </div>
            )
          })
        } 
      </div>
    );
  }
}

export default MedicalHistory;
