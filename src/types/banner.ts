export default interface banner{
    slider: {
        id: number;
        title: string;
        src: string;
        link: string;
    }[],
    mosaic: {
        id: number;
        title: string;
        src: string;
        link: string;
    }[]
}