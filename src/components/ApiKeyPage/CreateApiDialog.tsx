import { alpha, styled } from '@mui/material/styles';
import Dialog from '@mui/material/Dialog';
import DialogTitle from '@mui/material/DialogTitle';
import DialogContent from '@mui/material/DialogContent';
import DialogActions from '@mui/material/DialogActions';
import IconButton from '@mui/material/IconButton';
import CloseIcon from '@mui/icons-material/Close';
import { Button, Card, CardActionArea, CardContent, CardMedia, Container, DialogContentText, FormControl, InputBase, InputLabel, Radio, Stack, Typography } from '@mui/material';
import Grid from '@mui/material/Unstable_Grid2';

const BootstrapDialog = styled(Dialog)(({ theme }) => ({
  '& .MuiDialogContent-root': {
    padding: theme.spacing(2),
  },
  '& .MuiDialogActions-root': {
    padding: theme.spacing(2),
  },
}));

const BootstrapInput = styled(InputBase)(({ theme }) => ({
  'label + &': {
    marginTop: theme.spacing(3),
  },
  '& .MuiInputBase-input': {
    borderRadius: 4,
    position: 'relative',
    backgroundColor: theme.palette.mode === 'light' ? '#F3F6F9' : '#1A2027',
    border: '1px solid',
    borderColor: theme.palette.mode === 'light' ? '#E0E3E7' : '#2D3843',
    fontSize: 16,
    padding: '10px 12px',
    transition: theme.transitions.create([
      'border-color',
      'background-color',
      'box-shadow',
    ]),
    // Use the system font instead of the default Roboto font.
    fontFamily: [
      '-apple-system',
      'BlinkMacSystemFont',
      '"Segoe UI"',
      'Roboto',
      '"Helvetica Neue"',
      'Arial',
      'sans-serif',
      '"Apple Color Emoji"',
      '"Segoe UI Emoji"',
      '"Segoe UI Symbol"',
    ].join(','),
    '&:focus': {
      boxShadow: `${alpha(theme.palette.primary.main, 0.25)} 0 0 0 0.2rem`,
      borderColor: theme.palette.primary.main,
    },
  },
}));

interface PropsCreateApiDialog {
  open: boolean;
  handleClose: () => void;
}

export default function CreateApiDialog(props: PropsCreateApiDialog) {
  const { open, handleClose } = props;
  return (
    <BootstrapDialog
      onClose={handleClose}
      aria-labelledby="customized-dialog-title"
      open={open}
    >
      <DialogTitle sx={{ m: 0, p: 2 }} id="customized-dialog-title">
        Create a new API key
      </DialogTitle>
      <IconButton
        aria-label="close"
        onClick={handleClose}
        sx={{
          position: 'absolute',
          right: 8,
          top: 8,
          color: (theme) => theme.palette.grey[500],
        }}
      >
        <CloseIcon />
      </IconButton>
      <DialogContent>
        <Grid container spacing={1} rowSpacing={3}>
          <Grid xs={12}>
            <Typography gutterBottom variant="caption">
              NETWORK
            </Typography>
            <Stack direction="row" spacing={1}>
              <Card defaultChecked>
                <CardActionArea>
                  <CardContent sx={{ m: 1 }}>
                    <Stack direction="row" alignItems="flex-start" justifyContent="center">
                      <Radio
                        // checked={selectedValue === 'a'}
                        // onChange={handleChange}
                        value="a"
                        name="radio-buttons"
                        inputProps={{ 'aria-label': 'A' }}
                      />
                      <DialogContentText>
                        <Typography gutterBottom variant="h5" component="div">
                          Web3&nbsp;API
                        </Typography>
                        <Typography variant="body2" color="text.secondary">
                          Ethereum,&nbsp;L2's,&nbsp;and&nbsp;non-evm&nbsp;l1's
                        </Typography>
                      </DialogContentText>
                    </Stack>
                  </CardContent>
                </CardActionArea>
              </Card>
              <Card>
                <CardActionArea>
                  <CardContent sx={{ m: 1 }}>
                    <Stack direction="row" alignItems="flex-start" justifyContent="center">
                      <Radio
                        // checked={selectedValue === 'a'}
                        // onChange={handleChange}
                        value="a"
                        name="radio-buttons"
                        inputProps={{ 'aria-label': 'A' }}
                      />
                      <DialogContentText>
                        <Typography gutterBottom variant="h5" component="div">
                          IPFS
                        </Typography>
                        <Typography variant="body2" color="text.secondary">
                          Distributed, peer-to-peer&nbsp;storage
                        </Typography>
                      </DialogContentText>
                    </Stack>
                  </CardContent>
                </CardActionArea>
              </Card>
            </Stack>
          </Grid>
          <Grid xs={12}>
            <FormControl size="small" fullWidth variant="standard">
              <InputLabel shrink htmlFor="bootstrap-input">
                NAME
              </InputLabel>
              <BootstrapInput size="small" defaultValue="" id="bootstrap-input" />
            </FormControl>
          </Grid>
        </Grid>
      </DialogContent>
      <DialogActions sx={{ justifyContent: 'flex-start' }}>
        <Button variant="contained" autoFocus onClick={handleClose}>
          Create
        </Button>
      </DialogActions>
    </BootstrapDialog>
  );
}
