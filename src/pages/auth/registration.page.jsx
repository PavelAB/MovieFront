import { useForm } from "react-hook-form"
import { regis } from "../../api/user.api"
import { NavLink } from "react-router-dom"


const RegistrationPage = () => {
    const { register, handleSubmit, reset } = useForm()

    const onSubmit = async ( data ) => {
        console.log(data);

        const test = await regis(data)

        console.log("dataFromBack", test);
        console.log("ID_User", test.data.ID_User);
        localStorage.setItem("token", test.data.token)
        localStorage.setItem("ID_User", test.data.ID_User)
        localStorage.setItem("role", test.data.role)

        reset()
    }


    //TODO centre la formulaire 
    //FIXME Bien ranger le code, ajouter des modules et mettre le CSS dans un fichier à part.
    
    return (
        <>
            <div
                class=" mx-auto w-full max-w-md bg-white px-6 pt-10 pb-8 shadow-xl ring-1 ring-gray-900/5 sm:rounded-xl sm:px-10">
                <div class="w-full">
                    <div class="text-center">
                        <h1 class="text-3xl font-semibold text-gray-900">Sign up</h1>
                        <p class="mt-2 text-gray-500">Sign up below to access your account</p>
                    </div>
                    <div class="mt-5">
                        <form onSubmit = { handleSubmit(onSubmit) }>
                            <div class="relative mt-6">
                                <input {...register('first_name')} id="login" placeholder="Email Address" class="peer mt-1 w-full border-b-2 border-gray-300 px-0 py-1 placeholder:text-transparent focus:border-gray-500 focus:outline-none" autocomplete="NA" />
                                <label for="login" class="pointer-events-none absolute top-0 left-0 origin-left -translate-y-1/2 transform text-sm text-gray-800 opacity-75 transition-all duration-100 ease-in-out peer-placeholder-shown:top-1/2 peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-500 peer-focus:top-0 peer-focus:pl-0 peer-focus:text-sm peer-focus:text-gray-800">First name :</label>
                            </div>
                            <div class="relative mt-6">
                                <input {...register('last_name')} id="login" placeholder="Email Address" class="peer mt-1 w-full border-b-2 border-gray-300 px-0 py-1 placeholder:text-transparent focus:border-gray-500 focus:outline-none" autocomplete="NA" />
                                <label for="login" class="pointer-events-none absolute top-0 left-0 origin-left -translate-y-1/2 transform text-sm text-gray-800 opacity-75 transition-all duration-100 ease-in-out peer-placeholder-shown:top-1/2 peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-500 peer-focus:top-0 peer-focus:pl-0 peer-focus:text-sm peer-focus:text-gray-800">Last name :</label>
                            </div>
                            <div class="relative mt-6">
                                <input {...register('birth_date')} type="Date" id="login" placeholder="Email Address" class="peer mt-1 w-full border-b-2 border-gray-300 px-0 py-1 placeholder:text-transparent focus:border-gray-500 focus:outline-none" autocomplete="NA" />
                                <label for="login" class="pointer-events-none absolute top-0 left-0 origin-left -translate-y-1/2 transform text-sm text-gray-800 opacity-75 transition-all duration-100 ease-in-out peer-placeholder-shown:top-1/2 peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-500 peer-focus:top-0 peer-focus:pl-0 peer-focus:text-sm peer-focus:text-gray-800">Birth date :</label>
                            </div>
                            <div class="relative mt-6">
                                <input {...register('login')} id="login" placeholder="Email Address" class="peer mt-1 w-full border-b-2 border-gray-300 px-0 py-1 placeholder:text-transparent focus:border-gray-500 focus:outline-none" autocomplete="NA" />
                                <label for="login" class="pointer-events-none absolute top-0 left-0 origin-left -translate-y-1/2 transform text-sm text-gray-800 opacity-75 transition-all duration-100 ease-in-out peer-placeholder-shown:top-1/2 peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-500 peer-focus:top-0 peer-focus:pl-0 peer-focus:text-sm peer-focus:text-gray-800">Login :</label>
                            </div>
                            <div class="relative mt-6">
                                <input {...register('email')} id="login" placeholder="Email Address" class="peer mt-1 w-full border-b-2 border-gray-300 px-0 py-1 placeholder:text-transparent focus:border-gray-500 focus:outline-none" autocomplete="NA" />
                                <label for="login" class="pointer-events-none absolute top-0 left-0 origin-left -translate-y-1/2 transform text-sm text-gray-800 opacity-75 transition-all duration-100 ease-in-out peer-placeholder-shown:top-1/2 peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-500 peer-focus:top-0 peer-focus:pl-0 peer-focus:text-sm peer-focus:text-gray-800">Email :</label>
                            </div>
                            
                            <div class="relative mt-6">
                                <input {...register('password')} id="password" placeholder="Password" class="peer peer mt-1 w-full border-b-2 border-gray-300 px-0 py-1 placeholder:text-transparent focus:border-gray-500 focus:outline-none" />
                                <label for="password" class="pointer-events-none absolute top-0 left-0 origin-left -translate-y-1/2 transform text-sm text-gray-800 opacity-75 transition-all duration-100 ease-in-out peer-placeholder-shown:top-1/2 peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-500 peer-focus:top-0 peer-focus:pl-0 peer-focus:text-sm peer-focus:text-gray-800">Password</label>
                            </div>
                            <div class="my-6">
                                <button type="submit" className="ButtonsForm w-full">Sign up</button>
                            </div>
                            <p class="text-center text-sm text-gray-500">Do you already have an account?
                                <NavLink to={"/login"} className={"font-semibold text-gray-600 hover:underline focus:text-gray-800 focus:outline-none"} >Log in</NavLink>
                            </p>
                        </form>
                    </div>
                </div>
            </div>
        </>
    )
}
export default RegistrationPage