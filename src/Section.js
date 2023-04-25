import React from 'react';
import Card from './card'
import "./index.css"
import "./App.css";

function Section() {
  return (
    <section className='flex gap-4 flex-col  align-center items-center w-full h-fit p-4'>
    
      <Card firstName="osama" 
            lastName="youssef" 
      />
     
      <Card firstName="osama" 
            lastName="youssef" 
      />
     
      <Card firstName="osama" 
            lastName="youssef" 
      />
     
      <Card firstName="osama" 
            lastName="youssef" 
      />
     
    </section>
  );
}
export default Section;
