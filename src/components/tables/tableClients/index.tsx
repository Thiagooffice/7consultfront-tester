import { Flex, Table, Tbody, Td, Thead, Tr, Box } from "@chakra-ui/react";
import { TableHeader } from "../tableHeader";
import { TableTd } from "../tableTd";
import { TdOptionsForClients } from "../tdOptionsForClients";
import { Layout } from "../../layout";
import { useEffect, useState } from "react"
import { api } from "../../../services/api";
import moment from 'moment'
import { TableCaption } from "../tableCaption";
import { dateFormat } from "../../../utils/dateFormat";

interface TableClients {
    changeMenu: any
}

export function TableClients({ changeMenu }: TableClients) {
    const [clients, setClients] = useState([])

    useEffect(() => {
        async function getClients() {
            const { data } = await api.get("Clientes")
            setClients(data)
        }
        getClients()
    }, [])

    return (
        <Layout title="Clientes">
            <Box h="90%" overflowY="scroll">
                <Table overflowY="scroll" css={{ borderCollapse: "separate", borderSpacing: "0px 8px" }} >
                    <TableCaption
                        items={clients}
                        text={"Não foi encontrado nehum cliente"}
                    />
                    <Thead>
                        <Tr>
                            <TableHeader>Cliente</TableHeader>
                            <TableHeader>ID</TableHeader>
                            <TableHeader>Criação</TableHeader>
                            <TableHeader>Atualização</TableHeader>
                        </Tr>
                    </Thead>
                    <Tbody overflow="scroll">
                        {
                            clients.map((item, id) => (
                                <Tr key={id}>
                                    <TableTd text={item.nome} />
                                    <TableTd text={item.id} />
                                    <TableTd text={dateFormat(item.create_Client)} />
                                    <TableTd text={item.dataAtualizacao === null ? "-" : dateFormat(item.dataAtualizacao)} />
                                    <TdOptionsForClients changeMenuOptions={changeMenu} item={item} />
                                </Tr>
                            ))
                        }
                    </Tbody>
                </Table>
            </Box>
        </Layout>
    )
}