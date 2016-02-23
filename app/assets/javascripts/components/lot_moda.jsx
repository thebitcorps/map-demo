var LotModal = React.createClass({
    getDefaultProps: function(){
        return {name: 'modal'}
    },

    openModal: function() {
        //$('#'+this.props.name).modal('show');
        this.modal.modal('show');
    },

    closeModal: function() {
        //$('#'+this.props.name).modal('hide');
        this.modal.modal('hide');
    },
    componentDidMount: function(){
        this.modal = $('#'+this.props.name);
        this.modal.modal();
        this.modal.on('hidden.bs.modal',function(){
            ReactDOM.unmountComponentAtNode(document.getElementById('mod'));
        });
    },

    render: function() {
        return (
            <div>
                <button type="button" className="btn btn-default" onClick={this.openModal}>Open</button>
                <div
                    id={this.props.name}
                    tabIndex='-1'
                    role='modal'
                    style={{display: 'block'}}
                    className='modal fade'
                    onRequestClose={this.closeModal}
                    closeTimeoutMS='0'>
                    <div className='modal-dialog modal-lg'>
                        <div className="modal-content">
                            <div className="modal-header">
                                <button type="button" className="close" onClick={this.closeModal}>
                                    <span aria-hidden="true">&times;</span>
                                    <span className="sr-only">Close</span>
                                </button>
                                <h4 className="modal-title">Modal title</h4>
                            </div>
                            <div className="modal-body">
                                <div className='row' style={{height: '90%'}}>
                                    <div className='col-sm-8' id='modal-div' style={{height: '90%'}}>
                                        <canvas id='canvas'></canvas>
                                    </div>
                                    <div className='col-sm-4'>
                                        <ul>
                                            <li>Numero: </li>
                                            <li>Cuadra: </li>
                                            <li>Estado: </li>
                                        </ul>
                                    </div>
                                </div>


                            </div>
                            <div className="modal-footer">
                                <button type="button" className="btn btn-default" onClick={this.closeModal}>Close</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
});

