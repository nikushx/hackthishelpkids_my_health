import * as React from 'react';
import store from '../../../store';
import { push } from 'connected-react-router';

const labelStyles: React.CSSProperties = {
  width: '300px',
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
    id: string;
    text: string;
    relation: string;
}

class StaticLabels extends React.Component<Props>{

  goToDrillDown = () => {
    store.dispatch(push(`/portal/${this.props.id}`));
  }

  render() {
    return (
      <div style={labelStyles} onClick={this.goToDrillDown}>
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