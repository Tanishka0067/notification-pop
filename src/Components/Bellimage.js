import React from "react";
import Image from "next/image";
import styles from "./BellImage.module.css";

const BellImage = () => {
  return (
    <div>
      <div className=" mb-12">
        <div className="border-purple-950/25 border-8 shadow-2xl p-5 rounded-full">
          <div className="border-indigo-900	border-2 p-5 rounded-full">
            <div className="border-indigo-500 p-5 border-2 rounded-full">
              <div className={styles.container}>
                <Image src="/Vector.png" alt="Bell" width={400} height={100} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BellImage;
