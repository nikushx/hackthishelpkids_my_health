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

class Medications extends React.Component<Props> {
  render() {
    console.log(this.props.personalHistory);
      return (
        <div className="Medications">
        {
          this.props.personalHistory.map((medication: any, i: number) => {
            return(
              <div style={historyBlock} key={i}>
                <span>
                  {medication.medicine}
                </span>
                <br/>
                <span>
                  <b>{medication.prescribed_date}</b>
                </span>
                <br/>
                <span>
                  <b>{medication.frequency}</b>
                </span>
              </div>
            )
          })
        }
      }
      </div>
    );
  }
}

export default Medications;
