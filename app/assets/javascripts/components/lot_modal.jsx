/**
 * reactProps: number:
 */
var LotModal = React.createClass({
    getDefaultProps: function(){
        return {name: 'modal',number: '0'}
    },

    openModal: function() {
        this.modal.modal('show');
    },

    closeModal: function() {
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
                                <h3 className="modal-title">{'Lote ' + this.props.number + ' cuadra '+ this.props.block}</h3>
                            </div>
                            <div className="modal-body">
                                <div className='row' style={{height: '90%'}}>
                                    <div className='col-sm-8' id='modal-div' style={{height: '90%'}}>
                                        <canvas id='canvas'></canvas>
                                    </div>
                                    <div className="col-sm-4">
                                        <div className="panel panel-success ">
                                            <div className="panel-heading">Informacion general   </div>
                                            <div className="panel-body">
                                                <ul className="list-group">
                                                    <li className="list-group-item">Numero de lote: {this.props.number}</li>
                                                    <li className="list-group-item">Numero de cuadra:  {this.props.block}</li>
                                                    <li className="list-group-item">Etapa:  {this.props.stage}</li>
                                                    <li className="list-group-item">Metros cuadrado:  {this.props.square_meters} m2</li>
                                                    <li className="list-group-item">Estado del lote: {this.props.status}</li>
                                                </ul>
                                            </div>
                                        </div>
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

