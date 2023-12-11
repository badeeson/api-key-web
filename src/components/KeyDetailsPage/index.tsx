'use client';

import * as React from 'react';
import ToggleButton from '@mui/material/ToggleButton';
import ToggleButtonGroup from '@mui/material/ToggleButtonGroup';
import { styled } from "@mui/material/styles";
import { Avatar, Box, Button, FormControl, IconButton, List, ListItem, ListItemAvatar, ListItemText, MenuItem, Paper, Select, Stack, Typography } from '@mui/material';
import Grid from '@mui/material/Unstable_Grid2';
import TextBox from './TextBox';
import FolderIcon from '@mui/icons-material/Folder';
import FilterAltSharpIcon from '@mui/icons-material/FilterAltSharp';
import AutoStoriesIcon from '@mui/icons-material/AutoStories';
import { convertDate } from '@/utils/convert-date';

const StyledToggleButton = styled(ToggleButton)({
  "&.Mui-selected, &.Mui-selected:hover": {
    color: "white",
    backgroundColor: '#1a237e'
  }
});

const Demo = styled('div')(({ theme }) => ({
  backgroundColor: theme.palette.background.paper,
}));

function generate(element: React.ReactElement) {
  return [0, 1, 2].map((value) =>
    React.cloneElement(element, {
      key: value,
    }),
  );
}

interface PropsKeyDetails {
  keyValue: string;
}

interface StateKeyDetails {
  name: string;
  key: string;
  createdAt: string;
  maxQuotaPerDay: number;
  remainingQuota: number;
}

export default function KeyDetailsPage(props: PropsKeyDetails) {
  const { keyValue } = props;
  const [apiTab, setApiTab] = React.useState(0);
  const [protocol, setProtocol] = React.useState(0);
  const [keyDetails, setkeyDetails] = React.useState<StateKeyDetails | {}>({});

  const handleChangeApiTab = (
    event: React.MouseEvent<HTMLElement>,
    value: number,
  ) => {
    setApiTab(value);
  };

  const handleChange = (
    event: React.MouseEvent<HTMLElement>,
    value: number,
  ) => {
    setProtocol(value);
  };

  React.useEffect(() => {
    const fetchKeyDetails = async () => {
      try {
        const res = await fetch(`http://localhost:4000/api-key?key=${keyValue}`);
        const data = await res.json();
        console.log('data', data)
        setkeyDetails(data);
      } catch (err) {
        console.error(err);
      }
    }

    fetchKeyDetails();
  }, [keyValue]);

  return (
    <Box>
      <Grid container rowSpacing={4}>
        <Grid container xs={12} rowSpacing={2}>
          <Grid xs={12}>
            <Stack direction="row" alignItems="center" justifyContent="space-between">
              <Box>
                <Typography gutterBottom variant="h5" component="div">
                  {keyDetails?.name}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  Created on {convertDate(keyDetails?.createdAt)}
                </Typography>
              </Box>
              <ToggleButtonGroup
                color="primary"
                value={apiTab}
                exclusive
                onChange={handleChangeApiTab}
                aria-label="Platform"
              >
                <StyledToggleButton value={0}>Endpoints</StyledToggleButton>
                <StyledToggleButton value={1}>Settings</StyledToggleButton>
                <StyledToggleButton value={2}>API Key Sharing</StyledToggleButton>
              </ToggleButtonGroup>
            </Stack>
          </Grid>
          <Grid xs={12}>
            <TextBox iconBeforeInput value={keyValue} />
          </Grid>
        </Grid>
        <Grid xs={12}>
          <Box sx={{ p: 2 }}>
            <Grid container rowSpacing={2}>
              <Grid xs={12}>
                <Stack direction="row" alignItems="center" justifyContent="space-between">
                  <Box>
                    <Typography gutterBottom variant="h5" component="div">
                      Endpoints
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                      Our Web3 API Key works across several networks, use it on one or use it on all.
                    </Typography>
                  </Box>
                  <ToggleButtonGroup
                    color="primary"
                    value={protocol}
                    exclusive
                    onChange={handleChange}
                    aria-label="Platform"
                  >
                    <StyledToggleButton value={0}>Https</StyledToggleButton>
                    <StyledToggleButton value={1}>Web Sockets</StyledToggleButton>
                    <StyledToggleButton value={2}>
                      <FilterAltSharpIcon />
                      REFINE
                    </StyledToggleButton>
                  </ToggleButtonGroup>
                </Stack>
              </Grid>
              <Grid xs={12}>
                <Paper sx={{ p: 2 }}>
                  <Typography sx={{ mb: 2 }} variant="h6" component="div">
                    Networks
                  </Typography>
                  <Demo>
                    <List>
                      <ListItem
                      >
                        <ListItemAvatar>
                          <Avatar>
                            <FolderIcon />
                          </Avatar>
                        </ListItemAvatar>
                        <ListItemText
                          primary={
                            <Grid container spacing={2} alignItems="center">
                              <Grid xs={3}>
                                <Stack direction="row" alignItems="center" spacing={4}>
                                  <Typography>API&nbsp;Key&nbsp;Services</Typography>
                                  <Button
                                    variant="text"
                                    startIcon={<AutoStoriesIcon />}
                                  >
                                    DOCS
                                  </Button>
                                </Stack>
                              </Grid>
                              <Grid xs={9}>
                                <Stack direction="row" alignItems="center" spacing={2}>
                                  <FormControl sx={{ m: 1, minWidth: 120 }} size="small">
                                    <Select
                                      value={0}
                                      // onChange={handleChange}
                                      displayEmpty
                                      inputProps={{ 'aria-label': 'Without label' }}
                                    >
                                      <MenuItem value={0}>MAINNET</MenuItem>
                                      <MenuItem value={1}>SUBNET</MenuItem>
                                    </Select>
                                  </FormControl>
                                  <TextBox value={`http://localhost:4000/api-key/validate/${keyValue}`} />
                                </Stack>
                              </Grid>
                            </Grid>
                          }
                        />
                      </ListItem>
                    </List>
                  </Demo>
                </Paper>
              </Grid>
            </Grid>
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
}
