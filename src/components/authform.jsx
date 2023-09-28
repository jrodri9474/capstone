import { useState } from "react"

export default function AuthForm({ buttonText, handleSubmit}) {
    const [firstname, setFirstName]= useState('')
    const [lastname, setLastName]= useState('')
    const [username, setUsername]= useState('')
    const [password, setPassword]= useState('')
    const [email , setEmail]= useState('')
    return (
        <form onSubmit={(e) => handleSubmit(e, firstname, lastname, username , password)}>
        <label htmlFor="firstname">First Name</label>
        <input
        type="text"
        id="firstname"
        value={firstname}
        onChange={(e) => setFirstName(e.target.value)}
        />
        <label htmlFor="lastname">Last Name</label>
        <input
        type="text"
        id="lastname"
        value={lastname}
        onChange={(e) => setLastName(e.target.value)}
        />
        <label htmlFor="email">Email</label>
        <input
        type="text"
        id="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        />
        <label htmlFor="password">Password</label>
        <input 
        type="password"
         id="password"
         value={password}
         onChange={(e) => setPassword(e.target.value)}
         />
         <fieldset>
    <legend>Do you agree to the terms & conditions?</legend>
    <label><input type="radio" name="radio" value="yes" /> Yes</label>
    <label><input type="radio" name="radio" value="no" /> No</label>
  </fieldset>
  <button type="submit">{buttonText}</button>
    </form>
    )
}