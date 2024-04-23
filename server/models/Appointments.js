import mongoose from 'mongoose';

const appointmentSchema = new mongoose.Schema({
    userId: { type: String, required: true },
    title: { type: String, required: true },
    description: { type: String, required: true },
    tag: { type: String, required: true },
    completed: { type: Boolean, required: true },
    important: { type: Boolean, required: true },
    date: { type: Date, required: true },
});

const Appointment = mongoose.model('Appointment', appointmentSchema);

export default Appointment;
