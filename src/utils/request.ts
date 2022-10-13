import axios, { AxiosResponse } from 'axios'

type RequestRunner<T> = () => Promise<AxiosResponse<T>>

type SuccessStatusCode = 200 | 201 | 204
type ErrorStatusCode = 400 | 401 | 403 | 422 | 500

type HttpSuccessResponse<T> = {
  status: SuccessStatusCode
  data: T
  error?: undefined
}

type HttpErrorResponse = {
  status: ErrorStatusCode
  data?: undefined
  error: any
}

type HttpResponse<T> = HttpSuccessResponse<T> | HttpErrorResponse

export async function runRequest<T>(runner: RequestRunner<T>): Promise<HttpResponse<T>> {
  try {
    const response = await runner()

    return { data: response.data, status: response.status as SuccessStatusCode }
  } catch (error) {
    if (axios.isAxiosError(error)) {
      // TODO: どういう場合にresponseがundefinedになるか調べる(ネットワークエラーのとき？)
      const response = error.response
      return { error: response?.data, status: response?.status as ErrorStatusCode }
    }

    throw error
  }
}
