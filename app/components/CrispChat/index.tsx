"use client";
import React, { useEffect } from "react";
import { Crisp } from "crisp-sdk-web";

const CrispChat = () => {
    
  useEffect(() => {
    Crisp.configure("d11b07ad-cc9a-4cbc-8bf5-826488140be8");
  }, []);

  return null;
};

export default CrispChat;
