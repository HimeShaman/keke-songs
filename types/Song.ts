type Song = {
    "id": 1,
    "file-name": string,
    "name": {
        "name-USen": string,
        "name-EUen": string,
        "name-EUde": string,
        "name-EUes": string,
        "name-USes": string,
        "name-EUfr": string,
        "name-USfr": string,
        "name-EUit": string,
        "name-EUnl": string,
        "name-CNzh": string,
        "name-TWzh": string,
        "name-JPja": string,
        "name-KRko": string,
        "name-EUru": string
    },
    "buy-price": number,
    "sell-price": number,
    "isOrderable": boolean,
    "music_uri": string,
    "image_uri": string
}

type SongCard = {
    id: number,
    song: Song
}

export type {Song, SongCard}
