import { useEffect } from "react";
import { useState } from "react";
import useUpdatePhone from "./hooks/useUpdatePhone";

const PhoneForm = ({ notifyError }) => {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [updateNumber, result] = useUpdatePhone(notifyError);

  const handleSubmit = (e) => {
    e.preventDefault();

    updateNumber({
      variables: {
        name,
        phone,
      },
    });

    setName("");
    setPhone("");
  };

  return (
    <div>
      <h2>Update the person's phone</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label>
            name
            <input
              name="name"
              type="text"
              placeholder="Name"
              value={name}
              onChange={(evt) => setName(evt.target.value)}
            />
          </label>
        </div>
        <div>
          <label>
            Phone
            <input
              name="phone"
              type="text"
              placeholder="Phone"
              value={phone}
              onChange={(evt) => setPhone(evt.target.value)}
            />
          </label>
        </div>
        <button type="submit">Change Phone</button>
      </form>
      ;
    </div>
  );
};

export default PhoneForm;
