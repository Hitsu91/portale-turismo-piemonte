import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class LuoghiService {
  private server = '/api/luoghi';

  constructor(private http: HttpClient) {}

  public async getLuogo(luogo: string) {
    const result = await this.http.get(`${this.server}/${luogo}`).toPromise();
    return result;
  }
}
