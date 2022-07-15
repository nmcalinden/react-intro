import React from "react";
import { Stack, Link, TextField, Alert } from "@mui/material";
import { Controller, useForm } from "react-hook-form";
import { CustomizedButton as Button } from "../../components/Button";
import { login } from "../../provider/auth";

function LoginForm({ openRegister }) {
    const { handleSubmit, control } = useForm();
    const [loginError, setLoginError] = React.useState("");

    const handleLogin = (formData) => {
        console.log("Form Data", formData);
        const response = login(formData);
        if (response) {
            console.log("response data:", response.data);
            console.log("Send user to Home page");
        } else {
            setLoginError("Username and Password does not exist - Try Again");
        }
    };

    return (
        <>
            <div>
                <Controller
                    name="email"
                    control={control}
                    defaultValue=""
                    rules={{ required: "E-mail required" }}
                    render={({
                        field: { onChange, value },
                        fieldState: { error },
                    }) => (
                        <TextField
                            id="standard-email"
                            label="E-mail"
                            value={value}
                            onChange={onChange}
                            variant="standard"
                            error={!!error}
                            helperText={error ? error.message : null}
                        />
                    )}
                />
            </div>
            <br />
            <div>
                <Controller
                    name="password"
                    control={control}
                    defaultValue=""
                    rules={{ required: "Password required" }}
                    render={({
                        field: { onChange, value },
                        fieldState: { error },
                    }) => (
                        <TextField
                            id="outlined-name"
                            label="Password"
                            type="password"
                            value={value}
                            onChange={onChange}
                            variant="standard"
                            margin="dense"
                            error={!!error}
                            helperText={error ? error.message : null}
                        />
                    )}
                />
            </div>

            <Stack
                direction="row"
                spacing={4}
                justifyContent="center"
                sx={{ marginTop: 2 }}
            >
                {loginError && <Alert severity="error">{loginError}</Alert>}
            </Stack>

            <Stack
                direction="row"
                spacing={4}
                justifyContent="center"
                sx={{ marginTop: 2 }}
            >
                <Button
                    variant="contained"
                    color="success"
                    type="submit"
                    onClick={handleSubmit(handleLogin)}
                    theme={"primary"}
                >
                    Login
                </Button>
            </Stack>
            <Link
                component="button"
                variant="body2"
                onClick={openRegister}
                sx={{ marginTop: 5 }}
            >
                REGISTER HERE
            </Link>
        </>
    );
}

export { LoginForm };
