import { mapData } from './general/map-data';

/**
 * Caso tenha mais rotas, utilize este arquivo para buscar os dados por página.
 *
 */

export const loadPages = async (slug = '') => {
    const cleanSlug = slug ? `?slug=${slug.replace(/[^a-z0-9-_]/gi, '')}` : '';
    const url = `http://localhost:1337/api/pages/${cleanSlug}&populate=*`;
    const data = await fetch(url);
    const json = await data.json();
    const processedData = [json.data[0].attributes];
    const pageData = mapData(processedData);

    return pageData;
}
