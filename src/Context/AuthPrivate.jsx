import React from 'react';
import useAuth from '../Hooks/useAuth';
import { useNavigate } from 'react-router';

const AuthPrivate = ({children}) => {
  const {user} = useAuth()
  const navigate = useNavigate()

  if(user) return navigate('/')

  return children
};

export default AuthPrivate;