import React, {useState} from 'react';
import AddInput from './components/AddInput';
import 'bootstrap/dist/css/bootstrap.min.css';
import ContactsList from './components/ContactsList';
import EditContacts from './components/EditContacts';

const App = () => {
  let [contacts, setContacts]= useState([]);
  let [EditContact,setEditContack]=useState({})
  let [isEdit,setIsEdit] = useState(false)
  function handleNewContact(newContackt){
    let newContacktsArray=[...contacts];
    newContacktsArray.push(newContackt);

    setContacts(newContacktsArray)
  }

  function handleDelete(id){
    let newContacktArray= contacts.filter(item=>{
      return item.id !==id
    })
    setContacts(newContacktArray )
  }

  function handleEditIndex(index){
    setIsEdit(true)
    setEditContack(contacts[index])

  }
  function handleSaveEditedContact(newContackt){
    let newContacktsArray=contacts.map(item => {
      if(item.id ==newContackt.id){
       return newContackt
      }
      return item
    })
    setContacts(newContacktsArray);
    setIsEdit(false)
  }
  return (
    <div>
      <AddInput handleNewContact={handleNewContact}/>
      {isEdit? <EditContacts EditContact={EditContact} handleSaveEditedContact={handleSaveEditedContact} /> : null}
     <ContactsList contacts={contacts} handleDelete={handleDelete}
     handleEditIndex={handleEditIndex}/>
    </div>
  );
};

export default App;
