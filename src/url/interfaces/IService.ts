export interface IService {
  changeUrl: (long: string) => Promise<string>

  getUrl: (shortId: string) => Promise<string>
}
