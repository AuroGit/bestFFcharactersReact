import React, { useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";

const Reload = ()=> {

    const navigate = useNavigate();
    const { game } = useParams();
    useEffect(() => navigate(`/team/${game}`), []);

    return <></>
};

export default Reload;