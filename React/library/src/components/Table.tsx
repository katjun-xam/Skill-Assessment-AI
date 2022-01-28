import React, { useState } from "react";
import styled, { css } from "styled-components";

import { ReactComponent as IconSort } from "./../assets/icons/icon-sort.svg";

const TableContainer = styled.table<{ width?: string; alignment?: string }>(
  (props) => css`
    border-spacing: 0;
    border-collapse: separate;
    ${props.width &&
    css`
      width: ${props.width};
    `}
    ${props.alignment &&
    css`
      th,
      td {
        text-align: ${props.alignment};
      }
    `}
  `
);
const TableHeader = styled.thead(
  (props) => css`
    font-size: 13px;
    background: ${props.theme.primary};
    color: ${props.theme.textWhite};
  `
);
const TableRow = styled.tr(
  (props) => css`
    border-bottom: 1px solid ${props.theme.borderColorLight};
    & *:not(:first-child) {
      padding-left: 20px;
      padding-right: 20px;
    }
    & th,
    td:first-child {
      padding-left: 10px;
      padding-right: 10px;
    }
    &:last-child {
      td {
        border-bottom: none;
      }
    }
  `
);
const TableHeaderCell = styled.th<{
  width?: string;
  alignment?: string;
  sortType?: string;
}>(
  (props) => css`
    border-bottom: 2px solid ${props.theme.borderColorLight};
    text-transform: uppercase;
    text-align: left;
    padding: 9px 0px;
    text-align: ${props.alignment};
    ${props.width &&
    css`
      width: ${props.width};
    `}
    span {
      svg {
        visibility: hidden;
      }
    }
    &:hover {
      svg {
        visibility: visible;
        fill: ${props.theme.textWhite};
      }
    }
    span {
      ${props.sortType === "asc" &&
      css`
        svg {
          transition: transform 0.3s;
          transform: rotate(180deg);
        }
      `}
      ${props.sortType === "desc" &&
      css`
        svg {
          transition: transform 0.5s;
          transform: rotate(0deg);
        }
      `}
    }
    svg {
      width: 12px;
      height: 12px;
      cursor: pointer;
      visibility: hidden;
      margin-left: 4px;
    }
  `
);
const TableBody = styled.tbody(
  (props) => css`
    background: ${props.theme.bgLight};
  `
);
const TableCell = styled.td<{
  width?: string;
  labelIndicator?: boolean;
  icon?: boolean;
  alignment?: string;
}>(
  (props) => css`
    padding: 10px 0;
    border-bottom: 1px solid ${props.theme.borderColorLight};
    color: ${props.theme.textExtraDark};
    width: ${props.width};
    text-align: ${props.alignment};
    ${props.icon &&
    css`
      text-align: right;
      svg {
        width: 12px;
        height: 12px;
        cursor: pointer;
        stroke: ${props.theme.primary};
      }
    `}
    ${props.labelIndicator &&
    css`
      font-weight: bold;
      font-size: 16px;
      color: ${props.theme.primary};
    `}
  `
);

interface ITableProps {
  tableData: ITableData[];
  typeOfData: any[];
  width?: string;
  columnWidth?: string[];
  headers?: string[];
  labels?: boolean;
  alignment?: string;
  sort?: boolean;
}
interface ITableData {
  [key: string]: any;
}
let sortValue: string;
let triggerValues: string[] = [];
let date: boolean;
let sortedData: ITableData[];

const Table = ({
  tableData,
  typeOfData,
  width,
  columnWidth,
  headers,
  labels,
  alignment,
  sort,
}: ITableProps) => {
  const [sortData, setSortData] = useState({
    asc: false,
    desc: false,
  });

  if (sort) {
    sortedData = tableData.sort(function (a, b) {
      let valA = a[sortValue];
      let valB = b[sortValue];
      let index = Object.keys(tableData[0]).findIndex(
        (key) => tableData[0][key] === sortValue
      );
      if (typeOfData) {
        if (typeOfData[index] === "date") {
          date = true;
        }
      }
      if (date) {
        if (new Date(valA) < new Date(valB)) {
          if ((!sortData.asc && !sortData.desc) || sortData.asc) {
            return -1;
          } else if (sortData.desc) {
            return 1;
          }
        }
        if (new Date(valA) > new Date(valB)) {
          if ((!sortData.asc && !sortData.desc) || sortData.asc) {
            return 1;
          } else if (sortData.desc) {
            return -1;
          }
        }
        return 0;
      } else {
        if (valA < valB) {
          if ((!sortData.asc && !sortData.desc) || sortData.asc) {
            return -1;
          } else if (sortData.desc) {
            return 1;
          }
        }
        if (valA > valB) {
          if ((!sortData.asc && !sortData.desc) || sortData.asc) {
            return 1;
          } else if (sortData.desc) {
            return -1;
          }
        }
        return 0;
      }
    });
  }

  const handleSort = (sortOnValue: string) => {
    if (headers) {
      sortValue = Object.keys(tableData[0])[headers.indexOf(sortOnValue)];
    } else {
      sortValue = sortOnValue;
    }
    triggerValues.push(sortValue);

    if (sortValue && !triggerValues[triggerValues.length - 2]) {
      setSortData({ ...sortData, asc: !sortData.asc });
    } else if (
      sortValue &&
      triggerValues[triggerValues.length - 1] ===
        triggerValues[triggerValues.length - 2]
    ) {
      setSortData({ ...sortData, asc: !sortData.asc, desc: !sortData.desc });
    } else if (
      sortValue &&
      triggerValues[triggerValues.length - 1] !==
        triggerValues[triggerValues.length - 2]
    ) {
      setSortData({ ...sortData, asc: true, desc: false });
    }
  };

  return (
    <div style={{ overflowX: "auto" }}>
      <TableContainer width={width} alignment={alignment}>
        {!labels && (
          <TableHeader>
            <TableRow>
              {(headers ? headers : Object.keys(tableData[0])).map(
                (item, index) => {
                  return (
                    <TableHeaderCell
                      width={columnWidth && columnWidth[index]}
                      sortType={
                        sortData.asc ? "asc" : sortData.desc ? "desc" : ""
                      }
                    >
                      {item}
                      <span onClick={() => handleSort(item)}>
                        {sort && <IconSort />}
                      </span>
                    </TableHeaderCell>
                  );
                }
              )}
            </TableRow>
          </TableHeader>
        )}
        <TableBody>
          {(sort ? sortedData : tableData).map((item, index) => {
            return (
              <TableRow key={index}>
                {labels
                  ? Object.values(item).map((data, index) => {
                      return (
                        <TableCell
                          labelIndicator={
                            Object.keys(item).find(
                              (key) => item[key] === data
                            ) === "label"
                              ? true
                              : false
                          }
                          icon={
                            Object.keys(item).find(
                              (key) => item[key] === data
                            ) === "icon"
                              ? true
                              : false
                          }
                          width={columnWidth && columnWidth[index]}
                        >
                          {data}
                        </TableCell>
                      );
                    })
                  : Object.values(item).map((data, index) => {
                      return (
                        <TableCell>
                          {typeOfData
                            ? typeOfData[index] === "date"
                              ? new Date(data).getDate().toString() +
                                "/" +
                                new Date(data).getMonth().toString() +
                                "/" +
                                new Date(data).getFullYear().toString()
                              : typeOfData[index] === "amount"
                              ? "$" + data
                              : data
                            : data}
                        </TableCell>
                      );
                    })}
              </TableRow>
            );
          })}
        </TableBody>
      </TableContainer>
    </div>
  );
};

export default Table;
