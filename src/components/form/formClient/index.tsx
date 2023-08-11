import { Box, Button, useToast } from "@chakra-ui/react";
import { Layout } from "../../layout";
import { Input } from "../../Inputs/Input";
import { SubmitHandler, useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { createClientSchema } from "../../../utils/yup/shapes";
import { RegisterClient } from "../../../types";
import { api } from "../../../services/api";
import { useEffect, useState } from "react";
import { useRouter } from "next/router";

interface FormClientProps{
    changeMenu: any
}

export function FormClient({changeMenu}: FormClientProps) {
    const router = useRouter()
    const [isUpdate, setIsUpdate] = useState<string>()
    const { query, push } = useRouter();
    const toast = useToast();
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
        defaultValues: {
            nome: isUpdate ? "Teste" : ""
          },
    });

    useEffect(() => {
        function getClient(){
            const client = query.uuid;
            if(client){
                setIsUpdate(String(client))
            }
        }
        getClient()
    }, [query.uuid, reset])

    const handleRegisterClient: SubmitHandler<RegisterClient> = async (
        data
      ) => {
        try {
          isUpdate ? await api.put(`Clientes/${isUpdate}`, {
            nome: data.nome
          }) : await api.post("Clientes", {
            nome: data.nome
          })
          toast({
            description: isUpdate ? "Cliente editado com sucesso" : "Cliente cadastrado com sucesso",
            status: "success",
            variant: "solid",
            isClosable: true,
          });
          setTimeout(() => {
              changeMenu(1)
              router.push("/menu")
          }, 3000);
        } catch (error) {
            toast({
                description: isUpdate ? "Erro ao editar cliente" : "Erro ao cadastrar cliente.",
                status: "error",
                variant: "solid",
                isClosable: true,
              });
        console.log(error);
        }
      };

    return (
        <Layout title={isUpdate ? "Editar cliente" : "Cadastrar Clientes"}>
            <Box as="form" onSubmit={handleSubmit(handleRegisterClient)}  p="3rem" mt="1rem" h="30rem" borderRadius="0.5rem" border="1px solid #e1e0e0">
                <Input
                label="Cliente" 
                error={errors.nome}
                {...register("nome")}
                errorMessagePosition='relative'
                />
                <Box pl="70%">
                    <Button w="15rem" bg="#5379ec" color="white" _hover={{background: "#4162c4"}} mt="1rem" type="submit">
                        {
                            isUpdate ? "Editar" : "Cadastrar"
                        }
                    </Button>
                </Box>
            </Box>
        </Layout>
    )
}