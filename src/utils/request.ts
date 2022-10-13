import axios, { AxiosResponse } from 'axios'

type RequestRunner<T> = () => Promise<AxiosResponse<T>>

type HttpResponse<T> = {
  data?: T
  error?: any
  status?: number
}

export async function runRequest<T>(runner: RequestRunner<T>): Promise<HttpResponse<T>> {
  try {
    const response = await runner()

    return { data: response.data, status: response.status }
  } catch (error) {
    if (axios.isAxiosError(error)) {
      // TODO: どういう場合にresponseがundefinedになるか調べる(ネットワークエラーのとき？)
      const response = error.response
      return { error: response?.data, status: response?.status }
    }

    throw error
  }
}
