import { useState } from 'react'
import './App.css'
import AddCVForm from './components/AddCVForm'
import EditCVForm from './components/EditCVForm'
import CVInfo from './components/CVInfo'

function App() {
  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [phone, setPhone] = useState("")
  const [currentEditID, setCurrentEditID] = useState("");
  const [isEditing, setIsEditing] = useState(false)
  const [info, setInfo] = useState([]);
  
  function reset() {
    setName('')
    setEmail('')
    setPhone('')
  }

  function handleSubmit(e) {
    e.preventDefault()
    let id = new Date().getTime();
    let nm = name;
    let pn = phone;
    let em = email;
    setInfo((prevInfo)=>{
      let updatedInfo = [...prevInfo, {id:id, name:nm, phone:pn, email:em}];
      console.log(updatedInfo);
      return updatedInfo;
    });
    reset();
  }

  function handleEdit(InfoItem) {
    setIsEditing(true);
    setName(InfoItem.name);
    setPhone(InfoItem.phone);
    setEmail(InfoItem.email);
    setCurrentEditID(InfoItem.id);
    console.log('Editing');
  }

  function handleUpdateCV(e) {
    e.preventDefault();
    let updatedName = name;
    let updatedPhone = phone;
    let updatedEmail = email;
    let updatedCVInfo = info.map((item) => {
      if(item.id === currentEditID){
        item.name = updatedName;
        item.phone = updatedPhone;
        item.email = updatedEmail;
      }
      return item;
    });
    setInfo([...updatedCVInfo]);
    setIsEditing(false);
    reset();
  }

  function handleDelete(InfoItem) {
    setInfo((prevInfo) => {
      let updatedInfo = prevInfo.filter((item)=>item.id !== InfoItem.id);
      return updatedInfo;
    });
  }

  function handleReset(e) {
    e.preventDefault()
    setIsEditing(false)
    reset();
  }



  return (
    <>
      <>
      {!isEditing && <AddCVForm name={name} setName={setName} phone={phone} setPhone={setPhone} email={email} setEmail={setEmail} handleSubmit={handleSubmit}/>}

      {isEditing && <EditCVForm name={name} setName={setName} phone={phone} setPhone={setPhone} email={email} setEmail={setEmail} handleUpdateCV={handleUpdateCV} handleReset={handleReset}/>}

      {info.map((item) =>{
        return <CVInfo key={item.id} CVInfoItem={item} handleEdit={handleEdit} handleDelete={handleDelete}/>
      })}
      </>
    </>
  )
}

export default App
