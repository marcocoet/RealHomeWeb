import addpropertySchema from "../schema/addproperty.schema";
import { useSelector, useDispatch } from "react-redux";
import { addProperty } from "../reducers/addproperty.reducer";
import { useForm } from "../hooks";
import Form from "../common/components/Form";
import { ErrorMessage, Field } from "formik";
import Family from "../assets/img/Family.jpg";
import { useEffect } from "react";
import { fetchRealEstateTypes } from "../reducers/realestatetypes.reducer";
import SimpleMap from "./simplemap";

export default function SellPage() {
  const dispatch = useDispatch();
  const { loading, types, error } = useSelector(
    (state) => state.realEstateTypes
  );

  const isPropertyAdded = useSelector(
    ({ addProperty }) => addProperty?.isPropertyAdded
  );

  const { isValid } = useForm("addpropertyForm");

  useEffect(() => {
    dispatch(fetchRealEstateTypes());
  }, [dispatch]);

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error}</div>;
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
      <div className="justify-center">
        <div className="w-1/2">
          <SimpleMap className="basis-1/2" />
        </div>
      </div>
      <div>
        <Form
          observe
          name="addpropertyForm"
          initialValues={{
            address: "",
            type: "",

            bedrooms: "",
            bathrooms: "",
            username: "",
            email: "",
          }}
          validationSchema={addpropertySchema}
          onSubmit={async (values, { setSubmitting }) => {
            if (!isValid) {
              return; // Prevent submission if the form is not valid
            }
            await dispatch(addProperty(values));
            setSubmitting(false); // Reset submitting state
          }}
        >
          {() => (
            <>
              <div className="flex, flex-col gap-5 md:flex-row">
                <div>
                  <label htmlFor="address">Address:</label>
                  <Field
                    type="text"
                    id="address"
                    name="address"
                    autoComplete="street-address"
                  />
                </div>
                <div>
                  <label htmlFor="type">Property Type:</label>
                  <Field as="select" id="type" name="type" autoComplete="off">
                    <option value="">Select a property type</option>
                    {types.map((type) => (
                      <option key={type.Id} value={type.Id}>
                        {type.DisplayName}
                      </option>
                    ))}
                  </Field>
                </div>
                <div>
                  <label htmlFor="bedrooms">Bedrooms:</label>
                  <Field
                    type="number"
                    id="bedrooms"
                    name="bedrooms"
                    autoComplete="off"
                  />
                </div>
                <div>
                  <label htmlFor="bathrooms">Bathrooms:</label>
                  <Field
                    type="number"
                    id="bathrooms"
                    name="bathrooms"
                    autoComplete="off"
                  />
                </div>
                <div>
                  <label htmlFor="text" name="username">
                    Username
                  </label>
                  <Field
                    type="text"
                    id="username"
                    name="username"
                    autoComplete="username"
                  />
                </div>
                <div>
                  <label htmlFor="email">Email</label>
                  <Field
                    type="email"
                    id="email"
                    name="email"
                    autoComplete="email"
                  />
                  <ErrorMessage name="email" id="form_email_id" />
                </div>

                <button type="submit" disabled={isPropertyAdded}>
                  Add Property
                </button>
              </div>
            </>
          )}
        </Form>
      </div>
    </div>
  );
}
