import { Box, Button, Text } from "@chakra-ui/react";
import { Layout } from "../../layout";
import { Input } from "../../Inputs/Input";
import { SubmitHandler, useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { createClientSchema } from "../../../utils/yup/shapes";
import { RegisterClient } from "../../../types";


export function FormClient() {

    const {
        register,
        handleSubmit,
        formState: { errors, isSubmitting },
        reset,
        control,
        watch,
        setValue,
    } = useForm({
        resolver: yupResolver(createClientSchema),
    });

    const handleRegisterClient: SubmitHandler<RegisterClient> = async (
        data
      ) => {
        try {
          console.log(data);
          
        } catch (error) {
          
        }
      };

    return (
        <Layout title="Cadastrar Clientes">
            <Box as="form" onSubmit={handleSubmit(handleRegisterClient)}  p="3rem" mt="1rem" h="30rem" borderRadius="0.5rem" border="1px solid #e1e0e0">
                <Input 
                label="Cliente" 
                error={errors.name}
                {...register("name")}
                errorMessagePosition='relative'
                />
                <Box pl="70%">
                    <Button w="15rem" bg="#5379ec" color="white" _hover={{background: "#4162c4"}} mt="1rem" type="submit">
                        Cadastrar
                    </Button>
                </Box>
            </Box>
        </Layout>
    )
}