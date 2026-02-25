import Input from "../components/ui/Input";

import Authlayout from "../layout/AuthLayout";
import Button from "../components/ui/Button";
import Navbar from "../layout/Navbar";

function Login() {
    return (
        <>
            <Navbar></Navbar>
            <Authlayout logo="" text="Login To Your Dashboard">
                <Input
                    type="email"
                    placeholder="Input Your Email"
                    label="E-mail"
                ></Input>
                <Input
                    type="password"
                    placeholder="Input Your Passoword"
                    label="Password"
                ></Input>

                <Button loading={true}> Login Now</Button>
            </Authlayout>
        </>
    );
}

export default Login;
