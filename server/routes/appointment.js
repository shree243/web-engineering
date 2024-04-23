
import express from "express";
import Appointment from "../models/Appointments.js"

const router = express.Router();

router.get('/appointments', async (req, res) => {
    try {
        const appointments = await Appointment.find();
        res.json(appointments);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
});

router.get('/appointments/:id', async (req, res) => {
    try {
        const appointment = await Appointment.findById(req.params.id);
        if (!appointment) {
            return res.status(404).json({ message: 'Appointment not found' });
        }
        res.json(appointment);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
});

router.post('/appointments', async (req, res) => {
    const appointment = new Appointment(req.body);
    try {
        const newAppointment = await appointment.save();
        res.status(201).json(newAppointment);
    } catch (err) {
        res.status(400).json({ message: err.message });
    }
});

router.get('/appointments/user/:userId', async (req, res) => {
    try {
        const appointments = await Appointment.find({ userId: req.params.userId });
        if (!appointments || appointments.length === 0) {
            return res.status(404).json({ message: 'Appointments not found for this user' });
        }
        res.json(appointments);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
});


router.put('/editAppointments', async (req, res) => {
    try {
        const appointment = await Appointment.findById(req.body._id);
        if (!appointment) {
            return res.status(404).json({ message: 'Appointment not found' });
        }
        appointment.set(req.body);
        const updatedAppointment = await appointment.save();
        res.json(updatedAppointment);
    } catch (err) {
        res.status(400).json({ message: err.message });
    }
});

router.delete('/appointments/:id', async (req, res) => {
    try {
        const appointment = await Appointment.findById(req.params.id);
        if (!appointment) {
            return res.status(404).json({ message: 'Appointment not found' });
        }
        await appointment.remove();
        res.json({ message: 'Appointment deleted' });
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
});

export default router;