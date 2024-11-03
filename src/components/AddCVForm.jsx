function AddCVForm({name, setName, phone, setPhone, email, setEmail, handleSubmit, errors}){
    return (
        <form onSubmit={handleSubmit}>
            <div className="genInformation">
                <fieldset>
                    <legend>General Personal Information</legend>
                        <div>
                            <div>
                                <label htmlFor="fname">Name:</label>
                                <input type="text" name="fname" id="fname" placeholder="Enter your name." required
                                value={name}
                                onChange={(e) => {setName(e.target.value)}} />
                            </div>
                            <div>
                                <label htmlFor="phone">Phone:</label>
                                <input type="tel" name="phone" id="phone"  required placeholder="1234567890" value={phone} onChange={(e)=>setPhone(e.target.value)}/>
                            </div>
                            <div>
                                <label htmlFor="email">Email:</label>
                                <input type="email" name="email" id="email"  required placeholder="example@gmail.com" value={email} onChange={(e)=>setEmail(e.target.value)}/>
                            </div>
                        </div>
                </fieldset>
                
            </div>
            <button type="submit">Submit</button>
        </form>
    )
}

export default AddCVForm;