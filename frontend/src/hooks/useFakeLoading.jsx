import { useState } from 'react';
// import { useNavigate } from 'react-router-dom';

const useFakeLoading = () => {
    const [loading, setLoading] = useState(false);
    // const navigate = useNavigate();

    const fakeLoading = (path) => {
        setLoading(true);

        setTimeout(() => {
            // navigate(path);
            setLoading(false);
        }, 1500);
    };

    return { loading, fakeLoading };
};

export default useFakeLoading;
