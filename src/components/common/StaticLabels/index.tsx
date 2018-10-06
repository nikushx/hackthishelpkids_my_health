import * as React from 'react';

const labelStyles: React.CSSProperties = {
  width: '400px',
  height: '60px',
  border: '1px solid #666',
  padding: '10px 20px',
  fontSize: '20px',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
  cursor: 'pointer',
  marginBottom: '5px'
}

const relationStyles: React.CSSProperties = {
  color: '#777'
}

type Props = {
    text: string;
    relation: string;
}

class StaticLabels extends React.Component<Props>{
      render() {
        return (
          <div style={labelStyles}>
            <label>
              {this.props.text}
            </label>
            <label style={relationStyles}>
              {this.props.relation}
            </label>
          </div>
        );
      }
}
export default StaticLabels;