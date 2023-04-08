import React from "react";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

const SkeletonTopLyrics = () => {
    const data = [1, 2, 3, 4, 5, 6];
    return (
        <div className="py-3">
            <Skeleton width={"25%"} />
            <div className="flex flex-row justify-between flex-wrap mt-3">
                {data.map((item) => (
                    <div className="flex items-center flex-nowrap w-1/2 mb-3" key={`lhtl-${item}`}>
                        <Skeleton width={20} height={20} style={{ marginRight: "12px" }} />
                        <div className="flex flex-col w-10/12">
                            <Skeleton width={"90%"} style={{ marginBottom: "0.5rem" }} />
                            <Skeleton width={"25%"} height={14} />
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default SkeletonTopLyrics;
