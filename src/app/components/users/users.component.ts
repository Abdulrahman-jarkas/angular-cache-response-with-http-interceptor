import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { UserModel } from 'src/app/models/user.model';
import { UsersService } from 'src/app/services/users.service';

@Component({
  selector: 'users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss'],
})
export class UsersComponent implements OnInit {
  users$!: Observable<UserModel[]>;
  userId!: number;
  pageIndex: number = 0;

  constructor(private usersService: UsersService) {}

  ngOnInit(): void {
    this.getUsers();
  }

  getUsers() {
    this.users$ = this.usersService.getUsers(this.pageIndex, this.userId);
  }

  // @TODO
  setPageIndex(index: number) {
    this.pageIndex = index;
    this.getUsers();
  }

  // @TODO
  setUserId(id: number) {
    this.userId = id;
    this.getUsers();
  }
}
