import React from 'react'
import "./form.css"
import { useForm } from 'react-hook-form';

export default function Contact() {
  const { register, formState: { errors }, handleSubmit } = useForm();
  let mobileNumber= +549
  const onSubmit = data => {

    

    let mensaje= JSON.stringify(data, null, 4)
 
    //  let number = mobileNumber.replace(/[^\w\s]/gi, "").replace(/ /g, "")
     let url = `https://web.whatsapp.com/send?phone=${mobileNumber}&text=%20${mensaje}`
     window.open(url);
   
  };


  



  return (
    <>
    <div className='contact-back'>
      <form className='formulario' onSubmit={handleSubmit(onSubmit)}>
        <h2>Contactanos</h2>
       
        <label >Nombre y Apellido  </label>
        <input  name='nombre' {...register("Nombre", { required: 'Info requerido' })} type="text" />
      
        <label>Número de teléfono</label>
        <input name='telefono' type='tel'placeholder='+5411xxxxxxxx' {...register('Teléfono', {
            required: true,
            maxLength: 10,
            minLength: 10,
          })}/>
        
        <label>Email </label>
        <input name='email' type="email" {...register("mail", { required: "Email es requerido" })} 
        aria-invalid={errors.mail ? "true" : "false"}  />
       
        <label >Mensaje</label>
          <textarea name='mensaje'  {...register('mensaje', { required: true, maxLength: 80 })}>
          </textarea>    
          {errors.mail && <p role="alert">{errors.mail?.message}</p>}  
       <button>Enviar</button>
    
      </form>
    </div>
    
    </>
  )
}
