import React from "react";
import { Button, Dialog, DialogPanel, DialogTitle } from "@headlessui/react";
import { useForm } from "react-hook-form";
import { useState } from "react";

export const ContactForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();

  let [isOpen, setIsOpen] = useState(false);

  const onSubmit = (data) => {
    console.log("Form Submitted: ", data);

    reset();
    setIsOpen(true);
  };

  function close() {
    setIsOpen(false);
  }
  return (
    <>
      <form
        onSubmit={handleSubmit(onSubmit)}
        noValidate
        className="max-w-lg mx-auto p-6 bg-white rounded-lg shadow-md"
      >
        {/* Name Field */}
        <div className="mb-4">
          <label
            htmlFor="name"
            className="block text-sm font-medium text-gray-700"
          >
            Name
          </label>
          <input
            id="name"
            className={`mt-1 block w-full px-3 py-2 border rounded-md shadow-sm focus:outline-none 
        ${
          errors.name ? "border-red-500" : "border-gray-300"
        } focus:ring focus:ring-indigo-200`}
            {...register("name", {
              required: "Name is required",
              minLength: {
                value: 2,
                message: "Name must be at least 2 characters",
              },
            })}
          />
          {errors.name && (
            <p className="mt-1 text-sm text-red-500">{errors.name.message}</p>
          )}
        </div>

        {/* Age Field */}
        <div className="mb-4">
          <label
            htmlFor="age"
            className="block text-sm font-medium text-gray-700"
          >
            Age
          </label>
          <input
            type="number"
            id="age"
            className={`mt-1 block w-full px-3 py-2 border rounded-md shadow-sm focus:outline-none 
        ${
          errors.age ? "border-red-500" : "border-gray-300"
        } focus:ring focus:ring-indigo-200`}
            {...register("age", {
              required: "Age is required",
              min: {
                value: 20,
                message: "You must be at least 20 years old",
              },
              max: {
                value: 30,
                message: "Age cannot exceed 30",
              },
            })}
          />
          {errors.age && (
            <p className="mt-1 text-sm text-red-500">{errors.age.message}</p>
          )}
        </div>

        {/* Date of Birth Field */}
        <div className="mb-4">
          <label
            htmlFor="dob"
            className="block text-sm font-medium text-gray-700"
          >
            Date of Birth
          </label>
          <input
            type="date"
            id="dob"
            className={`mt-1 block w-full px-3 py-2 border rounded-md shadow-sm focus:outline-none 
        ${
          errors.dob ? "border-red-500" : "border-gray-300"
        } focus:ring focus:ring-indigo-200`}
            {...register("dob", { required: "Date of birth is required" })}
          />
          {errors.dob && (
            <p className="mt-1 text-sm text-red-500">{errors.dob.message}</p>
          )}
        </div>

        {/* Gender Field */}
        <div className="mb-4">
          <label
            htmlFor="gender"
            className="block text-sm font-medium text-gray-700"
          >
            Gender
          </label>
          <select
            id="gender"
            className={`mt-1 block w-full px-3 py-2 border rounded-md shadow-sm focus:outline-none 
        ${
          errors.gender ? "border-red-500" : "border-gray-300"
        } focus:ring focus:ring-indigo-200`}
            {...register("gender", { required: "Gender is required" })}
          >
            <option value="">Select gender</option>
            <option value="male">Male</option>
            <option value="female">Female</option>
            <option value="other">Other</option>
          </select>
          {errors.gender && (
            <p className="mt-1 text-sm text-red-500">{errors.gender.message}</p>
          )}
        </div>

        <button
          type="submit"
          className="w-full bg-indigo-600 text-white py-2 px-4 rounded-md shadow hover:bg-indigo-700 focus:outline-none focus:ring focus:ring-indigo-200"
        >
          Submit
        </button>
      </form>

      <Dialog
        open={isOpen}
        as="div"
        className="relative z-10 focus:outline-none"
        onClose={close}
      >
        <div className="fixed inset-0 z-10 w-screen overflow-y-auto">
          <div className="flex min-h-full items-center justify-center p-4">
            <DialogPanel
              transition
              className="w-full max-w-md rounded-xl bg-white/5 p-6 backdrop-blur-2xl duration-300 ease-out data-[closed]:transform-[scale(95%)] data-[closed]:opacity-0"
            >
              <DialogTitle
                as="h3"
                className="text-base/7 font-medium text-black"
              >
                Submit successfully
              </DialogTitle>
              <p className="mt-2 text-sm/6 text-black">
                Your contact form has been successfully submitted.
              </p>
              <div className="mt-4">
                <Button
                  className="inline-flex items-center gap-2 rounded-md bg-gray-700 py-1.5 px-3 text-sm/6 font-semibold text-white shadow-inner shadow-white/10 focus:outline-none data-[hover]:bg-gray-600 data-[focus]:outline-1 data-[focus]:outline-white data-[open]:bg-gray-700"
                  onClick={close}
                >
                  Got it, thanks!
                </Button>
              </div>
            </DialogPanel>
          </div>
        </div>
      </Dialog>
    </>
  );
};
