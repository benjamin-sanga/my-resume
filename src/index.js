import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import {PDFViewer, StyleSheet} from '@react-pdf/renderer'
import Template from './Template'

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
