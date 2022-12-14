import { FormControl, InputLabel, MenuItem } from '@mui/material';
import Select, { SelectChangeEvent } from '@mui/material/Select';

interface SelectListProps {
  value: string,
  options: string[],
  onChange: (arg: string) => void,
  label: string,
  width?: string,
}

const SelectList = ({value, options, onChange, label, width}: SelectListProps) => {
  return (
    <FormControl sx={{width: width ?? '150px'}} size="small" margin="normal">
      <InputLabel>{label}</InputLabel>
      <Select value={value ?? ''} label={label} onChange={(e: SelectChangeEvent) => onChange(e.target.value)}>
        <MenuItem value="">
          <em>None</em>
        </MenuItem>
        {options.map((item) => <MenuItem key={item} value={item}>{item}</MenuItem>)}
      </Select>
    </FormControl>
  );
};

export default SelectList;