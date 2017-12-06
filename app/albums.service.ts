import { Injectable } from "@angular/core";
import { Http, Response } from "@angular/http";
import { Observable } from "rxjs/Observable";
import "rxjs/add/operator/map";


@Injectable()
export class AlbumsService {
	
	constructor(private _http: Http) {	}

	printOnConsole() {
		this._http.get('/music-store/albums/_search').subscribe(
		  (data) => console.log(data)
		);
	}

	getAlbums(): Observable<any[]> {
		return this._http.get('/music-store/albums/_search')
			.map((res: Response) => <any[]> res.json().hits.hits);
	}

	getAlbumsBySearchInput(input: string) {
		return this._http.post('/music-store/albums/_search',{
			"query": {
			    "bool": {
			      "must": {
			        "multi_match": {
			        "fields":  [ "title", "band_name", "songs.name" ],
			        "query":     input,
			        "fuzziness": "AUTO"
			      	}
			      }
			    }
			}
		})
		.map((res: Response) => <any[]> res.json().hits.hits);
	}

	getAlbumsBySearchInputAndFilters(input: string, genreFilters) {
		return this._http.post('/music-store/albums/_search',{
			"query": {
			    "bool": {
			      "must": {
			        "multi_match": {
			        "fields":  [ "title", "band_name", "songs.name" ],
			        "query":     input,
			        "fuzziness": "AUTO"
			      	}
			      },
			      "filter": {
			        "terms": {
			          "genre": genreFilters
			        }
			      }
			    }
			}
		})
		.map((res: Response) => <any[]> res.json().hits.hits);
	}

	getAlbumsByFilters(genreFilters) {
		return this._http.post('/music-store/albums/_search',{
			  "query": {
			    "bool": {
			      "filter": {
			        "terms": {
			          "genre": genreFilters
			        }
			      }
			    }
			  }
			})
		.map((res: Response) => <any[]> res.json().hits.hits);
	}

}

