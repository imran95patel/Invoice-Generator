import React, { useState } from "react";

import {
  Container,
  FormControl,
  Grid,
  Button,
  InputLabel,
  MenuItem,
  Paper,
  Select,
  TextField,
  Typography,
  Box,
  TableCell,
  TableContainer,
  Table,
  TableHead,
  TableRow,
  TableBody,
  Dialog,
  DialogContent,
  DialogActions,
} from "@mui/material";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const InvoiceCreate = () => {
  const [open, setOpen] = useState(true);
  const [tableItem, setTableItem] = useState([]);
  const [formInput, setFormInput] = useState({});
  const navigate = useNavigate();
  const [tableInput, setTableInput] = useState({
    film_size: "",
    joint: "",
    spot: "",
    observation: "",
    remark: "",
  });

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
    navigate("/home");
  };

  function handleInputData(e) {
    setFormInput({ ...formInput, [e.target.name]: e.target.value });
  }

  const handleSubmit = (data) => {
    // Handle form submission
    data.preventDefault();

    console.log("save ", data);
    const lotusData = {
      id: formInput.id,
      client_name: formInput.client_name,
      plot_no: formInput.plot_no,
      report_no: formInput.report_no,
      date: formInput.date,
      job_id: formInput.job_id,
      materialThRe: formInput.materialThRe,
      procedure_no: formInput.procedure_no,
      mat_type: formInput.mat_type,
      acceptSTD: formInput.acceptSTD,
      source: formInput.source,
      source_size: formInput.source_size,
      RTspec: formInput.RTspec,
      sourceStr: formInput.sourceStr,
      SOD: formInput.SOD,
      drawing_no: formInput.drawing_no,
      expo_time: formInput.expo_time,
      expTech: formInput.expTech,
      OFD: formInput.OFD,
      no_exp: formInput.no_exp,
      welder_no: formInput.welder_no,
      radiographyExt: formInput.radiographyExt,
      lead_B: formInput.lead_B,
      screenFB: formInput.screenFB,
      welding_process: formInput.welding_process,
      IQI: formInput.IQI,
      viewing: formInput.viewing,
      film_brand: formInput.film_brand,
      wire_type: formInput.wire_type,
      density: formInput.density,
      films: formInput.films,
      hole_type: formInput.hole_type,
      req_sensitivity: formInput.req_sensitivity,
      tech_sheet: formInput.tech_sheet,
      tableData: tableItem,
      // tableData:[tableItem]
    };
    InsertInvoice(lotusData);
  };
  const InsertInvoice = (data) => {
    fetch("http://localhost:5050/lotus", {
      method: "POST",
      headers: { "content-type": "application/json" },
      body: JSON.stringify(data),
    })
      .then((res) => {
        console.log("Posting Data");
        toast.success("Saved Successfully");
        navigate("/home");
      })
      .catch((err) => {
        console.log(err.message);
      });
  };

  // table fun

  const tableData = (e) => {
    const { name, value } = e.target;
    setTableInput((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleTableSubmit = (e) => {
    e.preventDefault();
    if (
      tableInput.film_size ||
      tableInput.joint ||
      tableInput.spot ||
      tableInput.observation ||
      tableInput.remark
    ) {
      setTableItem((prevTableItem) => [...prevTableItem, { ...tableInput }]);
      setTableInput({
        film_size: "",
        joint: "",
        spot: "",
        observation: "",
        remark: "",
      });
    }
  };

  const deleteRow = (index) => {
    setTableItem((prevTableItem) =>
      prevTableItem.filter((_, i) => i !== index)
    );
  };

  return (
    <>
      <div
        style={{
          display: "flex",
          justifyContent: "flex-end",
          margin: "50px 250px 0 0",
        }}
      >
        <Button variant="contained" onClick={handleClickOpen}>
          Click Me
        </Button>
      </div>

      <Dialog open={open} onClose={handleClose} maxWidth="lg">
        <DialogContent>
          {/* listing page */}

          <Container component="main" maxWidth="md">
            <Paper
              elevation={3}
              style={{
                padding: 28,
                margin: "20px 0 ",
                backgroundColor: " rgb(156, 224, 209)",
              }}
            >
              <Typography component="h1" variant="h5" textAlign={"center"}>
                RADIOGRAPHIC EXAMINATION REPORT
              </Typography>
              <br />

              <form onSubmit={handleSubmit}>
                <Grid container spacing={2}>
                  <Paper elevation={12} style={{ padding: "20px 0px " }}>
                    <Box
                      component="form"
                      sx={{
                        "& .MuiTextField-root": { m: 1, width: "45ch" },
                      }}
                      noValidate
                      autoComplete="off"
                    >
                      <TextField
                        id="outlined-basic"
                        label="Id"
                        disabled
                        variant="outlined"
                        name="id"
                        value={formInput.id}
                        onChange={handleInputData}
                      />
                      <TextField
                        id="outlined-basic"
                        label="Client-Name"
                        variant="outlined"
                        name="client_name"
                        value={formInput.client_name}
                        onChange={handleInputData}
                        defaultValue=" GLATT SYSTEMS PVT LTD"
                      />
                      <TextField
                        required
                        id="outlined-required"
                        label="Plot No."
                        name="plot_no"
                        value={formInput.plot_no}
                        onChange={handleInputData}
                        defaultValue="D.240,Ranjangaon MIDC, shirur PUNE"
                      />
                      <TextField
                        required
                        id="outlined-required"
                        label="Report No:"
                        name="report_no"
                        value={formInput.report_no}
                        onChange={handleInputData}
                        defaultValue="PNS/2023-24/163"
                      />

                      <input
                        className="date-input"
                        type="date"
                        name="date"
                        style={{ outline: "none" }}
                        value={formInput.date}
                        onChange={handleInputData}
                        defaultValue="01/01/2024"
                        dateFormat="dd/mm/yyyy"
                      />
                    </Box>
                    <br />

                    <Grid
                      item
                      xs={11.5}
                      style={{ margin: "0px 0px 20px 10px" }}
                    >
                      <TextField
                        fullWidth
                        id="clientName"
                        label="JOB/JOINT ID"
                        name="job_id"
                        value={formInput.job_id}
                        onChange={handleInputData}
                        defaultValue=" GSPL/FER-028-BDLS1&2"
                        variant="outlined"
                      />
                    </Grid>
                    <br />
                    <Box
                      component="form"
                      sx={{
                        "& .MuiTextField-root": { m: 1, width: "45ch" },
                      }}
                      noValidate
                      autoComplete="off"
                    >
                      <TextField
                        id="outlined-basic"
                        label="Material Thickness + Reinforcement"
                        name="materialThRe"
                        value={formInput.materialThRe}
                        onChange={handleInputData}
                        variant="outlined"
                        defaultValue="  14 mm + 3.0 mm"
                      />

                      <TextField
                        required
                        id="outlined-required"
                        label="Procedure No"
                        name="procedure_no"
                        value={formInput.procedure_no}
                        onChange={handleInputData}
                        defaultValue="GSPL-NDE-RT-03"
                      />
                      <TextField
                        required
                        id="outlined-required"
                        label="Mat. Type & Spec"
                        name="mat_type"
                        value={formInput.mat_type}
                        onChange={handleInputData}
                        defaultValue=" SA240 GR.304"
                      />
                      <TextField
                        required
                        id="outlined-required"
                        label="Acceptance Standard"
                        name="acceptSTD"
                        value={formInput.acceptSTD}
                        onChange={handleInputData}
                        defaultValue="ASME SEC. VIII DIV-1 UW-51"
                      />
                    </Box>
                  </Paper>

                  <br />
                  <br />
                  {/* material info */}
                  <Paper elevation={12} style={{ padding: "20px 0px " }}>
                    <Box
                      component="form"
                      sx={{
                        "& .MuiTextField-root": { m: 1, width: "28ch" },
                      }}
                      noValidate
                      autoComplete="off"
                    >
                      <TextField
                        id="outlined-basic"
                        label="Source"
                        name="source"
                        value={formInput.source}
                        onChange={handleInputData}
                        variant="outlined"
                        defaultValue=" IR192"
                      />

                      <TextField
                        required
                        id="outlined-required"
                        label="Source Size"
                        name="source_size"
                        value={formInput.source_size}
                        onChange={handleInputData}
                        defaultValue="2.7 X 1.8 mm"
                      />
                      <TextField
                        required
                        id="outlined-required"
                        label="RT Specifcation"
                        name="RTspec"
                        value={formInput.RTspec}
                        onChange={handleInputData}
                        defaultValue="ASME SEC-V"
                      />
                      <TextField
                        id="outlined-basic"
                        label="Source Str. "
                        name="sourceStr"
                        value={formInput.sourceStr}
                        onChange={handleInputData}
                        variant="outlined"
                        defaultValue=" 30 Ci"
                      />

                      <TextField
                        required
                        id="outlined-required"
                        label="SOD"
                        name="SOD"
                        value={formInput.SOD}
                        onChange={handleInputData}
                        defaultValue="500 mm"
                      />
                      <TextField
                        required
                        id="outlined-required"
                        label="Drawing No."
                        name="drawing_no"
                        value={formInput.drawing_no}
                        onChange={handleInputData}
                        defaultValue="-----"
                      />
                      <TextField
                        id="outlined-basic"
                        label="Expo. Time"
                        name="expo_time"
                        value={formInput.expo_time}
                        onChange={handleInputData}
                        variant="outlined"
                        defaultValue="3.29 Min."
                      />

                      <TextField
                        required
                        id="outlined-required"
                        label="Exp. Tech."
                        name="expTech"
                        value={formInput.expTech}
                        onChange={handleInputData}
                        defaultValue="Panoramic"
                      />
                      <TextField
                        required
                        id="outlined-required"
                        label="OFD"
                        name="OFD"
                        value={formInput.OFD}
                        onChange={handleInputData}
                        defaultValue="17.00 mm"
                      />
                      <TextField
                        id="outlined-basic"
                        label="No. Of Exp."
                        name="no_exp"
                        value={formInput.no_exp}
                        onChange={handleInputData}
                        variant="outlined"
                        defaultValue=" 2"
                      />

                      <TextField
                        required
                        id="outlined-required"
                        label="Welder No."
                        name="welder_no"
                        value={formInput.welder_no}
                        onChange={handleInputData}
                        defaultValue="-----"
                      />
                      <TextField
                        required
                        id="outlined-required"
                        label="Radiography Ext."
                        name="radiographyExt"
                        value={formInput.radiographyExt}
                        onChange={handleInputData}
                        defaultValue=" 100%"
                      />
                      <TextField
                        id="outlined-basic"
                        label="Lead B Letter "
                        name="lead_B"
                        value={formInput.lead_B}
                        onChange={handleInputData}
                        variant="outlined"
                        defaultValue="Yes"
                      />

                      <TextField
                        required
                        id="outlined-required"
                        label="Screen F&B"
                        name="screenF&B"
                        value={formInput.screenFB}
                        onChange={handleInputData}
                        defaultValue="0.1 mm"
                      />
                      <TextField
                        required
                        id="outlined-required"
                        label="Welding Process"
                        name="welding_process"
                        value={formInput.welding_process}
                        onChange={handleInputData}
                        defaultValue="GTAW"
                      />
                      <TextField
                        id="outlined-basic"
                        label=" IQI Placed On"
                        name="IQI"
                        value={formInput.IQI}
                        onChange={handleInputData}
                        variant="outlined"
                        defaultValue="Source Side"
                      />

                      <TextField
                        required
                        id="outlined-required"
                        label="Viewing "
                        name="viewing"
                        value={formInput.viewing}
                        onChange={handleInputData}
                        defaultValue="Single"
                      />
                      <TextField
                        required
                        id="outlined-required"
                        label="Film Brand "
                        name="film_brand"
                        value={formInput.film_brand}
                        onChange={handleInputData}
                        defaultValue="Fuji-IX100"
                      />
                      <TextField
                        id="outlined-basic"
                        label="Wire Type IQI "
                        name="wire_type"
                        value={formInput.wire_type}
                        onChange={handleInputData}
                        variant="outlined"
                        defaultValue="ASTM 1B-11 "
                      />

                      <TextField
                        required
                        id="outlined-required"
                        label=" Density"
                        name="density"
                        value={formInput.density}
                        onChange={handleInputData}
                        defaultValue="2 To 4"
                      />
                      <TextField
                        required
                        id="outlined-required"
                        label="Films/Cassette"
                        name="films"
                        value={formInput.films}
                        onChange={handleInputData}
                        defaultValue="1"
                      />
                      <TextField
                        id="outlined-basic"
                        label=" Hole Type IQI"
                        name="hole_type"
                        value={formInput.hole_type}
                        onChange={handleInputData}
                        variant="outlined"
                        defaultValue="----"
                      />

                      <TextField
                        required
                        id="outlined-required"
                        label="Req.  Sensitivity "
                        name="req_sensitivity"
                        value={formInput.req_sensitivity}
                        onChange={handleInputData}
                        defaultValue="2%(8th Wire Visible)"
                      />
                      <TextField
                        required
                        id="outlined-required"
                        label="Tech. Sheet No."
                        name="tech_sheet"
                        value={formInput.tech_sheet}
                        onChange={handleInputData}
                        defaultValue="-----"
                      />
                    </Box>
                    <br />
                  </Paper>

                  {/* Table Items */}
                  <Paper
                    elevation={12}
                    style={{ padding: "20px 0px ", marginTop: "15px" }}
                  >
                    <Box
                      component="form"
                      sx={{
                        "& .MuiTextField-root": { m: 1, width: "25ch" },
                      }}
                      noValidate
                      autoComplete="off"
                    >
                      <TextField
                        name="film_size"
                        value={tableInput.film_size || ""}
                        onChange={tableData}
                        id="outlined-basic"
                        label="Film Size "
                        variant="outlined"
                        defaultValue={" 4”X15” "}
                      />

                      <TextField
                        required
                        name="joint"
                        value={tableInput.joint || ""}
                        onChange={tableData}
                        id="outlined-required"
                        label="Joint
                  Identifcation
                  "
                        defaultValue="028-BDLS1"
                      />

                      <FormControl required sx={{ m: 1, minWidth: "25ch" }}>
                        <InputLabel id="demo-simple-select-required-label">
                          Spot&nbsp;
                        </InputLabel>
                        <Select
                          name="spot"
                          value={tableInput.spot || ""}
                          onChange={tableData}
                          labelId="demo-simple-select-required-label"
                          id="demo-simple-select-required"
                          label="spot "
                        >
                          <MenuItem value="">
                            <em>None</em>
                          </MenuItem>
                          <MenuItem value="A-B">A-B</MenuItem>
                          <MenuItem value="B-C">B-C</MenuItem>
                          <MenuItem value="C-D">C-D</MenuItem>
                          <MenuItem value="D-E">D-E</MenuItem>
                          <MenuItem value="E-F">E-F</MenuItem>
                          <MenuItem value="F-G">F-G</MenuItem>
                          <MenuItem value="G-H">G-H</MenuItem>
                          <MenuItem value="H-I">H-I</MenuItem>
                          <MenuItem value="I-J">I-J</MenuItem>
                          <MenuItem value="J-K">J-K</MenuItem>
                          <MenuItem value="K-L">K-L</MenuItem>
                          <MenuItem value="L-M">L-M</MenuItem>
                          <MenuItem value="M-N">M-N</MenuItem>
                          {/* Updated unique value */}
                          <MenuItem value="N-O">N-O</MenuItem>
                        </Select>
                      </FormControl>

                      <TextField
                        id="outlined-basic"
                        name="observation"
                        value={tableInput.observation || ""}
                        onChange={tableData}
                        label=" Observation "
                        variant="outlined"
                        defaultValue=" Mi Po"
                      />

                      <TextField
                        required
                        id="outlined-required"
                        label="Remarks "
                        name="remark"
                        value={tableInput.remark || ""}
                        onChange={tableData}
                        defaultValue="Acceptable"
                      />
                      <Button
                        variant="contained"
                        sx={{ m: 2, minWidth: "5ch" }}
                        size="large"
                        onClick={handleTableSubmit}
                      >
                        Add+
                      </Button>
                    </Box>
                    {/* Table is here */}
                    <TableContainer component={Paper}>
                      <Table
                        sx={{
                          "&:last-child td, &:last-child th": { border: 0.5 },
                        }}
                        aria-label="simple table"
                      >
                        <TableHead>
                          <TableRow>
                            <TableCell
                              align="right"
                              name="sr_no"
                              value={formInput.sr_no}
                              onChange={handleInputData}
                            >
                              Sr.No.
                            </TableCell>

                            <TableCell
                              name="film_size"
                              value={formInput.film_size}
                              onChange={handleInputData}
                            >
                              Film Size{" "}
                            </TableCell>
                            <TableCell align="right">
                              Joint Identifcation
                            </TableCell>
                            <TableCell align="right">Spot</TableCell>
                            <TableCell align="right">Observation</TableCell>
                            <TableCell align="right">Remarks</TableCell>
                            <TableCell align="right">Action</TableCell>
                          </TableRow>
                        </TableHead>
                        <TableBody>
                          {tableItem.map((element, i) => (
                            <TableRow key={i}>
                              <TableCell align="right">{i + 1}</TableCell>
                              <TableCell>{element.film_size}</TableCell>
                              <TableCell align="right">
                                {element.joint}
                              </TableCell>
                              <TableCell align="right">
                                {element.spot}
                              </TableCell>
                              <TableCell align="right">
                                {element.observation}
                              </TableCell>
                              <TableCell align="right">
                                {element.remark}
                              </TableCell>
                              <TableCell align="right">
                                <Button
                                  color="error"
                                  sx={{ minWidth: "5ch" }}
                                  size="small"
                                  onClick={() => deleteRow(i)}
                                >
                                  <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    width="16"
                                    height="16"
                                    fill="currentColor"
                                    class="bi bi-trash3"
                                    viewBox="0 0 16 16"
                                  >
                                    <path d="M6.5 1h3a.5.5 0 0 1 .5.5v1H6v-1a.5.5 0 0 1 .5-.5M11 2.5v-1A1.5 1.5 0 0 0 9.5 0h-3A1.5 1.5 0 0 0 5 1.5v1H1.5a.5.5 0 0 0 0 1h.538l.853 10.66A2 2 0 0 0 4.885 16h6.23a2 2 0 0 0 1.994-1.84l.853-10.66h.538a.5.5 0 0 0 0-1zm1.958 1-.846 10.58a1 1 0 0 1-.997.92h-6.23a1 1 0 0 1-.997-.92L3.042 3.5zm-7.487 1a.5.5 0 0 1 .528.47l.5 8.5a.5.5 0 0 1-.998.06L5 5.03a.5.5 0 0 1 .47-.53Zm5.058 0a.5.5 0 0 1 .47.53l-.5 8.5a.5.5 0 1 1-.998-.06l.5-8.5a.5.5 0 0 1 .528-.47M8 4.5a.5.5 0 0 1 .5.5v8.5a.5.5 0 0 1-1 0V5a.5.5 0 0 1 .5-.5" />
                                  </svg>
                                </Button>
                              </TableCell>
                            </TableRow>
                          ))}
                        </TableBody>
                      </Table>
                    </TableContainer>
                  </Paper>
                </Grid>
              </form>
            </Paper>
          </Container>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} variant="contained" color="primary">
            Cancel
          </Button>
          <Button onClick={handleSubmit} variant="contained" color="primary">
            Submit
          </Button>
        </DialogActions>
      </Dialog>
    </>
  );
};

export default InvoiceCreate;
