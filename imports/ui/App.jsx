import React from "react";
import SimpleSchema from "simpl-schema";
import AutoForm from "uniforms-material/AutoForm";
// import AutoFields from "uniforms-material/AutoFields";
// import AutoField from "uniforms-material/AutoField";
import "uniforms-material";
import SimpleSchema2Bridge from "uniforms-bridge-simple-schema-2";

const schema = new SimpleSchema({
  list: Array,
  "list.$": Object,
  "list.$.title": String,
  "list.$.number": Number
});

const bridge = new SimpleSchema2Bridge(schema);

// const CustomAutoField = props => {
//   return <AutoField {...props}></AutoField>;
// };

const CustomAutoField = AutoField;

const App = () => (
  <div>
    <h1>Welcome to Meteor!</h1>

    <AutoForm
      schema={bridge}
      // onSubmit={values => {
      //   console.log("submitting", values);
      // }}
    >
      {/* <AutoFields autoField={CustomAutoField} element="div"></AutoFields> */}
    </AutoForm>
  </div>
);

export default App;
