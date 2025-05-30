import React, { useEffect, useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getCompanies, deleteCompany } from "../../redux/companySlice.jsx";
import ScheduledInterview from "./CompanyPages/ScheduledInterview.js";
import HomePage from './HomeComponents/HomePage.js'
import About from "./HomeComponents/About.js";
import Work from "./HomeComponents/Work.js";
import Feedback from "./HomeComponents/Feedback.js";
import Contact from "./HomeComponents/Contact.js";
import Footer from "./HomeComponents/Footer.js";
import "./Home-CSS/Application.css";
function Home() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const companies = useSelector((state) => state.companies.companies);

  const [currentUser, setCurrentUser] = useState(null);

  useEffect(() => {
    axios.get("https://ps-30k3.onrender.com/auth/verify", {
      headers: {
        Authorization : `Bearer ${localStorage.getItem("token")}`
      }
    }).then((res) => {
      if (!res.data.status) {
        navigate("/");
      }
    });
    console.log("going to 3001")
    axios
      .get("https://ps-30k3.onrender.com/auth/currentUser", {
        headers: {
          Authorization : `Bearer ${localStorage.getItem("token")}`
        }
      })
      .then((res) => {
        setCurrentUser(res.data.user);
        console.log(res)
      })
      .catch((err) => {
        console.error("Error fetching current user:", err);
      });
  }, []);

  console.log(currentUser);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          "https://ps-30k3.onrender.com/auth/getCompanies", {
            headers: {
              Authorization: `Bearer ${localStorage.getItem("token")}`
            }
          }
        );
        dispatch(getCompanies(response.data));
        console.log(response);
      } catch (err) {
        console.log(err);
      }
    };
    fetchData();
  }, []);

  return (
    <div className="App">
      <HomePage />
      <About />
      <Work />
      <Feedback />
      <Contact />
      <Footer />
    </div>
  );
}

export default Home;
