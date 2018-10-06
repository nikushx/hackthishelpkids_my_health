import * as React from 'react';

type Props = {
    text: string;
}
class StaticLabels extends React.Component<Props>{
      render() {
        return (
          <div>
            <label>
                {this.props.text}
            </label>
          </div>
        );
      }
}
export default StaticLabels;