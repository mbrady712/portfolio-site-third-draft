import './contact.css';
import { useForm } from "react-hook-form";
import emailjs from '@emailjs/browser';


export default function Contact() {

  /*Form validation*/
  const { register, handleSubmit, reset, formState: { errors }} = useForm();

  /*Email form data*/
  const sendEmail = (formData) => {
    emailjs
      .send("service_2tba71g", "template_64vw5ot", formData, "user_jYQ9wN3Bb3JMGnhIkX41i")
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
    reset();
    alert(`Form successfully submitted!`);
  };

  /*Email obfuscation*/

  const a = "mailto:";
  const b = "michaelbrady712";
  const c = "@";
  const d = "gmail.com";
  const e = a + b + c + d;

  /*Phone obfuscation*/

  const f = "410";
  const g = "608";
  const h = "8071";
  const i = "tel:";
  const j = f + g + h;
  const k = i + f + g + h;

  return (
    <div className='contact' id="contact">
      <h1 className="conthead">
        Contact
      </h1>
      <form onSubmit={handleSubmit(sendEmail)}> 
          <input {...register("name", {required: 'This is required'})} type="text" name="name" placeholder="Name" className="form-control"/>
          <p className="error">{errors.name?.message}</p>
          <input {...register("email", {required: 'This is required'})} type="text" name="email" placeholder="Email" className="form-control"/>
          <p className="error">{errors.email?.message}</p>
          <textarea {...register("message", {required: 'This is required'})} rows="5" name="message" cols="30" placeholder="Message" className="form-control"></textarea>
          <p className="error">{errors.message?.message}</p>
          <input type="submit" name="submit" value="SUBMIT" className="submit"/>
        </form>
        <footer>
          <div className="icons">
            <a href="https://www.linkedin.com/in/michael-brady-91777a21a/" className="fa fa-linkedin fa-2x"></a>
            <a href="https://github.com/mbrady712" className="fa fa-github fa-2x"></a>
            <a href={e} className="fas fa-envelope"></a>
          </div>
          <div className="bottom">
            <a href={k} className='fas fa-phone-alt'>{j}</a>
            <div className="copy">&copy; Michael Brady 2022</div>
          </div>
          </footer>
    </div>
  )
}
