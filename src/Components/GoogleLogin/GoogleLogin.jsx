import React, { useState } from "react";
import useAuth from "../../Hooks/UseAuth";
import toast, { Toaster } from "react-hot-toast";

const GoogleLogin = () => {
    const { loginWithGoogle } = useAuth();
    const [error, setError] = useState();

    // Google Login
    const hangleGoogle = () => {
        loginWithGoogle()
            .then((result) => {
                const loggedUser = result.user;
                const { displayName, photoURL, email } = loggedUser;
                const savedUser = {
                    name: displayName,
                    photoURL,
                    email,
                    role: "buyer",
                };

                fetch("https://bornomala-boighor-server.vercel.app/users", {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json",
                    },
                    body: JSON.stringify(savedUser),
                });

                toast.success("Successfully Login!");
                setError("");
            })
            .catch((error) => {
                setError(error.message);
            });
    };
    return (
        <div>
            <div className="w-full flex justify-center">
                <span onClick={hangleGoogle}>
                    <img
                        className="w-10 p-[6px] border rounded-full hover:saturate-0 bg-slate-200 cursor-pointer"
                        src="https://i.ibb.co/HX7Z8g9/google-logo-png-suite-everything-you-need-know-about-google-newest-0-removebg-preview.png"
                        alt=""
                    />
                </span>
            </div>

            <Toaster></Toaster>
        </div>
    );
};

export default GoogleLogin;
