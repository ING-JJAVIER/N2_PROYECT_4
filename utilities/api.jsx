import React from 'react';
import axios from 'axios';

export async function api() {
  try {
    const base = await axios.get('http://localhost:3000/datos.json');
    console.log('datos provenientes del axios:', base)
  
    return base.data;
  
  } catch (error) {
   alert('error')
    throw error;
  }
}
