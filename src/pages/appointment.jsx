import React, { useContext, useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { AppContext } from '../context/context';
import { assets } from "../../assets/assets";

const Appointment = () => {
  const { docId } = useParams();
  const { doctors } = useContext(AppContext);

  const [DocInfo, setDocInfo] = useState(null);
  console.log(doctors, "doctorrrr")
  console.log(docId, "doctorrrr")
  const fetchDocInfo = async () => {
    const DocInfo = doctors.find(doc => doc._id === docId); 
    setDocInfo(DocInfo);
    console.log(DocInfo);
   
  };

  useEffect(() => {
    fetchDocInfo();
  }, [doctors, docId]);

  return (
    <div>
      <div> 
       
     </div>
    </div>
  );
};

export default Appointment;
