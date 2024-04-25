import React, { useEffect, useRef, useState } from "react";
import { MDBDatatable } from 'mdb-react-ui-kit';
import { Button, ButtonBase, Stack, Typography, styled } from "@mui/material";
import Dialog from '@mui/material/Dialog';

import useMediaQuery from '@mui/material/useMediaQuery';
import { useTheme } from '@mui/material/styles';

import axios from 'axios';

import IconButton from '@mui/material/IconButton';

import Carousal from "./Carousal";
import Contact from "./Contact";
import LiveClock from "./LiveClock";


const styles = {
  radioButton: {
    borderRadius: '50%', // Makes the radio button round
    width: '1.2em', // Adjust the size of the radio button
    height: '1.2em', // Adjust the size of the radio button
  },
};

const StyledDialog = styled(Dialog)({
  '& .MuiDialog-paper': {
    backgroundColor: '#333',
    color: 'white',
    minWidth: '300px',
    width: '50%',
  },
});

const StyledInput = styled('input')({
  backgroundColor: '#444',
  color: 'white',
  border: '1px solid white',
  padding: '8px',
  margin: '4px 0',
  width: '100%',
});

const StyledTextArea = styled('textarea')({
  backgroundColor: '#444',
  color: 'white',
  border: '1px solid white',
  padding: '8px',
  margin: '4px 0',
  width: '100%',
  minHeight: '100px',
});

const StyledButton = styled(Button)({
  backgroundColor: '#666',
  color: 'white',
  padding: '8px 16px',
  margin: '8px 0',
  '&:hover': {
    backgroundColor: '#888',
  },
});

const Home = () => {
  const url = ""
  const [open, setOpen] = React.useState(false);
  const theme = useTheme();
  const fullScreen = useMediaQuery(theme.breakpoints.down('md'));
  const ExpandMore = styled((props) => {
    const { expand, ...other } = props;
    return <IconButton {...other} />;
  })(({ theme, expand }) => ({
    transform: !expand ? 'rotate(0deg)' : 'rotate(180deg)',
    marginLeft: 'auto',
    transition: theme.transitions.create('transform', {
      duration: theme.transitions.duration.shortest,
    }),
  }));

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const images = [
    {
      url: 'todoLogo.avif',
      title: 'Add Appointment',
      width: '20%',
    }
  ];

  const ImageButton = styled(ButtonBase)(({ theme }) => ({
    position: 'relative',
    height: 200,
    [theme.breakpoints.down('sm')]: {
      width: '100% !important', // Overrides inline-style
      height: 100,
    },
    '&:hover, &.Mui-focusVisible': {
      zIndex: 1,
      '& .MuiImageBackdrop-root': {
        opacity: 0.15,
      },
      '& .MuiImageMarked-root': {
        opacity: 0,
      },
      '& .MuiTypography-root': {
        border: '4px solid currentColor',
      },
    },
  }));

  const ImageSrc = styled('span')({
    position: 'absolute',
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
    backgroundSize: 'cover',
    backgroundPosition: 'center 40%',
  });

  const Image = styled('span')(({ theme }) => ({
    position: 'absolute',
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    color: theme.palette.common.white,
  }));

  const ImageBackdrop = styled('span')(({ theme }) => ({
    position: 'absolute',
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
    backgroundColor: theme.palette.common.black,
    opacity: 0.4,
    transition: theme.transitions.create('opacity'),
  }));

  const ImageMarked = styled('span')(({ theme }) => ({
    height: 3,
    width: 18,
    backgroundColor: theme.palette.common.white,
    position: 'absolute',
    bottom: -2,
    left: 'calc(50% - 9px)',
    transition: theme.transitions.create('opacity'),
  }));

  const addTodo = () => {
    setOpen(true);
  }
  const [formData, setFormData] = useState({
    title: '',
    description: '',
    date: '',
    tag: '',
    important: false,
    completed: false,
  });


  const handleRadioClick = (name) => {
    setFormData({ ...formData, [name]: !formData[name] });
  };

  const handleClick = (name) => {
    if (formData[name]) {
      setFormData({ ...formData, [name]: false });
    } else {
      setFormData({ ...formData, [name]: true });
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleCheck = (e) => {
    const { name, checked } = e.target;
    setFormData({ ...formData, [name]: checked });
  };


  const [expanded, setExpanded] = React.useState(false);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };
  const [randomImage, setRandomImage] = useState('');

  useEffect(() => {
    const imageFilenames = [
      'randomimage1.avif',
      'randomimage2.avif',
      'randomimage3.avif',
      'randomimage4.avif',
      'randomimage5.avif',
      'randomimage6.avif',
    ];

    const randomIndex = Math.floor(Math.random() * imageFilenames.length);

    const imagePath = `${imageFilenames[randomIndex]}`;

    setRandomImage(imagePath);
  }, []);





  const videoRef = useRef(null);

  const playVideo = () => {
    if (videoRef.current.paused) {
      videoRef.current.play();
    } else {
      videoRef.current.pause();
    }
  };

  const canvasRef = useRef(null);


  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');

    let gradient = ctx.createLinearGradient(0, 0, 50, 0); // Create a linear gradient

    // Define gradient colors
    gradient.addColorStop(1, 'red');
    gradient.addColorStop(1, 'yellow');
    gradient.addColorStop(1, 'orange');
    // gradient.addColorStop(1, 'blue');

    ctx.beginPath();
    ctx.moveTo(0, 0); // Start coordinates
    ctx.lineTo(300, 0); // End coordinates
    ctx.strokeStyle = gradient; // Apply the gradient as stroke style
    ctx.lineWidth = 5; // Line width
    ctx.stroke();
  }, []);



  return (
    <>
      <LiveClock />
      <Carousal />

      <div className="content-container">
        <h1 style={{ marginTop: '10vh', color: 'white' }} className="content-heading">
          WHAT WE DO
        </h1>







        <div style={{ marginTop: '10vh', color: 'white' }} className="content-text">
          <p style={{ textAlign: "center", color: 'white' }} > It's really easy to register for a Mumbai Council Website account. We just need your name, your home address and email address. </p>
          <p style={{ textAlign: "center", marginLeft: '40px', color: 'white' }}>You can use your Council Website account to view your Sandwell council tax, benefits and business rates or housing balances, make payments,</p>
          <p style={{ textAlign: "center", marginLeft: '100px', color: 'white' }}>request services, report problems and track any enquiries you put in to the council.</p> <br />
          <p style={{ marginLeft: '150px', color: 'white' }}>And we always leave buildings in a better state than we found them.</p><br />
        </div>
      </div>

      <div className="video-background">
        <video autoPlay muted loop className="video">
          <source src="birmingham.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        <div className="text-overlay">
          <p>Avoid queue and pay the bills through online payment.</p>
        </div>
      </div>
      <h3 style={{ textAlign: 'center', color: 'white', marginTop: '50px ' }}>Life's greatest achievements often begin with the decision to improve ourselves.</h3>

      <div className="flex-row-container">
        <div className="flex-item">
          <h2>Cost of Living Support</h2>
          <p style={{ marginTop: '20px' }}>
            Are your worried about the rising cost of food, House rents, energy bills and transportation cost ?
          </p>
          <canvas
            ref={canvasRef}
            width={300} // Width of the canvas
            height={2} // Height of the canvas
            style={{
              border: '1px solid #ccc', // Border for the canvas
            }}
          ></canvas>
        </div>
        <div className="flex-item">
          <h2>Sustainable Solutions</h2>
          <p style={{ marginTop: '20px' }}>
            Mumbai communities are coming together to aid international appeals and efforts to help those fleeing wars.
          </p>
          <canvas
            ref={canvasRef}
            width={300} // Width of the canvas
            height={1} // Height of the canvas
            style={{
              border: '1px solid #ccc', // Border for the canvas
            }}
          ></canvas>
        </div>
        <div className="flex-item">
          <h3>Empowering Users</h3>
          <p style={{ marginTop: '20px' }}>
            Our innovative technologies, services and financing capability are helping consumers upgrade to smart  technology in the home, use less energy and make informed choices.
          </p>
          <canvas
            ref={canvasRef}
            width={300} // Width of the canvas
            height={1} // Height of the canvas
            style={{
              border: '1px solid #ccc', // Border for the canvas
            }}
          ></canvas>
        </div>
      </div>

      <div className="flex-row-container">
        <div className="flex-item">
          <p style={{ color: 'white' }}>Our Mission</p>
          <h2>Our mission is to lead the way in smarter, more sustainable energy</h2>
          <p style={{ marginTop: '20px' }}>
            We are committed to innovating, exploring and pushing the boundaries of what’s possible to deliver the infrastructure and technology that powers our world more sustainably</p>
          <canvas
            ref={canvasRef}
            width={300} // Width of the canvas
            height={1} // Height of the canvas
            style={{
              border: '1px solid #ccc', // Border for the canvas
            }}
          ></canvas>
        </div>
        <div className="flex-item">
          <img src="brum2.webp" alt='dd' style={{ width: '500px' }} />
          <canvas
            ref={canvasRef}
            width={300} // Width of the canvas
            height={1} // Height of the canvas
            style={{
              border: '1px solid #ccc', // Border for the canvas
            }}
          ></canvas>
        </div>
      </div>
      <div className="containerClass">

        <h3 style={{ marginTop: '50px', color: 'white', textAlign: "center" }}>Voted By 130+ Clients</h3>
        <img style={{ marginLeft: '100px' }} src='clients.PNG' alt='fff' />
      </div>
      <Contact />


      {/* <h1>hhhhhhhhhhhh</h1> */}
    </>
  );
};

export default Home;
