//import Head from 'next/head';
import P from 'prop-types';
import styled from "styled-components";
//import { mapData } from '../api/general/map-data';
import { loadPages } from '../api/load-pages';
import App from '../templates/App';
import { PageNotFound } from '../templates/PageNotFound';
import { Heading as HeadComponent } from '../components/Heading';

const Heading = styled.h1`
  background-color: red;
`;

export default function Index({ pageData = null }){
    console.log(pageData);

    if(pageData === null){
        return <PageNotFound errorMessage={'Erro ao buscar os dados.'}/>
    }

    return (
        <>
            <HeadComponent>
                <title>{pageData[0].title}</title>
            </HeadComponent>
            <App pageData={pageData}/>
        </>
    );
}

export const getStaticProps = async () => {
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

Index.propTypes = {
    pageData: P.array
}
