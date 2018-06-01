import React from 'react';
import styles from './formFields.css';


const FormFields = ({formdata, change, id}) =>{

    const renderTemplate = () =>{
        let formTemplate = null;

        switch(formdata.element){
            case('input'):
                formTemplate = (
                    <div>
                        input
                    </div>
                )
                break;
            default:
                formTemplate = null;
                break;
        }
        return formTemplate;
    }

    return(
        <div>
            {renderTemplate()}
        </div>
    )
}

export default FormFields;