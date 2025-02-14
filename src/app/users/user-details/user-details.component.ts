import { Component, OnInit} from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { UserService } from '../user.service';

@Component({
  selector: 'app-user-details',
  templateUrl: './user-details.component.html',
  styleUrls: ['./user-details.component.css']
})
export class UserDetailsComponent implements OnInit{
  user: any;

  constructor(private route: ActivatedRoute, private userService: UserService) {}

  ngOnInit(): void {
    this.getUser();
  }

  getUser(): void{
    const id = parseInt(this.route.snapshot.paramMap.get('id')!, 10);
    this.userService.getUserById(id).subscribe(user => this.user = user);
  }
}
