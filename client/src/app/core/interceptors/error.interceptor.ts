import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest} from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';

@Injectable()
export class ErrorInterceptor implements HttpInterceptor {
    constructor(private route: Router){}

    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        return next.handle(req).pipe(
            catchError(error => {
                if (error){
                    if (error.status === 404){
                        this.route.navigateByUrl('/not-found');
                    }
                    if (error.status === 500){
                        this.route.navigateByUrl('/server-error');
                    }
                }
                return throwError(error);
            })
        );
    }
}
