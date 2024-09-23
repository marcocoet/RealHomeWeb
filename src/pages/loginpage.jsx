export default function LogininPage() {
  return (
    <div className="Form">
      <form>
        <label htmlFor="email">Email</label>
        <br />
        <input type="text" name="email" />
        <br />
        <br />
        <label htmlFor="password">Password</label>
        <br />
        <input type="password" name="password" />

        <button type="submit">Submit</button>
      </form>
    </div>
  );
}
