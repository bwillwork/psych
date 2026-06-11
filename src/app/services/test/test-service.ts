import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class TestService {

  public canViewResults(): boolean {
    return true;
  }
}
