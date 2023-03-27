import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
// import App from './App';
import {PDFViewer, StyleSheet} from '@react-pdf/renderer'
import Template from './Template'
import reportWebVitals from './reportWebVitals';

const styles = StyleSheet.create({
  viewer: {
    width: '100%',
    height: '100vh',
    margin: 0,
    padding: 0
  }
})

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <PDFViewer style={styles.viewer}>
    <Template/>
  </PDFViewer>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
