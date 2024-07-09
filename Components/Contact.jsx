
import { useForm } from 'react-hook-form';


function Contact() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  return (
   
   <>
<div name = "Contactus">
    
    <div  className="">
    <h1 className="font-semibold text-2xl mb-4 "></h1>
  
    <section  className="contact  rounded-lg bg-gray-400 w-[300px] h-[300px] text-center ml-80" id="contact">

<h1 className="heading"> <span className="bg-green-400">contact</span> us </h1>

<div className="row">

    
    <form
    // action='https://getform.io/f/bgdyygwa' 
     //</div>method='POST' 
      onSubmit={handleSubmit((data) => console.log(data))}>
        <h3>Full Name</h3>
        <div className="inputBox">
            <span className="fas fa-user"></span>
            <input
            {...register('name', { required: true })}
            type="text" name="name" placeholder="enter your full name"/>
        </div>
        {errors.name && <p>Last name is required.</p>}

        <br/>
            <h1>Email.adress</h1>
        <div className="inputBox">
            <span className="fas fa-envelope"></span>
            <input
            {...register('email', { required: true })}
            type="email" name="email" placeholder="enter your email adress"/>
        </div>
        {errors.email && <p>Last name is required.</p>}

        <h1>Message</h1>
        <div className="inputBox">
            <span className="fas fa-envelope"></span>
            
            <input
             {...register('message', { required: true })}
             type="email" name="message" placeholder="type your message"/>
        </div>
        {errors.message && <p>Last name is required.</p>}

        <br/>


        <button type='sumbit' className="bg-green-500 bg-green-700 px-4 py-2 rounded text-white font-bold">Send message</button>
        
       
       
        
    </form>

</div>

</section>
    </div>
    
</div>

   </>
  )
}

export default Contact;
