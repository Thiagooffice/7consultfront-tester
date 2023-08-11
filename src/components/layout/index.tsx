import { Box, Text } from "@chakra-ui/react";
import { ReactElement } from "react";

interface LayoutProps {
    title: string
    children: any
}

export function Layout({children, title}: LayoutProps){
    return(
        <Box  p="2rem" h="100vh" w="full">
            <Text fontWeight="500" fontSize="1.5rem">{title}</Text>
            {children}
        </Box>
    )
}