import * as React from 'react';

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
              <div key={i}>
                <span>
                  Relationship: {familyMember.relation}
                </span>
                <br/>
                <span>
                  Condition: {familyMember.condition}
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
