import Input from "../components/ui/Input";

function Login() {
    return (
        <>
            <Input
                type="email"
                placeholder="Input Your Email"
                error="something wrong"
            ></Input>
        </>
    );
}

export default Login;
