import React from 'react';
import './Input.css';

export interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label: string;
  error?: string;
  helperText?: string;
  leftIcon?: React.ReactNode;
}

export const Input = React.forwardRef<HTMLInputElement, InputProps>(
  ({ label, error, helperText, leftIcon, id, className = '', ...props }, ref) => {
    const inputId = id || `input-${label.toLowerCase().replace(/\s+/g, '-')}`;

    return (
      <div className={`input-group ${error ? 'has-error' : ''} ${className}`}>
        <label htmlFor={inputId} className="input-label">
          {label} {props.required && <span className="required-star">*</span>}
        </label>
        
        <div className="input-wrapper">
          {leftIcon && <span className="input-icon-left">{leftIcon}</span>}
          <input
            ref={ref}
            id={inputId}
            className={`input-field ${leftIcon ? 'has-left-icon' : ''}`}
            aria-invalid={!!error}
            aria-describedby={error ? `${inputId}-error` : helperText ? `${inputId}-helper` : undefined}
            {...props}
          />
        </div>

        {error && (
          <span id={`${inputId}-error`} className="input-error-msg" role="alert">
            {error}
          </span>
        )}
        {!error && helperText && (
          <span id={`${inputId}-helper`} className="input-helper-msg">
            {helperText}
          </span>
        )}
      </div>
    );
  }
);

Input.displayName = 'Input';

export interface TextareaProps extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {
  label: string;
  error?: string;
  helperText?: string;
}

export const Textarea = React.forwardRef<HTMLTextAreaElement, TextareaProps>(
  ({ label, error, helperText, id, className = '', ...props }, ref) => {
    const textareaId = id || `textarea-${label.toLowerCase().replace(/\s+/g, '-')}`;

    return (
      <div className={`input-group ${error ? 'has-error' : ''} ${className}`}>
        <label htmlFor={textareaId} className="input-label">
          {label} {props.required && <span className="required-star">*</span>}
        </label>

        <textarea
          ref={ref}
          id={textareaId}
          className="input-field textarea-field"
          aria-invalid={!!error}
          aria-describedby={error ? `${textareaId}-error` : helperText ? `${textareaId}-helper` : undefined}
          {...props}
        />

        {error && (
          <span id={`${textareaId}-error`} className="input-error-msg" role="alert">
            {error}
          </span>
        )}
        {!error && helperText && (
          <span id={`${textareaId}-helper`} className="input-helper-msg">
            {helperText}
          </span>
        )}
      </div>
    );
  }
);

Textarea.displayName = 'Textarea';
