import React, { useEffect, useState } from 'react';
import axios from 'axios';
import packageJson from "../../../package.json";
import {ThemeContext } from "../../contexts/ThemeContext"; 

const Footer = () => {
    const [lastPushDate, setLastPushDate] = useState(null);

    useEffect(() => {
        const owner = 'terryfu2';
        const repo = 'devtools';

        axios.get(`https://api.github.com/repos/${owner}/${repo}`)
        .then(response => {
            const lastPush = new Date(response.data.pushed_at);
            setLastPushDate(lastPush);
        }) 
        .catch(error => {
            console.error('Error fetching repository information:', error);
        });
    }, []);

    // Function to calculate days ago
    const daysAgo = (date) => {
        const now = new Date();
        const diff = Math.floor((now - date) / (1000 * 60 * 60 * 24));
        return diff === 1 ? '1 day ago' : `${diff} days ago`;
    };

    // Format last push date to "X days ago"
    const lastPushAgo = lastPushDate ? daysAgo(lastPushDate) : '';
    const { theme } = React.useContext(ThemeContext); 
    return (
        <div style={{ position: 'absolute', bottom: '10px', left: '60%', transform: 'translateX(-50%)', color: theme.font ,fontSize:'12px'}}>
            Last Build:  {lastPushAgo} <a href = "https://github.com/terryfu2/devtools">v.{packageJson.version}</a> by <a href="https://terryfu.ca">Terry Fu</a>
        </div>
    );
};

export default Footer;
