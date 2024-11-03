function EditCVForm({name, setName, phone, setPhone, email, setEmail, handleUpdateCV, handleReset}){
    return (
        <form onSubmit={handleUpdateCV}>
            <div className="personalInfo">
                <fieldset>
                    <legend>Personal</legend>
                    <div>
                        <div>
                            <label htmlFor="fname">Name:</label>
                            <input type="text" name="fname" id="fname" placeholder="Enter your name." 
                            value={name}
                            onChange={(e) => {setName(e.target.value)}} />
                        </div>
                        <div>
                            <label htmlFor="phone">Phone:</label>
                            <input type="tel" name="phone" id="phone" placeholder="1234567890" value={phone} onChange={(e)=>setPhone(e.target.value)}/>
                        </div>
                        <div>
                            <label htmlFor="email">Email:</label>
                            <input type="email" name="email" id="email" placeholder="example@gmail.com" value={email} onChange={(e)=>setEmail(e.target.value)}/>
                        </div>
                    </div>
                </fieldset>
            </div>

            <button type="submit">Save</button>
            <button type="submit" onClick={handleReset}>Cancel</button>
        </form>
    );
}

export default EditCVForm;