import {toast} from 'react-toastify';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';

export const toastify = (message: string) => {
  toast.success(message, {
    position: 'bottom-right',
    autoClose: 2000,
    style: {
      backgroundColor: '#59D9C1',
      fontWeight: '800',
      color: '#122140',
      fontSize: '18px',
      margin: 15,
    },
    icon: () => <CheckCircleIcon />,
    progressStyle: {background: '#122140'},
  });
};
