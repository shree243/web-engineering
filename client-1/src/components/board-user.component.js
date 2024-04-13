import React, { useEffect, useRef, useState } from "react";
import UserService from "../services/user.service";
import EventBus from "../common/EventBus";
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import { MDBDatatable } from 'mdb-react-ui-kit';
import { Alert, AlertTitle, Box, Button, ButtonBase, Stack, Typography, styled } from "@mui/material";
import Dialog from '@mui/material/Dialog';
import { FaBars, FaArrowUp, FaArrowDown } from 'react-icons/fa';
import Select from 'react-select';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowUp, faArrowDown } from '@fortawesome/free-solid-svg-icons';
import { alpha } from '@mui/material/styles';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TablePagination from '@mui/material/TablePagination';
import TableRow from '@mui/material/TableRow';
import TableSortLabel from '@mui/material/TableSortLabel';
import Toolbar from '@mui/material/Toolbar';
import Paper from '@mui/material/Paper';
import Checkbox from '@mui/material/Checkbox';
import IconButton from '@mui/material/IconButton';
import Tooltip from '@mui/material/Tooltip';
import FormControlLabel from '@mui/material/FormControlLabel';
import Switch from '@mui/material/Switch';
import DeleteIcon from '@mui/icons-material/Delete';
import FilterListIcon from '@mui/icons-material/FilterList';
import { visuallyHidden } from '@mui/utils';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import useMediaQuery from '@mui/material/useMediaQuery';
import { useTheme } from '@mui/material/styles';
import EditIcon from '@mui/icons-material/Edit';
import axios from 'axios';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Collapse from '@mui/material/Collapse';
import Avatar from '@mui/material/Avatar';
import { red } from '@mui/material/colors';
import FavoriteIcon from '@mui/icons-material/Favorite';
import ShareIcon from '@mui/icons-material/Share';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import RenderCard from "./renderCard";
import LiveClock from "./LiveClock";
import AnalogClock from "./AnalogClock";
import MyCalendar from "./MyCalendar";

const styles = {
  radioButton: {
    borderRadius: '50%', // Makes the radio button round
    width: '1.2em', // Adjust the size of the radio button
    height: '1.2em', // Adjust the size of the radio button
  },
};
const TabPanel = ({ value, index, children }) => {
  return value === index ? <div>{children}</div> : null;
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

const BoardUser = () => {
  const [value, setValue] = useState(0); // Initial tab value
  const [alert, setAlert] = useState(false);
  const [alertTodo, setAlertTodo] = useState(false);
  const handleChangetab = (event, newValue) => {
    setValue(newValue);
  };


  const options = [
    { value: 'date-asc', label: 'Date Ascending' },
    { value: 'date-desc', label: 'Date Descending' },
  ];
  const [selectedOption, setSelectedOption] = useState(null);

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
  const [dateImportant, setDateImportant] = useState([]);
  const [allUsersTodos, setAllUsersTodos] = useState([{}])
  const [sortedDataAscending, setSortedDataAscending] = useState([]);
  const [sortedDataDescending, setSortedDataDescending] = useState([]);
  const [alertDateAs, setAlertDateAs] = useState(false);
  const [alertDateDs, setAlertDateDs] = useState(false);
  const [allUsersImportantTodos, setAllUsersImportantTodos] = useState([{}])
  const [allUsersCompletedTodos, setAllUsersCompletedTodos] = useState([{}])
  const [formData, setFormData] = useState({
    title: '',
    description: '',
    date: '',
    tag: '',
    important: false,
    completed: false,
  });
  /**
   * The above code defines three functions in JavaScript for handling radio button clicks, button
   * clicks, and input changes.
   * @param name - The `name` parameter is a string that represents the name of the form field or radio
   * button that is being clicked or changed.
   */


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

  useEffect(() => {
    if (alert) {
      const timer = setTimeout(() => {
        setAlert(false);
      }, 3000);

      return () => clearTimeout(timer);
    }
  }, [alert]);

  useEffect(() => {
    if (dateImportant) {
      const timer = setTimeout(() => {
        setAlertTodo(false);
      }, 5000);

      return () => clearTimeout(timer);
    }
  }, [dateImportant]);

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

    const newData = {
      ...formData,
      userId: localStorage.getItem('id')
    }
    const getUrl = `http://localhost:8081/api/todo/saveTodo`;
    const userResponse = await axios.post(getUrl, newData);
    console.log(userResponse);
    if (userResponse) {
      setAlert(true);
    }
    setOpen(false);
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
    getAllTodos();
  }, []);

  const randomImageGenerator = () => {
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
    getAllTodos();
  }


  const getDatesTwoDaysPrior = (dates) => {
    const currentDate = new Date(); // Current date
    const twoDaysPrior = new Date(currentDate);
    twoDaysPrior.setDate(currentDate.getDate() + 2); // Set two days prior

    const datesTwoDaysPrior = dates.filter((date) => {
      const givenDate = new Date(date); // Given date from the array

      // Check if the given date is 2 days prior to the current date
      return givenDate.toDateString() === twoDaysPrior.toDateString();
    });

    return datesTwoDaysPrior;
  };
  const [dateValidation, setDateValidation] = useState(false)

  const dateFind = async () => {

    const userId = localStorage.getItem('id')
    const getUrl = `http://localhost:8081/api/todo/todos/${userId}`;
    const res = await axios.get(getUrl);
    const dates = res.data.map(item => item.date);
    const validations = getDatesTwoDaysPrior(dates);

    const dtt = res.data.filter(item => item.date === validations[0]);
    if (dtt.length > 0) {
      setDateImportant(prevDates => [...prevDates, ...dtt]);
    }
    setAlertTodo(true);

    return validations;
  }
  useEffect(() => {
    dateFind();
  }, [])

  const getAllTodos = async () => {
    const userId = localStorage.getItem('id')
    const getUrl = `http://localhost:8081/api/todo/todos/${userId}`;
    const res = await axios.get(getUrl);
    const completedTodos = res.data.filter(item => item.completed);
    const importantTodos = res.data.filter(item => item.important);
    const sortedAscending = [res.data].sort((a, b) => a.date.localeCompare(b.date));
    const sortedDescending = [res.data].sort((a, b) => b.date.localeCompare(a.date));

    const newDataAscending = res.data.map(item => ({
      ...item,
      date: new Date(item.date) // Convert the date string to a Date object
    }));

    const ascendingOrder = newDataAscending.slice().sort((a, b) => a.date - b.date);

    const descendingOrder = newDataAscending.slice().sort((a, b) => b.date - a.date);
    console.log('Ascending Order:', ascendingOrder);
    console.log('Descending Order:', descendingOrder);

    const newDataascendingOrder = ascendingOrder.map(item => ({
      ...item,
      date: item.date.toISOString().split('T')[0]
    }));

    const newDatadescendingOrder = descendingOrder.map(item => ({
      ...item,
      date: item.date.toISOString().split('T')[0]
    }));

    setSortedDataDescending(newDatadescendingOrder);
    setSortedDataAscending(newDataascendingOrder);
    setAllUsersTodos(res.data);
    setAllUsersCompletedTodos(completedTodos);
    setAllUsersImportantTodos(importantTodos);
  }


  const sortByDateAscending = () => {
    setAlertDateAs(true);

  };

  const sortByDateDescending = () => {
    setAlertDateDs(true);
  };

  const handleClickDelete = async (id) => {
    // const userId = localStorage.getItem('id')
    const url = `http://localhost:8081/api/todo/todos/delete/${id}`;
    const response = await axios.get(url);
    console.log(response);
  }
  const handleClickOpenEdit = async (id) => {
    const url = `http://localhost:8081/api/todo/getById/todos/${id}`;
    const res = await axios.get(url);
    console.log(res);
    setOpen(true);
  };
  const [content, setContent] = useState("");

  useEffect(() => {
    UserService.getUserBoard().then(
      (response) => {
        setContent(response.data);
      },
      (error) => {
        setContent(
          (error.response &&
            error.response.data &&
            error.response.data.message) ||
          error.message ||
          error.toString()
        );

        if (error.response && error.response.status === 401) {
          EventBus.dispatch("logout");
        }
      }
    );
  }, []);
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

  const downloadFile = () => {
    const jsonContent = JSON.stringify(allUsersTodos, null, 2); // JSON data with indentation for readability
    const blob = new Blob([jsonContent], { type: 'application/json' });
    const link = document.createElement('a');
    link.href = URL.createObjectURL(blob);
    link.download = 'Todo_data.json';
    link.click();
  };


  return (
    <>
      <button className="grey-button" onClick={downloadFile}>Download Appointment Report</button>
      <div style={{ marginTop: '5%', position: 'fixed', top: '20px', right: '20px', zIndex: 9999 }}>
        {(dateImportant && alertTodo) && (
          dateImportant.map((item, index) => (
            <div style={{ marginTop: '3%' }}>
              <Alert severity="warning">
                <AlertTitle><strong> Title-</strong>{item.title}</AlertTitle>
                Appointment is in 2 Days<strong> -- check it out!</strong>
              </Alert>
            </div>
          ))
        )}
      </div>
      <div style={{ position: 'fixed', top: '20px', right: '20px', zIndex: 9999 }}>
        {alert && (
          <Alert severity="success">
            <AlertTitle>Success</AlertTitle>
            Appointment has Been Created<strong>--check it out!</strong>
          </Alert>
        )}
      </div>

      <div className="flex-row-container">
        <div className="flex-item">
          <AnalogClock />
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

          <Box sx={{
            borderRadius: '10px',
            display: 'flex', flexWrap: 'wrap', minWidth: 300, width: '100%'
          }}>
            {images.map((image) => (
              <ImageButton
                onClick={addTodo}
                focusRipple

                key={image.title}
                style={{
                  width: '295px',
                  borderRadius: '100px'
                }}
              >
                <ImageSrc style={{ backgroundImage: `url(${image.url})` }} />
                <ImageBackdrop className="MuiImageBackdrop-root" />
                <Image>
                  <Typography
                    component="span"
                    variant="subtitle1"
                    color="inherit"
                    sx={{
                      position: 'relative',
                      p: 4,
                      pt: 2,
                      pb: (theme) => `calc(${theme.spacing(1)} + 6px)`,
                    }}
                  >
                    {image.title}
                    <ImageMarked className="MuiImageMarked-root" />
                  </Typography>
                </Image>
              </ImageButton>
            ))}
          </Box>
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
      <Box sx={{ width: '100%' }}>
        <Tabs
          value={value}
          onChange={handleChangetab}
          textColor="secondary"
          indicatorColor="secondary"
          aria-label="secondary tabs example"
        >
          <Tab value={0} label="All Appointment" style={{ color: 'white' }} />
          <Tab value={1} label="Important Appointment" style={{ color: 'white' }} />
          <Tab value={2} label="Completed Appointment" style={{ color: 'white' }} />
          <Tab
            value={3}
            label={
              <div style={{ marginRight: '17px' }}>
                Date <FontAwesomeIcon icon={faArrowDown} />
              </div>
            }
            style={{ color: 'white', marginLeft: 'auto' }}
          />

          <Tab
            value={4}
            label={
              <div style={{ marginRight: '15px' }}>
                Date <FontAwesomeIcon icon={faArrowUp} />
              </div>
            }
            style={{ color: 'white', marginLeft: 'auto' }}
          />
          {/* <Tab value={5} label="/Seecteds Tasks" style={{ color: 'white' }} /> */}

        </Tabs>
        <TabPanel value={value} index={0}>
          <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'space-around', padding: '20px' }}>
            {allUsersTodos.map((todo) => <RenderCard key={todo.id} todo={todo} />)}
          </div>
        </TabPanel>
        <TabPanel value={value} index={1}>
          <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'space-around', padding: '20px' }}>
            {allUsersImportantTodos.map((todo) => <RenderCard todo={todo} />)}
          </div>
        </TabPanel>
        <TabPanel value={value} index={2}>
          <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'space-around', padding: '20px' }}>
            {allUsersCompletedTodos.map((todo) => <RenderCard todo={todo} />)}
          </div>
        </TabPanel>
        <TabPanel value={value} index={3}>
          <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'space-around', padding: '20px' }}>
            {sortedDataDescending.map((todo) => <RenderCard todo={todo} />)}
          </div>
        </TabPanel>
        <TabPanel value={value} index={4}>
          <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'space-around', padding: '20px' }}>
            {sortedDataAscending.map((todo) => <RenderCard todo={todo} />)}
          </div>
        </TabPanel>
      </Box >

      <StyledDialog open={open} onClose={handleClose}>
        <DialogContent>
          <form onSubmit={handleSubmit}>
            <StyledInput
              type="text"
              name="title"
              placeholder="Title"
              value={formData.title}
              onChange={handleChange}
            />
            <StyledTextArea
              name="description"
              placeholder="Description"
              value={formData.description}
              onChange={handleChange}
            />
            <StyledInput
              type="date"
              name="date"
              value={formData.date}
              onChange={handleChange}
            />
            <StyledInput
              type="text"
              name="tag"
              placeholder="Tag"
              value={formData.tag}
              onChange={handleChange}
            />
            <Box sx={{ display: 'flex', flexDirection: 'column' }}>
              <label>
                <input
                  type="radio"
                  name="important"
                  checked={formData.important}
                  onChange={() => handleRadioClick('important')}
                  onClick={() => handleClick('important')}
                />
                Urgent Appointment
              </label>
              <br />
              <label>
                <input
                  type="radio"
                  name="completed"
                  checked={formData.completed}
                  onChange={() => handleRadioClick('completed')}
                  onClick={() => handleClick('completed')}
                />
                Mark as completed
              </label>
            </Box>

            <StyledButton type="submit">Save Todo</StyledButton>
          </form>
        </DialogContent>
      </StyledDialog>


      <div>

      </div>
    </>

  );
};

export default BoardUser;
