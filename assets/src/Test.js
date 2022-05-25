import axios from "axios";
import React from "react";
import { Fragment, useState, useEffect } from "react";

const Test = () => {
  const [persons, setPersons] = useState([]);
  const [isLoading, setIsloading] = useState(true);
  const [message, setMessage] = useState("");

  useEffect(() => {
    (async () => getPersonToServer())();
    return () => {
      setIsloading(false);
    };
  }, []);

  async function getPersonToServer() {
    try {
      const response = await axios.get("/api/person");
      const datas = response?.data;
      if (datas) {
        setPersons(datas);
      }
      setIsloading(false);
    } catch (error) {
      setIsloading(false);
      setMessage(error);
    }
  }

  return (
    <Fragment>
      <span>Liste de personne</span>
      <div>
        <table className="table">
          <thead>
            <tr>
              <th scope="col">#</th>
              <th scope="col">Profile user1</th>
              <th scope="col">Nom de famille</th>
              <th scope="col">Prenoms</th>
            </tr>
          </thead>
          <tbody>
            {persons?.length > 0 &&
              persons.map((person, index) => (
                <tr key={index}>
                  <th scope="row">{person.id}</th>
                  <td>{person.avatar}</td>
                  <td>{person.lastname}</td>
                  <td>{person.firstname}</td>
                </tr>
              ))}
            {!isLoading && persons?.length <= 0 && (
              <tr>
                <td colSpan={4}>Aucune donnée disponble</td>
              </tr>
            )}
            {isLoading && (
              <tr>
                <td colSpan={4}>Veuillez patienter . . .</td>
              </tr>
            )}
            {message && (
              <tr>
                <td colSpan={4}>Erreur : {message}</td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </Fragment>
  );
};

export default Test;
