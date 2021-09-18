import React from "react";
import './Modal.css';

const Modal = (props) => {

    const { modalAdd, modalDelete, closeModal, func } = props;

    const handleSubmit = (e) => {
        e.preventDefault();
        if(e.target.elements.func.value==="add"){
            modalAdd({
                label: e.target.elements.label.value,
                url: e.target.elements.url.value
            })
        } else {
            modalDelete();
        }
    }

    return(
        <div className="backdrop" onClick={closeModal}>
        {func!=="delete" ? (
            <div className="modalBox" onClick={e=>e.stopPropagation()}>
                    <h3 className="modalTitle">Add a new photo</h3>
                    <form onSubmit={handleSubmit} className="modalForm">
                        <input type="hidden" name="func" value="add" />
                        <label htmlFor="label">Label</label>
                        <input type="text" id="label" name="label" className="modalInput" />
                        <label htmlFor="url">Photo URL</label>
                        <input type="url" label="url" name="url" className="modalInput" />
                        <div className="formActions">
                            <input type="reset" onClick={closeModal} value="Cancel" className="cancelButton"/>
                            <input type="submit" value="Submit" className="submitButton"/>
                        </div>
                    </form>
            </div>
            ) : (
            <div className="modalBox" onClick={e=>e.stopPropagation()}>
                <h3 className="modalTitle">Are you sure?</h3>
                <form onSubmit={handleSubmit} className="modalForm">
                        <input type="hidden" name="func" value="delete" />
                        <label htmlFor="password">Password</label>
                        <input type="password" name="password" id="password" required className="modalInput" />
                        <div className="formActions">
                            <input type="reset" onClick={closeModal} value="Cancel" className="cancelButton"/>
                            <input type="submit" value="Delete" className="modalDeleteButton"/>
                        </div>
                </form>
            </div>
            )
        }
        </div>
    )
}

export default Modal;