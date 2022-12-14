import { TextField, Box } from "@mui/material"
import SearchIcon from '@mui/icons-material/Search';

interface SearchProps {
  label: string,
  type: React.HTMLInputTypeAttribute | undefined
  onChange: (arg: string) => void,
  width?: string,
  className?: string,
}

const Search = ({label, type, onChange, width, className}: SearchProps) => {
  return (
      <Box sx={{ display: 'flex', alignItems: 'flex-end', width: width ?? 'auto'}} className={className ?? ''}>
        {type !== 'date' && <SearchIcon sx={{ color: 'action.active', mr: 1, my: 0.5 }} />}
        <TextField
          label={type !== 'date' ? label : ''}
          onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
            onChange(e.target.value)}}
          type={type}
          margin="dense"
          variant="standard"
          helperText={type === 'date' ? label : ''}
        />
      </Box>
  )
}

export default Search