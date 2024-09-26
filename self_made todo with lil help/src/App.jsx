import { useState } from "react";

import "./App.css";

function App() {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [contact, setContact] = useState("");
  const [gender, setGender] = useState("male");
  const [subject, setSubject] = useState({
    english: true,
    maths: false,
    chemistry: false,
  });
  const [selectedOption, setSelectedOption] = useState("");

  const [about, setAbout] = useState("");

  const validateEmail = (email) => /\S+@\S+\.\S+/.test(email);
  const validateContact = (contact) => /^\d{10}$/.test(contact);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!validateEmail(email)) {
      alert("Please enter a valid email.");
      return;
    }
    if (!validateContact(contact)) {
      alert("Please enter a valid 10-digit contact number.");
      return;
    }

    console.log(
      firstName,
      lastName,
      email,
      contact,
      gender,
      selectedOption,
      subject,
      about
    );
  };

  const handleSubjectChange = (sub) => {
    setSubject((prev) => ({
      ...prev,
      [sub]: !prev[sub],
    }));
  };

  const handleReset = () => {
    setFirstName("");
    setLastName("");
    setEmail("");
    setContact("");
    setGender("male");
    setSubject({
      english: true,
      maths: false,
      physics: false,
    });

    setSelectedOption("");
    setAbout("");
  };

  return (
    <div className="app">
      <form action="#" id="form-submit">
        <h1>Form in React</h1>
        <div>
          <label htmlFor="firstname">First Name*</label>
          <input
            type="text"
            id="firstname"
            placeholder="Enter First Name"
            value={firstName}
            onChange={(e) => setFirstName(e.target.value)}
          />
        </div>

        <div>
          <label htmlFor="lastname">Last Name*</label>
          <input
            type="text"
            id="lastname"
            placeholder="Enter Last Name"
            value={lastName}
            onChange={(e) => setLastName(e.target.value)}
          />
        </div>

        <div>
          <label htmlFor="email">Email*</label>
          <input
            type="text"
            placeholder="Enter Email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>

        <div>
          <label htmlFor="contact"> Contact*</label>
          <input
            type="text"
            placeholder="Enter Mobile No."
            id="contact"
            value={contact}
            onChange={(e) => setContact(e.target.value)}
          />
        </div>
        <div>
          <label htmlFor="gender">Gender*</label>
          <input
            type="radio"
            value="male"
            id="male"
            checked={gender === "male"}
            onChange={(e) => setGender(e.target.value)}
          />
          Male
          <input
            type="radio"
            value="female"
            id="female"
            checked={gender === "female"}
            onChange={(e) => setGender(e.target.value)}
          />
          Female
          <input
            type="radio"
            value="others"
            id="others"
            checked={gender === "others"}
            onChange={(e) => setGender(e.target.value)}
          />
          Others
        </div>

        <div>
          <label htmlFor="lang">Your Favourite Subject*</label>
          <input
            type="checkbox"
            name="lang"
            checked={subject.english}
            onChange={(e) => handleSubjectChange("english")}
          />
          English
          <input
            type="checkbox"
            name="lang"
            checked={subject.maths}
            onChange={(e) => handleSubjectChange("maths")}
          />
          Maths
          <input
            type="checkbox"
            name="lang"
            checked={subject.chemistry}
            onChange={(e) => handleSubjectChange("chemistry")}
          />
          Chemistry
        </div>

        <div>
          <select
            name="select"
            id="select"
            value={selectedOption}
            onChange={(e) => {
              setSelectedOption(e.target.value);
            }}
          >
            <option value="" disabled>
              Select Your Answer
            </option>
            <optgroup label="Beginners">
              <option value="1">HTML</option>
              <option value="2">CSS</option>
              <option value="3">JavaScript</option>
            </optgroup>
            <optgroup label="Advance">
              <option value="4">React</option>
              <option value="5">Node</option>
              <option value="6">Express</option>
              <option value="t">MongoDB</option>
            </optgroup>
          </select>
        </div>

        <div>
          <label htmlFor="about"> About*:</label>
          <textarea
            id="about"
            cols="30"
            rows="10"
            placeholder="About yourself"
            required
            value={about}
            onChange={(e) => setAbout(e.target.value)}
          ></textarea>
        </div>

        <div>
          <label>Submit or Reset</label>
          <button type="reset" value="reset" onClick={handleReset}>
            RESET
          </button>
          <button type="submit" value="Submit" onClick={handleSubmit}>
            SUBMIT
          </button>
        </div>
      </form>
    </div>
  );
}

export default App;
