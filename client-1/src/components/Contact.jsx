
import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
// import { Leaf1, Leaf2 } from "../assets";
import { addDoc, collection } from 'firebase/firestore'
import { db } from '../config/firebase.config'
import Alert from "./Alert";
const Contact = () => {

    const [data, setData] = useState({
        firstName: "",
        lastName: "",
        email: "",
        message: ""
    })

    const [alert, setAlert] = useState({
        isAlert: "",
        message: "",
        status: null
    })
    const { firstName, lastName, email, message } = data;

    const handleTextChange = (e) => {
        const { name, value } = e.target;
        setData((prevData) => ({ ...prevData, [name]: value }))
    }


    const sendMessage = async () => {
        if (data.email === '' || data.email === null) {
            setAlert({
                isAlert: true,
                message: "Required fields cannot be empty ",
                status: "warning"
            })
            setInterval(() => {
                setAlert({
                    isAlert: false,
                    message: "",
                    status: null
                })
            }, 4000);
        }
        else {
            await addDoc(collection(db, "message"), { ...data })
                .then(() => {
                    setData({ firstName: '', lastName: '', email: '', message: '' })
                    setAlert({
                        isAlert: true,
                        message: "Thanks for Contacting me... ",
                        status: "success"
                    })
                    setInterval(() => {
                        setAlert({
                            isAlert: false,
                            message: "",
                            status: null
                        })
                    }, 4000);
                })
                .catch(err => {
                    setAlert({
                        isAlert: true,
                        message: `Error: ${err.message}`,
                        status: "danger"
                    })
                    setInterval(() => {
                        setAlert({
                            isAlert: false,
                            message: "",
                            status: null
                        })
                    }, 4000);
                })
        }
    }
    return (
        <section
            id="contact"
            className="flex items-center justify-center
flex-col gap-12 my-12"
        >

            {/* alert notification */}

            <AnimatePresence>
                {alert.isAlert && (
                    <Alert status={alert.isAlert} message={alert.message} />

                )}
            </AnimatePresence>
            {/* title */}
            <div className="w-full flex items-center justify-center py-24">

                <motion.div
                    initial={{ opacity: 0, width: 0 }}
                    animate={{ opacity: 1, width: 200 }}
                    exit={{ opacity: 0, width: 0 }}
                    transition={{ delay: 0.4 }}


                    className="flex items-center justify-center py-24">
                    {/* <img src={Leaf1} className="w-6 h-auto object-contain margin-left: 15%;" alt="" /> */}
                    <p style={{ marginTop: '100px', color: 'white' }}>Contact Me </p>
                    {/* <img src={Leaf2} className="w-6 h-auto object-contain margin-right: 15%" alt="" /> */}
                </motion.div>
            </div>


            <div className="w-full flex flex-col items-center justify-start gap-4">
                <div className="w-full lg:w-[600px] p-2 flex flex-col items-center justify-start gap-4">
                    <div className="w-full grid grid-cols-1 lg:grid-cols-2 gap-4">

                        <input
                            name="firstName"
                            value={firstName} onChange={handleTextChange}
                            type="text" placeholder="First Name " className="w-full
        px-4 py-3 rounded-md border border-[rgba(255,255,255,0.3)]
        bg-transparent focus:border-primary outline-none text-white"/>
                        <input value={lastName} onChange={handleTextChange}
                            name="lastName" type="text" placeholder="Last Name " className="w-full
        px-4 py-3 rounded-md border border-[rgba(255,255,255,0.3)]
        bg-transparent focus:border-primary outline-none  text-white"/>
                    </div>
                    <input value={email} onChange={handleTextChange} name="email" type="text" placeholder="Email" className="w-full
        px-4 py-3 rounded-md border border-[rgba(255,255,255,0.3)]
        bg-transparent focus:border-primary outline-none  text-white"/>
                    <textarea value={message} onChange={handleTextChange}
                        className="w-full
           px-4 py-3 rounded-md border border-[rgba(255,255,255,0.3)]
           bg-transparent focus:border-primary outline-none  text-white"
                        name="message" id="" cols="0" rows="10" placeholder="Message here..."></textarea>

                    <div className="w-full flex items-center justify-center lg:justify-end">

                        <button
                            style={{
                                width: '150px',
                                borderLeft: '10px solid transparent',
                                backgroundColor: 'orange',
                                borderRadius: '10px 0 0 10px', // Sets border radius for top-left and bottom-left corners
                                padding: '10px', // Adjust padding as needed
                                color: 'white',
                                outline: 'none', // Remove default button outline
                                border: 'none', // Remove default button border
                                cursor: 'pointer',
                            }}
                            onClick={sendMessage}
                        >
                            Send
                        </button>
                    </div>
                </div>
            </div>
        </section>
    )
};

export default Contact;
