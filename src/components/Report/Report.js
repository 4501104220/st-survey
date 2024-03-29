import React from 'react';
import ReportItem from './ReportItem';

import './Report.css';

class Report extends React.Component {
    render() {
        let {reportResult, results} = this.props;
        return (
            <div className="Report">
                <h4>Total Data: {results.length}</h4>
                {reportResult.map((d, index) => {
                    return (
                        <ReportItem data={d} key={d._id}/>
                    )
                })}
            </div>
        );
    }
}

Report.propTypes = {};
Report.defaultProps = {};

export default Report;
