import React, {Component} from 'react';
import {connect} from 'react-redux';
import {Link} from 'react-router-dom';
import {updateImg,updateCancel} from '../../ducks/reducer';
import Banner from '../Banner/banner';
import './w3.css'
import checked from '../../assets/step_completed.png';
import active from '../../assets/step_active.png';
import inactive from '../../assets/step_inactive.png';


class Wizard3 extends Component{
    constructor(){
        super()

        this.state={
            file:'',
            imagePreviewUrl: ''
        }
        
    }

    handleImageChange(value){
        
            this.setState({
                imagePreviewUrl: value
              })
              this.props.updateImg(value)
}

    render(){
        const {handleImageChange} = this.props;

        let{imagePreviewUrl}=this.state;
        let $imagePreview=null;
        if(imagePreviewUrl){
            $imagePreview=(<img src={imagePreviewUrl}/>)
        }

        return(
        <div>
            <Banner/>
            <div className="tracker">
                <h3>Add new listing</h3>
                <Link to= '/dashboard' className="cancel" onClick={updateCancel}>Cancel</Link>
                <h5>Step 3</h5>
                <div className="circles">
                    <img src={checked} alt="checked-circle"/>
                    <img src={checked} alt="checked-circle"/>
                    <img src={active} alt="active-circle"/>
                    <img src={inactive} alt="inactive-circle"/>
                    <img src={inactive} alt="inactive-circle"/>
                </div>
            </div>
            <div className="image-preview">
            {$imagePreview}
            </div>
            <div className="image-url-container">
                <h4 className="image-url-input-title">Image URL</h4>
                <input className="image-url-input"  onChange={(e)=>this.handleImageChange(e.target.value)}/>
            </div>
            <div>
            <Link to = '/wizard/' className="next-step-w3">Previous Step</Link>
            <Link to = '/wizard/4' className="next-step-w3">Next Step</Link>   
            </div>
        </div>
        )
    }
}

function mapStateToProps(state){
    const {img}=state;

    return {
        img
    }
}

export default connect(mapStateToProps, {updateImg})(Wizard3);