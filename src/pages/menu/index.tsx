import { Box, HStack, Text } from "@chakra-ui/react";
import { useState } from "react";
import { MdOutlineArrowBackIos, MdOutlineArrowForwardIos } from "react-icons/md"
import { PiUsersThreeBold } from "react-icons/pi"
import { BsNewspaper } from "react-icons/bs"
import { TableClients } from "../../components/tables/tableClients";
import { FormClient } from "../../components/form/formClient";
import { useRouter } from "next/router";

export default function Menu() {
    const router = useRouter()
    const [menu, setMenu] = useState<boolean>(true)
    const [action, setAction] = useState<number>(1)

    function handleMenu() {
        setMenu(!menu)
    }

    return (
        <HStack h="100vh">
            <Box h="100vh" bg="#4169e1" w={menu ? "14rem" : "5rem"} borderRightRadius="1rem" border="1px solid gray" position="relative" pt={menu ? "4rem" : "5rem"}>
                <Box top="1rem" right="1rem" position="absolute" cursor="pointer">
                    {
                        menu ? <MdOutlineArrowBackIos size={25} color="white" onClick={handleMenu} /> : <MdOutlineArrowForwardIos size={25} color="white" onClick={handleMenu} />
                    }
                </Box>
                <Box>
                    <Box onClick={() => {
                        setAction(1)
                        router.push("/menu")
                    }} pl="1.5rem" _hover={{
                        backgroundColor: "#2849ac",
                        borderRadius: 7,
                    }}>
                        <Text color="white" cursor="pointer" fontSize="1.3rem">
                            {
                                menu ? "Clientes" : <PiUsersThreeBold size={30} />
                            }
                        </Text>
                    </Box>
                    <Box onClick={() => setAction(2)} mt={menu ? "0.8rem" : "1rem"} pl="1.5rem" _hover={{
                        backgroundColor: "#2849ac",
                        borderRadius: 7,
                    }}>
                        <Text color="white" cursor="pointer" fontSize="1.3rem">
                            {
                                menu ?  "Cadastro"   : <BsNewspaper size={28} />
                            }
                        </Text>
                    </Box>
                </Box>
            </Box>
            {
                action === 1 && <TableClients changeMenu={setAction} />
            }
            {
                action === 2 && <FormClient changeMenu={setAction} />
            }
        </HStack>
    )
}