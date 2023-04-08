import React from "react";
import { FormattedMessage } from "react-intl";
import Anchor from "../../../components/links/Anchor";
import SkeletonTopLyrics from "../common/skeleton-topLyrics";
import PropTypes from "prop-types";

const HomeTopLyrics = (props) => {
    /* Extraccion de propiedades */
    const { loading, error, data } = props;

    /* Carga de componente de loading en caso de que los datos no existan u ocurra un error */
    if (loading || error || !data) return <SkeletonTopLyrics />;

    return (
        <div className="py-2 w-[45%]">
            <h2 className="font-bold text-xl mb-6 text-center lg:text-left">
                <FormattedMessage id="index.topLyrics.title" defaultMessage="Top Más Accedidos" />
            </h2>
            <div className="flex flex-row flex-wrap justify-between">
                {data.map((item, index) => (
                    <Anchor
                        href={item.url}
                        title={item.name}
                        className="flex items-center flex-nowrap rounded-md p-1 pl-5 hover:bg-gray-100 transition duration-150 cursor-pointer mb-1 w-1/2"
                        key={`htl-${index}`}
                    >
                        <div className="flex items-center justify-center">
                            <span className="text-3xl font-extralight text-gray-500">{index < 9 ? `0${index + 1}` : index + 1}</span>
                        </div>
                        <div className="ml-6 w-3/4">
                            <strong className="block w-full overflow-hidden whitespace-nowrap overflow-ellipsis">{item.name}</strong>
                            <small className="block text-gray-500 w-full overflow-hidden whitespace-nowrap overflow-ellipsis">
                                {item.artist.name}
                            </small>
                        </div>
                    </Anchor>
                ))}
            </div>
        </div>
    );
};

/* Propiedades por defecto */
HomeTopLyrics.defaultProps = {
    data: null,
    loading: true,
    error: false
};

/* Definicion de propiedades de componente */
HomeTopLyrics.propsTypes = {
    data: PropTypes.object,
    loading: PropTypes.bool,
    error: PropTypes.bool
};

export default HomeTopLyrics;
