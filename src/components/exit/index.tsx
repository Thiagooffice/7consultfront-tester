import { useRouter } from "next/router";
import { Box, Button, Flex, Text } from "@chakra-ui/react";
import {
    Popover,
    PopoverTrigger,
    PopoverContent,
    PopoverBody,
    PopoverArrow,
} from '@chakra-ui/react'
import { FaSignOutAlt } from "react-icons/fa";

export function Exit() {
    const router = useRouter()
    return (
        <Box position="fixed" top="0.8rem" right="1rem">
            <Popover>
                <PopoverTrigger>
                    <Button gap="0.5rem">Exit<FaSignOutAlt size={20} /></Button>
                </PopoverTrigger>
                <PopoverContent w="12rem">
                    <PopoverArrow />
                    <PopoverBody>
                        <Flex gap="1rem" justifyContent="center" alignItems="center">
                            <Text fontWeight="500">Deseja sair?</Text>
                            <Box cursor="pointer">
                                <Text onClick={() => router.push("/")} fontWeight="400">Sim</Text>
                            </Box>
                        </Flex>
                    </PopoverBody>
                </PopoverContent>
            </Popover>
        </Box>
    )
}