import { createContext } from "react";

export const DoctorContext = createContext()

const DoctorContextProvider = (props) => {

  const value = {

  }

  return (
    <DoctorContext.Provider value={value}>
      {props.children}
    </DoctorContext.Provider>
  )
}

export default DoctorContextProvider


// import { createContext, useState } from "react";
// import axios from "axios";
// import { toast } from "react-toastify";

// export const DoctorContext = createContext();

// const DoctorContextProvider = (props) => {
//   // Store doctor token
//   const [dToken, setDToken] = useState(
//     localStorage.getItem("dToken") ? localStorage.getItem("dToken") : ""
//   );

//   // Backend URL
//   const backendUrl = import.meta.env.VITE_BACKEND_URL;

//   // Example: get doctor profile (optional)
//   const getDoctorProfile = async () => {
//     try {
//       const { data } = await axios.get(backendUrl + "/api/doctor/profile", {
//         headers: { dToken },
//       });
//       if (data.success) {
//         console.log(data.doctorData);
//       } else {
//         toast.error(data.message);
//       }
//     } catch (error) {
//       toast.error(error.message);
//     }
//   };

//   const value = {
//     dToken,
//     setDToken,
//     backendUrl,
//     getDoctorProfile,
//   };

//   return (
//     <DoctorContext.Provider value={value}>
//       {props.children}
//     </DoctorContext.Provider>
//   );
// };

// export default DoctorContextProvider;
