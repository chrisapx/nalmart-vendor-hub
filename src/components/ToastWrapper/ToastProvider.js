import { createContext, useContext, useRef } from 'react';
import {Toast} from "primereact/toast";

const ToastContext = createContext();

export const useToast = () => {
    const context = useContext(ToastContext);
    if (!context) {
        throw new Error('useToast must be used within a ToastProvider');
    }
    return context;
};

export const ToastProvider = ({ children }) => {
    const toast = useRef(null);

    const showSuccess = (message) => {
        toast.current.show({detail: message, severity: 'success', summary: 'Success', life: 9000});
    };
    const showError = (message) => {
        toast.current.show({detail: message, severity: 'error', summary: 'Error', life: 9000});
    };

    const value = { showSuccess, showError };

    return (
        <ToastContext.Provider value={value}>
            {children}
            <Toast ref={toast} position="center"/>
        </ToastContext.Provider>
    );
};
