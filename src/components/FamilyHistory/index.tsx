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

class FamilyHistory extends React.Component<Props> {
  render() {
    console.log(this.props.personalHistory);
    return (
      <div className="familyHistory">
        {
          this.props.personalHistory.map((familyMember: any, i: number) => {
            return(
              <div style={historyBlock} key={i}>
                <span>
                  {familyMember.relation}
                </span>
                <br/>
                <span>
                  <b>{familyMember.condition}</b>
                </span>
              </div>
            )
          })
        }
      </div>
    );
  }
}

export default FamilyHistory;
