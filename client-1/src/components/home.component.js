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
  const url = "http://localhost:8081/api"
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
      title: 'Add Todo',
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
  const [allUsersTodos, setAllUsersTodos] = useState([])
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

  const handleSubmit = async (e) => {
    e.preventDefault();

    // formData.append('userId', localStorage.getItem('id').toString())
    const newData = {
      ...formData,
      userId: localStorage.getItem('id')
    }
    // const newData = {
    //   userId: '123', // Sample user ID
    //   title: 'Sample Title',
    //   description: 'Sample Description',
    //   date: '2023-12-31', // Sample date format
    //   tag: 'Sample Tag',
    //   important: true,
    //   completed: false
    // };
    const getUrl = `http://localhost:8081/api/todo/saveTodo`;
    const userResponse = await axios.post(getUrl, newData);
    console.log(userResponse);
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
          <p style={{ textAlign: "center", color: 'white' }} >TodoList Eagle is a multi-award-winning Task Management and asset management business leveraging deep operational </p>
          <p style={{ textAlign: "center", marginLeft: '270px', color: 'white' }}>expertise to drive exceptional value.</p>
          <p style={{ textAlign: "center", marginLeft: '10px', color: 'white' }}>We approach our work with purpose and taste. We are a B Corp committed to a sustainable model.</p> <br />
          <p style={{ marginLeft: '150px', color: 'white' }}>And we always leave buildings in a better state than we found them.</p><br />
        </div>
      </div>

      {/* <h3 style={{ textAlign: 'center', color: 'white', marginTop: '50px ' }}>Kindly play this video to Check why should we use TodoList</h3> */}
      <div className="video-background">
        <video autoPlay muted loop className="video">
          <source src="video.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        <div className="text-overlay">
          <p>Avoid this lengthy descussion and meeting and start using TodoList</p>
        </div>
      </div>
      <h3 style={{ textAlign: 'center', color: 'white', marginTop: '50px ' }}>We're leading the smart Task Manager app Technology revolution</h3>

      <div className="flex-row-container">
        <div className="flex-item">
          <h2>Task Manager Projects Pioneers</h2>
          <p style={{ marginTop: '20px' }}>
            We lead the way in owning, financing and installing smart metering infrastructure assets right across the UK on behalf of energy suppliers.
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
            We are passionate about a sustainable energy ecosystem and using smart meters, EV charging and heat pumps solutions to reduce the nation’s carbon footprint.
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
          <img src="image1.jpg" alt='dd' style={{ width: '700px' }} />
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

        <h3 style={{ marginTop: '50px', color: 'white', textAlign: "center" }}>Trusted By 130+ Clients</h3>
        <img style={{ marginLeft: '100px' }} src='clients.PNG' alt='fff' />
      </div>
      <Contact />


      {/* <h1>hhhhhhhhhhhh</h1> */}
    </>
  );
};

export default Home;
