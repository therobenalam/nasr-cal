'use client';
import Head from 'next/head';
import React, { useState } from 'react';

export default function Home() {
  // State to store input data
  const [hightData, setHightData] = useState('');
  const [widthData, setWidthData] = useState('');
  const [resultTableData, setResultTableData] = useState([{ id: '', key: '', val: 0 }]);
  // State to toggle between input and result view
  const [showResult, setShowResult] = useState(false);

  // Handle input change
  const handleHightChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setHightData(e.target.value);
  };

  const handleWidthChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setWidthData(e.target.value);
  };

  // Handle form submit
  const handleSubmit = () => {
    setResultTableData([
      { id: '1', key: 'علو الحاجب', val: parseInt(hightData) + 5 },
      { id: '2', key: 'علو الدرفة', val: parseInt(hightData) - 5.8 },
      { id: '3', key: 'عرض السكة', val: parseInt(widthData) - 3.2 },
      { id: '4', key: 'عرض الدرفة', val: (parseInt(widthData) - 3.2) / 2 },
      { id: '5', key: 'علو اليو', val: parseInt(hightData) - 3.5 },
      { id: '6', key: 'علو المنخل', val: parseInt(hightData) - 4 },
      { id: '7', key: 'عرض المنخل', val: (parseInt(widthData) - 3.2) / 2 + 1.5 },
    ]);
    setShowResult(true);
  };

  // Handle reset
  const handleReset = () => {
    setHightData('');
    setWidthData('');
    setShowResult(false);
  };

  return (
    <>
    <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1, user-scalable=no, minimal-ui" />
        <meta name="apple-mobile-web-app-status-bar-style" content="black-translucent" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
    </Head>
    <div style={styles.container}>
      {!showResult ? (
        <>
          {/* Input Form */}
          <input
            style={styles.input}
            value={hightData}
            onChange={handleHightChange}
            placeholder="طول"
            type="number"
            inputMode="numeric"
            
          />
          <input
            style={styles.input}
            value={widthData}
            onChange={handleWidthChange}
            placeholder="عرض"
            type="number"
            inputMode="numeric"
          />
          <button style={styles.button} onClick={handleSubmit}>
            Submit
          </button>
        </>
      ) : (
        <>
          {/* Result Table */}
          <ul style={styles.table}>
            {resultTableData.map((item) => (
              <li key={item.id} style={styles.tableRow}>
                <span style={styles.tableCell}>{item.val}</span>
                <span style={styles.tableCell}>:{item.key}</span>
              </li>
            ))}
          </ul>
          <button style={styles.button} onClick={handleReset}>
            Reset
          </button>
        </>
      )}
    </div>

    </>
  );
}

const styles: { [key: string]: React.CSSProperties } = {
  container: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    padding: '20px',
    marginTop: '20%'
  },
  input: {
    height: '40px',
    color: 'black',
    borderColor: 'gray',
    borderWidth: '1px',
    width: '100%',
    marginBottom: '10px',
    paddingRight: '10px',
    fontSize: '16px',
    direction: 'rtl'
  },
  button: {
    padding: '10px 20px',
    fontSize: '16px',
    cursor: 'pointer',
    border: '1px solid grey',
    marginTop: '10px'
  },
  table: {
    listStyleType: 'none',
    padding: '0',
    width: '100%',
  },
  tableRow: {
    display: 'flex',
    justifyContent: 'space-between',
    padding: '10px 0',
    borderBottom: '1px solid #ccc',
  },
  tableCell: {
    fontSize: '16px',
  },
};