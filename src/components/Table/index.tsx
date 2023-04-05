import {
  ScrollContainer,
  TableBody,
  TableCell,
  TableContainer,
  TableHeader,
  TableHeaderCell,
  TableRow,
} from './styles';
import { ITableProps } from './types';

const Table = ({
  tableData,
  typeOfData,
  width = '100%',
  columnWidth,
  headers,
  labels,
  alignment,
  background,
}: ITableProps) => {
  return (
    <ScrollContainer>
      <TableContainer width={width} alignment={alignment}>
        {!labels && (
          <TableHeader>
            <TableRow>
              {(headers ? headers : Object.keys(tableData[0])).map((item, index) => {
                return (
                  <TableHeaderCell key={index} width={columnWidth && columnWidth[index]}>
                    <div>
                      <span>{item.replace(/([A-Z])/g, ' $1').trim()}</span>
                    </div>
                  </TableHeaderCell>
                );
              })}
            </TableRow>
          </TableHeader>
        )}
        <TableBody bgColor={background}>
          {tableData.map((item, index) => {
            return (
              <TableRow key={index} withLabels={labels}>
                {labels
                  ? Object.values(item).map((data, index) => {
                      return (
                        <TableCell
                          key={index}
                          labelIndicator={
                            Object.keys(item).find((key) => item[key] === data) === 'label' ? true : false
                          }
                          icon={Object.keys(item).find((key) => item[key] === data) === 'icon' ? true : false}
                          width={columnWidth && columnWidth[index]}
                        >
                          {data}
                        </TableCell>
                      );
                    })
                  : Object.values(item).map((data, index) => {
                      return (
                        <TableCell key={index}>
                          {typeOfData
                            ? typeOfData[index] === 'date'
                              ? new Date(data).getDate().toString() +
                                '/' +
                                new Date(data).getMonth().toString() +
                                '/' +
                                new Date(data).getFullYear().toString()
                              : typeOfData[index] === 'amount'
                              ? '$' + data
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
    </ScrollContainer>
  );
};

export default Table;
