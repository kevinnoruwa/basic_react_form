import React from "react"



export default function Form(){

    const styles = {
        textAlign: "center"
    }
    const [formData, setFormData] = React.useState({
        fName: "",
        lName: "",
        email: "",
        comments: "",
        isChecked: false,
        employment: "",
        favColor: "",

    })

    function handleChange(event){

        const {name, value, checked, type} = event.target
        
        setFormData((prevState) => {

           return  {
                    ...prevState,
                    [name]: type === "checkbox" ? checked : value

            }
        
        })

    }

    function handleSubmit(event){
        event.preventDefault()
        console.log(formData)

    }



   console.log(formData)
    return (
        <form onSubmit={handleSubmit}>
            <div style={styles}>
            <h1>Form</h1>
            <div >
                <input value={formData.fName} placeholder="first name" type="text" name="fName" onChange={handleChange} />
            </div>
            <div>
               <input value={formData.lName} placeholder="last name" type="text" name="lName" onChange={handleChange} />

            </div>
            <div>
                <input value={formData.email} placeholder="email" type="text" name="email" onChange={handleChange} />
            </div>
            <div>
                <textarea placeholder="comments" value={formData.comments} type="text" name="comments" onChange={handleChange} ></textarea>
            </div>
            <div>
                <span>is checked?</span>
                <input onChange={handleChange} type="checkbox" checked={formData.isChecked} name="isChecked"/>
            </div>
            <p>current employment status</p>
            <div>
                <label>unemployed</label>
                <input checked={formData.employment === "unemployed"} type="radio" name="employment" value="unemployed" onChange={handleChange}/>
            </div>
             <div>
                  <label>partime</label>
                <input checked={formData.employment === "partime"}  type="radio" name="employment" value="partime" onChange={handleChange}/>
            </div>
             <div>
                  <label>fulltime</label>
                <input checked={formData.employment === "fulltime"} type="radio" name="employment" value="fulltime" onChange={handleChange}/>
            </div>
            <div>
                <select value={formData.favColor} name="favColor" onChange={handleChange} >
                    <option value="">--Choose color--</option>
                    <option value="red">Red</option>
                    <option value="orange">Orange</option>
                    <option value="yellow">Yellow</option>
                    <option value="green">Green</option>
                    <option value="blue">Blue</option>
                    <option value="indigo">Indigo</option>
                    <option value="violet">Violet</option>
                 
                </select>
            </div>
              <br/>  
               <button>submit</button> 
        </div>
     
        </form>
        
    )
}