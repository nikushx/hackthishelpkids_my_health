import * as React from 'react';

const historyBlock: React.CSSProperties = {
  width: '50%',
  display: 'inline-block',
  textAlign: 'center',
  margin: '20px 0',
  fontSize: '18px'
}

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
              <div style={historyBlock} key={i}>
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
