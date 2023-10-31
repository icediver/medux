"use client";
import Checkbox from "../checkbox/Checkbox";
import Link from "next/link";
import Button from "../button/Button";
import { SubmitHandler, useForm } from "react-hook-form";
import { IEmailPassword } from "@/store/user/user.interface";
import { useState } from "react";
import Field from "../input/field/Field";
import { validEmail } from "@/helpers/valid-email.helpers";
import { useAuthRedirect } from "@/hooks/useAuthRedirect";
import { useActions } from "@/hooks/useActions";

interface ISignIn { }
export default function SignIn({ }: ISignIn) {
    useAuthRedirect();
    const { login, register } = useActions();
    const [type, setType] = useState<"login" | "register">("login");
    const {
        register: formRegister,
        handleSubmit,
        formState: { errors },
        reset,
    } = useForm<IEmailPassword>({
        mode: "onChange",
    });
    const onSubmit: SubmitHandler<IEmailPassword> = (data) => {
        if (type === "login") {
            login(data);
        } else {
            register(data);
        }
        reset();
    };
    return (
        <form onSubmit={handleSubmit(onSubmit)} className="mt-[219px]">
            <h1 className="text-1.5xl">Sign In</h1>
            <div className="flex flex-col w-[378px] justify-start items-start">
                <Field
                    {...formRegister("email", {
                        required: "Email is required",
                        pattern: {
                            value: validEmail,
                            message: "Please enter a valid email adress",
                        },
                    })}
                    placeholder="Enter Email Address"
                    error={errors.email?.message}
                />
                <Field
                    {...formRegister("password", {
                        required: "Password is required",
                        minLength: {
                            value: 6,
                            message: "Min length should more than 6 symbols!",
                        },
                    })}
                    type="password"
                    placeholder="Enter Password"
                    error={errors.password?.message}
                />

                <div className="flex justify-between w-full">
                    <Checkbox label="Remember me" />
                    <Link href="/" className="text-blue-800 text-sm">
                        Forgot password?
                    </Link>
                </div>
                <Button className="w-full my-10">
                    {type === "login" ? "Sign in" : "Sign up"}
                </Button>
            </div>
            <div className="mt-[200px]">
                {type === "login" ? (
                    <>
                        Don't have an acount?{" "}
                        <button
                            onClick={() => setType("register")}
                            className={"text-primary"}
                        >
                            Sign up
                        </button>
                    </>
                ) : (
                    <>
                        Already have an account?{" "}
                        <button className="text-primary" onClick={() => setType("login")}>
                            Sign in
                        </button>
                    </>
                )}
            </div>
        </form>
    );
}
