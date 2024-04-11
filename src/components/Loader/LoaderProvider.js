
import {useSelector} from "react-redux";
import CustomLoader from "./CustomLoader";



export const LoaderProvider = () => {
    const loaderState = useSelector((state) => state.loading)

    return (
        <CustomLoader loading={loaderState.isLoading}/>
    );
};
