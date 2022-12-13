import React, {useState} from 'react';
import { Container } from 'react-bootstrap';

const AddInput = (props) => {
    let [name, setName] = useState('');
    let [surname, setSurname]=useState('');
    let [phone, setPhone]= useState('');

    function handleClick(){
        let newContact={
            name,
            surname,
            phone,
            id: Date.now()
        }
        props.handleNewContact(newContact);
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
           <button onClick={handleClick}>ADD</button>
           </Container>
    );
};

export default AddInput;