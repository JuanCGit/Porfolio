import {Injectable} from "@angular/core";
import {BehaviorSubject} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class HeaderManagerService {
  #headerColor = new BehaviorSubject<string>('');
  headerColor$ = this.#headerColor.asObservable();

  setHeaderColor(desiredColor: string) {
    this.#headerColor.next(desiredColor);
  }
}
