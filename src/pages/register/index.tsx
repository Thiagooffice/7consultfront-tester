import { Box, Flex, Image, FormControl, FormLabel, Input, Button, Center } from '@chakra-ui/react';
import { useRouter } from 'next/router';
import {FaArrowLeft} from "react-icons/fa"




export default function Register() {

    const router = useRouter()

    

    return (
        <Flex>
            <Box onClick={() => router.push("/")} cursor="pointer" position="fixed" left="10" top="10">
            <FaArrowLeft size={25}/>
            </Box>
            <Box flex={1} p={8}>
                <Box as="form" m="7rem">
                    <FormControl id="name">
                        <FormLabel>Nome</FormLabel>
                        <Input type="text" placeholder="Digite seu nome" />
                    </FormControl>
                    <FormControl id="email" mt={4}>
                        <FormLabel>Email</FormLabel>
                        <Input type="email" placeholder="Digite seu email" />
                    </FormControl>
                    <FormControl id="password" mt={4}>
                        <FormLabel>Password</FormLabel>
                        <Input type="password" placeholder="Digite sua senha" />
                    </FormControl>
                    <FormControl id="confirmPassowrd" mt={4}>
                        <FormLabel>Confirm Password</FormLabel>
                        <Input type="password" placeholder="Confirme a sua senha" />
                    </FormControl>
                    <Center >
                        <Button mt={4} w="30rem" colorScheme="blue" type="submit">
                            Cadastrar
                        </Button>
                    </Center>
                </Box>
            </Box>
            <Box flex={1}>
                <Image src="https://source.unsplash.com/random" alt="Imagem " w="100%" h="100vh" objectFit="cover" />
            </Box>
        </Flex>
    )
}