import DataTable from "react-data-table-component";
import "styled-components";
import "./styles.scss";
import imgLogoPremise from "../../assets/img/premise.webp";
import { Link } from "react-router-dom";
import IconHome from "../icons/IconHome";

const TableScores = () => {
  const columns = [
    {
      name: "Fecha",
      selector: (row) => row.FECHA,
      sortable: true,
      fontSize: "2rem",
      style: {
        color: "#202124",
        fontSize: "1.2rem",
        fontWeight: 500,
      },
    },
    {
      name: "Documento",
      selector: (row) => row.DOCUMENTO,
      sortable: true,
      fontSize: "2rem",
      grow: 2,
      style: {
        color: "#202124",
        fontSize: "1.2rem",
        fontWeight: 500,
      },
    },
    {
      name: "Nombre Completo",
      selector: (row) => row.NOMBRE,
      sortable: true,
      grow: 2,
      style: {
        color: "#202124",
        fontSize: "1.2rem",
        fontWeight: 500,
      },
    },
    {
      name: "Correo",
      selector: (row) => row.CORREO,
      grow: 1,
      style: {
        color: "#202124",
        fontSize: "1.2rem",
        fontWeight: 500,
      },
    },
    {
      name: "NOTA FINAL",
      selector: (row) => row.SCORE,
      sortable: true,
      grow: 2,
      style: {
        backgroundColor: "#ffa200",
      },
    },
    {
      name: "P1",
      selector: (row) => row.PREGUNTA_1,
      sortable: true,
    },
    {
      name: "P2",
      selector: (row) => row.PREGUNTA_2,
      sortable: true,
    },
    {
      name: "P3",
      selector: (row) => row.PREGUNTA_3,
      sortable: true,
    },
    {
      name: "P4",
      selector: (row) => row.PREGUNTA_4,
      sortable: true,
    },
    {
      name: "P5",
      selector: (row) => row.PREGUNTA_5,
      sortable: true,
    },
    {
      name: "P6",
      selector: (row) => row.PREGUNTA_6,
      sortable: true,
    },
    {
      name: "P7",
      selector: (row) => row.PREGUNTA_7,
      sortable: true,
    },
    {
      name: "P8",
      selector: (row) => row.PREGUNTA_8,
      sortable: true,
    },
    {
      name: "P9",
      selector: (row) => row.PREGUNTA_9,
      sortable: true,
    },
    {
      name: "P10",
      selector: (row) => row.PREGUNTA_10,
      sortable: true,
    },
    {
      name: "P11",
      selector: (row) => row.PREGUNTA_11,
      sortable: true,
    },
    {
      name: "P12",
      selector: (row) => row.PREGUNTA_12,
      sortable: true,
    },
    {
      name: "P13",
      selector: (row) => row.PREGUNTA_13,
      sortable: true,
    },
    {
      name: "P14",
      selector: (row) => row.PREGUNTA_14,
      sortable: true,
    },
    {
      name: "P15",
      selector: (row) => row.PREGUNTA_15,
      sortable: true,
    },
    {
      name: "P16",
      selector: (row) => row.PREGUNTA_16,
      sortable: true,
    },
    {
      name: "P17",
      selector: (row) => row.PREGUNTA_17,
      sortable: true,
    },
    {
      name: "P18",
      selector: (row) => row.PREGUNTA_18,
      sortable: true,
    },
    {
      name: "P19",
      selector: (row) => row.PREGUNTA_19,
      sortable: true,
    },
    {
      name: "P20",
      selector: (row) => row.PREGUNTA_20,
      sortable: true,
    },
    {
      name: "P21",
      selector: (row) => row.PREGUNTA_21,
      sortable: true,
    },
    {
      name: "P22",
      selector: (row) => row.PREGUNTA_22,
      sortable: true,
    },
    {
      name: "P23",
      selector: (row) => row.PREGUNTA_23,
      sortable: true,
    },
    {
      name: "P24",
      selector: (row) => row.PREGUNTA_24,
      sortable: true,
    },
    {
      name: "P25",
      selector: (row) => row.PREGUNTA_25,
      sortable: true,
    },
    {
      name: "P26",
      selector: (row) => row.PREGUNTA_26,
      sortable: true,
    },
    {
      name: "P27",
      selector: (row) => row.PREGUNTA_27,
      sortable: true,
    },
    {
      name: "P28",
      selector: (row) => row.PREGUNTA_28,
      sortable: true,
    },
    {
      name: "P29",
      selector: (row) => row.PREGUNTA_29,
      sortable: true,
    },
  ];

  const data = [
    {
      ID: 1,
      DATE: "23/03/204",
      DOCUMENTO: "1098765432",
      NOMBRE: "PEPITO PEREZ",
      CORREO: "PEPITO@PREMISE.COM",
      SCORE: 7.25,
      PREGUNTA_1: 0.25,
      PREGUNTA_2: 1,
      PREGUNTA_3: 0.75,
      PREGUNTA_4: 1,
      PREGUNTA_5: 0.25,
      PREGUNTA_6: 0.25,
      PREGUNTA_7: 1,
      PREGUNTA_8: 1,
      PREGUNTA_9: 0.25,
      PREGUNTA_10: 1,
      PREGUNTA_11: 0.75,
      PREGUNTA_12: 0.25,
      PREGUNTA_13: 1,
      PREGUNTA_14: 1,
      PREGUNTA_15: 0.75,
      PREGUNTA_16: 1,
      PREGUNTA_17: 0.75,
      PREGUNTA_18: 1,
      PREGUNTA_19: 0.25,
      PREGUNTA_20: 1,
      PREGUNTA_21: 0.25,
      PREGUNTA_22: 0.6,
      PREGUNTA_23: 0.6,
      PREGUNTA_24: 0.25,
      PREGUNTA_25: 1,
      PREGUNTA_26: 1,
      PREGUNTA_27: 0.25,
      PREGUNTA_28: 1,
      PREGUNTA_29: 1,
    },
    {
      ID: 2,
      DATE: "23/03/204",
      DOCUMENTO: "37654899",
      NOMBRE: "MARINA FLORES",
      CORREO: "MARINA@PREMISE.COM",
      SCORE: 7.25,
      PREGUNTA_1: 0.25,
      PREGUNTA_2: 1,
      PREGUNTA_3: 0.75,
      PREGUNTA_4: 0.25,
      PREGUNTA_5: 0.25,
      PREGUNTA_6: 0.25,
      PREGUNTA_7: 1,
      PREGUNTA_8: 1,
      PREGUNTA_9: 0.25,
      PREGUNTA_10: 0.75,
      PREGUNTA_11: 0.75,
      PREGUNTA_12: 0.25,
      PREGUNTA_13: 1,
      PREGUNTA_14: 1,
      PREGUNTA_15: 0.75,
      PREGUNTA_16: 1,
      PREGUNTA_17: 0.75,
      PREGUNTA_18: 1,
      PREGUNTA_19: 0.25,
      PREGUNTA_20: 1,
      PREGUNTA_21: 0.25,
      PREGUNTA_22: 0.6,
      PREGUNTA_23: 0.6,
      PREGUNTA_24: 0.25,
      PREGUNTA_25: 1,
      PREGUNTA_26: 1,
      PREGUNTA_27: 0.25,
      PREGUNTA_28: 1,
      PREGUNTA_29: 1,
    },
    {
      ID: 1,
      DATE: "23/03/204",
      DOCUMENTO: "1098765432",
      NOMBRE: "PEPITO PEREZ",
      CORREO: "PEPITO@PREMISE.COM",
      SCORE: 7.25,
      PREGUNTA_1: 0.25,
      PREGUNTA_2: 1,
      PREGUNTA_3: 0.75,
      PREGUNTA_4: 1,
      PREGUNTA_5: 0.25,
      PREGUNTA_6: 0.25,
      PREGUNTA_7: 1,
      PREGUNTA_8: 1,
      PREGUNTA_9: 0.25,
      PREGUNTA_10: 1,
      PREGUNTA_11: 0.75,
      PREGUNTA_12: 0.25,
      PREGUNTA_13: 1,
      PREGUNTA_14: 1,
      PREGUNTA_15: 0.75,
      PREGUNTA_16: 1,
      PREGUNTA_17: 0.75,
      PREGUNTA_18: 1,
      PREGUNTA_19: 0.25,
      PREGUNTA_20: 1,
      PREGUNTA_21: 0.25,
      PREGUNTA_22: 0.6,
      PREGUNTA_23: 0.6,
      PREGUNTA_24: 0.25,
      PREGUNTA_25: 1,
      PREGUNTA_26: 1,
      PREGUNTA_27: 0.25,
      PREGUNTA_28: 1,
      PREGUNTA_29: 1,
    },
    {
      ID: 2,
      DATE: "23/03/204",
      DOCUMENTO: "37654899",
      NOMBRE: "MARINA FLORES",
      CORREO: "MARINA@PREMISE.COM",
      SCORE: 7.25,
      PREGUNTA_1: 0.25,
      PREGUNTA_2: 1,
      PREGUNTA_3: 0.75,
      PREGUNTA_4: 0.25,
      PREGUNTA_5: 0.25,
      PREGUNTA_6: 0.25,
      PREGUNTA_7: 1,
      PREGUNTA_8: 1,
      PREGUNTA_9: 0.25,
      PREGUNTA_10: 0.75,
      PREGUNTA_11: 0.75,
      PREGUNTA_12: 0.25,
      PREGUNTA_13: 1,
      PREGUNTA_14: 1,
      PREGUNTA_15: 0.75,
      PREGUNTA_16: 1,
      PREGUNTA_17: 0.75,
      PREGUNTA_18: 1,
      PREGUNTA_19: 0.25,
      PREGUNTA_20: 1,
      PREGUNTA_21: 0.25,
      PREGUNTA_22: 0.6,
      PREGUNTA_23: 0.6,
      PREGUNTA_24: 0.25,
      PREGUNTA_25: 1,
      PREGUNTA_26: 1,
      PREGUNTA_27: 0.25,
      PREGUNTA_28: 1,
      PREGUNTA_29: 1,
    },
    {
      ID: 1,
      DATE: "23/03/204",
      DOCUMENTO: "1098765432",
      NOMBRE: "PEPITO PEREZ",
      CORREO: "PEPITO@PREMISE.COM",
      SCORE: 7.25,
      PREGUNTA_1: 0.25,
      PREGUNTA_2: 1,
      PREGUNTA_3: 0.75,
      PREGUNTA_4: 1,
      PREGUNTA_5: 0.25,
      PREGUNTA_6: 0.25,
      PREGUNTA_7: 1,
      PREGUNTA_8: 1,
      PREGUNTA_9: 0.25,
      PREGUNTA_10: 1,
      PREGUNTA_11: 0.75,
      PREGUNTA_12: 0.25,
      PREGUNTA_13: 1,
      PREGUNTA_14: 1,
      PREGUNTA_15: 0.75,
      PREGUNTA_16: 1,
      PREGUNTA_17: 0.75,
      PREGUNTA_18: 1,
      PREGUNTA_19: 0.25,
      PREGUNTA_20: 1,
      PREGUNTA_21: 0.25,
      PREGUNTA_22: 0.6,
      PREGUNTA_23: 0.6,
      PREGUNTA_24: 0.25,
      PREGUNTA_25: 1,
      PREGUNTA_26: 1,
      PREGUNTA_27: 0.25,
      PREGUNTA_28: 1,
      PREGUNTA_29: 1,
    },
    {
      ID: 2,
      DATE: "23/03/204",
      DOCUMENTO: "37654899",
      NOMBRE: "MARINA FLORES",
      CORREO: "MARINA@PREMISE.COM",
      SCORE: 7.25,
      PREGUNTA_1: 0.25,
      PREGUNTA_2: 1,
      PREGUNTA_3: 0.75,
      PREGUNTA_4: 0.25,
      PREGUNTA_5: 0.25,
      PREGUNTA_6: 0.25,
      PREGUNTA_7: 1,
      PREGUNTA_8: 1,
      PREGUNTA_9: 0.25,
      PREGUNTA_10: 0.75,
      PREGUNTA_11: 0.75,
      PREGUNTA_12: 0.25,
      PREGUNTA_13: 1,
      PREGUNTA_14: 1,
      PREGUNTA_15: 0.75,
      PREGUNTA_16: 1,
      PREGUNTA_17: 0.75,
      PREGUNTA_18: 1,
      PREGUNTA_19: 0.25,
      PREGUNTA_20: 1,
      PREGUNTA_21: 0.25,
      PREGUNTA_22: 0.6,
      PREGUNTA_23: 0.6,
      PREGUNTA_24: 0.25,
      PREGUNTA_25: 1,
      PREGUNTA_26: 1,
      PREGUNTA_27: 0.25,
      PREGUNTA_28: 1,
      PREGUNTA_29: 1,
    },
    {
      ID: 1,
      DATE: "23/03/204",
      DOCUMENTO: "1098765432",
      NOMBRE: "PEPITO PEREZ",
      CORREO: "PEPITO@PREMISE.COM",
      SCORE: 7.25,
      PREGUNTA_1: 0.25,
      PREGUNTA_2: 1,
      PREGUNTA_3: 0.75,
      PREGUNTA_4: 1,
      PREGUNTA_5: 0.25,
      PREGUNTA_6: 0.25,
      PREGUNTA_7: 1,
      PREGUNTA_8: 1,
      PREGUNTA_9: 0.25,
      PREGUNTA_10: 1,
      PREGUNTA_11: 0.75,
      PREGUNTA_12: 0.25,
      PREGUNTA_13: 1,
      PREGUNTA_14: 1,
      PREGUNTA_15: 0.75,
      PREGUNTA_16: 1,
      PREGUNTA_17: 0.75,
      PREGUNTA_18: 1,
      PREGUNTA_19: 0.25,
      PREGUNTA_20: 1,
      PREGUNTA_21: 0.25,
      PREGUNTA_22: 0.6,
      PREGUNTA_23: 0.6,
      PREGUNTA_24: 0.25,
      PREGUNTA_25: 1,
      PREGUNTA_26: 1,
      PREGUNTA_27: 0.25,
      PREGUNTA_28: 1,
      PREGUNTA_29: 1,
    },
    {
      ID: 2,
      DATE: "23/03/204",
      DOCUMENTO: "37654899",
      NOMBRE: "MARINA FLORES",
      CORREO: "MARINA@PREMISE.COM",
      SCORE: 7.25,
      PREGUNTA_1: 0.25,
      PREGUNTA_2: 1,
      PREGUNTA_3: 0.75,
      PREGUNTA_4: 0.25,
      PREGUNTA_5: 0.25,
      PREGUNTA_6: 0.25,
      PREGUNTA_7: 1,
      PREGUNTA_8: 1,
      PREGUNTA_9: 0.25,
      PREGUNTA_10: 0.75,
      PREGUNTA_11: 0.75,
      PREGUNTA_12: 0.25,
      PREGUNTA_13: 1,
      PREGUNTA_14: 1,
      PREGUNTA_15: 0.75,
      PREGUNTA_16: 1,
      PREGUNTA_17: 0.75,
      PREGUNTA_18: 1,
      PREGUNTA_19: 0.25,
      PREGUNTA_20: 1,
      PREGUNTA_21: 0.25,
      PREGUNTA_22: 0.6,
      PREGUNTA_23: 0.6,
      PREGUNTA_24: 0.25,
      PREGUNTA_25: 1,
      PREGUNTA_26: 1,
      PREGUNTA_27: 0.25,
      PREGUNTA_28: 1,
      PREGUNTA_29: 1,
    },
    {
      ID: 1,
      DATE: "23/03/204",
      DOCUMENTO: "1098765432",
      NOMBRE: "PEPITO PEREZ",
      CORREO: "PEPITO@PREMISE.COM",
      SCORE: 7.25,
      PREGUNTA_1: 0.25,
      PREGUNTA_2: 1,
      PREGUNTA_3: 0.75,
      PREGUNTA_4: 1,
      PREGUNTA_5: 0.25,
      PREGUNTA_6: 0.25,
      PREGUNTA_7: 1,
      PREGUNTA_8: 1,
      PREGUNTA_9: 0.25,
      PREGUNTA_10: 1,
      PREGUNTA_11: 0.75,
      PREGUNTA_12: 0.25,
      PREGUNTA_13: 1,
      PREGUNTA_14: 1,
      PREGUNTA_15: 0.75,
      PREGUNTA_16: 1,
      PREGUNTA_17: 0.75,
      PREGUNTA_18: 1,
      PREGUNTA_19: 0.25,
      PREGUNTA_20: 1,
      PREGUNTA_21: 0.25,
      PREGUNTA_22: 0.6,
      PREGUNTA_23: 0.6,
      PREGUNTA_24: 0.25,
      PREGUNTA_25: 1,
      PREGUNTA_26: 1,
      PREGUNTA_27: 0.25,
      PREGUNTA_28: 1,
      PREGUNTA_29: 1,
    },
    {
      ID: 2,
      DATE: "23/03/204",
      DOCUMENTO: "37654899",
      NOMBRE: "MARINA FLORES",
      CORREO: "MARINA@PREMISE.COM",
      SCORE: 7.25,
      PREGUNTA_1: 0.25,
      PREGUNTA_2: 1,
      PREGUNTA_3: 0.75,
      PREGUNTA_4: 0.25,
      PREGUNTA_5: 0.25,
      PREGUNTA_6: 0.25,
      PREGUNTA_7: 1,
      PREGUNTA_8: 1,
      PREGUNTA_9: 0.25,
      PREGUNTA_10: 0.75,
      PREGUNTA_11: 0.75,
      PREGUNTA_12: 0.25,
      PREGUNTA_13: 1,
      PREGUNTA_14: 1,
      PREGUNTA_15: 0.75,
      PREGUNTA_16: 1,
      PREGUNTA_17: 0.75,
      PREGUNTA_18: 1,
      PREGUNTA_19: 0.25,
      PREGUNTA_20: 1,
      PREGUNTA_21: 0.25,
      PREGUNTA_22: 0.6,
      PREGUNTA_23: 0.6,
      PREGUNTA_24: 0.25,
      PREGUNTA_25: 1,
      PREGUNTA_26: 1,
      PREGUNTA_27: 0.25,
      PREGUNTA_28: 1,
      PREGUNTA_29: 1,
    },
    {
      ID: 1,
      DATE: "23/03/204",
      DOCUMENTO: "1098765432",
      NOMBRE: "PEPITO PEREZ",
      CORREO: "PEPITO@PREMISE.COM",
      SCORE: 7.25,
      PREGUNTA_1: 0.25,
      PREGUNTA_2: 1,
      PREGUNTA_3: 0.75,
      PREGUNTA_4: 1,
      PREGUNTA_5: 0.25,
      PREGUNTA_6: 0.25,
      PREGUNTA_7: 1,
      PREGUNTA_8: 1,
      PREGUNTA_9: 0.25,
      PREGUNTA_10: 1,
      PREGUNTA_11: 0.75,
      PREGUNTA_12: 0.25,
      PREGUNTA_13: 1,
      PREGUNTA_14: 1,
      PREGUNTA_15: 0.75,
      PREGUNTA_16: 1,
      PREGUNTA_17: 0.75,
      PREGUNTA_18: 1,
      PREGUNTA_19: 0.25,
      PREGUNTA_20: 1,
      PREGUNTA_21: 0.25,
      PREGUNTA_22: 0.6,
      PREGUNTA_23: 0.6,
      PREGUNTA_24: 0.25,
      PREGUNTA_25: 1,
      PREGUNTA_26: 1,
      PREGUNTA_27: 0.25,
      PREGUNTA_28: 1,
      PREGUNTA_29: 1,
    },
    {
      ID: 2,
      DATE: "23/03/204",
      DOCUMENTO: "37654899",
      NOMBRE: "MARINA FLORES",
      CORREO: "MARINA@PREMISE.COM",
      SCORE: 7.25,
      PREGUNTA_1: 0.25,
      PREGUNTA_2: 1,
      PREGUNTA_3: 0.75,
      PREGUNTA_4: 0.25,
      PREGUNTA_5: 0.25,
      PREGUNTA_6: 0.25,
      PREGUNTA_7: 1,
      PREGUNTA_8: 1,
      PREGUNTA_9: 0.25,
      PREGUNTA_10: 0.75,
      PREGUNTA_11: 0.75,
      PREGUNTA_12: 0.25,
      PREGUNTA_13: 1,
      PREGUNTA_14: 1,
      PREGUNTA_15: 0.75,
      PREGUNTA_16: 1,
      PREGUNTA_17: 0.75,
      PREGUNTA_18: 1,
      PREGUNTA_19: 0.25,
      PREGUNTA_20: 1,
      PREGUNTA_21: 0.25,
      PREGUNTA_22: 0.6,
      PREGUNTA_23: 0.6,
      PREGUNTA_24: 0.25,
      PREGUNTA_25: 1,
      PREGUNTA_26: 1,
      PREGUNTA_27: 0.25,
      PREGUNTA_28: 1,
      PREGUNTA_29: 1,
    },
    {
      ID: 1,
      DATE: "23/03/204",
      DOCUMENTO: "1098765432",
      NOMBRE: "PEPITO PEREZ",
      CORREO: "PEPITO@PREMISE.COM",
      SCORE: 7.25,
      PREGUNTA_1: 0.25,
      PREGUNTA_2: 1,
      PREGUNTA_3: 0.75,
      PREGUNTA_4: 1,
      PREGUNTA_5: 0.25,
      PREGUNTA_6: 0.25,
      PREGUNTA_7: 1,
      PREGUNTA_8: 1,
      PREGUNTA_9: 0.25,
      PREGUNTA_10: 1,
      PREGUNTA_11: 0.75,
      PREGUNTA_12: 0.25,
      PREGUNTA_13: 1,
      PREGUNTA_14: 1,
      PREGUNTA_15: 0.75,
      PREGUNTA_16: 1,
      PREGUNTA_17: 0.75,
      PREGUNTA_18: 1,
      PREGUNTA_19: 0.25,
      PREGUNTA_20: 1,
      PREGUNTA_21: 0.25,
      PREGUNTA_22: 0.6,
      PREGUNTA_23: 0.6,
      PREGUNTA_24: 0.25,
      PREGUNTA_25: 1,
      PREGUNTA_26: 1,
      PREGUNTA_27: 0.25,
      PREGUNTA_28: 1,
      PREGUNTA_29: 1,
    },
    {
      ID: 2,
      DATE: "23/03/204",
      DOCUMENTO: "37654899",
      NOMBRE: "MARINA FLORES",
      CORREO: "MARINA@PREMISE.COM",
      SCORE: 7.25,
      PREGUNTA_1: 0.25,
      PREGUNTA_2: 1,
      PREGUNTA_3: 0.75,
      PREGUNTA_4: 0.25,
      PREGUNTA_5: 0.25,
      PREGUNTA_6: 0.25,
      PREGUNTA_7: 1,
      PREGUNTA_8: 1,
      PREGUNTA_9: 0.25,
      PREGUNTA_10: 0.75,
      PREGUNTA_11: 0.75,
      PREGUNTA_12: 0.25,
      PREGUNTA_13: 1,
      PREGUNTA_14: 1,
      PREGUNTA_15: 0.75,
      PREGUNTA_16: 1,
      PREGUNTA_17: 0.75,
      PREGUNTA_18: 1,
      PREGUNTA_19: 0.25,
      PREGUNTA_20: 1,
      PREGUNTA_21: 0.25,
      PREGUNTA_22: 0.6,
      PREGUNTA_23: 0.6,
      PREGUNTA_24: 0.25,
      PREGUNTA_25: 1,
      PREGUNTA_26: 1,
      PREGUNTA_27: 0.25,
      PREGUNTA_28: 1,
      PREGUNTA_29: 1,
    },
    {
      ID: 1,
      DATE: "23/03/204",
      DOCUMENTO: "1098765432",
      NOMBRE: "PEPITO PEREZ",
      CORREO: "PEPITO@PREMISE.COM",
      SCORE: 7.25,
      PREGUNTA_1: 0.25,
      PREGUNTA_2: 1,
      PREGUNTA_3: 0.75,
      PREGUNTA_4: 1,
      PREGUNTA_5: 0.25,
      PREGUNTA_6: 0.25,
      PREGUNTA_7: 1,
      PREGUNTA_8: 1,
      PREGUNTA_9: 0.25,
      PREGUNTA_10: 1,
      PREGUNTA_11: 0.75,
      PREGUNTA_12: 0.25,
      PREGUNTA_13: 1,
      PREGUNTA_14: 1,
      PREGUNTA_15: 0.75,
      PREGUNTA_16: 1,
      PREGUNTA_17: 0.75,
      PREGUNTA_18: 1,
      PREGUNTA_19: 0.25,
      PREGUNTA_20: 1,
      PREGUNTA_21: 0.25,
      PREGUNTA_22: 0.6,
      PREGUNTA_23: 0.6,
      PREGUNTA_24: 0.25,
      PREGUNTA_25: 1,
      PREGUNTA_26: 1,
      PREGUNTA_27: 0.25,
      PREGUNTA_28: 1,
      PREGUNTA_29: 1,
    },
    {
      ID: 2,
      DATE: "23/03/204",
      DOCUMENTO: "37654899",
      NOMBRE: "MARINA FLORES",
      CORREO: "MARINA@PREMISE.COM",
      SCORE: 7.25,
      PREGUNTA_1: 0.25,
      PREGUNTA_2: 1,
      PREGUNTA_3: 0.75,
      PREGUNTA_4: 0.25,
      PREGUNTA_5: 0.25,
      PREGUNTA_6: 0.25,
      PREGUNTA_7: 1,
      PREGUNTA_8: 1,
      PREGUNTA_9: 0.25,
      PREGUNTA_10: 0.75,
      PREGUNTA_11: 0.75,
      PREGUNTA_12: 0.25,
      PREGUNTA_13: 1,
      PREGUNTA_14: 1,
      PREGUNTA_15: 0.75,
      PREGUNTA_16: 1,
      PREGUNTA_17: 0.75,
      PREGUNTA_18: 1,
      PREGUNTA_19: 0.25,
      PREGUNTA_20: 1,
      PREGUNTA_21: 0.25,
      PREGUNTA_22: 0.6,
      PREGUNTA_23: 0.6,
      PREGUNTA_24: 0.25,
      PREGUNTA_25: 1,
      PREGUNTA_26: 1,
      PREGUNTA_27: 0.25,
      PREGUNTA_28: 1,
      PREGUNTA_29: 1,
    },
    {
      ID: 1,
      DATE: "23/03/204",
      DOCUMENTO: "1098765432",
      NOMBRE: "PEPITO PEREZ",
      CORREO: "PEPITO@PREMISE.COM",
      SCORE: 7.25,
      PREGUNTA_1: 0.25,
      PREGUNTA_2: 1,
      PREGUNTA_3: 0.75,
      PREGUNTA_4: 1,
      PREGUNTA_5: 0.25,
      PREGUNTA_6: 0.25,
      PREGUNTA_7: 1,
      PREGUNTA_8: 1,
      PREGUNTA_9: 0.25,
      PREGUNTA_10: 1,
      PREGUNTA_11: 0.75,
      PREGUNTA_12: 0.25,
      PREGUNTA_13: 1,
      PREGUNTA_14: 1,
      PREGUNTA_15: 0.75,
      PREGUNTA_16: 1,
      PREGUNTA_17: 0.75,
      PREGUNTA_18: 1,
      PREGUNTA_19: 0.25,
      PREGUNTA_20: 1,
      PREGUNTA_21: 0.25,
      PREGUNTA_22: 0.6,
      PREGUNTA_23: 0.6,
      PREGUNTA_24: 0.25,
      PREGUNTA_25: 1,
      PREGUNTA_26: 1,
      PREGUNTA_27: 0.25,
      PREGUNTA_28: 1,
      PREGUNTA_29: 1,
    },
    {
      ID: 2,
      DATE: "23/03/204",
      DOCUMENTO: "37654899",
      NOMBRE: "MARINA FLORES",
      CORREO: "MARINA@PREMISE.COM",
      SCORE: 7.25,
      PREGUNTA_1: 0.25,
      PREGUNTA_2: 1,
      PREGUNTA_3: 0.75,
      PREGUNTA_4: 0.25,
      PREGUNTA_5: 0.25,
      PREGUNTA_6: 0.25,
      PREGUNTA_7: 1,
      PREGUNTA_8: 1,
      PREGUNTA_9: 0.25,
      PREGUNTA_10: 0.75,
      PREGUNTA_11: 0.75,
      PREGUNTA_12: 0.25,
      PREGUNTA_13: 1,
      PREGUNTA_14: 1,
      PREGUNTA_15: 0.75,
      PREGUNTA_16: 1,
      PREGUNTA_17: 0.75,
      PREGUNTA_18: 1,
      PREGUNTA_19: 0.25,
      PREGUNTA_20: 1,
      PREGUNTA_21: 0.25,
      PREGUNTA_22: 0.6,
      PREGUNTA_23: 0.6,
      PREGUNTA_24: 0.25,
      PREGUNTA_25: 1,
      PREGUNTA_26: 1,
      PREGUNTA_27: 0.25,
      PREGUNTA_28: 1,
      PREGUNTA_29: 1,
    },
    {
      ID: 1,
      DATE: "23/03/204",
      DOCUMENTO: "1098765432",
      NOMBRE: "PEPITO PEREZ",
      CORREO: "PEPITO@PREMISE.COM",
      SCORE: 7.25,
      PREGUNTA_1: 0.25,
      PREGUNTA_2: 1,
      PREGUNTA_3: 0.75,
      PREGUNTA_4: 1,
      PREGUNTA_5: 0.25,
      PREGUNTA_6: 0.25,
      PREGUNTA_7: 1,
      PREGUNTA_8: 1,
      PREGUNTA_9: 0.25,
      PREGUNTA_10: 1,
      PREGUNTA_11: 0.75,
      PREGUNTA_12: 0.25,
      PREGUNTA_13: 1,
      PREGUNTA_14: 1,
      PREGUNTA_15: 0.75,
      PREGUNTA_16: 1,
      PREGUNTA_17: 0.75,
      PREGUNTA_18: 1,
      PREGUNTA_19: 0.25,
      PREGUNTA_20: 1,
      PREGUNTA_21: 0.25,
      PREGUNTA_22: 0.6,
      PREGUNTA_23: 0.6,
      PREGUNTA_24: 0.25,
      PREGUNTA_25: 1,
      PREGUNTA_26: 1,
      PREGUNTA_27: 0.25,
      PREGUNTA_28: 1,
      PREGUNTA_29: 1,
    },
    {
      ID: 2,
      DATE: "23/03/204",
      DOCUMENTO: "37654899",
      NOMBRE: "MARINA FLORES",
      CORREO: "MARINA@PREMISE.COM",
      SCORE: 7.25,
      PREGUNTA_1: 0.25,
      PREGUNTA_2: 1,
      PREGUNTA_3: 0.75,
      PREGUNTA_4: 0.25,
      PREGUNTA_5: 0.25,
      PREGUNTA_6: 0.25,
      PREGUNTA_7: 1,
      PREGUNTA_8: 1,
      PREGUNTA_9: 0.25,
      PREGUNTA_10: 0.75,
      PREGUNTA_11: 0.75,
      PREGUNTA_12: 0.25,
      PREGUNTA_13: 1,
      PREGUNTA_14: 1,
      PREGUNTA_15: 0.75,
      PREGUNTA_16: 1,
      PREGUNTA_17: 0.75,
      PREGUNTA_18: 1,
      PREGUNTA_19: 0.25,
      PREGUNTA_20: 1,
      PREGUNTA_21: 0.25,
      PREGUNTA_22: 0.6,
      PREGUNTA_23: 0.6,
      PREGUNTA_24: 0.25,
      PREGUNTA_25: 1,
      PREGUNTA_26: 1,
      PREGUNTA_27: 0.25,
      PREGUNTA_28: 1,
      PREGUNTA_29: 1,
    },
    {
      ID: 1,
      DATE: "23/03/204",
      DOCUMENTO: "1098765432",
      NOMBRE: "PEPITO PEREZ",
      CORREO: "PEPITO@PREMISE.COM",
      SCORE: 7.25,
      PREGUNTA_1: 0.25,
      PREGUNTA_2: 1,
      PREGUNTA_3: 0.75,
      PREGUNTA_4: 1,
      PREGUNTA_5: 0.25,
      PREGUNTA_6: 0.25,
      PREGUNTA_7: 1,
      PREGUNTA_8: 1,
      PREGUNTA_9: 0.25,
      PREGUNTA_10: 1,
      PREGUNTA_11: 0.75,
      PREGUNTA_12: 0.25,
      PREGUNTA_13: 1,
      PREGUNTA_14: 1,
      PREGUNTA_15: 0.75,
      PREGUNTA_16: 1,
      PREGUNTA_17: 0.75,
      PREGUNTA_18: 1,
      PREGUNTA_19: 0.25,
      PREGUNTA_20: 1,
      PREGUNTA_21: 0.25,
      PREGUNTA_22: 0.6,
      PREGUNTA_23: 0.6,
      PREGUNTA_24: 0.25,
      PREGUNTA_25: 1,
      PREGUNTA_26: 1,
      PREGUNTA_27: 0.25,
      PREGUNTA_28: 1,
      PREGUNTA_29: 1,
    },
    {
      ID: 2,
      DATE: "23/03/204",
      DOCUMENTO: "37654899",
      NOMBRE: "MARINA FLORES",
      CORREO: "MARINA@PREMISE.COM",
      SCORE: 7.25,
      PREGUNTA_1: 0.25,
      PREGUNTA_2: 1,
      PREGUNTA_3: 0.75,
      PREGUNTA_4: 0.25,
      PREGUNTA_5: 0.25,
      PREGUNTA_6: 0.25,
      PREGUNTA_7: 1,
      PREGUNTA_8: 1,
      PREGUNTA_9: 0.25,
      PREGUNTA_10: 0.75,
      PREGUNTA_11: 0.75,
      PREGUNTA_12: 0.25,
      PREGUNTA_13: 1,
      PREGUNTA_14: 1,
      PREGUNTA_15: 0.75,
      PREGUNTA_16: 1,
      PREGUNTA_17: 0.75,
      PREGUNTA_18: 1,
      PREGUNTA_19: 0.25,
      PREGUNTA_20: 1,
      PREGUNTA_21: 0.25,
      PREGUNTA_22: 0.6,
      PREGUNTA_23: 0.6,
      PREGUNTA_24: 0.25,
      PREGUNTA_25: 1,
      PREGUNTA_26: 1,
      PREGUNTA_27: 0.25,
      PREGUNTA_28: 1,
      PREGUNTA_29: 1,
    },
    {
      ID: 1,
      DATE: "23/03/204",
      DOCUMENTO: "1098765432",
      NOMBRE: "PEPITO PEREZ",
      CORREO: "PEPITO@PREMISE.COM",
      SCORE: 7.25,
      PREGUNTA_1: 0.25,
      PREGUNTA_2: 1,
      PREGUNTA_3: 0.75,
      PREGUNTA_4: 1,
      PREGUNTA_5: 0.25,
      PREGUNTA_6: 0.25,
      PREGUNTA_7: 1,
      PREGUNTA_8: 1,
      PREGUNTA_9: 0.25,
      PREGUNTA_10: 1,
      PREGUNTA_11: 0.75,
      PREGUNTA_12: 0.25,
      PREGUNTA_13: 1,
      PREGUNTA_14: 1,
      PREGUNTA_15: 0.75,
      PREGUNTA_16: 1,
      PREGUNTA_17: 0.75,
      PREGUNTA_18: 1,
      PREGUNTA_19: 0.25,
      PREGUNTA_20: 1,
      PREGUNTA_21: 0.25,
      PREGUNTA_22: 0.6,
      PREGUNTA_23: 0.6,
      PREGUNTA_24: 0.25,
      PREGUNTA_25: 1,
      PREGUNTA_26: 1,
      PREGUNTA_27: 0.25,
      PREGUNTA_28: 1,
      PREGUNTA_29: 1,
    },
    {
      ID: 2,
      DATE: "23/03/204",
      DOCUMENTO: "37654899",
      NOMBRE: "MARINA FLORES",
      CORREO: "MARINA@PREMISE.COM",
      SCORE: 7.25,
      PREGUNTA_1: 0.25,
      PREGUNTA_2: 1,
      PREGUNTA_3: 0.75,
      PREGUNTA_4: 0.25,
      PREGUNTA_5: 0.25,
      PREGUNTA_6: 0.25,
      PREGUNTA_7: 1,
      PREGUNTA_8: 1,
      PREGUNTA_9: 0.25,
      PREGUNTA_10: 0.75,
      PREGUNTA_11: 0.75,
      PREGUNTA_12: 0.25,
      PREGUNTA_13: 1,
      PREGUNTA_14: 1,
      PREGUNTA_15: 0.75,
      PREGUNTA_16: 1,
      PREGUNTA_17: 0.75,
      PREGUNTA_18: 1,
      PREGUNTA_19: 0.25,
      PREGUNTA_20: 1,
      PREGUNTA_21: 0.25,
      PREGUNTA_22: 0.6,
      PREGUNTA_23: 0.6,
      PREGUNTA_24: 0.25,
      PREGUNTA_25: 1,
      PREGUNTA_26: 1,
      PREGUNTA_27: 0.25,
      PREGUNTA_28: 1,
      PREGUNTA_29: 1,
    },
  ];
  const customStyles = {
    headRow: {
      style: {
        minHeight: "3rem",
        borderBottomColor: "#ff5b4a",
        backgroundColor: "#ff5b4a",
      },
    },
    cells: {
      style: {
        "&:not(:last-of-type)": {
          borderRightStyle: "solid",
          borderRightWidth: "1px",
          borderRightColor: "#dbdbdb",
        },
      },
    },
    table: {
      scrollWidth: "10px",
    },
    headCells: {
      style: {
        color: "white",
        fontSize: "1.4rem",
      },
    },
    rows: {
      style: {
        minHeight: "2rem",
      },
      highlightOnHoverStyle: {
        backgroundColor: "rgb(230, 244, 244)",
        borderBottomColor: "#FFFFFF",
        borderRadius: "25px",
        outline: "1px solid #FFFFFF",
      },
    },
    pagination: {
      style: {
        color: "#7e38ff",
      },
    },
  };
  const paginationComponentOptions = {
    rowsPerPageText: "Filas por página",
    rangeSeparatorText: "de",
    selectAllRowsItem: true,
    selectAllRowsItemText: "Todos",
  };
  return (
    <section className="table-container">
      <header className="table-container__header">
        <nav className="table-container__navbar">
          {" "}
          <figure>
            <img src={imgLogoPremise} alt="" />
          </figure>
          <span>|</span>
          <p>Consutal de resultados</p>
        </nav>
        <ul className="link-back">
          <li>
            <IconHome />
            <Link to="/">Volver</Link>
          </li>
        </ul>
      </header>
      <div className="table-container__table">
        <DataTable
          columns={columns}
          data={data}
          pagination
          paginationPerPage={20}
          customStyles={customStyles}
          highlightOnHover
          paginationComponentOptions={paginationComponentOptions}
        >
          TableScores
        </DataTable>
      </div>
    </section>
  );
};
export default TableScores;
