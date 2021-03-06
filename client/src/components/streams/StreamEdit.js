import _ from 'lodash';
import React from 'react';
import {connect} from 'react-redux';
import {fetchStream,editStream} from '../../actions';
import StremForm from './StreamForm';

class StreamEdit extends React.Component  {

    componentDidMount(){
        this.props.fetchStream(this.props.match.params.id);
    }

    onSubmit = (formValues) => {
        //console.log(formValues);
        this.props.editStream(this.props.match.params.id,formValues);
    };

    render(){
        //console.log(this.props.stream);
    if(!this.props.stream){
        return <div>Loading...</div>;
    }

    return (
        
        <div>
            <h3>Edit a Stream</h3>                          
            <StremForm 
              initialValues={_.pick(this.props.stream,'title','description')}  //intial values is special prop provided by redux form
              onSubmit={this.onSubmit}  // title and description value 
              />         
        </div>
    );
  
    }
}

const mapStateToProps = (state,ownProps) => {
   
    return {stream: state.streams[ownProps.match.params.id]}
};

export default connect(mapStateToProps,{fetchStream,editStream})(StreamEdit);

