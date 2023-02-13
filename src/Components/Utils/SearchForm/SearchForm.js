import React from 'react';
import { useForm } from 'react-hook-form';
import classes from './SearchForm.module.css';

function SearchForm() {
    const { register, handleSubmit, formState: { errors } } = useForm();
    const onSubmit = data => console.log(data);
    console.log(errors);

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
    <select className={classes.input} {...register("Title", { required: true })}>
    <option value="10">10</option>
      <option value="50">50</option>
      <option value="100">100</option>
      <option value="500">500</option>
      <option value="1000">1000</option>
    </select>
  </form>
  )
}

export default SearchForm;