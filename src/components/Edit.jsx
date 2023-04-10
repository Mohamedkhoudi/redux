import React, { useState } from 'react'
import Modal from 'react-modal';
import { useDispatch } from 'react-redux';
import { handleEdit } from '../redux/action';


const Edit = ({todo}) => {
  const [action, setAction] = useState(todo.action)
  const dispatch= useDispatch();
  const Handleedit=(e)=>{
    e.preventDefault()
 
 const newOne={id:todo.id, action, isDone:todo.isDone};
 dispatch (handleEdit(newOne))
 closeModal()
  }
  
    const customStyles = {
        content: {
          top: '50%',
          left: '50%',
          right: 'auto',
          bottom: 'auto',
          marginRight: '-50%',
          transform: 'translate(-50%, -50%)',
        },
      };
      // Make sure to bind modal to your appElement (https://reactcommunity.org/react-modal/accessibility/)
Modal.setAppElement('#root');
const [modalIsOpen, setIsOpen] = React.useState(false);

function openModal() {
  setIsOpen(true);
}


function closeModal() {
  setIsOpen(false);
}
  return (
    <div>
       <button onClick={openModal} className='BTN'>Edit</button>
      <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        style={customStyles}
        contentLabel="Example Modal"
      >
        <form onSubmit={Handleedit}>
           <label htmlFor="">Name</label> <input type="text" value={action} onChange={(e)=>setAction(e.target.value)}/>
           <button type='submit'>confirm</button>
           <button onClick={closeModal}>Cancel</button>
        </form>
      </Modal>
    </div>
  )
}

export default Edit
