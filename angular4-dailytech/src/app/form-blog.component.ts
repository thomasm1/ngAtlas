import { Component } from '@angular/core';
import { Form } from './form';

@Component ({
    selector: 'form-blog',
    template: `<div class="container">
    <form>
    <h3>Blog Form</h3>
        <div class="form-group">
            <input type = "text" class="form-control" id="formid" required [(ngModel)] = "model.formid" name="id"> 
            <label for="formid">ID</label> 
        </div>
        <br />
        <div class="form-group">
            <input type = "text" class="form-control" id="formid" required [(ngModel)] = "model.formname" name="name">
            <label for="formname">Name</label>
        </div>
    </form>
</div>` // 
})

export class FormBlogComponent {
   model = new Form(1, 'First Blog'); 
}