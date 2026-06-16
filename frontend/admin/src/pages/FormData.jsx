import React, { useEffect, useState } from "react";

import axios from "axios";

const FormData = () => {

  const [forms, setForms] = useState([]);

  // FETCH DATA

  const fetchForms = async () => {

    try {

      const res = await axios.get(
        "https://cms-work.onrender.com/api/form/all"
      );

      setForms(res.data.forms);

    } catch (error) {

      console.log(error);

    }
  };

  useEffect(() => {

    fetchForms();

  }, []);

  return (

    <div
      style={{
        padding: "30px",
      }}
    >

      <h1>
        Contact Messages
      </h1>

      <table
        border="1"
        width="100%"
        cellPadding="12"
        style={{
          marginTop: "20px",
          borderCollapse: "collapse",
        }}
      >

        <thead>

          <tr>

            <th>Name</th>

            <th>Email</th>

            <th>Phone</th>

            <th>Service</th>

            <th>Message</th>

          </tr>

        </thead>

        <tbody>

          {
            forms.length > 0 ? (

              forms.map((item) => (

                <tr key={item._id}>

                  <td>{item.name}</td>

                  <td>{item.email}</td>

                  <td>{item.phone}</td>

                  <td>{item.service}</td>

                  <td>{item.message}</td>

                </tr>

              ))

            ) : (

              <tr>

                <td colSpan="5">

                  No Messages Found

                </td>

              </tr>

            )
          }

        </tbody>

      </table>

    </div>
  );
};

export default FormData;