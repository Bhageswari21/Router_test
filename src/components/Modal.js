import React, { Component } from 'react';
import Demo from '../mock/Mock';
import Buttons from './common/Buttons';

class Modal extends Component {
    constructor(props) {
        super(props);
        this.handleSave = this.handleSave.bind(this);
        this.state = {
            title: props.title,
           key: props.key,
        }
    }

titleHandler(e) {
        this.setState({ title: e.target.value });
    }
handleSave() {       
        const item = {
            "key": this.state.key,
            "name": this.state.title
        };       
        this.props.saveDetails(item)
    }
    render() {
        return (
            <div className="main_div">
            <div className="modal fade" id="exampleModal" tabIndex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div className="modal-dialog" role="document">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title" id="exampleModalLabel">{this.props.Content.popupHeading} </h5>
                            <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                                <span aria-hidden="true">&times;</span>
                            </button>
                        </div>
                        <div className="modal-body">
                            <p><span  className="modal-lable"></span><input id="edit item" value={this.state.title} onChange={(e) => this.titleHandler(e)} /></p>
                            </div>
                        <div className="modal-footer" data-dismiss="modal">                           
                       <Buttons type="button" className="btn btn-danger" name={this.props.Content.popupCancel}/>
                       <Buttons id="ok" type="button" className="btn btn-primary" onClick={() => this.handleSave()} name={this.props.Content.popupSave}/>                       
                        </div>
                    </div>
                </div>
            </div></div>
        );
    }
}
Modal.defaultProps={Content: Demo}
export default Modal;