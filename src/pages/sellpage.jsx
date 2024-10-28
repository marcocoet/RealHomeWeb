import addpropertySchema from "../schema/addproperty.schema";
import { useSelector, useDispatch } from "react-redux";
import { addProperty } from "../reducers/addproperty.reducer";
import { useForm } from "../hooks";
import Form from "../common/components/Form";
import { Field } from "formik";
import api from "../api/api";
import { useNavigate } from "react-router-dom";
import Map from "../pages/Map";

export default function SellPage() {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const { types } = useSelector((state) => state.realEstateTypes);

  const isPropertyAdded = useSelector(
    ({ addProperty }) => addProperty?.isPropertyAdded
  );

  const { isValid, values } = useForm("addpropertyForm");
  //localStorage.clear();

  if (!api.hasValidToken())
    return navigate("/login", { state: { from: "/sell" } });

  return (
    <div className="homepage">
      <div className="justify-center">
        <h1>List Your Property Privately</h1>
        <p>
          Selling your property can be a big decision, but Private Property
          simplifies the process. This South African site lets you advertise to
          millions of monthly viewers. You can list the property yourself or use
          one of our consultants.
        </p>
      </div>
      <div className="flex justify-center items-center">
        <div className="w-2/3">
          <Map minPrice={0} maxPrice={1000000} propertyType="" />
        </div>
      </div>
      <div className="justify-center">
        <Form
          observe
          name="addpropertyForm"
          initialValues={{
            address: "",
            type_id: "",
            bedrooms: "",
            bathrooms: "",
            minPrice: "",
            maxPrice: "",
          }}
          validationSchema={addpropertySchema}
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
                  <label htmlFor="type_id">Property Type:</label>
                  <Field
                    as="select"
                    id="type_id"
                    name="type_id"
                    autoComplete="off"
                  >
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
                  <label htmlFor="minPrice">Minimum Price</label>
                  <Field
                    type="number"
                    id="minPrice"
                    name="minPrice"
                    autoComplete="off"
                  />
                </div>
                <div>
                  <label htmlFor="maxPrice">Maximum Price</label>
                  <Field
                    type="number"
                    id="maxPrice"
                    name="maxPrice"
                    autoComplete="off"
                  />
                </div>

                <button
                  type="submit"
                  disabled={isPropertyAdded}
                  onClick={async () => {
                    if (!isValid) return;

                    await dispatch(addProperty(values));
                    alert("Property added success!");
                  }}
                >
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
