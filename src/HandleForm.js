import {useState} from "react";

function HandleForm(initialValues) {
  const [values, setValue] = useState(initialValues);

  return [
    values,
    e => {
      setValue({
        ...values,
        [e.target.name]: e.target.value
      });
    }
  ];
};

export default HandleForm;
