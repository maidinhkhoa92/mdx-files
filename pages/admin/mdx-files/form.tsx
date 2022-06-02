import { useForm } from "react-hook-form";
import fs from "fs"
import path from "path"

import Button from "../../../components/button";

const Form = () => {
  const { control, handleSubmit, register } = useForm();

  const onSubmit = async () => {
    try {
    } catch (error) {

    }
  }

  return (
    <>
      <div className="bg-gray-800 pt-3">
        <div className="rounded-tl-3xl bg-gradient-to-r from-blue-900 to-gray-800 p-4 shadow text-2xl text-white">
          <h1 className="font-bold pl-2">Form</h1>
        </div>
      </div>
      <div className="w-full p-3">
        <form onSubmit={handleSubmit(onSubmit)}>
          <input defaultValue="test" {...register("example")} />
        </form>
      </div>
    </>
  )
}

export default Form
