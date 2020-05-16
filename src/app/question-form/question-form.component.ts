import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Question } from '../quiz.model';

@Component({
  selector: 'app-question-form',
  templateUrl: './question-form.component.html',
  styleUrls: ['./question-form.component.scss']
})
export class QuestionFormComponent implements OnInit {

  @Input() question: Question;
  @Output() onChoiceMade = new EventEmitter<string>();

  public form: FormGroup;

  //Called after the component received all inputs/outputs
  ngOnInit() {
    this.form = new FormGroup({
      choice: new FormControl()
    });

    this.form.valueChanges.subscribe(this.onChange);
  }

  //dispatch choice made by the user
  onChange = () => {
    this.onChoiceMade.emit(this.form.value.choice);
  }
}