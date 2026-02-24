import Input from "../components/ui/Input";
import FormField from "../components/ui/FormField";

function Login() {
    return (
        <>
            <FormField label="Email" error="Invalid email">
                <Input
                    type="email"
                    placeholder="Input Your Email"
                    error="something wrong"
                ></Input>
            </FormField>
        </>
    );
}

export default Login;
