import { useState } from "react";
import useCreatePerson from "./hooks/useCreatePerson";

const PersonForm = ({ notifyError }) => {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [street, setStreet] = useState("");
  const [city, setCity] = useState("");
  const [createPerson] = useCreatePerson({ notifyError });

  const handleSubmit = (e) => {
    e.preventDefault();

    createPerson({
      variables: {
        name,
        phone,
        street,
        city,
      },
    });

    setName("");
    setCity("");
    setPhone("");
    setStreet("");
  };

  return (
    <div>
      <h2>Create new Person</h2>
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
        <div>
          <label>
            Street
            <input
              type="text"
              placeholder="Street"
              value={street}
              name="Street"
              onChange={(evt) => setStreet(evt.target.value)}
            />
          </label>
        </div>
        <div>
          <label>
            City
            <input
              name="city"
              type="text"
              value={city}
              placeholder="City"
              onChange={(evt) => setCity(evt.target.value)}
            />
          </label>
        </div>
        <button type="submit">Create Person</button>
      </form>
      ;
    </div>
  );
};

export default PersonForm;
