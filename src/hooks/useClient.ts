import axios from "axios";

export async function getClients(
    page?: number,
    per_page?: number,
    search?: string,
    payer?: string,
    schema?: string
  ){
    const { data } = await axios.get(`/clients`, {
      params: {
        page,
        per_page,
        payer,
        search,
      },
    });
  
    return {
      clients: page ? data.results : data,
      totalCount: data.count,
    };
  }