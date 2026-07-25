import React, { useEffect } from 'react';
import { CheckCircle, AlertCircle, X } from 'lucide-react';
import './Toast.css';

export interface ToastProps {
  message: string;
  type?: 'success' | 'error';
  isOpen: boolean;
  onClose: () => void;
  duration?: number;
}

export const Toast: React.FC<ToastProps> = ({
  message,
  type = 'success',
  isOpen,
  onClose,
  duration = 5000,
}) => {
  useEffect(() => {
    if (isOpen && duration > 0) {
      const timer = setTimeout(() => {
        onClose();
      }, duration);
      return () => clearTimeout(timer);
    }
  }, [isOpen, duration, onClose]);

  if (!isOpen) return null;

  return (
    <div className={`toast toast-${type}`} role="status" aria-live="polite">
      <div className="toast-icon">
        {type === 'success' ? <CheckCircle size={20} /> : <AlertCircle size={20} />}
      </div>
      <span className="toast-message">{message}</span>
      <button className="toast-close" onClick={onClose} aria-label="Close notification">
        <X size={16} />
      </button>
    </div>
  );
};
