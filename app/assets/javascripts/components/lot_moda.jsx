
var LotModal = React.createClass({


    getInitialState: function() {
        return { modalIsOpen: false };
    },

    openModal: function() {
        this.setState({modalIsOpen: true});
    },

    closeModal: function() {
        this.setState({modalIsOpen: false});
    },

    render: function() {
        return (
            <div>
                <button type="button" className="btn btn-default" onClick={this.openModal}>Open</button>
                <Modal
                    className="Modal__Bootstrap modal-dialog"
                    isOpen={this.state.modalIsOpen}
                    onRequestClose={this.closeModal}
                    closeTimeoutMS='0'>

                    <div className="modal-content">
                        <div className="modal-header">
                            <button type="button" className="close" onClick={this.handleModalCloseRequest}>
                                <span aria-hidden="true">&times;</span>
                                <span className="sr-only">Close</span>
                            </button>
                            <h4 className="modal-title">Modal title</h4>
                        </div>
                        <div className="modal-body">
                            <h4>Really long content...</h4>
                            <p>Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Vestibulum tortor quam, feugiat vitae, ultricies eget, tempor sit amet, ante. Donec eu libero sit amet quam egestas semper. Aenean ultricies mi vitae est. Mauris placerat eleifend leo. Quisque sit amet est et sapien ullamcorper pharetra. Vestibulum erat wisi, condimentum sed, commodo vitae, ornare sit amet, wisi. Aenean fermentum, elit eget tincidunt condimentum, eros ipsum rutrum orci, sagittis tempus lacus enim ac dui. Donec non enim in turpis pulvinar facilisis. Ut felis. Praesent dapibus, neque id cursus faucibus, tortor neque egestas augue, eu vulputate magna eros eu erat. Aliquam erat volutpat. Nam dui mi, tincidunt quis, accumsan porttitor, facilisis luctus, metus</p>


                        </div>
                        <div className="modal-footer">
                            <button type="button" className="btn btn-default" onClick={this.closeModal}>Close</button>

                        </div>
                    </div>
                </Modal>
            </div>
        );
    }
});

