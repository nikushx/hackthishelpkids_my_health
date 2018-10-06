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

class AllergyHistory extends React.Component<Props> {
  render() {
    return (
      <div className="AllergyHistory">
        {
           this.props.personalHistory.map((allergies: any, i: number) => {
            return(
              <div style={historyBlock} key={i}>
                <span>
                  {allergies.allergy}
                </span>
                <br/>
                <span>
                  Severity: <span style={{color:'orange'}}>{allergies.severity}</span>
                </span>
              </div>
            )
          })
        } 
      </div>
    );
  }
}

export default AllergyHistory;
