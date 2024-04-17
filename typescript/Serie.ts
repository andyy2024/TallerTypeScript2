export class Serie {
    index: number;
    name: string;
    channel: string;
    seasons: number;
    description: string;
    showLink: string;
    imageLink: string;

    constructor(index: number, name: string, channel: string, seasons: number, description: string, link: string, image: string) {
        this.index = index;
        this.name = name;
        this.channel = channel;
        this.seasons = seasons;
        this.description = description;
        this.showLink = link;
        this.imageLink = image;

    }
}
