import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
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
import "react-toastify/dist/ReactToastify.css";

const InvoiceEdit = () => {
  const { eid } = useParams();
  const navigate = useNavigate();

  const [editData, setEditData] = useState({
    id: "",
    client_name: "",
    plot_no: "",
    report_no: "",
    date: "",
    job_id: "",
    materialThRe: "",
    procedure_no: "",
    mat_type: "",
    acceptSTD: "",
    source: "",
    source_size: "",
    RTspec: "",
    sourceStr: "",
    SOD: "",
    drawing_no: "",
    expo_time: "",
    expTech: "",
    OFD: "",
    no_exp: "",
    welder_no: "",
    radiographyExt: "",
    lead_B: "",
    screenFB: "",
    welding_process: "",
    IQI: "",
    viewing: "",
    film_brand: "",
    wire_type: "",
    density: "",
    films: "",
    hole_type: "",
    req_sensitivity: "",
    tech_sheet: "",
    tableData: "[]",
    // tableData:'[tableItem]'
  });

  useEffect(() => {
    fetch(`http://localhost:5050/lotus/` + eid)
      .then((res) => res.json())
      .then((resp) => {
        console.log("EDit data :", resp.tableData);

        setEditData({
          id: resp.id,
          client_name: resp.client_name,
          plot_no: resp.plot_no,
          report_no: resp.report_no,
          date: resp.date,
          job_id: resp.job_id,
          materialThRe: resp.materialThRe,
          procedure_no: resp.procedure_no,
          mat_type: resp.mat_type,
          acceptSTD: resp.acceptSTD,
          source: resp.source,
          source_size: resp.source_size,
          RTspec: resp.RTspec,
          sourceStr: resp.sourceStr,
          SOD: resp.SOD,
          drawing_no: resp.drawing_no,
          expo_time: resp.expo_time,
          expTech: resp.expTech,
          OFD: resp.OFD,
          no_exp: resp.no_exp,
          welder_no: resp.welder_no,
          radiographyExt: resp.radiographyExt,
          lead_B: resp.lead_B,
          screenFB: resp.screenFB,
          welding_process: resp.welding_process,
          IQI: resp.IQI,
          viewing: resp.viewing,
          film_brand: resp.film_brand,
          wire_type: resp.wire_type,
          density: resp.density,
          films: resp.films,
          hole_type: resp.hole_type,
          req_sensitivity: resp.req_sensitivity,
          tech_sheet: resp.tech_sheet,
          tableData: resp.tableData,
        });
        setTableItem(resp.tableData);
      })
      .catch((err) => {
        console.log(err.message);
      });
  }, [eid]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setEditData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    fetch(`http://localhost:5050/lotus/` + eid, {
      method: "PUT",
      headers: { "content-type": "application/json" },
      body: JSON.stringify(editData),
    })
      .then((res) => {
        alert("Saved Successfully.");
        navigate("/home");
      })
      .catch((err) => {
        console.log(err.message);
      });
  };

  // Dialog
  const [open, setOpen] = useState(true);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
    navigate("/home");
  };

  //  table functinality
  const [tableitem, setTableItem] = useState([]);

  const [inputdata, setInputData] = useState({
    film_size: "",
    joint: "",
    spot: "",
    observation: "",
    remark: "",
  });

  const tableData = (e) => {
    e.preventDefault();
    const { name, value } = e.target;
    setInputData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const addinputdata = (e) => {
    e.preventDefault();
    if (
      inputdata.film_size ||
      inputdata.joint ||
      inputdata.spot ||
      inputdata.observation ||
      inputdata.remark
    ) {
      setTableItem((prevArray) => [...prevArray, { ...inputdata }]);
      setInputData({
        film_size: "",
        joint: "",
        spot: "",
        observation: "",
        remark: "",
      });
    }
  };

  const deleteRow = (index) => {
    setTableItem((prevArray) => prevArray.filter((_, i) => i !== index));
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
                        value={editData.id}
                        onChange={handleChange}
                      />
                      <TextField
                        id="outlined-basic"
                        label="Client-Name"
                        variant="outlined"
                        name="client_name"
                        value={editData.client_name}
                        onChange={handleChange}
                        defaultValue=" GLATT SYSTEMS PVT LTD"
                      />

                      <TextField
                        required
                        id="outlined-required"
                        label="Plot No."
                        name="plot_no"
                        value={editData.plot_no}
                        onChange={handleChange}
                        defaultValue="D.240,Ranjangaon MIDC, shirur PUNE"
                      />
                      <TextField
                        required
                        id="outlined-required"
                        label="Report No:"
                        name="report_no"
                        value={editData.report_no}
                        onChange={handleChange}
                        defaultValue="PNS/2023-24/163"
                      />

                      <input
                        className="date-input"
                        type="date"
                        name="date"
                        value={editData.date}
                        onChange={handleChange}
                        defaultValue="01/01/2024"
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
                        value={editData.job_id}
                        onChange={handleChange}
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
                        value={editData.materialThRe}
                        onChange={handleChange}
                        variant="outlined"
                        defaultValue="  14 mm + 3.0 mm"
                      />

                      <TextField
                        required
                        id="outlined-required"
                        label="Procedure No"
                        name="procedure_no"
                        value={editData.procedure_no}
                        onChange={handleChange}
                        defaultValue="GSPL-NDE-RT-03"
                      />
                      <TextField
                        required
                        id="outlined-required"
                        label="Mat. Type & Spec"
                        name="mat_type"
                        value={editData.mat_type}
                        onChange={handleChange}
                        defaultValue=" SA240 GR.304"
                      />
                      <TextField
                        required
                        id="outlined-required"
                        label="Acceptance Standard"
                        name="acceptSTD"
                        value={editData.acceptSTD}
                        onChange={handleChange}
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
                        value={editData.source}
                        onChange={handleChange}
                        variant="outlined"
                        defaultValue=" IR192"
                      />

                      <TextField
                        required
                        id="outlined-required"
                        label="Source Size"
                        name="source_size"
                        value={editData.source_size}
                        onChange={handleChange}
                        defaultValue="2.7 X 1.8 mm"
                      />
                      <TextField
                        required
                        id="outlined-required"
                        label="RT Specifcation"
                        name="RTspec"
                        value={editData.RTspec}
                        onChange={handleChange}
                        defaultValue="ASME SEC-V"
                      />
                      <TextField
                        id="outlined-basic"
                        label="Source Str. "
                        name="sourceStr"
                        value={editData.sourceStr}
                        onChange={handleChange}
                        variant="outlined"
                        defaultValue=" 30 Ci"
                      />

                      <TextField
                        required
                        id="outlined-required"
                        label="SOD"
                        name="SOD"
                        value={editData.SOD}
                        onChange={handleChange}
                        defaultValue="500 mm"
                      />
                      <TextField
                        required
                        id="outlined-required"
                        label="Drawing No."
                        name="drawing_no"
                        value={editData.drawing_no}
                        onChange={handleChange}
                        defaultValue="-----"
                      />
                      <TextField
                        id="outlined-basic"
                        label="Expo. Time"
                        name="expo_time"
                        value={editData.expo_time}
                        onChange={handleChange}
                        variant="outlined"
                        defaultValue="3.29 Min."
                      />

                      <TextField
                        required
                        id="outlined-required"
                        label="Exp. Tech."
                        name="expTech"
                        value={editData.expTech}
                        onChange={handleChange}
                        defaultValue="Panoramic"
                      />
                      <TextField
                        required
                        id="outlined-required"
                        label="OFD"
                        name="OFD"
                        value={editData.OFD}
                        onChange={handleChange}
                        defaultValue="17.00 mm"
                      />
                      <TextField
                        id="outlined-basic"
                        label="No. Of Exp."
                        name="no_exp"
                        value={editData.no_exp}
                        onChange={handleChange}
                        variant="outlined"
                        defaultValue=" 2"
                      />

                      <TextField
                        required
                        id="outlined-required"
                        label="Welder No."
                        name="welder_no"
                        value={editData.welder_no}
                        onChange={handleChange}
                        defaultValue="-----"
                      />
                      <TextField
                        required
                        id="outlined-required"
                        label="Radiography Ext."
                        name="radiographyExt"
                        value={editData.radiographyExt}
                        onChange={handleChange}
                        defaultValue=" 100%"
                      />
                      <TextField
                        id="outlined-basic"
                        label="Lead B Letter "
                        name="lead_B"
                        value={editData.lead_B}
                        onChange={handleChange}
                        variant="outlined"
                        defaultValue="Yes"
                      />

                      <TextField
                        required
                        id="outlined-required"
                        label="Screen F&B"
                        name="screenF&B"
                        value={editData.screenFB}
                        onChange={handleChange}
                        defaultValue="0.1 mm"
                      />
                      <TextField
                        required
                        id="outlined-required"
                        label="Welding Process"
                        name="welding_process"
                        value={editData.welding_process}
                        onChange={handleChange}
                        defaultValue="GTAW"
                      />
                      <TextField
                        id="outlined-basic"
                        label=" IQI Placed On"
                        name="IQI"
                        value={editData.IQI}
                        onChange={handleChange}
                        variant="outlined"
                        defaultValue="Source Side"
                      />

                      <TextField
                        required
                        id="outlined-required"
                        label="Viewing "
                        name="viewing"
                        value={editData.viewing}
                        onChange={handleChange}
                        defaultValue="Single"
                      />
                      <TextField
                        required
                        id="outlined-required"
                        label="Film Brand "
                        name="film_brand"
                        value={editData.film_brand}
                        onChange={handleChange}
                        defaultValue="Fuji-IX100"
                      />
                      <TextField
                        id="outlined-basic"
                        label="Wire Type IQI "
                        name="wire_type"
                        value={editData.wire_type}
                        onChange={handleChange}
                        variant="outlined"
                        defaultValue="ASTM 1B-11 "
                      />

                      <TextField
                        required
                        id="outlined-required"
                        label=" Density"
                        name="density"
                        value={editData.density}
                        onChange={handleChange}
                        defaultValue="2 To 4"
                      />
                      <TextField
                        required
                        id="outlined-required"
                        label="Films/Cassette"
                        name="films"
                        value={editData.films}
                        onChange={handleChange}
                        defaultValue="1"
                      />
                      <TextField
                        id="outlined-basic"
                        label=" Hole Type IQI"
                        name="hole_type"
                        value={editData.hole_type}
                        onChange={handleChange}
                        variant="outlined"
                        defaultValue="----"
                      />

                      <TextField
                        required
                        id="outlined-required"
                        label="Req.  Sensitivity "
                        name="req_sensitivity"
                        value={editData.req_sensitivity}
                        onChange={handleChange}
                        defaultValue="2% (8th Wire 
                    Visible)
                    "
                      />
                      <TextField
                        required
                        id="outlined-required"
                        label="Tech. Sheet No."
                        name="tech_sheet"
                        value={editData.tech_sheet}
                        onChange={handleChange}
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
                        value={inputdata.film_size || ""}
                        onChange={tableData}
                        id="outlined-basic"
                        label="Film Size "
                        variant="outlined"
                        defaultValue={" 4”X15” "}
                      />

                      <TextField
                        required
                        name="joint"
                        value={inputdata.joint || ""}
                        onChange={tableData}
                        id="outlined-required"
                        label="Joint
                  Identifcation
                  "
                        defaultValue="028-BDLS1"
                      />

                      <FormControl required sx={{ m: 1, minWidth: "25ch" }}>
                        <InputLabel id="demo-simple-select-required-label">
                          Spot
                        </InputLabel>
                        <Select
                          name="spot"
                          value={inputdata.spot || ""}
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
                        value={inputdata.observation || ""}
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
                        value={inputdata.remark || ""}
                        onChange={tableData}
                        defaultValue="Acceptable"
                      />
                      <Button
                        variant="contained"
                        sx={{ m: 2, minWidth: "5ch" }}
                        size="large"
                        onClick={addinputdata}
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
                              value={editData.sr_no}
                              onChange={handleChange}
                            >
                              Sr.No.
                            </TableCell>

                            <TableCell
                              name="film_size"
                              value={editData.film_size}
                              onChange={handleChange}
                            >
                              Film Size{" "}
                            </TableCell>
                            <TableCell align="right">
                              Joint Identifcation
                            </TableCell>
                            <TableCell align="right">Spot</TableCell>
                            <TableCell align="right">Observation</TableCell>
                            <TableCell align="right">Remarks</TableCell>
                            <TableCell align="right">
                              Inspection Authority
                            </TableCell>
                          </TableRow>
                        </TableHead>
                        <TableBody>
                          {tableitem.map((element, i) => (
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
                                  variant="contained"
                                  sx={{ minWidth: "5ch" }}
                                  size="small"
                                  onClick={() => deleteRow(i)}
                                >
                                  Delete
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

export default InvoiceEdit;
