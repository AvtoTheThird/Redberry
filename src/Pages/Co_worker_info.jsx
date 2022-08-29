import axios from "axios";
import { useState, useEffect } from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { ErrorMessage } from "@hookform/error-message";
import { useFormik } from "formik";
import { Link } from "react-router-dom";
import * as yup from "yup";
export function Co_worker_info() {
  const [data, setData] = useState("");
  useEffect(() => {
    axios.get("https://pcfy.redberryinternship.ge/api/teams").then((resp) => {
      setData(resp.data);
    });
  }, []);

  const [position, setPosition] = useState("");
  useEffect(() => {
    axios
      .get("https://pcfy.redberryinternship.ge/api/positions")
      .then((resp) => {
        setPosition(resp.data);
      });
  }, []);
  // console.log( position.data[1].team_id);
  const [dropdown, setdropdown] = useState();

  if (dropdown === "დეველოპერი") {
    var id = 1;
  } else if (dropdown === "HR") {
    var id = 2;
  } else if (dropdown === "გაყიდვები") {
    var id = 3;
  } else if (dropdown === "დიზაინი") {
    var id = 4;
  } else if (dropdown === "მარკეტინგი") {
    var id = 5;
  }
  let emailRooles = new RegExp("[a-z0-9]+@redberry.com");
  const basiSchema = yup.object().shape({
    firstName: yup.string().min(2, "მინიმუმ 2 სიმბოლო").required("სავალდებულო"),
    lastName: yup.string().min(2, "მინიმუმ 2 სიმბოლო").required("სავალდებულო"),
    team: yup.string(),
    position: yup.string().required("სავალდებულო"),
    email: yup.string().matches(emailRooles).required("სავალდებულო"),
    number: yup
      .string()
      .max(13, "ნომერი ზედმეტად გრძელია")
      .required("სავალდებულო"),
  });

  const onSubmit = async (values, actions) => {
    console.log(values);
    console.log(actions);
    await new Promise((resolve) => setTimeout(resolve, 1000));
    actions.resetForm();
  };

  const { values, errors, touched, handleBlur, handleChange, handleSubmit } =
    useFormik({
      initialValues: {
        firstName: "",
        lastName: "",
        team: "",
        position: "",
        email: "",
        number: "",
      },
      validationSchema: basiSchema,
      onSubmit,
    });
  console.log(errors);
  return (
    <div className="co-worker-info">
      <form onSubmit={handleSubmit}>
        <div className="saxeli-gvari">
          <label htmlFor="">სახელი</label>
          <input
            type="text"
            name="firstName"
            placeholder="გრიშა"
            className={
              errors.firstName && touched.firstName
                ? "name-input-error"
                : "name-input"
            }
            value={values.firstName}
            onChange={handleChange}
            onBlur={handleBlur}
          />
          {errors.firstName && touched.firstName && (
            <p className="error">{errors.firstName}</p>
          )}
          <label htmlFor="">გვარი</label>
          <input
            type="text"
            placeholder="ონიანი"
            name="lastName"
            className={
              errors.lastName && touched.lastName
                ? "lastname-input-error"
                : "lastname-input"
            }
            value={values.lastName}
            onChange={handleChange}
            onBlur={handleBlur}
          />
          {errors.lastName && touched.lastName && (
            <p className="error">{errors.lastName}</p>
          )}
        </div>
        <label>თიმი</label>
        <select
          name="team"
          className={"team-input"}
          value={dropdown}
          onChange={(e) => setdropdown(e.target.value)}
        >
          <option>თიმი</option>
          {data.data?.map((team) => (
            <option>{team.name}</option>
          ))}
        </select>

        {/* spageti kodi */}
        <label>პოზიცია</label>
        <select
          className="pozicia-input"
          value={values.position}
          onChange={handleChange}
          onBlur={handleBlur}
          name="position"
        >
          <option>პოზიცია</option>{" "}
          {position.data?.map(function (pos) {
            if (pos.team_id === id)
              return (
                <option key={position.data.id}>
                  {pos.team_id === id && pos.name}
                </option>
              );
          })}
        </select>

        <label htmlFor="">მეილი</label>
        <input
          name="email"
          type="text"
          placeholder="ონიანი@რაღაც.ცომ"
          className={
            errors.email && touched.email ? "email-input-error" : "email-input"
          }
          value={values.email}
          onChange={handleChange}
          onBlur={handleBlur}
        />
        <label htmlFor="">ტელეფონის ნომერი</label>
        <input
          name="number"
          type="text"
          placeholder="56822081"
          className={
            errors.number && touched.number
              ? "number-input-error"
              : "number-input"
          }
          value={values.number}
          onChange={handleChange}
          onBlur={handleBlur}
        />
        {errors.number && touched.number && (
          <p className="error">{errors.number}</p>
        )}

        <button type="submit" className="submit-button">
          <Link to="/Laptop_list">a </Link>
        </button>
      </form>
    </div>
  );
}
