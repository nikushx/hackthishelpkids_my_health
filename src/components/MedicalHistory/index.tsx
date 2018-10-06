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
          
        } a
      </div>
    );
  }
}

export default MedicalHistory;
