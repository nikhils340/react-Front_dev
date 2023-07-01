import React from 'react';
import { useFormik } from 'formik';
import {
  FormControl,
  InputLabel,
  Input,
  FormHelperText,
  Button,
  MenuItem,
  Radio,
  RadioGroup,
  FormControlLabel,
  Select,
  makeStyles,
} from '@material-ui/core';

const countries = [
  { label: 'USA', value: 'usa' },
  { label: 'Canada', value: 'canada' },
  { label: 'UK', value: 'uk' },
  { label: 'India', value: 'india' },
  { label: 'Russia', value: 'russia' },
];

const hobbies = [
  { label: 'Reading', value: 'reading' },
  { label: 'Sports', value: 'sports' },
  { label: 'Music', value: 'music' },
  { label: 'Dancing', value: 'dance' },
  { label: 'Playing', value: 'play' },
];

const useStyles = makeStyles((theme) => ({
  form: {
    display: 'flex',
    flexDirection: 'column',
    maxWidth: '300px',
    margin: '0 auto',
    marginTop: theme.spacing(4),
  },
  formControl: {
    marginBottom: theme.spacing(2),
  },
  submitButton: {
    marginTop: theme.spacing(2),
  },
}));

const App = () => {
  const classes = useStyles();

  const formik = useFormik({
    initialValues: {
      name: '',
      address: '',
      country: '',
      gender: '',
      hobbies: [],
    },
    onSubmit: (values) => {
      console.log(values);
      alert(JSON.stringify(values, null, 2));
    },
  });

  return (
    <form onSubmit={formik.handleSubmit} className={classes.form}>
      <FormControl className={classes.formControl}>
        <InputLabel htmlFor="name">Name</InputLabel>
        <Input
          id="name"
          name="name"
          onChange={formik.handleChange}
          value={formik.values.name}
        />
        <FormHelperText error>
          {formik.touched.name && formik.errors.name}
        </FormHelperText>
      </FormControl>

      <FormControl className={classes.formControl}>
        <InputLabel htmlFor="address">Address</InputLabel>
        <Input
          id="address"
          name="address"
          multiline
          rows={4}
          onChange={formik.handleChange}
          value={formik.values.address}
        />
        <FormHelperText error>
          {formik.touched.address && formik.errors.address}
        </FormHelperText>
      </FormControl>

      <FormControl className={classes.formControl}>
        <InputLabel htmlFor="country">Country</InputLabel>
        <Select
          id="country"
          name="country"
          onChange={formik.handleChange}
          value={formik.values.country}
        >
          {countries.map((country) => (
            <MenuItem key={country.value} value={country.value}>
              {country.label}
            </MenuItem>
          ))}
        </Select>
        <FormHelperText error>
          {formik.touched.country && formik.errors.country}
        </FormHelperText>
      </FormControl>

      <FormControl component="fieldset" className={classes.formControl}>
        <RadioGroup
          aria-label="gender"
          name="gender"
          value={formik.values.gender}
          onChange={formik.handleChange}
        >
          <FormControlLabel value="male" control={<Radio />} label="Male" />
          <FormControlLabel value="female" control={<Radio />} label="Female" />
          <FormControlLabel value="other" control={<Radio />} label="Other" />
        </RadioGroup>
      </FormControl>

      <FormControl className={classes.formControl}>
        <InputLabel htmlFor="hobbies">Hobbies/Interests</InputLabel>
        <Select
          id="hobbies"
          name="hobbies"
          multiple
          onChange={formik.handleChange}
          value={formik.values.hobbies}
        >
          {hobbies.map((hobby) => (
            <MenuItem key={hobby.value} value={hobby.value}>
              {hobby.label}
            </MenuItem>
          ))}
        </Select>
        <FormHelperText error>
          {formik.touched.hobbies && formik.errors.hobbies}
        </FormHelperText>
      </FormControl>

      <Button
        color="primary"
        variant="contained"
        type="submit"
        className={classes.submitButton}
      >
        Submit
      </Button>
    </form>
  );
};

export default App;
