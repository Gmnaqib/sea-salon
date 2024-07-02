"use client"
import React, { useEffect, useState } from 'react';
import MainHeader from '../_components/MainHeader';
import GlobalApi from '../_utils/GlobalApi';

function Dashboard() {
  const [reservationList, setReservationList] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    getReservationList();
  }, []);

  const getReservationList = () => {
    GlobalApi.getReservation()
      .then(resp => {
        console.log(resp.data.data);
        setReservationList(resp.data.data);
      })
      .catch(error => {
        console.error("Error fetching data: ", error);
        setError(error.response ? error.response.data : "Unknown error");
      });
  };

  if (error) {
    return (
      <div>
        <MainHeader />
        <h2>Error: {error.message || "Unknown error occurred"}</h2>
        {error.details && <pre>{JSON.stringify(error.details, null, 2)}</pre>}
      </div>
    );
  }

  return (
    <div>
      <MainHeader />
      {reservationList.map((item) => (
        <div key={item.id} value={item.attributes.reservationDate}>
          <h2>{item.attributes.reservationDate}</h2>
        </div>
      ))}
    </div>
  );
}

export default Dashboard;
