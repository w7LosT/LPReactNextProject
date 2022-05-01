import { loadPages } from '../api/load-pages';

export default function Page(){
    return (
        <h1>Oi</h1>
    );
}

export const getStaticPaths = async () => {
    return {
        paths: [
            { params: { slug: 'teste' } },
        ], //URLs que serão renderizadas
        fallback: false, //se deve renderizar ou não a página 404 caso não encontre a URL
    };
}

export const getStaticProps = async (ctx) => {
    console.log(ctx);
    try{
        // const data = await fetch('http://localhost:1337/api/pages/?populate=*');
        // const json = await data.json();
        // const processedData = [json.data[0].attributes];
        // const pageData = mapData(processedData);
        const pageData = await loadPages();
        return {
            props: {
                pageData
            }
        }
    } catch (e){
        const pageData  = null;
        return {
            props: {
                pageData
            }
        }
    }
}
