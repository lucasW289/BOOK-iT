import { useForm } from "react-hook-form";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import * as apiClient from "../api-client";
import { useAppContext } from "../contexts/AppContext";
import { Link, useLocation, useNavigate } from "react-router-dom";

export type SignInFormData = {
  email: string;
  password: string;
};

const SignIn = () => {
  const { showToast } = useAppContext();
  const navigate = useNavigate();
  const queryClient = useQueryClient();
  const location = useLocation();

  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm<SignInFormData>();

  const mutation = useMutation({
    mutationFn: apiClient.signIn,
    onSuccess: async () => {
      showToast({ message: "Sign in Successful!", type: "SUCCESS" });
      await queryClient.invalidateQueries({ queryKey: ["validateToken"] });
      navigate(location.state?.from?.pathname || "/");
    },
    onError: (error: Error) => {
      showToast({ message: error.message, type: "ERROR" });
    },
  });

  const onSubmit = handleSubmit((data) => {
    mutation.mutate(data);
  });

  return (
    <form
      className="flex flex-col max-w-md gap-6 p-6 mx-auto bg-white rounded-lg shadow-lg"
      onSubmit={onSubmit}
    >
      <h2 className="mb-4 text-4xl font-bold text-center text-teal-800">
        Sign In
      </h2>

      <label className="text-sm font-medium text-gray-700">
        Email
        <input
          type="email"
          className="w-full p-3 mt-2 border rounded-lg shadow-sm focus:ring-2 focus:ring-teal-500"
          {...register("email", { required: "This field is required" })}
        />
        {errors.email && (
          <span className="mt-1 text-sm text-red-500">
            {errors.email.message}
          </span>
        )}
      </label>

      <label className="text-sm font-medium text-gray-700">
        Password
        <input
          type="password"
          className="w-full p-3 mt-2 border rounded-lg shadow-sm focus:ring-2 focus:ring-teal-500"
          {...register("password", {
            required: "This field is required",
            minLength: {
              value: 6,
              message: "Password must be at least 6 characters",
            },
          })}
        />
        {errors.password && (
          <span className="mt-1 text-sm text-red-500">
            {errors.password.message}
          </span>
        )}
      </label>

      <div className="flex items-center justify-between mt-4">
        <span className="text-sm text-gray-500">
          Not Registered?{" "}
          <Link className="text-teal-600 underline" to="/register">
            Create an account
          </Link>
        </span>

        <button
          type="submit"
          className="px-6 py-3 font-semibold text-white transition-all bg-teal-600 rounded-lg hover:bg-teal-500"
        >
          Login
        </button>
      </div>
    </form>
  );
};

export default SignIn;
