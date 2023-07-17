import Typography from '@mui/material/Typography';

import Meta from '@/components/Meta';
import { FullSizeCenteredFlexBox } from '@/components/styled';

function Login() {
  return (
    <>
      <Meta title="Login or Register" />
      <FullSizeCenteredFlexBox>
        <Typography variant="h3">Login</Typography>
      </FullSizeCenteredFlexBox>
    </>
  );
}

export default Login;
