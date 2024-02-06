import {
  Button,
  Container,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Typography,
} from "@mui/material";
import React, { useEffect, useRef, useState } from "react";
import lotuslogo from "../logoInvoice.png";
import "../Styles/PrintInvoice.css";
import { useNavigate, useParams } from "react-router-dom";
import html2canvas from "html2canvas";
import jsPDF from "jspdf";

const PrintInvoice = () => {
  const { eid } = useParams();
  const [tableitem, setTableItem] = useState([]);
  const [printData, setPrintData] = useState([
    {
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
      tableData: [{}],
    },
  ]);

  useEffect(() => {
    fetch(`http://localhost:5050/lotus/` + eid)
      .then((res) => res.json())
      .then((resp) => {
        console.log("Print data :", resp);
        setPrintData([
          {
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
          },
        ]);
        console.log("table", resp.tableData);

        setTableItem(resp.tableData);
      })
      .catch((err) => {
        console.log(err.message);
      });
  }, [eid]);

  // pdf functionality
  const pdfref = useRef();
  const navigate=useNavigate();

  const downloadPDF = () => {
    const capture = pdfref.current;
    // setLoader(true);
    html2canvas(capture).then((canvas) => {
      const imgData = canvas.toDataURL("img/png");
      const doc = new jsPDF("p", "mm", "a4");
      const componentWidth = doc.internal.pageSize.getWidth();
      const componentHeight = doc.internal.pageSize.getHeight();
      doc.addImage(imgData, "PNG", 0, 0, componentWidth, componentHeight);
      // setLoader(false);
      doc.save("invoice.pdf");
    });
  };

  function backClick(){
    navigate('/home')
  }
  return (
    <>
      {/* receipt action */}
      <div className="back-btn">
      <Button
          variant="contained"
          color="error"
          sx={{ minWidth: "5ch", }}
          size="medium"
          onClick={backClick}
        >
          Back 
        </Button>
      </div>
      <div className="pdf-btn">
      
        <Button
          variant="contained"
          sx={{ minWidth: "5ch" }}
          size="medium"
          onClick={downloadPDF}
        >
          Print
        </Button>
      </div>

      <Container component="main" maxWidth="lg" ref={pdfref}>
        <Paper
          elevation={3}
          style={{
            padding: 28,
            margin: "20px 0 ",
            backgroundColor: "rgb (250, 250, 250)",
          }}
        >
          <div className="container">
            <div className="logo-container">
              <img className="logo" src={lotuslogo} alt="" />
            </div>
            <div className="info-container">
              <div className="info-heading">
                <span className="prism">Lotus </span>
                <span className="prism-heading"> NDT SERVICES</span>

                <div className="info-para">
                  <span className="para1">Reg. Office :</span>
                  <span className="para1-ans">
                    &nbsp; 2, Sagar Complex 'B', Mumbai- Pune Road, Kasarwadi,
                    Pune 411 034.
                  </span>
                </div>
                <div className="info-para">
                  <span className="para1"> Opp. Office :</span>
                  <span className="para1-ans">
                    &nbsp; Gat No. 70, Plot No. 27, Sonawane Wasti, Talawade,
                    Pune - 411 062.
                  </span>
                  <span className="para1"> E-mail :</span>
                  <span className="para1-ans">
                    &nbsp; info@prismndtservices.com ,prismndt@gmail.com
                  </span>
                  <span className="para1"> Call :</span>
                  <span className="para1-ans">
                    &nbsp;+91 9595462500, 9595541020{" "}
                  </span>
                  <div>
                    <span className="para1">Ph :</span>
                    <span className="para1-ans">&nbsp;(020) 30621658 </span>
                    <span className="para1"> Website :</span>
                    <span className="para1-ans">
                      &nbsp; www.prismndtservices.com
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="container-two">
            <div className="para-head">
              <div className="hr-line">
                &nbsp;
                <hr />
              </div>
              <Typography
                component="h1"
                variant="h5"
                textAlign={"center"}
                fontWeight={"600"}
              >
                RADIOGRAPHIC EXAMINATION REPORT
              </Typography>

              {printData.map((pData, i) => (
                <div className="main-table" key={i}>
                  <div className="table-container">
                    <div className="first-row-container">
                      <div className="first-row">
                        <span className="first-rows">&nbsp;Client Name :</span>
                        <span className="first-row-ans">
                          &nbsp;{pData.client_name}
                        </span>
                      </div>
                      <div className="first-row">
                        <span className="first-rows">&nbsp;Plot No. :</span>
                        <span className="first-row-ans">
                          &nbsp;{pData.plot_no} &nbsp;
                        </span>
                      </div>
                    </div>

                    <div className="first-row-container">
                      <div className="first-row">
                        <span className="first-rows">&nbsp;Report No :</span>
                        <span className="first-row-ans">
                          &nbsp;{pData.report_no} &nbsp;
                        </span>
                      </div>
                      <div className="first-rows">
                        <span className="first-row">&nbsp;Date :</span>
                        <span className="first-row-ans">
                          &nbsp; {pData.date} &nbsp;{" "}
                        </span>
                      </div>
                    </div>
                  </div>
                  <div className="second-row-container">
                    <span className="first-rows">JOB/JOINT ID :</span>
                    <span className="first-row-ans"> {pData.job_id}</span>
                  </div>
                  <div className="third-row-container">
                    <div className="third-left">
                      <span className="first-rows">
                        Material Thickness + Reinforcement :
                      </span>
                      <span className="first-row-ans">
                        &nbsp;{pData.materialThRe}{" "}
                      </span>
                    </div>
                    <div className="third-right">
                      <span className="first-rows">&nbsp;Procedure No :</span>
                      <span className="first-row-ans">
                        &nbsp; {pData.procedure_no}
                      </span>
                    </div>
                  </div>

                  <div className="third-row-container">
                    <div className="third-left">
                      <span className="first-rows">Mat. Type & Spec :</span>
                      <span className="first-row-ans">
                        &nbsp; {pData.mat_type}
                      </span>
                    </div>
                    <div className="third-right">
                      <span className="first-rows">
                        &nbsp;Acceptance Stand. :
                      </span>
                      <span className="first-row-ans">
                        &nbsp; {pData.acceptSTD}
                      </span>
                    </div>
                  </div>
                  <div className="fourth-row-container">
                    <div className="fourth-left">
                      <span className="first-rows">&nbsp;Source</span>
                    </div>
                    <div className="fourth-left1">
                      <span className="first-row-ans">
                        &nbsp; {pData.source}
                      </span>
                    </div>
                    <div className="fourth-middle">
                      <span className="first-rows">&nbsp;Source Size</span>
                    </div>
                    <div className="fourth-middle1">
                      <span className="first-row-ans">
                        &nbsp; {pData.source_size}
                      </span>
                    </div>
                    <div className="fourth-right">
                      <span className="first-rows">RT Specification</span>
                    </div>
                    <div className="fourth-right1">
                      <span className="first-row-ans">
                        &nbsp;{pData.RTspec}
                      </span>
                    </div>
                  </div>
                  {/* 5th row */}
                  <div className="fourth-row-container">
                    <div className="fourth-left">
                      <span className="first-rows">&nbsp;Source Str.</span>
                    </div>
                    <div className="fourth-left1">
                      <span className="first-row-ans">
                        &nbsp; {pData.sourceStr}
                      </span>
                    </div>
                    <div className="fourth-middle">
                      <span className="first-rows">&nbsp;SOD</span>
                    </div>
                    <div className="fourth-middle1">
                      <span className="first-row-ans">&nbsp;{pData.SOD}</span>
                    </div>
                    <div className="fourth-right">
                      <span className="first-rows">Drawing No.</span>
                    </div>
                    <div className="fourth-right1">
                      <span className="first-row-ans">
                        &nbsp;{pData.drawing_no}
                      </span>
                    </div>
                  </div>

                  {/* 6th row */}
                  <div className="fourth-row-container">
                    <div className="fourth-left">
                      <span className="first-rows">&nbsp;Expo. Time</span>
                    </div>
                    <div className="fourth-left1">
                      <span className="first-row-ans">
                        &nbsp; {pData.expo_time}
                      </span>
                    </div>
                    <div className="fourth-middle">
                      <span className="first-rows">&nbsp;Exp. Tech.</span>
                    </div>
                    <div className="fourth-middle1">
                      <span className="first-row-ans">
                        &nbsp; {pData.expTech}
                      </span>
                    </div>
                    <div className="fourth-right">
                      <span className="first-rows">OFD</span>
                    </div>
                    <div className="fourth-right1">
                      <span className="first-row-ans">&nbsp;{pData.OFD}</span>
                    </div>
                  </div>

                  {/* 7th row */}
                  <div className="fourth-row-container">
                    <div className="fourth-left">
                      <span className="first-rows">&nbsp;No. Of Exp.</span>
                    </div>
                    <div className="fourth-left1">
                      <span className="first-row-ans">
                        &nbsp; {pData.no_exp}
                      </span>
                    </div>
                    <div className="fourth-middle">
                      <span className="first-rows">&nbsp;Welding No.</span>
                    </div>
                    <div className="fourth-middle1">
                      <span className="first-row-ans">
                        &nbsp; {pData.welder_no}
                      </span>
                    </div>
                    <div className="fourth-right">
                      <span className="first-rows">Radiography Ext.</span>
                    </div>
                    <div className="fourth-right1">
                      <span className="first-row-ans">
                        &nbsp;{pData.radiographyExt}
                      </span>
                    </div>
                  </div>

                  {/* 8th row */}
                  <div className="fourth-row-container">
                    <div className="fourth-left">
                      <span className="first-rows">&nbsp;Lead B Letter</span>
                    </div>
                    <div className="fourth-left1">
                      <span className="first-row-ans">
                        &nbsp; {pData.lead_B}
                      </span>
                    </div>
                    <div className="fourth-middle">
                      <span className="first-rows">&nbsp;Screen F&B</span>
                    </div>
                    <div className="fourth-middle1">
                      <span className="first-row-ans">
                        &nbsp; {pData.screenFB}
                      </span>
                    </div>
                    <div className="fourth-right">
                      <span className="first-rows">Welding Process</span>
                    </div>
                    <div className="fourth-right1">
                      <span className="first-row-ans">
                        &nbsp;{pData.welding_process}
                      </span>
                    </div>
                  </div>

                  {/* 8th row */}
                  <div className="fourth-row-container">
                    <div className="fourth-left">
                      <span className="first-rows">&nbsp;IQI Placed On</span>
                    </div>
                    <div className="fourth-left1">
                      <span className="first-row-ans">&nbsp; {pData.IQI}</span>
                    </div>
                    <div className="fourth-middle">
                      <span className="first-rows">&nbsp; Viewing</span>
                    </div>
                    <div className="fourth-middle1">
                      <span className="first-row-ans">
                        &nbsp; {pData.viewing}
                      </span>
                    </div>
                    <div className="fourth-right">
                      <span className="first-rows">Film Brand </span>
                    </div>
                    <div className="fourth-right1">
                      <span className="first-row-ans">
                        &nbsp;{pData.film_brand}
                      </span>
                    </div>
                  </div>

                  {/* 9th row */}
                  <div className="fourth-row-container">
                    <div className="fourth-left">
                      <span className="first-rows">&nbsp;Wire Type IQI</span>
                    </div>
                    <div className="fourth-left1">
                      <span className="first-row-ans">
                        &nbsp; {pData.wire_type}{" "}
                      </span>
                    </div>
                    <div className="fourth-middle">
                      <span className="first-rows">&nbsp;Density</span>
                    </div>
                    <div className="fourth-middle1">
                      <span className="first-row-ans">
                        &nbsp; {pData.density}
                      </span>
                    </div>
                    <div className="fourth-right">
                      <span className="first-rows">Films/Cassette</span>
                    </div>
                    <div className="fourth-right1">
                      <span className="first-row-ans">&nbsp;{pData.films}</span>
                    </div>
                  </div>

                  {/* 10th row */}
                  <div className="fourth-row-container">
                    <div className="fourth-left">
                      <span className="first-rows">&nbsp;Hole Type IQI</span>
                    </div>
                    <div className="fourth-left1">
                      <span className="first-row-ans">
                        &nbsp; {pData.hole_type}
                      </span>
                    </div>
                    <div className="fourth-middle">
                      <span className="first-rows">Req. Sensitivity&nbsp;</span>
                    </div>
                    <div className="fourth-middle1">
                      <span className="first-row-ans">
                        {pData.req_sensitivity}
                      </span>
                    </div>
                    <div className="fourth-right">
                      <span className="first-rows">Tech. Sheet No.</span>
                    </div>
                    <div className="fourth-right1">
                      <span className="first-row-ans">
                        &nbsp;{pData.tech_sheet}
                      </span>
                    </div>
                  </div>
                </div>
              ))}

              <div className="Table-item">
                <TableContainer component={Paper}>
                  <Table
                    sx={{
                      "&:last-child td, &:last-child th": {
                        border: 2,
                        borderTop: 0,
                        borderRadius: 0,
                      },
                    }}
                    aria-label="simple table"
                  >
                    <TableHead>
                      <TableRow>
                        <TableCell
                          align="center"
                          name="sr_no"
                          style={{ fontSize: "21px", fontWeight: "600" }}
                        >
                          Sr.No.
                        </TableCell>

                        <TableCell
                          name="film_size"
                          align="center"
                          style={{ fontSize: "21px", fontWeight: "600" }}
                        >
                          Film Size
                        </TableCell>
                        <TableCell
                          align="center"
                          style={{ fontSize: "21px", fontWeight: "600" }}
                        >
                          Joint Identifcation
                        </TableCell>
                        <TableCell
                          align="center"
                          style={{ fontSize: "21px", fontWeight: "600" }}
                        >
                          Spot
                        </TableCell>
                        <TableCell
                          align="center"
                          style={{ fontSize: "21px", fontWeight: "600" }}
                        >
                          Observation
                        </TableCell>
                        <TableCell
                          align="center"
                          style={{ fontSize: "21px", fontWeight: "600" }}
                        >
                          Remarks
                        </TableCell>
                        <TableCell
                          align="center"
                          style={{ fontSize: "21px", fontWeight: "600" }}
                        >
                          Inspection Authority
                        </TableCell>
                      </TableRow>
                    </TableHead>
                    <TableBody>
                      {tableitem.map((element, i) => (
                        <TableRow key={i}>
                          <TableCell
                            align="center"
                            style={{ fontSize: "18px", fontWeight: "300" }}
                          >
                            {i + 1}
                          </TableCell>
                          <TableCell
                            align="center"
                            style={{ fontSize: "18px", fontWeight: "300" }}
                          >
                            {element.film_size}
                          </TableCell>
                          <TableCell
                            align="center"
                            style={{ fontSize: "18px", fontWeight: "300" }}
                          >
                            {element.joint}
                          </TableCell>
                          <TableCell
                            align="center"
                            style={{ fontSize: "18px", fontWeight: "300" }}
                          >
                            {element.spot}
                          </TableCell>
                          <TableCell
                            align="center"
                            style={{ fontSize: "18px", fontWeight: "300" }}
                          >
                            {element.observation}
                          </TableCell>
                          <TableCell
                            align="center"
                            style={{ fontSize: "18px", fontWeight: "300" }}
                          >
                            {element.remark}
                          </TableCell>

                          <TableCell
                            align="center"
                            style={{ fontSize: "18px", fontWeight: "300" }}
                          ></TableCell>
                        </TableRow>
                      ))}
                    </TableBody>
                  </Table>
                </TableContainer>
              </div>
              <div className="bottom-container">
                <div className="first">
                  <span className="first-para">For PRISM NDT SERVICES</span>
                </div>
                <div className="second">
                  <span className="first-para">CUSTOMER'S REPRESENTATIVE </span>
                </div>
                <div className="third">
                  <span className="first-para">INSPECTION AUTHORITY</span>
                </div>
              </div>
            </div>
          </div>
        </Paper>
      </Container>
    </>
  );
};

export default PrintInvoice;
