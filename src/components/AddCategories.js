  
  import React, { useState } from 'react';
  import PropTypes from 'prop-types'; 
  
  export const AddCategories = ({setCategories}) => {
      
    const  [inputValue, setInputValue] = useState('');
    
    const handleInputValue = (e)=>{
        setInputValue(e.target.value);
    }

    const handleSubmit = (e)=>{
        e.preventDefault();
        if(inputValue.trim().length > 2){

            setCategories(cat => [ inputValue,...cat, ]);
            setInputValue('');
        }
    }


      return (
          <form onSubmit= {handleSubmit}>
              <input 
              type= 'text'
              value = {inputValue}
              onChange = {handleInputValue}
              />                         
          </form>
      )
  }

  AddCategories.prototype={
    setCategories:PropTypes.func.isRequired

  }
  