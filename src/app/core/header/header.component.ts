import { Component, OnInit } from '@angular/core';
import { Validators } from '@angular/forms';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
  searchForm: FormGroup;
  languages: any = [];
  language: any = {};
  public isMenuCollapsed = true;

  constructor(private fb: FormBuilder, private router: Router) {}

  ngOnInit() {
    this.initForm();
  }

  initForm() {
    this.searchForm = this.fb.group({
      searchText: this.fb.control('', [Validators.required]),
    });
  }

  search(form) {
    if (form.searchText) {
      let text = btoa(form.searchText);
      this.router.navigate(['/search', text]);
    }
  }
}
