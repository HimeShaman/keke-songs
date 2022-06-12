type GetStaticProps = {
    params: {
        id: number
    }
}

type StaticFileData = {
    contentHtml: string;
    title: string,
    teasing: string,
    callToAction: string,
    contentHtmlData: string,
}

export type {GetStaticProps, StaticFileData}