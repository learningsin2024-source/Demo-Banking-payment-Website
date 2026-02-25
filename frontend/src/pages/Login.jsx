import Input from "../components/ui/Input";

import Authlayout from "../layout/AuthLayout";
import Button from "../components/ui/Button";

function Login() {
    return (
        <>
            <Authlayout logo="banking-website\frontend\src\assets\react.svg">
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

                <Button> Login Now</Button>
            </Authlayout>
        </>
    );
}

export default Login;
