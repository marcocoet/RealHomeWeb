import Family from "../assets/img/Family.jpg";
export default function SellPage() {
  return (
    <div className="homepage">
      <div>
        <img
          src={Family}
          className="w-full rounded shadow hover:opacity-75 h-80 border-collapse"
          alt="Your dream house"
        ></img>
      </div>
      <div className="flex flex-col justify-between gap-2 pb-4 pt-2 md:flex-row md:items-center bg-blue-200 ">
        <a href="/home" className="hover:text-gray-300 justify-center">
          Buy
        </a>

        <a href="/rent" className="hover:text-gray-300">
          Rent
        </a>
        <a href="/sell" className="hover:text-black-300">
          Sell
        </a>
      </div>
      <div className="flex justify-center gap-4">
        <a href="/sell" className="hover:text-black-300">
          Privately
        </a>
        <a href="/sellwithagent" className="hover:text-black-300">
          With Agent
        </a>
      </div>
      <div className="justify-center">
        <h1>List Your Property Privately</h1>
        <p>
          Selling your property can be a big decision, but Private Property
          simplifies the process. This South African site lets you advertise to
          millions of monthly viewers. You can list the property yourself or use
          one of our consultants.
        </p>
      </div>
      <div className="Form">
        <form>
          <label htmlFor="propertyType">Type</label>
          <br />
          <select id="propertyType">
            <option value="house">House</option>
            <option value="apartment">Apartment</option>
            <option value="townhouse">Townhouse</option>
            <option value="farm">Farm</option>
          </select>
          <br />
          <br />
          <label htmlFor="address">Address</label>
          <br />
          <input type="text" name="address" />
          <br />
          <br />
          <label htmlFor="email">Email</label>
          <br />
          <input type="email" name="email" />
          <br />
          <br />
          <label htmlFor="number">Number</label>
          <br />
          <input type="number" name="number"></input>
          <br />
          <br />
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

          <button type="submit">Submit</button>
        </form>
      </div>
    </div>
  );
}
