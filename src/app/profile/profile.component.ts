import { Component, OnInit } from '@angular/core';

import { ProfileService } from './profile.service';
import { Profile } from './profile.model';
import { Book } from '../books/book.model';
import { BookService } from '../books/book.service';

@Component({
    selector: 'app-profile',
    templateUrl: './profile.component.html',
    styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
    books!: Book[];
    profile!: Profile;

    randomQuote!: string;
    randomQuotes: string[] = [
        '“A reader lives a thousand lives before he dies . . . The man who never reads lives only one.” - George R.R. Martin',
        '“Until I feared I would lose it, I never loved to read. One does not love breathing.” - Harper Lee',
        '“Never trust anyone who has not brought a book with them.” - Lemony Snicket',
        '“You can never get a cup of tea large enough or a book long enough to suit me.” - C.S. Lewis',
        '“Reading is essential for those who seek to rise above the ordinary.” - Jim Rohn',
        '“I find television very educating. Every time somebody turns on the set, I go into the other room and read a book.” - Groucho Marx',
        '“‘Classic’ – a book which people praise and don’t read.” - Mark Twain',
        '“You don’t have to burn books to destroy a culture. Just get people to stop reading them.” - Ray Bradbury',
        '“So please, oh please, we beg, we pray, go throw your TV set away, and in its place you can install a lovely bookshelf on the wall.” - Roald Dahl',
        '“Think before you speak. Read before you think.” - Fran Lebowitz',
        '“Let’s be reasonable and add an eighth day to the week that is devoted exclusively to reading.” - Lena Dunham',
        '“That’s the thing about books. They let you travel without moving your feet.” - Jhumpa Lahiri',
        '“The reading of all good books is like conversation with the finest (people) of the past centuries.” - Descartes',
        '“In the case of good books, the point is not to see how many of them you can get through, but rather how many can get through to you.” - Mortimer J. Adler',
        '“Reading one book is like eating one potato chip.” - Diane Duane'
    ];

    constructor(private profileService: ProfileService, private bookService: BookService) { }

    ngOnInit(): void {
        const firebaseId = localStorage.getItem('firebaseUserId');
        this.profileService.getProfile(firebaseId!).subscribe(profile => {
            this.profile = profile;
        });

        this.bookService.getBooks().subscribe(books => {
            this.books = books;
        });

        this.onGenerateNewQuote();
    }

    onGenerateNewQuote() {
        const index = Math.floor(Math.random() * 14) + 1;
        this.randomQuote = this.randomQuotes[index];
    }

    onDeleteBook(id: number) {
        this.profile.books.splice(id, 1);
        this.profileService.deleteBook(this.profile);
    }
}