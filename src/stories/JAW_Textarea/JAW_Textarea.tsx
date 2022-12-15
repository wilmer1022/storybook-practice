import React from "react";
import styled from "./JAW_Textarea.module.scss";

interface JAWTextareaProps {
  /**
   * Textarea name
   */
  name: string;
  /**
   * Textarea label
   */
  label: string;
  /**
   * Textarea value
   */
  value: string;
  /**
   * Is the textarea enabled for editing?
   */
  disable?: boolean;
  /**
   * Is the textarea obligatoried?
   */
  obligatory?: boolean;
  /**
   * What background color to use
   */
  backgroundColor?: string;
  /**
   * What font color to use
   */
  color?: string;
  /**
   * How many rows have the textarea?
   */
  rows?: number;
  /**
   * Textarea placeholder
   */
  placeholder: string;
  /**
   * Optional on change handler
   */
  onChange: React.ChangeEventHandler<HTMLTextAreaElement>;
}

/**
 * Primary UI component for user interaction
 */
export const JAW_Textarea = ({
  name,
  label,
  value,
  disable = false,
  obligatory = false,
  rows = 5,
  backgroundColor = "#FFF",
  color = "#5C5D61",
  placeholder = "Placeholder text example...",
  onChange,
  ...props
}: JAWTextareaProps) => {
  return (
    <div className={styled.jaw_textarea}>
      <label htmlFor={name} className={styled.jaw_textarea__label}>
        {label}
        {obligatory && <strong>*</strong>}
      </label>
      <textarea
        name={name}
        value={value}
        className={styled.jaw_textarea__input}
        style={{ backgroundColor, color }}
        placeholder={placeholder}
        disabled={disable}
        rows={rows}
        onChange={onChange}
        {...props}
      />
    </div>
  );
};
