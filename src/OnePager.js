import { Link } from "react-router-dom";
import { useState } from "react";
import { useForm } from "react-hook-form";

export const Home = () => {
  return (
    <div className="page">
      <h2>Welcome to the Home page!</h2>
    </div>
  );
};

export const Register = () => {
    const { register, handleSubmit, formState: { errors } ,reset,} = useForm();

    const onSubmit = (data) => {
        alert(`Form submitted successfuly: ${JSON.stringify(data)}`);
        reset();
      };
  
    return (
        <form onSubmit={handleSubmit(onSubmit)}>
        <label htmlFor="fname">First Name</label>
        <input
          type="text"
          name="fname"
          id="name"
          {...register("firstname", { required: "First name is required" })}
        />
        {errors.firstname && <p className="error-msg">First Name is required</p>}

        <label htmlFor="lname">Last Name</label>
        <input
          type="text"
          name="lname"
          id="name"
          {...register("lastname", { required: true })}
        />
        {errors.lastname && <p className="error-msg">Last Name is required</p>}

        <label htmlFor="email">Email</label>
        <input
          type="email"
          name="email"
          id="email"
          {...register("email", { required: true,pattern: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,})}
        />
            {errors.email?.type === 'required' && <div>Email is required</div>}
            {errors.email?.type === 'pattern' && (
            <div>Invalid email format</div>
            )}

        <label htmlFor="password">Password</label>
        <textarea
          name="password"
          id="password"
          type="password"
          {...register("password", { required: true ,minLength: 8,pattern: /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*()_+\-=[\]{};':"\\|,.<>/?]).*$/,
        })}
        />
          {errors.password?.type === 'required' && <div>Password is required</div>}
          {errors.password?.type === 'minLength' && <div>Password must be at least 8 characters</div>}
          {errors.password?.type === 'pattern' && (
            <div>
              Password must contain at least one uppercase letter, one lowercase letter, one number, and one unique character
            </div>
          )}
        <label htmlFor="confirm password">Password</label>
        <textarea
          name="confirm password"
          id="confirm password"
          type="password"
          {...register("confirm password", { required: true ,validate: (value) => value === password.current || 'The passwords do not match',
        })}
        />
          {errors.confirmPassword && <div>{errors.confirmPassword.message}</div>}
        <button type="submit">Submit</button>
      </form>
    );
  };
  

export const Contact = () => {
    const { register, handleSubmit, formState: { errors } ,reset,} = useForm();

    const onSubmit = (data) => {
        alert(`Form submitted successfuly: ${JSON.stringify(data)}`);
        reset();
      };  
    return (
      <div>
        <h2>Contact</h2>
            <form onSubmit={handleSubmit(onSubmit)}>
            <label htmlFor="name">Name</label>
            <input
                type="text"
                name="name"
                id="name"
                {...register("name", { required: true })}
            />
            {errors.name && <p className="error-msg">Name is required</p>}

            <label htmlFor="email">Email</label>
            <input
                type="email"
                name="email"
                id="email"
                {...register("email", { required: true,pattern: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,})}
            />
            {errors.email?.type === 'required' && <div>Email is required</div>}
            {errors.email?.type === 'pattern' && (
            <div>Invalid email format</div>
            )}

            <label htmlFor="message">Message</label>
            <textarea
                name="message"
                id="message"
                {...register("message", { required: true ,minLength: 10})}
            />
            {errors.message?.type === 'required' && <div>Message is required</div>}
            {errors.message?.type === 'minLength' && (
            <div>Message must be at least 10 characters</div>
          )}

            <button type="submit">Submit</button>
            </form>
         </div>  
)}

export const Nav = () => {
  return (
    <nav>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/register">Register</Link>
        </li>
        <li>
          <Link to="/contact">Contact</Link>
        </li>
      </ul>
    </nav>
  );
};
