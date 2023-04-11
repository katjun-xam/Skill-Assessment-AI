import { ReactNode } from 'react';

export interface ILoginDialog {
  isOpen: boolean;
  title: string;
  content: ReactNode;
  onClose: () => void;
}
