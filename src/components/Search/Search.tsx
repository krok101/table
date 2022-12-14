import { TextField, Box } from "@mui/material"
import SearchIcon from '@mui/icons-material/Search';

interface SearchProps {
  label: string,
  type: React.HTMLInputTypeAttribute | undefined
  onChange: (arg: string) => void
}

const Search = ({label, type, onChange}: SearchProps) => {
  return (
      <Box sx={{ display: 'flex', alignItems: 'flex-end' }}>
        <SearchIcon sx={{ color: 'action.active', mr: 1, my: 0.5 }} />
        <TextField
          label={label}
          onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
            console.log('e::', typeof e.target.value)
            onChange(e.target.value)}}
          
          type={type}
          margin="dense"
          variant="standard"
        />
      </Box>
  )
}

export default Search