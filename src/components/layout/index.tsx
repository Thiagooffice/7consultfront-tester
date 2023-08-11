import { Box, Text } from "@chakra-ui/react";
import { Exit } from "../exit";


interface LayoutProps {
    title: string
    children: any
}

export function Layout({ children, title }: LayoutProps) {
    
    return (
        <Box p="2rem" h="100vh" w="full">
            <Exit/>
            <Text fontWeight="500" fontSize="1.5rem">{title}</Text>
            {children}
        </Box>
    )
}