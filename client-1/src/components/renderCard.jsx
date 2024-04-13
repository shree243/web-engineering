import React, { useEffect, useState } from 'react'
import { Alert, AlertTitle, Avatar, Box, Button, Card, CardActions, CardContent, CardHeader, CardMedia, DialogContent, IconButton, Stack, Typography, styled, useMediaQuery, useTheme } from '@mui/material';
import { red } from '@mui/material/colors';
import axios from 'axios';
import EditIcon from '@mui/icons-material/Edit';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import DeleteIcon from '@mui/icons-material/Delete';
import Renderavatar from './renderavatar';
import Dialog from '@mui/material/Dialog';


const StyledDialog = styled(Dialog)({
    '& .MuiDialog-paper': {
        backgroundColor: '#333',
        color: 'white',
        minWidth: '300px',
        width: '50%',
        borderRadius: '15px'
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


const RenderCard = ({ todo }) => {

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

    const [allUsersTodos, setAllUsersTodos] = useState([{}])
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


    const [open, setOpen] = React.useState(false);
    const [randomImage, setRandomImage] = useState('');
    const [alert, setAlert] = useState(false);
    const [alertUp, setAlertUp] = useState(false);

    const handleClickDelete = async (id) => {
        const userId = localStorage.getItem('id')
        const url = `http://localhost:8081/api/todo/todos/delete/${id}`;
        const response = await axios.get(url);
        if (response.data.includes('has been deleted')) {
            setAlert(true);
        }
        console.log(response);
    }
    useEffect(() => {
        if (alert) {
            const timer = setTimeout(() => {
                setAlert(false);
            }, 3000);

            return () => clearTimeout(timer);
        }
    }, [alert]);
    useEffect(() => {
        if (alertUp) {
            const timer = setTimeout(() => {
                setAlert(false);
            }, 3000);

            return () => clearTimeout(timer);
        }
    }, [alertUp]);

    const handleClickOpenEdit = async (id) => {
        const url = `http://localhost:8081/api/todo/getById/todos/${id}`;
        const { data: res } = await axios.get(url);
        setFormData(res);
        console.log(res);
        setOpen(true);
    };

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

    const handleSubmit = async (e) => {
        e.preventDefault();

        // formData.append('userId', localStorage.getItem('id').toString())
        const newData = {
            ...formData,
            userId: localStorage.getItem('id')
        }

        const getUrl = `http://localhost:8081/api/todo/updateTodo`;
        const userResponse = await axios.post(getUrl, newData);
        console.log(userResponse);
        if (userResponse) {
            setAlertUp(true);
        }
        setOpen(false);
    };


    const handleClose = () => {
        setOpen(false);
    };


    return (
        <div>
            <div style={{ position: 'fixed', top: '20px', right: '20px', zIndex: 9999 }}>
                {
                    alertUp && (
                        <Alert severity="success">
                            <AlertTitle>Success</AlertTitle>
                            Todo has Been Updated<strong> Kindly Reload the page </strong>
                        </Alert>
                    )
                }
            </div>
            <div style={{ position: 'fixed', top: '20px', right: '20px', zIndex: 9999 }}>
                {alert && (
                    <Alert severity="success">
                        <AlertTitle>Success</AlertTitle>
                        Todo has Been Deleted<strong>--check it out!</strong>
                    </Alert>
                )}
            </div>

            <Card
                key={todo.id}
                sx={{ maxWidth: 345, borderRadius: '25px', height: '380px', width: '400px', margin: '10px', backgroundColor: 'grey' }}
            >{/* <Card sx={{ maxWidth: 345 }} style={{ width: '400px' }}> */}
                <CardHeader
                    avatar={
                        <Avatar sx={{ bgcolor: red[500] }} aria-label="recipe">
                            <Renderavatar />
                        </Avatar>
                    }
                    action={
                        <IconButton aria-label="settings">
                            <MoreVertIcon />
                        </IconButton>
                    }
                    title={todo.title}
                    subheader={todo.date}
                    style={{ color: 'white' }}
                />
                <CardMedia
                    component="img"
                    height="194"
                    image={randomImage}
                    alt="Paella dish"
                    style={{ height: '150px' }}
                />
                <CardContent>
                    <Typography variant="body2" color="white">
                        {todo.description}
                    </Typography>
                </CardContent>
                <CardActions disableSpacing>
                    <Stack direction="row" spacing={2}>
                        <Button
                            onClick={() => handleClickOpenEdit(todo.id)}
                            variant="outlined"
                            startIcon={<EditIcon sx={{ color: 'inherit' }} />}
                            sx={{
                                color: 'white', // Text color
                                backgroundColor: 'black', // Button color
                                borderColor: 'grey',
                                borderRadius: '10px',
                                '&:hover': {
                                    color: 'grey', // Text color on hover
                                    backgroundColor: 'darkgrey', // Button color on hover
                                    borderColor: 'darkgrey',
                                    '& svg': {
                                        color: 'grey', // Change icon color on hover
                                    },
                                },
                            }}
                        >
                            Edit
                        </Button>

                        <Button
                            onClick={() => handleClickDelete(todo.id)}
                            variant="outlined"
                            startIcon={<DeleteIcon sx={{ color: 'inherit' }} />}
                            sx={{
                                color: 'white', // Text color
                                backgroundColor: 'black', // Button color
                                borderColor: 'grey',
                                borderRadius: '10px',
                                '&:hover': {
                                    color: 'grey', // Text color on hover
                                    backgroundColor: 'darkgrey', // Button color on hover
                                    borderColor: 'darkgrey',
                                    '& svg': {
                                        color: 'grey', // Change icon color on hover
                                    },
                                },
                            }}
                        >
                            Delete
                        </Button>
                    </Stack>
                </CardActions>
                {/* </Card> */}
            </Card>


            <StyledDialog open={open} onClose={handleClose}>
                <h3 style={{ marginLeft: '2%', marginTop: '2%', textAlign: 'center' }}>Update the Todo</h3>
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
                                Mark as important
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
        </div>
    )
}

export default RenderCard
