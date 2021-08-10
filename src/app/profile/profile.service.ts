import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Profile } from './profile.model';
import { Book } from '../books/book.model';
import { BookQuote } from '../books/book-details/book-quotes/book-quote.model';
import { map } from 'rxjs/operators';

@Injectable({
    providedIn: 'root'
})
export class ProfileService {
    private profile: Profile = {} as Profile;

    constructor(private http: HttpClient) { }

    createFirebaseUserProfile(id: string, email: string) {
        this.http.post<Profile>('https://awesome-reads-default-rtdb.europe-west1.firebasedatabase.app/users.json', { id, email })
            .subscribe(profile => {
                this.profile = profile;
                const firebaseId = Object.values(profile)[0];
                localStorage.setItem('firebaseUserId', firebaseId);
            });
    }

    getFirebaseUserProfile(id: string) {
        this.http.get<Profile[]>('https://awesome-reads-default-rtdb.europe-west1.firebasedatabase.app/users.json')
            .subscribe(profiles => {
                
                let firebaseUserId = undefined;
                const profilesArray = Object.entries(profiles);
                for (let key in profilesArray) {
                    if (profilesArray[key][1].id === id) {
                        firebaseUserId = profilesArray[key][0];
                    }
                }

                localStorage.setItem('firebaseUserId', firebaseUserId!)
            });
    }

    getProfile(id: string) {
        return this.http.get<Profile>('https://awesome-reads-default-rtdb.europe-west1.firebasedatabase.app/users/' + id + '.json');
    }

    addBook(book: Book): void {
        const firebaseId = localStorage.getItem('firebaseUserId');
        this.http.get<Profile>('https://awesome-reads-default-rtdb.europe-west1.firebasedatabase.app/users/' + firebaseId + '.json')
            .pipe(
                map(profile => {
                    profile = { ...profile, books: profile.books ? profile.books : [] };
                    profile = { ...profile, quotes: profile.quotes ? profile.quotes : [] };
                    return profile;
                })
            )
            .subscribe(profileData => {
                profileData.books.push(book);

                this.http.put<Profile>('https://awesome-reads-default-rtdb.europe-west1.firebasedatabase.app/users/' + firebaseId + '.json', profileData)
                    .subscribe();
            });
    }

    addQuote(quote: BookQuote) {
        const firebaseId = localStorage.getItem('firebaseUserId');
        this.http.get<Profile>('https://awesome-reads-default-rtdb.europe-west1.firebasedatabase.app/users/' + firebaseId + '.json')
            .pipe(
                map(profile => {
                    profile = { ...profile, books: profile.books ? profile.books : [] };
                    profile = { ...profile, quotes: profile.quotes ? profile.quotes : [] };
                    return profile;
                })
            )
            .subscribe(profileData => {
                profileData.quotes.push(quote);

                this.http.put<Profile>('https://awesome-reads-default-rtdb.europe-west1.firebasedatabase.app/users/' + firebaseId + '.json', profileData)
                    .subscribe();
            });
    }
}
