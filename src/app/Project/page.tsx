"use client";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { useForm, SubmitHandler } from "react-hook-form";

type Inputs = {
  password: string;
};

export default function LoginPage() {
  const router = useRouter();
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
    setError,
  } = useForm<Inputs>();
  const onSubmit: SubmitHandler<Inputs> = (data) => login(data);
  function login(data: Inputs) {
    if (data.password === process.env.NEXT_PUBLIC_PASSWORD_LOGIN) {
      router.push("Project/RegisterProject");
    } else {
      setError("password", { message: "Senha inválida", type: "validate" });
    }
  }
  return (
    <div className="flex flex-col w-screen h-screen justify-center items-center px-4 md:px-0">
      <form
        className="h-96 w-full md:w-1/3  bg-gray-200 flex flex-col items-center p-4 rounded-md justify-between"
        onSubmit={handleSubmit(onSubmit)}
      >
        <h1 className="text-xl font-bold text-center">ACESSO</h1>
        <div className="flex flex-col  w-full gap-4 items-center">
          <div className="w-full px-10">
            <p className="text-md font-extralight">Senha de acesso</p>
            <input
              {...register("password")}
              className="border-2 border-gray-600 w-full h-8 rounded-md pl-2 py-1"
              alt="Senha"
              required
            />
            <p>{errors.password?.message}</p>
          </div>
        </div>
        <input
          className="cursor-pointer border-2 border-gray-500 rounded-md px-4 py-1"
          type="submit"
          alt="Logar"
        />
      </form>
    </div>
  );
}
