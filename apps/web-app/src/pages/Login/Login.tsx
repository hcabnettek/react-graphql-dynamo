import Typography from '@mui/material/Typography';
import styles from './index.scss';
import Meta from '@/components/Meta';
import { FullSizeCenteredFlexBox } from '@/components/styled';

function Login() {
  return (
    <>
      <Meta title="Login or Register" />
      <FullSizeCenteredFlexBox>
        <div className="wrapper">
          <div className="form-box login">
            <Typography variant="h2">Login</Typography>
          </div>
        </div>
      </FullSizeCenteredFlexBox>
    </>
  );
}

export default Login;
