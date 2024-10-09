import { FormikConsumer } from "formik";

const Debug = () => (
  <div className="my-6 rounded-md bg-primary-light-grey-100 shadow-inner">
    <div className="rounded-t-md bg-primary-dark-grey-500 p-2 text-xs font-medium uppercase tracking-tight text-white">
      Form State
    </div>
    <FormikConsumer>
      {({ validationSchema, validate, onSubmit, ...rest }) => (
        <pre className="overflow-x-scroll px-2 py-1 text-xs">
          {JSON.stringify(rest, null, 2)}
        </pre>
      )}
    </FormikConsumer>
  </div>
);

export default Debug;
