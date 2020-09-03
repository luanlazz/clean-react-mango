import { AccountModel } from '@/domain/models'
import { AddAccount, AddAccountParams } from '@/domain/usecases'
import { HttpPostClient, HttpStatusCode } from '@/data/protocols/http'
import { EmailInUseError } from '@/domain/errors'

export class RemoteAddAccount implements AddAccount {
  constructor (
    private readonly url: string,
    private readonly httpPostClient: HttpPostClient<AddAccountParams, AccountModel>
  ) {}

  async add (params: AddAccountParams): Promise<AccountModel> {
    const httpResponse = this.httpPostClient.post({
      url: this.url,
      body: params
    })

    switch ((await httpResponse).statusCode) {
      case HttpStatusCode.ok: return null
      default: throw new EmailInUseError()
    }
  }
}
