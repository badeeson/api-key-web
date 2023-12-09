import * as React from 'react';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import { Stack } from '@mui/material';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';
import HubOutlinedIcon from '@mui/icons-material/HubOutlined';
import GroupsIcon from '@mui/icons-material/Groups';

interface PropsApiKeyHeader {
  handleClickOpen: () => void;
}

export default function ApiKeyHeader(props: PropsApiKeyHeader) {
  const { handleClickOpen } = props;
  return (
    <React.Fragment>
      <Typography variant="h3" gutterBottom>
        API Keys
      </Typography>
      <Stack direction="row" spacing={2}>
        <FormControl sx={{ m: 1, minWidth: 120 }} size="small">
          <Select
            value={""}
            // onChange={handleChange}
            displayEmpty
            inputProps={{ 'aria-label': 'Without label' }}
          >
            <MenuItem disabled value="">
              <Stack direction="row" spacing={1}>
                <HubOutlinedIcon />
                <Typography>All Products</Typography>
              </Stack>
            </MenuItem>
            <MenuItem value={1}>Web3 API</MenuItem>
            <MenuItem value={2}>IPFS</MenuItem>
          </Select>
        </FormControl>
        <FormControl sx={{ m: 1, minWidth: 120 }} size="small">
          <Select
            value={""}
            // onChange={handleChange}
            displayEmpty
            inputProps={{ 'aria-label': 'Without label' }}
          >
            <MenuItem disabled value="">
              <Stack direction="row" spacing={1}>
                <GroupsIcon />
                <Typography>All Roles</Typography>
              </Stack>
            </MenuItem>
            <MenuItem value={1}>Owner</MenuItem>
            <MenuItem value={2}>Other</MenuItem>
          </Select>
        </FormControl>
        <Button variant="contained" onClick={handleClickOpen}>
          Create New API Key
        </Button>
      </Stack>
    </React.Fragment>
  );
}