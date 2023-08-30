import { Grid, TextField } from '@material-ui/core';
import React from 'react'
import { useFormContext, Controller } from 'react-hook-form'

const AddressInput = ({ name, label, required}) => {
 const { control } = useFormContext();

  return (
    <Grid item xs={12} sm={6}>
     <Controller 
       render={({field}) => (
        <TextField {...field} label={label} required={required}/>
       )}
       control={control}
       fullWidth
       name={name}
        />
       
       
    </Grid>
  )
}

export default AddressInput