import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import StudentDashboard from "./StudentDashboard";

const Dashboard = () => {
    const navigate = useNavigate();

    useEffect(() => {
        const role = localStorage.getItem("role");
        if (!role) {
            navigate("/student-login");
        }
    }, [navigate]);

    return <StudentDashboard />;
};

export default Dashboard;
