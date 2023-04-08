import React from "react";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

const SkeletonLastAlbum = () => {
    return (
        <div className="rounded px-2 py-3 h-52 bg-gray-50">
            <Skeleton width={"33%"} />
            <div className="flex justify-start flex-nowrap mt-7">
                <Skeleton width={112} height={112} />
                <div className="flex justify-end flex-col ml-6 w-3/4">
                    <Skeleton width={"75%"} />
                    <div className="flex justify-between flex-nowrap items-center mt-3 w-1/3 md:w-full">
                        <Skeleton count={3} width={36} height={36} inline={true} style={{ marginRight: "8px" }} />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SkeletonLastAlbum;
