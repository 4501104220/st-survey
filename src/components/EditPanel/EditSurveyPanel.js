import React from 'react';
import PropTypes from 'prop-types';
import './EditSurveyPanel.css';

class EditSurveyPanel extends React.Component {

    update() {
        this.props.onUpdate({
            title: this.title.value,
            subTitle: this.subTitle.value
        });
    }

    render() {
        let {title, subTitle} = this.props;
        return (
            <div className="EditSurveyPanel">
                <div className="form-group">
                    <label>Title</label>
                    <input
                        type="text"
                        className="form-control"
                        value={title}
                        ref={(input) => {
                            this.title = input
                        }}
                        onChange={this.update.bind(this)}/>
                </div>
                <div className="form-group">
                    <label htmlFor="">SubTitle</label>
                    <textarea
                        className="form-control"
                        value={subTitle}
                        ref={input => {
                            this.subTitle = input
                        }}
                        onChange={this.update.bind(this)}></textarea>
                </div>
            </div>
        );
    }
}

EditSurveyPanel.propTypes = {
    onUpdate: PropTypes.func.isRequired,
    title: PropTypes.string.isRequired,
    subTitle: PropTypes.string.isRequired
};

export default EditSurveyPanel;
