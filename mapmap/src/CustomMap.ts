
export interface Mappable{
    location: {
        lat: number,
        lng: number,
    };
    description(): string;

}

export class CustomMap{
    googlemap: google.maps.Map;

    constructor(divId: string){
        this.googlemap = new google.maps.Map(document.getElementById(divId) as HTMLElement, {
            zoom: 1,
            center: {
                lat: 0,
                lng: 0,
            },
        })  
    }

    addMarker(mappable: Mappable): void{
        const marker = new google.maps.Marker({
            map: this.googlemap,
            position: { 
                lat: mappable.location.lat,
                lng: mappable.location.lng,
             }
        });
    const info = new google.maps.InfoWindow({
        content: mappable.description()
    })
    marker.addListener("click", ()=> {
        info.open(this.googlemap, marker);  
    })
    }
}