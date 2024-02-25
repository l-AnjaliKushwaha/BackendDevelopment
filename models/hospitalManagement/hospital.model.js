import mongoose from "mongoose";

const hostpitalSchema = new mongoose.Schema({
            name: {
                        type: String,
                        required: true
            },
            addressLine1: {
                        type: String,

            },
            addressLine2: {
                        type: String,
            },
            city: {
                        type: String,
                        required: true,
            },
            pincode: {
                        type: String,
                        required: true
            },
            specializedIn: [
                        {
                                    type: String,
                        },
            ],
}, { timestamps: true })

export const Hospital = mongoose.model("Hospital", hostpitalSchema)