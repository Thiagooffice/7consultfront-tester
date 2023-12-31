import {
    CloseButton,
    Flex,
    Text,
    ModalBody,
    ModalContent,
    ModalHeader,
    ModalOverlay,
    Modal as ChakraModal,
    ModalProps as ModalChakraModal,
  } from "@chakra-ui/react";
  
  interface ModalProps extends ModalChakraModal {
    title?: string;
    padding?: string;
  }
  
  export function Modal({
    children,
    title,
    isOpen,
    onClose,
    padding,
    ...rest
  }: ModalProps) {
    return (
      <ChakraModal isOpen={isOpen} onClose={onClose} {...rest}>
        <ModalOverlay backdropFilter="blur(5px)" />
        <ModalContent maxW="max-content" bg="transparent" shadow="none">
          <Flex justifyContent="flex-end">
            <CloseButton
              onClick={onClose}
              color="white"
              justifySelf="flex-end"
              _focus={{ borderColor: "white" }}
            />
          </Flex>
          <ModalHeader
            bg="white"
            borderTopRadius="6px"
            padding={padding ? padding : ""}
          >
            <Text textAlign="center" fontSize="xl">
              {title}
            </Text>
          </ModalHeader>
          <ModalBody
            bg="white"
            px="4"
            borderBottomRadius="6px"
            padding={padding ? padding : ""}
          >
            {children}
          </ModalBody>
        </ModalContent>
      </ChakraModal>
    );
  }
  