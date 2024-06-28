'use client'
import { useState, useEffect } from 'react';
import { signIn } from "../../../auth";

const Home: React.FC = () => {
  useEffect(() => {
    console.log("security effect");
  }, []);
  return (
    <h1>欢迎来到安全管理</h1>
  );
};

export default Home;
