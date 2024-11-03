function CVInfo({CVInfoItem,handleEdit,handleDelete}){
    return(
        <div>
            <div className="allinformation">
                <h1>Personal</h1>
                <div className="personalInformation">
                    <h2>Personal Information</h2>
                    <p><strong>FullName : </strong>{CVInfoItem.name}</p>
                    <p><strong>Contact Phone :</strong> {CVInfoItem.phone}</p>
                    <p><strong>Email :</strong> {CVInfoItem.email}</p>
                </div>
                <div className="buttons">
                    <div>
                        <button onClick={()=>handleEdit(CVInfoItem)}>Edit</button>
                        <button onClick={()=>handleDelete(CVInfoItem)}>Delete</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default CVInfo