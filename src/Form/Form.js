import './Form.scss';
import { useEffect, useState } from "react";


function Form() {
    const [addData, setAddData] = useState({
        Fname: "",
        Lname: "",
        Number: "",
        Email: "",
        Gender: "",
        Address: "",
    });


    const [formError, setFormError] = useState({})
    const [isSubmit, setIsSubmit] = useState(false)
    const [formSubmitted, setFormSubmitted] = useState(false)

    function handleChange(e) {
        const { name, value } = e.target;
        setAddData({ ...addData, [name]: value })
    }

    function handleOnSubmit(e) {
        e.preventDefault();
        setFormError(validate(addData));
        setIsSubmit(true)
        if (!formError) {

            setFormSubmitted(true);
        }
        setAddData({
            Fname: "",
            Lname: "",
            Number: "",
            Email: "",
            Gender: "",
            Address: "",
        })
    }
    function validate(values) {
        const errors = {}
        if (!values.Fname) {
            errors.Fname = "This field is required";
        }
        if (!values.Lname) {
            errors.Lname = "This field is required";
        }
        if (!values.Number) {
            errors.Number = "This field is required";
        }
        if (!values.Email) {
            errors.Email = "This field is required";
        }
        if (!values.Gender) {
            errors.Gender = "This field is required";
        }
        if (!values.Address) {
            errors.Address = "This field is required";
        }
        return errors;
    }
    useEffect(() => {
        console.log(formError);
        if (Object.keys(formError).length === 0 && isSubmit) {
            setFormSubmitted(true)
        }
    }, [formError])

    return (
        <div className='form'>
            <div className="container">
                <form onSubmit={handleOnSubmit}>
                    <h1 className='heading'>contact us form</h1>
                    <h2 className="submitted">{formSubmitted && "Form Submitted Successfully"}</h2>
                    <div className="form__inner">
                        <input className='form__inner__box fname' type="text" name="Fname" placeholder="First Name" value={addData.Fname} onChange={handleChange} />
                        <p className='error'>{formError.Fname}</p>
                        <input className='form__inner__box lname' type="text" name="Lname" placeholder="Last Name" value={addData.Lname} onChange={handleChange} />
                        <p className='error'>{formError.Lname}</p>
                        <input className='form__inner__box number' type="number" name="Number" placeholder="Number" value={addData.Number} onChange={handleChange} />
                        <p className='error'>{formError.Number}</p>
                        <input className='form__inner__box email' type="email" name="Email" placeholder="Email" value={addData.Email} onChange={handleChange} />
                        <p className='error'>{formError.Email}</p>
                        <label className='form__inner__gender' htmlFor="Male" value="Male">Male</label>
                        <input type="radio" name="Gender" value="Male" onChange={handleChange} />
                        <label className='form__inner__gender' htmlFor="Female" value="Female">Female</label>
                        <input type="radio" name="Gender" value="Female" onChange={handleChange} />
                        <p className='error'>{formError.Gender}</p>
                        <textarea className='form__inner__address' type="text" name="Address" placeholder="Address" value={addData.Address} onChange={handleChange} />
                        <p className='error'>{formError.Address}</p>
                        <button className='form__inner__submit' type='submit'>Submit</button>
                    </div>
                </form>
            </div>
        </div>
    )
}
export default Form;