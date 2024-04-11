// Toast.js
import React from "react";
import { Toast as PrimeToast } from "primereact/toast";

const CustomToast = ({ severity, summary, detail, life, onClose }) => {
    return (
        <PrimeToast
            severity={severity}
            summary={summary}
            detail={detail}
            life={life}
            onClose={onClose}
        />
    );
};

export default CustomToast;
