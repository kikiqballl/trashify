import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css"; // Tambahkan file CSS jika ada
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Navbar from 'react-bootstrap/Navbar';
import ThemeProvider from 'react-bootstrap/ThemeProvider'



const App = () => {
    const [modalShow, setModalShow] = React.useState(false);
    function MyVerticallyCenteredModal(props) {
        return (
          <Modal
            {...props}
            size="lg"
            aria-labelledby="contained-modal-title-vcenter"
            centered
          >
            <Modal.Header closeButton>
              <Modal.Title id="contained-modal-title-vcenter">
                Info Detail Trashify
              </Modal.Title>
            </Modal.Header>
            <Modal.Body>
              <p>
              Trashify, aplikasi berbasis AI yang dirancang untuk membantu Anda memilah sampah secara cerdas dan efisien. Dengan teknologi pengenalan gambar, aplikasi ini mampu membedakan antara sampah organik dan anorganik hanya dengan memindai gambar. Sampah organik seperti sisa makanan dan dedaunan dapat didaur ulang menjadi kompos, sementara sampah anorganik seperti plastik dan logam dapat dikelola dengan lebih baik untuk mendukung proses daur ulang.
              <br></br>
              <br></br>
              Misi kami adalah memberikan solusi teknologi yang ramah lingkungan untuk mengurangi pencemaran dan meningkatkan kesadaran masyarakat tentang pentingnya pengelolaan sampah yang benar. Dengan menggunakan Trashify, Anda tidak hanya memudahkan diri sendiri, tetapi juga berkontribusi pada pelestarian lingkungan untuk generasi mendatang.
              Mari mulai langkah kecil menuju dunia yang lebih bersih dan hijau. Pilah sampah Anda dengan lebih bijak menggunakan Trashify!
              </p>
            </Modal.Body>
            <Modal.Footer>
              <Button onClick={props.onHide} style={{stroke: "#00ade9", backgroundColor:"white", color:"black"}}>Close</Button>
            </Modal.Footer>
          </Modal>
        );
      }
  return (
    <div style={{ fontFamily: "Arial, sans-serif" }}>
      {/* Navbar */}
      <nav  className="navbar  navbar-expand-lg navbar-light bg-light shadow">
        <div className="container">
          <a className="navbar-brand" href="#">Trashify</a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav ms-auto">
              <li className="nav-item">
                <a className="nav-link" href="#home">Home</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#scan">Scan</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#benefits">Benefits</a>
              </li>
              <li className="nav-item">
                <a className="nav-link " href="#contact">Kontak</a>
              </li>
            </ul>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section
        id="home"
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          minHeight: "80vh",
          backgroundColor: "#333",
          borderRadius:"50px",
          color: "white",
          padding: "20px",
        }}
      >
        
        <h1 style={{fontSize: "50px" }}><b>Solusi Pintar untuk Klasifikasi Sampah</b></h1>
        <p style={{ maxWidth: "800px", fontSize:"18px"}}>
          Gunakan teknologi AI untuk membantu memilah sampah menjadi organik dan anorganik. Bersama, kita dapat menjaga lingkungan lebih bersih dan ramah lingkungan. Mulai sekarang, pilah sampah dengan mudah dan efisien.
        </p>
        <div>
       <a href="#scan">
          <button className="btn btn-primary m-2"  style={{width: "150px", height: "60px", fontSize: "17px", color:"black", backgroundColor: "white" } }>MULAI</button>
          </a>  
          <Button variant="primary" onClick={() => setModalShow(true)} className="btn btn-outline-light m-2" style={{width: "150px", height: "60px", fontSize: "17px", color:"white", backgroundColor: 'rgba(52, 52, 52, 0.8)'}}>
            Info Detail
            </Button>
            <MyVerticallyCenteredModal
        show={modalShow}
        onHide={() => setModalShow(false)}
      />
            
        </div>
      </section>

      {}
      <div
        style={{
          display: "grid",
          justifyContent: "center",
          padding: "-20px",
          gap: "40px",
        }}
      >
        <div
          className="gambar-sampah"
          style={{
          height:"500px"
          }}
        />
      <div
          className="gambar-mobil"
          style={{
          height:"600px"
          }}
        />
      
      </div>

      {/* Features Section */}
      <section id="scan" className="col-12" style={{ padding: "140px 5%", textAlign:"left", maxWidth:"6000px"}}>
        <h2 style={{  fontSize:"35px" }}><b>Pindai Sampah Anda dengan Mudah</b></h2>
        <p style={{  margin: "0 auto", textAlign:"left", fontSize:"22px" }}>
          Gunakan fitur pemindaian untuk mengidentifikasi jenis sampah Anda dalam hitungan detik. Unggah atau ambil foto sampah Anda, dan biarkan teknologi AI kami bekerja untuk menentukan apakah itu sampah organik atau anorganik. Dengan cara ini, Anda dapat membantu memilah sampah dengan benar dan mendukung pengelolaan limbah yang lebih baik.
          Fitur ini dirancang untuk memudahkan pengguna dalam mengenali jenis sampah mereka. Dengan menggunakan teknologi kecerdasan buatan (AI), aplikasi dapat secara cepat dan akurat mengidentifikasi apakah sampah tersebut termasuk kategori organik (misalnya, sisa makanan atau dedaunan) atau anorganik (seperti plastik atau logam).
          <br></br>
          <br></br>
          Pengguna hanya perlu mengambil foto sampah menggunakan kamera perangkat atau mengunggah gambar dari galeri. Dalam beberapa detik, hasil pemindaian akan muncul, lengkap dengan kategori sampah dan saran pengelolaan.
        </p>
        
        <button style={{width:"34vh", height:"6vh", fontSize:"20px"}} className="btn btn-dark mt-4 bi bi-camera" onClick={() => window.location.href = "https://deteksi-sampah.vercel.app/"}
        >Telusuri sampah Anda</button>
      </section>

      {/* Benefits Section */}
      <section id="benefits" style={{ backgroundColor: "#f8f9fa", padding: "180px 20px", textAlign:"left"}}>
        <div >
          <h2 className="text-le" style={{ padding: "40px 4%", textAlign:"left", fontWeight:"bold"}}>Manfaat Mengetahui Jenis Sampah Anda</h2>
          <div className="row mt-4">
            <div className="col-md-6" >
              <h5 style={{color:"green", fontSize:"27px", padding: "0px 8%", textAlign:"left"}}>Contoh Sampah Organik</h5>
              <p style={{padding: "0px 8%", fontSize:"21px"}}>
              Sampah organik adalah limbah yang berasal dari bahan-bahan alami yang dapat terurai secara hayati (biodegradable). Contohnya meliputi:
              <ul>
              <li>Sisa makanan (nasi, sayuran, buah-buahan)</li>
              <li>Daun-daunan</li>
              <li>Kulit buah atau sayur</li>
              </ul>
              Sampah ini biasanya diolah menjadi kompos, yang sangat bermanfaat untuk pertanian atau penghijauan. Pemilahan sampah organik membantu mengurangi volume limbah yang berakhir di tempat pembuangan akhir (TPA) dan mendukung siklus daur ulang alami.
              <br></br>
              <br></br>
              Manfaat Utama:
              <ul>
             <li>Dapat diolah menjadi pupuk kompos.</li>
             <li> Mengurangi pencemaran lingkungan akibat sampah yang menumpuk.</li>
              <li>Mendukung keberlanjutan ekosistem.</li>
              </ul>
              </p>
              <br></br>
            </div>
            <div className="col-md-6">
              <h5 style={{color:"red", fontSize:"27px", padding: "0px 8%"}}>Contoh Sampah Anorganik</h5>
              <p style={{padding: "0px 8%", fontSize:"21px"}}>
              Sampah anorganik adalah limbah yang berasal dari bahan-bahan non-hayati yang tidak dapat terurai secara alami atau membutuhkan waktu yang sangat lama untuk terurai. Contohnya adalah:
              <ul>
              <li>Plastik (kantong, botol)</li>
              <li>Kaca (pecahan kaca, botol kaca)</li>
              <li> Logam (kaleng, aluminium)</li>
              <li>Elektronik kecil (ponsel rusak, baterai)</li>
              </ul>
              Sampah ini memerlukan pengelolaan khusus seperti daur ulang atau proses pengolahan industri agar tidak mencemari lingkungan.
              <br></br>
              <br></br>
              Manfaat Utama:
              <br></br>
              Dapat didaur ulang menjadi produk baru.
              Mengurangi kebutuhan bahan baku baru yang merusak alam.
              Menekan dampak pencemaran tanah, air, dan udara.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" style={{ padding: "200px 4%", textAlign:"left"}}>
        <h2 style={{fontWeight:"bold"}}>Kontak Lebih Lanjut</h2>
        <p style={{  margin: "0 auto",  textAlign: "left", fontSize:"22px" }}>
          Kami selalu senang mendengar dari Anda! Jika Anda memiliki pertanyaan, saran, atau ingin bekerja sama dalam inisiatif pengelolaan sampah, jangan ragu untuk menghubungi kami.
        </p>
        <button style={{width:"34vh", height:"6vh", fontSize:"20px"}} className="btn btn-dark mt-3">Kontak Kami</button>
      </section>
    </div>
  );

  
  
};



export default App;
