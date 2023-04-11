import { styled } from '@mui/material/styles';

import { Dialog } from '@mui/material';

export const StyledDialog = styled(Dialog)(
  ({ theme }) => `
    .MuiDialog-container{
      .MuiPaper-root {
        border-radius: ${theme.border.borderRadiusMd};
        border-top: ${`${theme.border.borderRadiusSm} solid ${theme.colors.primary}`};
        min-width: 500px;
        max-width: 35%;
        height: fit-content;
      }
    }
  
    .dialog-title {
      padding: 16px 16px 0;
      line-height: 44px;
      font-weight: 600;
    }
  
    .dialog-content {
      padding: 16px;
    }
  `
);
