import { DialogTitle, DialogContent, IconButton } from '@mui/material';
import { CloseOutlined } from '@mui/icons-material';

import { StyledDialog } from './styles';
import { ILoginDialog } from './types';

const LoginDialog = ({ isOpen, content, title, onClose }: ILoginDialog) => {
  const renderTitle = () => {
    return (
      <DialogTitle className="dialog-title" sx={{ m: 0, p: 2 }}>
        {title}
        <IconButton
          onClick={onClose}
          sx={{
            position: 'absolute',
            right: 16,
            color: '#1c1b1f',
          }}
        >
          <CloseOutlined />
        </IconButton>
      </DialogTitle>
    );
  };
  return (
    <StyledDialog open={isOpen} onClose={onClose} maxWidth="sm" fullWidth={true} transitionDuration={300}>
      {renderTitle()}
      <DialogContent className="dialog-content">{content}</DialogContent>
    </StyledDialog>
  );
};

export default LoginDialog;
