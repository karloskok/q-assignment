import { url } from "inspector";

export const getFromUrl = async (url: string) => {
    const data = await fetch(url).then(response => response.json()).then(response => response);
    return data;
};


const toJSON = async (data:any[]) => {
    const jsonData: any[] = [];
    for (let i = 0; i < data.length; i++) {
        const d = await data[i].json();
        jsonData.push(d);
    }
    return jsonData;
}

export async function getData(urls: string[], callback: (data: any[]) => void) {

    const p:any[] = [];

    urls.forEach(url => {
        p.push(fetch(url))
    });

    Promise.all(p)
        .then((data) => toJSON(data))
        .then((data) => callback(data))
        .catch((err) => {
            console.log(err);
        });
}