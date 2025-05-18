const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const userSchema = new Schema({
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    role: { type: String, default: 'user' },
    username: { type: String, required: true },
    phone: { type: String },
    googleId: { type: String },
    addresses: [{
        id: { type: String },
        fullName: { type: String },
        address: { type: String },
        phoneNumber: { type: String },
        county: { type: String },
        city: { type: String },
        state: { type: String },
        country: { type: String },
        isDefault: { type: Boolean }
    }],
    isActive: { type: Boolean, default: true },
    createdAt: { type: Date, default: Date.now },
    updatedAt: { type: Date, default: Date.now }
});

userSchema.index({ email: 1 });
userSchema.index({ username: 1 });

module.exports = mongoose.model('User', userSchema);
