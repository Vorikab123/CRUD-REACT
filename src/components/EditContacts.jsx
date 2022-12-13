import React,{useState} from 'react';
import { Container } from 'react-bootstrap';

const EditContacts = (props) => {

    let [name, setName] = useState(props.EditContact.name);
    let [surname, setSurname]=useState(props.EditContact.surname)
    let [phone, setPhone]= useState(props.EditContact.phone);
    // console.log(name)

    function handleSaveClick(){
       let contact = {...props.EditContact};
       contact.name = name;
       contact.surname=surname;
       contact.phone= phone
 
       props.handleSaveEditedContact(contact)

        setName('');
        setSurname('');
        setPhone('');
    }
    return (
        <Container style={{display:"flex", justifyContent:"center", marginTop: "50px"}}>
  <input 
           onChange={(e)=> setName(e.target.value)} 
            type="text"
             placeholder='Name'
             value={name}
             />
           <input
            onChange={(e)=> setSurname(e.target.value)} 
            type="text" 
            placeholder='SurName'
            value={surname}/>
       
           <input
           onChange={(e)=> setPhone(e.target.value)}
            type="number"
             placeholder='Number'
             value={phone}
             />
           <button onClick={handleSaveClick}>Save</button>
           </Container>
    );
};

export default EditContacts;