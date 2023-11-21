import { useForm } from "react-hook-form";
import Swal from 'sweetalert2'


const Contact = () => {
  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm();

  const onSubmit = (data) => {
    Swal.fire("Your email was sent!");
    console.log(data);
  };
  return (
    <div 
      className='flex justify-center text-white' 
      onSubmit={handleSubmit(onSubmit)}>
      <form className='w-1/2 flex flex-col mt-8'>
        <h1 
          className="text-4xl text-center font-semibold"
        >
          Contact me
        </h1>
        <input 
          type="text" 
          placeholder="Name" 
          className="rounded-md p-2 m-2  text-teal-900" 
          {...register("name", { required: true })}
        />
        {errors.name && <span>This field is required</span>}
        <input
          type="email"
          placeholder="Email"
          className="rounded-md p-2 m-2 text-teal-900"
          id="email"
          {...register("email", {
            required: "Email is required",
            validate: {
              maxLength: (v) =>
                v.length <= 50 || "The email should have at most 50 characters",
              matchPattern: (v) =>
                /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/.test(v) ||
                "Email address must be a valid address",
            },
          })}
        />
          {errors.email?.message && (
            <small>{errors.email.message}</small>
          )}
        <textarea 
          type="text" 
          placeholder="Message" 
          className="rounded-md p-2 m-2  text-teal-900" 
          rows="6"
          {...register("message", { required: true })}
        >
        </textarea>
        {errors.message && <span>This field is required</span>}
        <input 
          type="submit" 
          className=" border border-white rounded-md p-2 m-2 cursor-pointer hover:bg-teal-500" 
          value="Submit"
        />
      </form>
    </div>
  )
}

export default Contact