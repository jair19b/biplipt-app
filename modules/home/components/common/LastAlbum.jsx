import React, { useEffect, useState } from "react";
import Anchor from "../../../components/links/Anchor";
import colors from "../../../functions";
import DropdownShare from "../../../components/Common/DropdownShare";
import PropTypes from "prop-types";
import { FormattedMessage } from "react-intl";
import SkeletonLastAlbum from "../common/skeleton-lastAlbum";

const LastAlbum = (props) => {
    /* Estados del componente */
    const { data, error, loading } = props;
    const [color, setColor] = useState([255, 255, 255]);
    const [textColor, setTextColor] = useState("#000");

    /* Dtectar el color de la imagen del album */
    useEffect(() => {
        if (data) {
            colors.find(`/storage/albums/cover/${data.cover}`).then((res) => {
                setColor(res.rgb.background);
                setTextColor(res.textColor);
            });
        }
    }, [data]);

    /* Aplicación de colores dtectados en imagen al componente */
    const styles = {
        background: `rgb(${color[0]}, ${color[1]}, ${color[2]})`,
        color: textColor
    };

    /* Carga de componente de carga si los datos estan en espera */
    if (loading || error || !data) return <SkeletonLastAlbum />;

    return (
        <div className="lg:w-[45%] lg:rounded-lg p-4" style={styles}>
            <h2 className="font-bold text-lg mb-8">
                <FormattedMessage id="index.lastAlbum.title" defaultMessage="Lo último" />
            </h2>
            <div className="flex justify-start flex-nowrap">
                <img src={`/storage/albums/cover/${data.cover}`} alt="imagen" className="w-28 h-28 rounded border-2 border-white shadow" />
                <div className="flex justify-end flex-col ml-6 w-3/4">
                    <h1 className="text-xl font-bold mb-3">{data.name}</h1>
                    <div className="flex justify-between flex-nowrap items-center lg:w-1/3 w-4/5">
                        <button type="button" className="btn rounded-md bg-black text-white py-1.5 px-2.5 text-sm">
                            <i className="bif-home"></i>
                        </button>
                        <Anchor href={data.url} className="btn rounded-md bg-black text-white py-1.5 px-2.5 text-sm">
                            <i className="bi-eye-fill"></i>
                        </Anchor>
                        <DropdownShare className="btn rounded-md bg-black text-white py-1.5 px-2.5 text-sm" id="yts">
                            <div className="bi-share-fill"></div>
                        </DropdownShare>
                    </div>
                </div>
            </div>
        </div>
    );
};

/* Propiedades por defecto */
LastAlbum.defaultProps = {
    data: null,
    loading: true,
    error: false
};

/* Props del componente */
LastAlbum.propTypes = {
    data: PropTypes.object,
    loading: PropTypes.bool,
    error: PropTypes.bool
};

export default LastAlbum;
