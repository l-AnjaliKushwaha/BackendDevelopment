import mongoose from "mongoose";

const userSchema = new mongoose.Schema(
            {
                        username: {
                                    type: String,
                                    required: true,
                                    unique: true,
                                    lowercase: true
                        },
                        email: {
                                    type: String,
                                    required: true,
                                    unique: true,
                                    lowercase: true
                        },
                        password: {
                                    type: String,
                                    required: true
                        }
            }, { timestamps: true }
);

export const User = mongoose.model("User", userSchema);

// data base main store hote time User Users ho jata h! important for interview

