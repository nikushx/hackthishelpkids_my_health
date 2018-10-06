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
                  {diagnosis.date}
                </span>
                <br/>
                <span>
                  <b>{diagnosis.description}</b>
                </span>
                <br/>
                <span>
                  {diagnosis.cause}
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
