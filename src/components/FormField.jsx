import React from 'react';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import {
  Stack,
  Grid,
  Typography,
  TextField,
  RadioGroup,
  Radio,
  Checkbox,
  FormControl,
  FormGroup,
  InputLabel,
  FormControlLabel,
  Select,
  MenuItem,
} from '@mui/material';



export default function TextFieldWithLabel({
  label,
  field = 'input',
  options = [],
  ...props
}) {
  return (
    <Stack spacing={1}>
      <Grid
        container
        sx={{ marginTop: '8px' }}
        alignItems="center"
        justifyContent="space-between"
      >
        <Grid item>
          <Typography variant="body1">{label}</Typography>
        </Grid>
        <Grid item>
          {field === 'input' && <TextField label={label} {...props} />}
          {field === 'date' && (
            <DatePicker
              inputFormat="DD/MM/yyyy"
              label={label}
              renderInput={(params) => <TextField {...params} />}
              {...props}
              onChange={(dateValue) =>
                props.onChange({
                  target: { name: props.name, value: dateValue },
                })
              }
            />
          )}
          {field === 'radio' && (
            <RadioGroup {...props}>
              {options.map((option) => (
                <FormControlLabel
                  value={option.value}
                  label={option.title}
                  name={props.name}
                  control={<Radio />}
                />
              ))}
            </RadioGroup>
          )}
          {field === 'checkbox' && (
            <FormGroup>
              {options.map((option) => (
                <FormControlLabel
                  control={<Checkbox {...props} />}
                  label={option.title}
                  name={props.name}
                />
              ))}
            </FormGroup>
          )}
          {field === 'select' && (
            <FormControl sx={{ minWidth: '240px' }}>
              <InputLabel>{label}</InputLabel>
              <Select {...props}>
                {options.map((option) => (
                  <MenuItem key={option.value} value={option.value}>
                    {option.title}
                  </MenuItem>
                ))}
              </Select>
            </FormControl>
          )}
        </Grid>
      </Grid>
    </Stack>
  );
}
