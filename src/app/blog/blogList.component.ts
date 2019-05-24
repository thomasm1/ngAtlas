import { Component } from '@angular/core';

@Component({
    selector: 'list-blog',
    templateUrl: 'app/blog/blogList.component.html'  
})

export class BlogListComponent {
    blogs: any[];
     

    constructor() {
        this.blogs = [
            { id: 'emp101', title: 'Aa'  },
            { id: 'emp102', title: 'Bb'  },
            { id: 'emp103', title: 'Cc'  },
        ];
    }
     

    getBlogs(): void {
        this.blogs = [
            { id: 'emp101', title: 'Aa'  },
            { id: 'emp102', title: 'Bb'  },
            { id: 'emp103', title: 'Cc' },
            { id: 'emp104', title: 'Dd' },
            { id: 'emp105', title: 'Ee' },
        ];
    }

    trackByEmpCode(index: number, blog: any): string {
        return blog.id;
    }
}