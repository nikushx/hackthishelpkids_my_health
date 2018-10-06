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
          
        } a
      </div>
    );
  }
}

export default Medications;
