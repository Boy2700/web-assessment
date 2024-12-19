import React from 'react';
import axios from 'axios';

const FetchAndSend = () => {
  const SIGNUP_URL = 'https://datacliqq.ditcosoft.com/apis';
  const DASHBOARD_URL = 'https://datacliqq.ditcosoft.com/apis';
  const static_token = 'eyJyNzMyZTEzNGMyMTg5NTEiiOjE1ODAzODQyNTA3MDN9';

  const generateSecurityKey = (agentCode: string): string => {
    const md5 = require('md5');
    return `${md5(agentCode)}|${static_token}`;
  };

  const signup = async (formData: {
    email: string;
    password: string;
    fullName: string;
    phone: string;
    agentCode: string;
    userAgent: string;
  }) => {
    const headers = {
      'Content-Type': 'application/json',
      'Security-Key': generateSecurityKey(formData.agentCode),
    };

    const body = {
      requestType: 'REGT',
      userMail: formData.email,
      userPassword: formData.password,
      userFullname: formData.fullName,
      userPhone: formData.phone,
      agentCode: formData.agentCode,
      userAgent: formData.userAgent,
    };

    try {
      const response = await axios.post(SIGNUP_URL, body, { headers });
      console.log('Signup response:', response.data);
      return response.data;
    } catch (error) {
      console.error('Error during signup:', error);
      throw error;
    }
  };

  const fetchDashboard = async (agentCode: string) => {
    const headers = {
      'Content-Type': 'application/json',
      'Security-Key': generateSecurityKey(agentCode),
    };

    const body = {
      requestType: 'DASHBRD',
      agentCode,
    };

    try {
      const response = await axios.post(DASHBOARD_URL, body, { headers });
      console.log('Dashboard data:', response.data);
      return response.data;
    } catch (error) {
      console.error('Error fetching dashboard:', error);
      throw error;
    }
  };

  return {
    signup,
    fetchDashboard,
  };
};

export default FetchAndSend;
