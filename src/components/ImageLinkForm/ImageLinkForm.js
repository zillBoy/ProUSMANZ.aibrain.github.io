import React from 'react';
import './ImageLinkForm.css';

const ImageLinkForm = ({inputValueChange, onSubmitButtton}) => {
    return(
        <div>
            <p style={{textAlign: 'center'}} className='f3'>
                This <span className="span-ai">A I</span> <span className="ai-brain">B R A I N</span> will detect faces in your pictures. Give it a try
            </p>
            <div className="center">
                <div className="from center pa4 br3 shadow-5">
                    <input className='f4 pa2 w-70 center' type="text" onChange={inputValueChange}/>
                    <button style={{border: 'none'}} className="w-30 grow f4 link ph3 pv2 dib white bg-light-purple" onClick={onSubmitButtton}>Detect</button>
                </div>
            </div>
        </div>
    );
}

export default ImageLinkForm;