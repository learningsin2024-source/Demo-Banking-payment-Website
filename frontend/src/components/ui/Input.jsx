import { Button, Checkbox, Label, TextInput } from "flowbite-react";

const Input = ({ text, submit }) => {
    return (
        <>
            <form className="flex max-w-md flex-col gap-4 mx-auto my-10">
                <div>
                    <h4 className="text-center text-xl ">{text}</h4>
                    <div className="mb-2 block">
                        <Label htmlFor="email1" className="dark:text-black">
                            Your email
                        </Label>
                    </div>
                    <TextInput
                        id="email1"
                        type="email"
                        placeholder="name@flowbite.com"
                        required
                        className="dark:bg-white dark:text-black"
                    />
                </div>
                <div>
                    <div className="mb-2 block">
                        <Label htmlFor="password1" className="dark:text-black">
                            Your password
                        </Label>
                    </div>
                    <TextInput
                        id="password1"
                        type="password"
                        required
                        className="dark:bg-white dark:text-black"
                    />
                </div>
                <div className="flex items-center gap-2">
                    <Checkbox id="remember" />
                    <Label htmlFor="remember" className="dark:text-black">
                        Remember me
                    </Label>
                </div>
                <Button type="submit">{submit}</Button>
            </form>
        </>
    );
};

export default Input;
