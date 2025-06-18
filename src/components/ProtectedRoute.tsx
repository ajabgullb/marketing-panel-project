import { useEffect, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { RootState } from '../store/store';

const ProtectedRoute = ({
  children,
  authentication = true
}: {
  children: React.ReactNode;
  authentication?: boolean;
}) => {
  const [loader, setLoader] = useState(true);
  const location = useLocation();
  const navigate = useNavigate();

  const authStatus = useSelector((state: RootState) => state.auth.authStatus);

  useEffect(() => {
    console.log(authStatus)
    if (authentication && !authStatus) {
      navigate('/login', { state: { from: location.pathname }, replace: true });
    }
    else if (!authentication && authStatus) {
      navigate('/dashboard', { replace: true });
    } else {
      setLoader(false);
    }
  }, [authStatus, authentication, location.pathname, navigate]);

  return loader ? <>Loading...</> : <>{children}</>;
};

export default ProtectedRoute;
