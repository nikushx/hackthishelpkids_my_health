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
          this.props.personalHistory.map((familyMember: any, i: number) => {
            return(
              <div key={i}>
                <span>
                  Date: {familyMember.date}
                </span>
                <br/>
                <span>
                  Description: {familyMember.description}
                </span>
                <br/>
                <span>
                  Cause: {familyMember.cause}
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
