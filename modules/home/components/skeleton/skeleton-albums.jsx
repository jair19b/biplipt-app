import React from "react";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

const SkeletonAlbums = () => {
    const data = [1, 2, 3, 4];
    return (
        <div className="py-2">
            <Skeleton width={"30%"} />
            <div className="flex flex-row flex-wrap justify-between mt-4">
                {data.map((item) => (
                    <div className="flex justify-start flex-nowrap mb-4 py-1 px-1 w-1/2" key={`htl-${item}`}>
                        <Skeleton width={80} height={80} />
                        <div className="w-3/5 flex flex-col ml-3">
                            <Skeleton />
                            <Skeleton width={"65%"} />
                            <Skeleton width={"45%"} />
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default SkeletonAlbums;
