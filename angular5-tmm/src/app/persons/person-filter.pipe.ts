import { PipeTransform, Pipe } from '@angular/core';
import { Person } from '../models/person.model';

@Pipe({
    name: 'personFilter'
})
export class PersonFilterPipe implements PipeTransform {
    transform(persons: Person[], searchTerm: string): Person[] {
        if (!persons || !searchTerm) {
            return persons;
        }
        return persons.filter(person => 
            person.name.toLowerCase().indexOf(searchTerm.toLowerCase()) !== -1);
    }
}


