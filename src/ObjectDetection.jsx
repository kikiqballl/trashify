// src/ObjectDetection.jsx
import React, { useRef, useState, useEffect } from "react";
import * as cocoSsd from "@tensorflow-models/coco-ssd";
import "@tensorflow/tfjs";
import WebcamComponent from "./WebcamComponent";
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import HomePage from "./Home Page"
<link
  rel="stylesheet"
  href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/css/bootstrap.min.css"
  integrity="sha384-QWTKZyjpPEjISv5WaRU9OFeRpok6YctnYmDr5pNlyT2bRjXh0JMhjY6hW+ALEwIH"
  crossorigin="anonymous"
/>


const ObjectDetection = () => {
  const videoRef = useRef(null);
  const [model, setModel] = useState(null);
  const [detectedObjects, setDetectedObjects] = useState([]);

  // Kategori organik dan anorganik
  const categories = {
    organik: ["apple", "banana", "orange", "leaf"],
    anorganik: ["bottle", "bag", "cup", "can", "plastic","cell phone"],
  };

  // Muat model COCO-SSD
  useEffect(() => {
    cocoSsd.load().then((loadedModel) => {
      setModel(loadedModel);
      console.log("Model COCO-SSD berhasil dimuat!");
    });
  }, []);

  // Deteksi objek
  const detectObjects = async () => {
    if (model && videoRef.current) {
      const predictions = await model.detect(videoRef.current.video);
      console.log("Prediksi:", predictions);
      const categorizedObjects = predictions.map((prediction) => {
        const label = prediction.class;
        const category = categories.organik.includes(label)
          ? "Organik"
          : categories.anorganik.includes(label)
          ? "Anorganik"
          : "Tidak Dikategorikan";
        return { label, category };
      });
      setDetectedObjects(categorizedObjects);
    }
  };



  return (
    <div
      style={{
        display: "block",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "row",
        minHeight: "50vh",
        textAlign: "center",
        padding: "20px",
      }}
    >
      <h1 style={{ marginBottom: "10px",  display: "flex",
      justifyContent: "center",
      alignItems: "center",
      flexDirection: "row",
      minHeight: "10vh",
      textAlign: "center",
      padding:"20px" }}>Posisikan Kamera anda ke objek!</h1>
      <WebcamComponent videoRef={videoRef} />
      <button
        onClick={detectObjects}
        style={{
          marginTop: "20px",
          padding: "10px 20px",
          fontSize: "16px",
          backgroundColor: "#4caf50",
          color: "white",
          border: "none",
          borderRadius: "5px",
          cursor: "pointer",
        }}
      >
        Scan
      </button>
      <div style={{ marginTop: "20px" }}>
        {detectedObjects.length > 0 ? (
          detectedObjects.map((obj, index) => (
            <p key={index}>
              Objek: {obj.label}, Kategori: {obj.category}
            </p>
          ))
        ) : (
          <p>Belum ada objek terdeteksi.</p>
        )}
      </div>
    </div>
  );
};

export default ObjectDetection;
