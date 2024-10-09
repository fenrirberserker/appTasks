import {Component, Input, Output, input, output, computed,  EventEmitter, /*signal*/} from '@angular/core';
import {DUMMY_USERS} from "../dummy-users";

// type User = {
//   id: string,
//   avatar: string,
//   name: string
// }

interface User {
  id: string,
  avatar: string,
  name: string
}

//const randIndex = Math.floor(Math.random() * DUMMY_USERS.length);
@Component({
  selector: 'app-user',
  standalone: true,
  imports: [],
  templateUrl: './user.component.html',
  styleUrl: './user.component.css'
})
export class UserComponent {

  //new way
  // avatar = input.required<string>();
  // name = input.required<string>();
  // select = output<string>();

  // @Input({required:true}) id!: string;
  // @Input({required: true}) avatar!: string;
  // @Input({required: true}) name!: string;
  @Input({required:true}) user!: User;
  @Output() select = new EventEmitter<string>();

  get imagePath(){
    return 'assets/users/' + this.user.avatar;
  }
  onSelectUser(){
    this.select.emit(this.user.id);

    // const randIndex = Math.floor(Math.random() * DUMMY_USERS.length);
    // this.selectedUser.set(DUMMY_USERS[randIndex]);
  }

  // imagePath = computed(
  //   ()=>{'assets/users/' + this.avatar()}
  // );
  //selectedUser = signal(DUMMY_USERS[randIndex]) ;

  // imagePath = computed(()=>'assets/users/' + this.selectedUser().avatar);

}
