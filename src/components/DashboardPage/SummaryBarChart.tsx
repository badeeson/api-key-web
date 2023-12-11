import * as React from 'react';
import { BarChart } from '@mui/x-charts/BarChart';
import { axisClasses } from '@mui/x-charts';
import { Box, FormControl, IconButton, MenuItem, Paper, Select, Stack, Typography } from '@mui/material';
import InfoOutlinedIcon from '@mui/icons-material/InfoOutlined';
import InfoPopover from './InfoPopover';

export default function SummaryBarChart(
  {
    title,
    hasFilter = false,
    filterTitle,
    totalUsed,
    showMaximum = false,
    dataset,
    xAxis,
    series,

  }: {
    title: string,
    hasFilter?: boolean,
    filterTitle?: string,
    totalUsed: string,
    showMaximum?: boolean,
    dataset: any,
    xAxis: any,
    series: any,
  }
) {
  const [anchorEl, setAnchorEl] = React.useState<HTMLElement | null>(null);

  const handlePopoverOpen = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handlePopoverClose = () => {
    setAnchorEl(null);
  };

  const open = Boolean(anchorEl);

  return (
    <React.Fragment>
      <Stack spacing={2}>
        <Stack direction="row" alignItems="center" justifyContent="space-between">
          <Stack direction="row" alignItems="center">
            <Typography variant="h6">
              {title}
            </Typography>
            <IconButton
              color="info"
              aria-owns={open ? 'mouse-over-popover' : undefined}
              aria-haspopup="true"
              onMouseEnter={handlePopoverOpen}
              onMouseLeave={handlePopoverClose}
            >
              <InfoOutlinedIcon />
            </IconButton>
          </Stack>
          {hasFilter && <FormControl sx={{ m: 1, minWidth: 120 }} size="small">
            <Select
              value={0}
              // onChange={handleChange}
              displayEmpty
              inputProps={{ 'aria-label': 'Without label' }}
            >
              <MenuItem value={0}>{filterTitle}</MenuItem>
            </Select>
          </FormControl>}
        </Stack>
        <Paper>
          <Box sx={{ pl: 2.5, pt: 2.5 }}>
            <Typography variant="subtitle1" component="div" color="text.secondary">LAST&nbsp;24&nbsp;HOURS&nbsp;TOTAL</Typography>
            <Box>
              <Typography variant="h6" component="span">
                {totalUsed}
              </Typography>
              {showMaximum &&
                <Typography variant="body2" color="text.secondary" component="span">
                  &nbsp;/&nbsp;200,000
                </Typography>
              }
            </Box>
          </Box>
          <BarChart
            dataset={dataset}
            xAxis={xAxis}
            series={series}
            height={300}
            sx={{
              [`.${axisClasses.left} .${axisClasses.label}`]: {
                transform: 'translate(-20px, 0)',
              }
            }}
          />
        </Paper>
      </Stack>
      <InfoPopover
        open={open}
        anchorEl={anchorEl}
        handlePopoverClose={handlePopoverClose}
        message={`API key request (max 200,000 per day)`}
      />
    </React.Fragment>
  );
}
