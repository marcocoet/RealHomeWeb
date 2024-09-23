export default function SignUpForm() {
  return (
    <div className="Form">
      <form>
        <label htmlFor="name">Name</label>
        <br />
        <input type="text" name="name" />
        <br />
        <br />
        <label htmlFor="surname">Surname</label>
        <br />
        <input type="text" name="surname" />
        <br />
        <br />
        <label htmlFor="email">Email</label>
        <br />
        <input type="text" name="email" />
        <br />
        <br />
        <label htmlFor="password">Password</label>
        <br />
        <input type="password" name="password" />
        <br />
        <br />
        <label htmlFor="cpassword">Confirm Password</label>
        <br />
        <input type="password" name="cpassword" />
        <br />
        <br />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}
