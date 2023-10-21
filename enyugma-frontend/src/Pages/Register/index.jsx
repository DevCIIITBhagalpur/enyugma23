import {
    Box,
    Button,
    Chip,
    FormControl,
    FormHelperText,
    IconButton,
    InputAdornment,
    InputLabel,
    MenuItem,
    OutlinedInput,
    Paper,
    Select,
    TextField,
    ThemeProvider,
    Typography,
    createTheme,
    useTheme,
} from "@mui/material";
import Navbar from "../../Components/Navbar/index.jsx";
import cultural4 from "../../assets/bgs/cultural4.webp";
import "./index.scss";
import { useState } from "react";
import VisibilityIcon from "@mui/icons-material/Visibility";
import VisibilityOffIcon from "@mui/icons-material/VisibilityOff";
import qrcode from "../../assets/qrcode.jpg";
import events from "./eventlist.js";
export default function Register() {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [mobile, setMobile] = useState("");
    const [college, setCollege] = useState("");
    const [city, setCity] = useState("");
    const [state, setState] = useState("");
    const [pincode, setPincode] = useState("");
    const [type, setType] = useState("individual");
    const [size, setSize] = useState(1);
    const [transactionId, setTransactionId] = useState("");
    const [file, setFile] = useState(null);
    // const [password, setPassword] = useState("");

    const [nameError, setNameError] = useState("");
    const [emailError, setEmailError] = useState("");
    const [mobileError, setMobileError] = useState("");
    const [collegeError, setCollegeError] = useState("");
    const [cityError, setCityError] = useState("");
    const [stateError, setStateError] = useState("");
    const [pincodeError, setPincodeError] = useState("");
    const [typeError, setTypeError] = useState("");
    const [sizeError, setSizeError] = useState("");
    const [transactionIdError, setTransactionIdError] = useState("");
    const [fileError, setFileError] = useState("");
    // const [passwordError, setPasswordError] = useState("");
    const [events, setEvents] = useState([]);
    const [eventsError, setEventsError] = useState("");

    // const [showPassword, setShowPassword] = useState(false);

    const handleClickShowPassword = () => setShowPassword((show) => !show);

    const handleMouseDownPassword = (event) => {
        event.preventDefault();
    };

    const darkTheme = createTheme({
        palette: {
            mode: "dark",
        },
    });

    const handleSubmit = () => {
        const nameRegex = /^[a-zA-Z ]{2,30}$/;
        const emailRegex = /^[a-zA-Z0-9+_.-]+@[a-zA-Z0-9.-]+$/;
        const mobileRegex = /^[0-9]{10}$/;
        const pincodeRegex = /^[0-9]{6}$/;
        // const passwordRegex = /^[a-zA-Z0-9!@#$%^&*]{6,16}$/;

        let hasAnyError = false;

        if (!nameRegex.test(name)) {
            setNameError("Invalid name");
            hasAnyError = true;
        } else {
            setNameError("");
        }

        if (!emailRegex.test(email)) {
            setEmailError("Invalid email");
            hasAnyError = true;
        } else setEmailError("");

        if (!mobileRegex.test(mobile)) {
            setMobileError("Invalid mobile");
            hasAnyError = true;
        } else setMobileError("");

        if (!pincodeRegex.test(pincode)) {
            setPincodeError("Invalid pincode");
            hasAnyError = true;
        } else setPincodeError("");

        // if (!passwordRegex.test(password)) {
        //     setPasswordError("Invalid password");
        //     hasAnyError = true;
        // } else setPasswordError("");

        if (type === "congingent" && size <= 1) {
            setSizeError("Invalid size");
            hasAnyError = true;
        } else setSizeError("");

        if (type === "congingent" && size % 1 !== 0) {
            setSizeError("Invalid size");
            hasAnyError = true;
        } else setSizeError("");

        if (!file) {
            setFileError("Please upload a file");
            hasAnyError = true;
        } else setFileError("");

        if (!transactionId) {
            setTransactionIdError("Please enter transaction id");
            hasAnyError = true;
        } else setTransactionIdError("");

        if (!city) {
            setCityError("Please enter city");
            hasAnyError = true;
        } else setCityError("");

        if (!state) {
            setStateError("Please enter state");
            hasAnyError = true;
        } else setStateError("");

        if (!college) {
            setCollegeError("Please enter college");
            hasAnyError = true;
        } else setCollegeError("");

        if (!type) {
            setTypeError("Please select type");
            hasAnyError = true;
        } else setTypeError("");

        if(!events.length) {
            setEventsError("Please select events");
            hasAnyError = true;
        }

        if (hasAnyError) return;

        const formData = new FormData();
        formData.append("name", name);
        formData.append("email", email);
        formData.append("mobile", mobile);
        formData.append("college", college);
        formData.append("city", city);
        formData.append("state", state);
        formData.append("pincode", pincode);
        formData.append("type", type);
        formData.append("size", size);
        formData.append("transactionId", transactionId);
        // formData.append("password", password);
        formData.append("events", events);
        const files = document.querySelector("input[type=file]").files[0];
        // add file to formData
        formData.append("file", files);

        fetch("/api/user/register", {
            method: "POST",
            body: formData,
        })
            .then((res) => res.json())
            .then((res) => {
                console.log(res);
                if (res.status === "success") {
                    alert("Registered successfully");
                    const user = res.user;
                    const token = res.token;

                    localStorage.setItem("user", JSON.stringify(user));
                    localStorage.setItem("token", token);
                    window.location.href = "/";
                } else {
                    alert("Error");
                }
            })
            .catch((err) => {
                console.log(err);
                alert("Error");
            });
    };

    return (
        <div
            className="register"
            style={{
                backgroundImage: ` linear-gradient(rgba(0,0,0,0) 20%, rgba(6,12,32,1) 70%), url(${cultural4})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
                backgroundRepeat: "no-repeat",
            }}
        >
            <Navbar />
            <ThemeProvider theme={darkTheme}>
                <Box
                    sx={{
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                        minHeight: "50vh",
                        height: "100%",
                        backgroundColor: "rgba(6, 12, 32, 0.8);",
                        // flexWrap: "wrap",
                        flexDirection:
                            window.innerWidth > 600 ? "row" : "column-reverse",
                        borderRadius: "8px",
                    }}
                >
                    <Paper className="qrcode" elevation={8}>
                        <img
                            className="code"
                            src={qrcode}
                            alt="qr code"
                        />
                        <Typography variant="body2" className="note">
                            Scan this QR code to pay
                        </Typography>
                        <Typography variant="h5" className="note">
                            Preview
                        </Typography>
                        <img
                            className="preview"
                            src=""
                            alt="preview"
                            id="preview"
                        />
                    </Paper>
                    <Paper className="form" elevation={2} component="form">
                        <FormControl fullWidth className="row">
                            <TextField
                                label="Name"
                                variant="outlined"
                                fullWidth
                                required
                                value={name}
                                onChange={(e) => setName(e.target.value)}
                            />
                            {nameError && (
                                <FormHelperText error>
                                    {nameError}
                                </FormHelperText>
                            )}
                            {/* <TextField
                                label="Password"
                                variant="outlined"
                                fullWidth
                                required
                                type={showPassword ? "text" : "password"}
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                                InputProps={{
                                    endAdornment: (
                                        <InputAdornment position="end">
                                            <IconButton
                                                aria-label="toggle password visibility"
                                                onClick={
                                                    handleClickShowPassword
                                                }
                                                onMouseDown={
                                                    handleMouseDownPassword
                                                }
                                                edge="end"
                                            >
                                                {showPassword ? (
                                                    <VisibilityOffIcon />
                                                ) : (
                                                    <VisibilityIcon />
                                                )}
                                            </IconButton>
                                        </InputAdornment>
                                    ),
                                }}
                            />
                            {passwordError && (
                                <FormHelperText error>
                                    {passwordError}
                                </FormHelperText>
                            )} */}
                        </FormControl>
                        <FormControl fullWidth className="row">
                            <TextField
                                label="Email"
                                variant="outlined"
                                fullWidth
                                required
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                            />
                            {emailError && (
                                <FormHelperText error>
                                    {emailError}
                                </FormHelperText>
                            )}
                            <TextField
                                label="Mobile"
                                variant="outlined"
                                fullWidth
                                required
                                value={mobile}
                                onChange={(e) => setMobile(e.target.value)}
                            />
                            {mobileError && (
                                <FormHelperText error>
                                    {mobileError}
                                </FormHelperText>
                            )}
                        </FormControl>
                        <FormControl fullWidth>
                            <TextField
                                label="College"
                                variant="outlined"
                                fullWidth
                                required
                                value={college}
                                onChange={(e) => setCollege(e.target.value)}
                            />
                            {collegeError && (
                                <FormHelperText error>
                                    {collegeError}
                                </FormHelperText>
                            )}
                        </FormControl>
                        <FormControl fullWidth className="row">
                            <TextField
                                label="City"
                                variant="outlined"
                                fullWidth
                                required
                                value={city}
                                onChange={(e) => setCity(e.target.value)}
                            />
                            {cityError && (
                                <FormHelperText error>
                                    {cityError}
                                </FormHelperText>
                            )}
                            <TextField
                                label="State"
                                variant="outlined"
                                fullWidth
                                required
                                value={state}
                                onChange={(e) => setState(e.target.value)}
                            />
                            {stateError && (
                                <FormHelperText error>
                                    {stateError}
                                </FormHelperText>
                            )}
                            <TextField
                                label="Pincode"
                                variant="outlined"
                                fullWidth
                                required
                                value={pincode}
                                onChange={(e) => setPincode(e.target.value)}
                            />
                            {pincodeError && (
                                <FormHelperText error>
                                    {pincodeError}
                                </FormHelperText>
                            )}
                        </FormControl>
                        <FormControl fullWidth className="row">
                            <Select
                                label="Type"
                                variant="outlined"
                                fullWidth
                                value={type}
                                onChange={(e) => setType(e.target.value)}
                                sx={{
                                    "&.MuiSelect-select": {
                                        color: "white",
                                    },
                                    "&.MuiSelect-label": {
                                        color: "white",
                                    },
                                }}
                                required
                            >
                                <MenuItem value="individual">
                                    Individual
                                </MenuItem>
                                <MenuItem value="congingent">
                                    Congingent
                                </MenuItem>
                            </Select>
                            {typeError && (
                                <FormHelperText error>
                                    {typeError}
                                </FormHelperText>
                            )}
                            {type === "congingent" && (
                                <TextField
                                    label="Size"
                                    variant="outlined"
                                    fullWidth
                                    type="number"
                                    required
                                    value={size}
                                    onChange={(e) => setSize(e.target.value)}
                                />
                            )}
                            {sizeError && (
                                <FormHelperText error>
                                    {sizeError}
                                </FormHelperText>
                            )}
                        </FormControl>
                        <FormControl fullWidth className="row">
                            <MultipleSelectEvent />
                            {eventsError && (
                                <FormHelperText error>
                                    {eventsError}
                                </FormHelperText>
                            )}
                        </FormControl>
                        <FormControl fullWidth className="row">
                            <TextField
                                label="Transaction ID"
                                variant="outlined"
                                fullWidth
                                required
                                value={transactionId}
                                onChange={(e) =>
                                    setTransactionId(e.target.value)
                                }
                            />
                            {transactionIdError && (
                                <FormHelperText error>
                                    {transactionIdError}
                                </FormHelperText>
                            )}
                            <TextField
                                helperText="Upload your payment screenshot"
                                variant="standard"
                                fullWidth
                                type="file"
                                required
                                value={file}
                                className="file"
                                onChange={(e) => {
                                    setFile(e.target.value);
                                    const preview =
                                        document.getElementById("preview");
                                    const file =
                                        document.querySelector(
                                            "input[type=file]",
                                        ).files[0];
                                    preview.src = URL.createObjectURL(file);
                                }}
                            />
                            {fileError && (
                                <FormHelperText error>
                                    {fileError}
                                </FormHelperText>
                            )}
                        </FormControl>
                        <FormControl fullWidth className="row">
                            <Button
                                variant="contained"
                                color="primary"
                                className="submit"
                                // disabled
                                onClick={handleSubmit}
                            >
                                Submit
                            </Button>
                            <Typography variant="body2" className="note">
                                Note:Payment will be comfirm after verification.
                            </Typography>
                        </FormControl>
                    </Paper>
                </Box>
            </ThemeProvider>
        </div>
    );
}


const ITEM_HEIGHT = 48;
const ITEM_PADDING_TOP = 8;
const MenuProps = {
  PaperProps: {
    style: {
      maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
      width: 250,
    },
  },
};

function getStyles(name, eventName, theme) {
  return {
    fontWeight:
      eventName.indexOf(name) === -1
        ? theme.typography.fontWeightRegular
        : theme.typography.fontWeightMedium,
  };
}

 function MultipleSelectEvent() {
    const theme = useTheme();
  const [eventName, setEventName] = useState([]);

  const handleChange = (event) => {
    const {
      target: { value },
    } = event;
    setEventName(
      // On autofill we get a stringified value.
      typeof value === 'string' ? value.split(',') : value,
    );
  };

  return (
    <div>
      <FormControl sx={{ m: 1, width: 300 }}>
        <InputLabel id="demo-multiple-event-label">Event</InputLabel>
        <Select
          labelId="demo-multiple-event-label"
          id="demo-multiple-event"
          multiple
          value={eventName}
          onChange={handleChange}
          input={<OutlinedInput id="select-multiple-event" label="Events" />}
          renderValue={(selected) => (
            <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 0.5 }}>
              {selected.map((value) => (
                <Chip key={value} label={value} />
              ))}
            </Box>
          )}
          MenuProps={MenuProps}
        >
          {events.map((event) => (
            <MenuItem
              key={event.id}
              value={event.id}
              style={getStyles(event.name, eventName, theme)}
            >
              {event.name}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
    </div>
  );
}