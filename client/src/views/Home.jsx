import React from "react";
import ListCard from "../components/ListCard";
import AddContact from "../components/AddContact.jsx";
const Home = () => {
    return (
        <div style={{display:'flex',margin:'2%'}}>
            <AddContact />
            <ListCard/>
        </div>
    );
};

export default Home;
