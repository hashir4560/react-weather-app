import React, { useState } from "react";
import "./weather.css";

function Weather() {
  const APIKEY = "cd9e8a8bd4ce5c72c3a84702229f9b08";

  const [form, setForm] = useState({
    city: "",
    country: "",
  });

  const handleChange = (e) => {
    let name = e.target.name;
    let value = e.target.value;

    if (name == "city") {
      setForm({ ...form, city: value });
    }
    if (name == "country") {
      setForm({ ...form, country: value });
    }
    console.log(form.city, form.country);
  };

  return (
    <div className="weather">
      <span className="title">Weather App</span>
      <br />

      <form>
        <input
          type="text"
          name="city"
          placeholder="city"
          onChange={(e) => handleChange(e)}
        />
        &nbsp;&nbsp;&nbsp;&nbsp;
        <input
          type="text"
          name="country"
          placeholder="country"
          onChange={(e) => handleChange(e)}
        />
        <button className="getweather">Submit</button>
      </form>
    </div>
  );
}

export default Weather;
