"use client";
import { authClient } from "@/lib/auth-client";
import { Check } from "@gravity-ui/icons";
import { Button, Description, FieldError, Form, Input, Label, TextField } from "@heroui/react";
import { Radio, RadioGroup } from "@heroui/react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { BiError } from "react-icons/bi";
import { FaEye } from "react-icons/fa";
import { FaEyeSlash } from "react-icons/fa6";
import { toast } from "react-toastify";

const SignupPage = () => {

  const [visibel, setVisible] = useState(false)
  const [error, setError] = useState("");
  const router = useRouter();

  const handleForm = async (e) => {
    e.preventDefault();

    setError("");

    const formData = new FormData(e.currentTarget);
    const data = Object.fromEntries(formData.entries());
    // console.log(data,'my data');

    try {
      const result = await authClient.signUp.email({
        name: data.name,
        email: data.email,
        password: data.password,
        role:data.role,
      });

      if (result.error) {
        setError(result.error.message);
        return;
      }
      toast.success("Account created successfully!");

      setTimeout(() => {
        router.push("/");
      }, 500);


    } catch (err) {
      setError(err.message || "Something went wrong");
    }
  };

  return (
    <div className="max-w-8xl mx-auto min-h-[70vh] py-10 ">

      <Form className="flex w-96 flex-col gap-4 bg-[#534c4c5f] py-10 px-5 rounded-2xl" onSubmit={handleForm} >
        <TextField isRequired name="name" type="text" validate={(value) => {
          if (/\d/.test(value)) {
            return "name can't be a number"
          }
        }}>
          <Label>Name</Label>
          <Input placeholder="Enter your valid name" />
          <FieldError />
        </TextField>

        <TextField isRequired name="email" type="email" validate={(value) => {
          if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(value)) {
            return "Please enter a valid email address";
          }
          return null;
        }}
        >
          <Label>Email</Label>
          <Input placeholder="john@example.com" />
          <FieldError />
        </TextField>
        <TextField
          isRequired
          minLength={8}
          name="password"
          type={visibel ? "text" : "password"}
          validate={(value) => {
            if (value.length < 8) {
              return "Password must be at least 8 characters";
            }
            if (!/[A-Z]/.test(value)) {
              return "Password must contain at least one uppercase letter";
            }
            if (!/[0-9]/.test(value)) {
              return "Password must contain at least one number";
            }
            return null;
          }}
        >
          <Label>Password</Label>

          <div className="relative w-full">
            <Input
              className="w-full"
              placeholder="Enter your password"
            />

            <button
              type="button"
              onClick={() => setVisible(!visibel)}
              className="absolute right-3 top-1/2 -translate-y-1/2 z-10"
            >
              {visibel ? <FaEye /> : <FaEyeSlash />}
            </button>
          </div>

          <Description>
            Must be at least 8 characters with 1 uppercase and 1 number
          </Description>

          <FieldError />
        </TextField>

        {/* role selection */}
        <div className="flex flex-col gap-4">
          <Label>What is youre role ?</Label>
          <RadioGroup defaultValue="seeker" name="role" orientation="horizontal" isRequired>
            <Radio value="seeker">
              <Radio.Control>
                <Radio.Indicator />
              </Radio.Control>
              <Radio.Content>
                <Label>Seeker</Label>
              </Radio.Content>
            </Radio>

            <Radio value="recruiter">
              <Radio.Control>
                <Radio.Indicator />
              </Radio.Control>
              <Radio.Content>
                <Label>Recruiter</Label>
              </Radio.Content>
            </Radio>

          </RadioGroup>
        </div>

        <div className="flex flex-col gap-2">
          <Button type="submit" className="w-full">
            <Check />
            Submit
          </Button>
          <Button type="reset" variant="secondary" className="w-full">
            Reset
          </Button>

        </div>
        <Link href='/auth/login' className="flex gap-0 items-center">
          <h1>Already have an account?</h1>
          <Button className="bg-transparent text-[#1d99f8] underline">Login</Button>
        </Link>
        {error && (
          <p className="text-red-500 text-sm font-medium flex items-center gap-1">
            <BiError className="text-xl" />{error}
          </p>
        )}
      </Form>

    </div>
  );
};

export default SignupPage;