import logo from './logo.svg';
import './App.css';
import React from 'react';
import { Alert } from 'reactstrap';
import background from './pict/dake.png';
import { useState } from 'react';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  NavbarText
} from 'reactstrap';

import { Jumbotron, Button } from 'reactstrap';
import pict from './pict/ende.jpg';
import gmbr from './pict/lake.jpg';
import gambar from './pict/rp.jpg';
import foto from './pict/tr.jpg';
import { Progress } from 'reactstrap';
import bb from './pict/bb.jpg'
import gm from './pict/gm.jpg'
import ks from './pict/ks.jpg'
import {
  Card, CardImg, CardText, CardBody,
  CardTitle, CardSubtitle
} from 'reactstrap';

function App() {

  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

  return (
    <div className="App">
      <header className="App-header">
      <img src={background} className="App-backgroundatas" alt="bg" />
      <div id="runningtext">
          <marquee >
         <font face="Party Story" size="20" color="black"> Let's explore and enjoy the amazing scenery in this small town.</font></marquee>
          </div>
      <div>
      <Navbar color="white" light expand="md">
        <NavbarBrand href="/"><button type="button" class="btn btn-outline-secondary">Home</button></NavbarBrand>
        <NavbarToggler onClick={toggle} />
        <Collapse isOpen={isOpen} navbar>
          <Nav className="mr-auto" navbar>
            <NavItem>
            <NavLink href="https://www.instagram.com/tasyasuwetty/"><button type="button" class="btn btn-outline-secondary">Instagram</button></NavLink>
           </NavItem>
          </Nav>
        </Collapse>
      </Navbar>
    </div>

    <div>
      <Jumbotron>
        <br></br>
        <h1 className="display-3"><font face="Veni" size="60" color="black">Hello Traveller!</font></h1>
        <p className="lead"><font face="Times New Roman" size="6" color="black">Endenesia adalah sebuah website rekomendasi destinasi wisata yang unik, indah, dan nyaman yang berada di kota Ende. </font></p>
        <p className="lead"><font face= "Luna" size="3" color="black">-Traveling it leaves you speechless then turns you into a storyteller- </font></p>
        <p className="lead">
        <a href="#pengertian"><Button color="primary">Learn More </Button>
         </a>
        </p>
      </Jumbotron>
    </div>
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#ffffff" fill-opacity="1" d="M0,192L48,213.3C96,235,192,277,288,277.3C384,277,480,235,576,192C672,149,768,107,864,128C960,149,1056,235,1152,250.7C1248,267,1344,213,1392,186.7L1440,160L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"></path></svg>
    <div className="pengertian" id="pengertian">
      <Alert color="light">
      <h2><font face="Caramel Sweets" size="6">- - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - </font></h2>
        <h2><font face="Lobster Bisque" size="15">Kota Ende</font></h2>
        <img className="gambarpengertian" src={pict} className="database" alt="logo" align="left"  width="300" />
        <p className="lead"><ul><font face="Times New Roman" size="5" color="grey">Kota Ende adalah ibu kota Kabupaten Ende, Provinsi Nusa Tenggara Timur, Indonesia. Kota ini terletak di pesisir selatan Pulau Flores. Dengan populasi 93.894 jiwa yang menjadi kota terpadat di pulau flores dan yang ke dua terpadat di provinsi NTT setelah Kota Kupang, ibu Kota provinsi. Luas Kota Ende ± 96,65 m².</font></ul></p>
      <br></br>
      <br></br>
      <br></br>
      <h2><font face="Caramel Sweets" size="6">- - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - </font></h2>
      </Alert>
      </div>
      <br></br>
      <h2><font face="Caramel Sweets" size="6">- - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - </font></h2>
      <h2><font face="Lobster Bisque" size="15">Destinasi Wisata</font></h2>
      <div className="promosi">
      <Card>
        <CardImg top width="100%" src={gmbr} alt="Card image cap" />
        <CardBody><font color="black">
          <CardTitle tag="h5"><b><font face="Times new Roman" size="5"> Danau Kelimutu </font></b></CardTitle>
          <CardSubtitle tag="h6" className="mb-2 text-muted"><font face="Times New Roman">Desa Pemo, Kecamatan Kelimutu</font></CardSubtitle>
          <CardText><ul><font face = "Times New Roman" size="4">Danau ini berada di bawah kaki gunung kelimutu. Termasuk dalam keajaiban alam karena masing-masing danau memiliki warna yang berbeda dan dapat berubah sewaktu-waktu. Selain itu, masyarakat setempat mempercayai bahwa tiap danau memiliki kekuatan mistis.</font></ul></CardText>
          </font>
        </CardBody>
      </Card>
    </div>
    <br></br>
    <br></br>
      <div className="promosi">
      <Card>
        <CardImg top width="100%" src={gambar} alt="Card image cap" />
        <CardBody><font color="black">
          <CardTitle tag="h5"><b><font face="Times new Roman" size="5"> Situs Pengasingan Bung Karno </font></b></CardTitle>
          <CardSubtitle tag="h6" className="mb-2 text-muted"><font face="Times New Roman">Jl. Perwira, Kecamatan Ende Utara</font></CardSubtitle>
          <CardText><ul><font face = "Times New Roman" size="4">Merupakan rumah tempat tinggal Presiden Pertama Indonesia yaitu Soekarno ketika beliau diasingkan ke Ende. Berisi berbagai macam barang-barang bersejarah milik Bung Karno.</font></ul></CardText>
          </font>
        </CardBody>
      </Card>
    </div>
    <br></br>
      <div className="promosi">
      <Card>
        <CardImg top width="100%" src={foto} alt="Card image cap" />
        <CardBody><font color="black">
        <CardTitle tag="h5"><b><font face="Times new Roman" size="5"> Taman Renungan Bung Karno </font></b></CardTitle>
          <CardSubtitle tag="h6" className="mb-2 text-muted"><font face="Times New Roman">Jl. Soekarno, Kecamatan Ende Utara</font></CardSubtitle>
          <CardText><ul><font face = "Times New Roman" size="4">Merupakan tempat bersejarah bagi bangsa Indonesia karena dasar negara yaitu Pancasila dirumuskan oleh Bung Karno di taman ini.</font></ul></CardText>
          </font>
        </CardBody>
      </Card>
    </div>
    <h2><font face="Lobster Bisque" size="15">Destinasi Wisata lainnya</font></h2>
    <div class="row mb 3">
      <div class="col-md-5 p-2 py-3">
        <img src={bb} className="bb" alt="bb" width="250" />
        <p tag="h5"><b><font face="Times new Roman" size="5"> Pantai Batu Biru</font></b></p>
        <p tag="h6" className="mb-2 text-muted"><font face="Times New Roman" color ="white" size="3">Penggajawa, Nangapanda, Kabupaten Ende</font></p>
        <ul><font face ="Times New Roman" size="4"> Pantai pasir hitam yang diselimuti bebatuan yang berwarna biru.</font></ul>
      </div>
      <div class="col-md-3 p-1 py-3">
        <img src={gm} className="App-gm" alt="gm"  width="290" />
        <p tag="h5"><b><font face="Times new Roman" size="5"> Gunung Meja</font></b></p>
        <p tag="h6" className="mb-2 text-muted"><font face="Times New Roman" color ="white" size="3">Jl. Ikan Duyung, Kecamatan Ende Selatan</font></p>
        <ul><font face ="Times New Roman" size="4"> Gunung yang memiliki puncak yang rata. Konon, terdapat cerita mengenai bagaimana puncak tersebut bisa rata yang beredar di masyarakat setempat.</font></ul>
      </div>
      <div class="col-md-4 p-4 py-3">
        <img src={ks} className="App-ks" alt="ks" width="260" />
        <p tag="h5"><b><font face="Times new Roman" size="5"> Kampung Adat Saga</font></b></p>
        <p tag="h6" className="mb-2 text-muted"><font face="Times New Roman" color ="white" size="3">Saga, Detusoko, Kabupaten Ende</font></p>
        <ul><font face ="Times New Roman" size="4"> Merupakan perkampungan adat yang masih bertahan dan lestari sampai saat ini.</font></ul>
      </div>
  </div>
  <div><h2><font face="Caramel Sweets" size="6">- - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - </font></h2></div>
     <br></br>
     <div className="pengertian">
      <Alert color="light">
        <h2><font face="Caramel Sweets" size="6">- - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - </font></h2>
        <h2><font face="Lobster Bisque" size="15">Destinasi Wisata yang paling banyak dikunjungi</font></h2>
      </Alert>
      </div>
    <div>
      <Alert color = "white">
      <div className="Danau Kelimutu"><font face= "Times New Roman">Danau Kelimutu 40%</font></div>
      <Progress value="40" />
      <div className="Situs Pengasingan Bung Karno"><font face= "Times New Roman">Situs Pengasingan Bung Karno 25%</font></div>
      <Progress value={25} />
      <div className="Taman Renungan Bung Karno"><font face= "Times New Roman">Taman Renungan Bung Karno 25%</font></div>
      <Progress value={25} />
      <div className="Destinasi Wisata lainnya"><font face= "Times New Roman">Destinasi Wisata lainnya 15%</font></div>
      <Progress value={10} />
      <div className="text-center"></div>
      </Alert>
      <Alert color = "light">
      <h2><font face="Caramel Sweets" size="6">- - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - </font></h2>
      </Alert>
    </div>
    <div>
    <br></br>
    <br></br>
    <h2><font face="Heavy Rain" size="30" color="black">Endenesia</font></h2>
    <br></br>
    <br></br>
    </div>
      </header>
      
    </div>
  );
}

export default App;
