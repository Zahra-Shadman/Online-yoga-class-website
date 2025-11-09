'use client';

import axios from "axios";
import { useState } from "react";

export const Login: React.FC = () => {

    const [number, setNumber] = useState<string>("");

    const SmsSender = async (e: React.FormEvent) => {
        e.preventDefault();

        try {
            const response = await axios.post(
                "https://api.sms.ir/v1/send/verify",
                {
                    mobile: number,
                    templateId: "161685",
                    parameters: [
                        { name: "code", value: "15941" },
                    ],
                },
                {
                    headers: {
                        "Content-Type": "application/json",
                        Accept: "text/plain",
                        "x-api-key": "kEtgTFvyuqjwYCpJwWdDhZZbLWRB7DJMC86HGjtc2dltIJj7",
                    },
                }
            );

            console.log("SMS Sent:", response.data);

        } catch (error) {
            console.log("Error:", error);
        }
    };

    return (
        <div className="flex flex-col items-center justify-center h-screen">
            <form
                onSubmit={SmsSender}
                className="flex flex-col justify-center items-center p-4 bg-blue-50 h-[350px]  w-[350px] gap-10 rounded-lg shadow-lg"
            >
                <h1 className="p-2 font-bold text-2xl">Login page </h1>
                <label htmlFor="phone number">phone number</label>
                <input
                    className="text-black p-2 rounded w-full  border-2 border-gray-600"
                    type="text"
                    id="number"
                    name="number"
                    placeholder="number"
                    value={number}
                    onChange={(e) => setNumber(e.target.value)}
                />

                <button
                    className="bg-blue-700 hover:bg-blue-900 text-white font-bold p-2 rounded-xl w-full " type="submit">
                    send
                    </button>
            </form>

        </div>
    );
};