import React from "react";
import Button from "@material-ui/core/Button";
import CssBaseline from "@material-ui/core/CssBaseline";
import TextField from "@material-ui/core/TextField";
import Typography from "@material-ui/core/Typography";
import Container from "@material-ui/core/Container";
import FormControl from "@material-ui/core/FormControl";
import { makeStyles } from "@material-ui/core/styles";
import Autocomplete from "@material-ui/lab/Autocomplete";
import DateFnsUtils from "@date-io/date-fns";
import "date-fns";
import esLocale from "date-fns/locale/es";
import {
  MuiPickersUtilsProvider,
  KeyboardDatePicker
} from "@material-ui/pickers";
import Grid from "@material-ui/core/Grid";
import ToggleButton from "@material-ui/lab/ToggleButton";
import ToggleButtonGroup from "@material-ui/lab/ToggleButtonGroup";
import SearchIcon from "@material-ui/icons/Search";

const useStyles = makeStyles((theme) => ({
  root: {
    "& > *": {
      width: "100%"
    }
  },
  paper: {
    marginTop: theme.spacing(8),
    display: "flex",
    flexDirection: "column",
    alignItems: "center"
  },
  form: {
    width: "100%", // Fix IE 11 issue.
    marginTop: theme.spacing(1)
  },
  submit: {
    margin: theme.spacing(3, 0, 2)
  },
  toggleContainer: {
    margin: theme.spacing(2, 0)
  }
}));

const top100Films = [
  { title: "The Shawshank Redemption", year: 1994 },
  { title: "The Godfather", year: 1972 },
  { title: "The Godfather: Part II", year: 1974 },
  { title: "The Dark Knight", year: 2008 },
  { title: "12 Angry Men", year: 1957 }
];

export default function BusQuery() {
  const [alignment, setAlignment] = React.useState("left");
  const [formats, setFormats] = React.useState(() => ["phone"]);

  const handleFormat = (event, newFormats) => {
    if (newFormats.length) {
      setFormats(newFormats);
    }
  };

  const handleAlignment = (event, newAlignment) => {
    if (newAlignment !== null) {
      setAlignment(newAlignment);
    }
  };

  // The first commit of Material-UI
  const [selectedDate, setSelectedDate] = React.useState(new Date());

  const handleDateChange = (date) => {
    setSelectedDate(date);
  };

  const classes = useStyles();

  return (
    <Container component="main" maxWidth="xs" className={classes.paper}>
      <CssBaseline />
      <div className={classes.paper}>
        <Typography component="h1" variant="h6">
          Consultar vehículo
        </Typography>
        <form className={classes.form} noValidate>
          <FormControl>
            <Autocomplete
              id="combo-box-demo"
              options={top100Films}
              getOptionLabel={(option) => option.title}
              style={{ width: 250 }}
              noOptionsText={"Sin opciones"}
              renderInput={(params) => (
                <TextField
                  {...params}
                  label="Nro. vehículo"
                  variant="outlined"
                />
              )}
            />
          </FormControl>
          <MuiPickersUtilsProvider utils={DateFnsUtils} locale={esLocale}>
            <KeyboardDatePicker
              disableToolbar
              variant="inline"
              format="dd/MM/yyyy"
              margin="normal"
              id="date-picker-begin"
              label="Fecha inicial"
              style={{ width: 250 }}
              value={selectedDate}
              onChange={handleDateChange}
              KeyboardButtonProps={{
                "aria-label": "change date"
              }}
            />
          </MuiPickersUtilsProvider>
          <MuiPickersUtilsProvider utils={DateFnsUtils} locale={esLocale}>
            <KeyboardDatePicker
              disableToolbar
              variant="inline"
              format="dd/MM/yyyy"
              margin="normal"
              id="date-picker-end"
              label="Fecha final"
              style={{ width: 250 }}
              value={selectedDate}
              onChange={handleDateChange}
              KeyboardButtonProps={{
                "aria-label": "change date"
              }}
            />
          </MuiPickersUtilsProvider>

          <Grid item sm={12} md={6}>
            <div className={classes.toggleContainer}>
              Formato de hora:
              <ToggleButtonGroup
                value={alignment}
                exclusive
                onChange={handleAlignment}
                aria-label="text alignment"
              >
                <ToggleButton value="left" aria-label="left aligned">
                  Corto
                </ToggleButton>
                <ToggleButton value="center" aria-label="centered">
                  Largo
                </ToggleButton>
                <ToggleButton value="right" aria-label="right aligned">
                  Feriado
                </ToggleButton>
              </ToggleButtonGroup>
            </div>
          </Grid>

          <form className={classes.root} noValidate autoComplete="off">
            <TextField
              id="outlined-basic"
              label="Punto de inicio"
              variant="outlined"
            />
          </form>

          <Button
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
            className={classes.submit}
            startIcon={<SearchIcon />}
          >
            Buscar
          </Button>
        </form>
      </div>
    </Container>
  );
}
